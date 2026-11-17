#!/usr/bin/env python3
"""Render or validate the tracked repository tree embedded in docs/project-structure.md."""
from __future__ import annotations
import argparse
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOC = ROOT / "docs" / "project-structure.md"
BEGIN = "<!-- BEGIN GENERATED REPOSITORY TREE -->"
END = "<!-- END GENERATED REPOSITORY TREE -->"
EXCLUDED_PARTS = {".git", "node_modules", "build", "coverage"}


def tracked_paths() -> list[str]:
    result = subprocess.run(["git", "ls-files", "-z"], cwd=ROOT, check=True, capture_output=True)
    paths = [item.decode("utf-8") for item in result.stdout.split(b"\0") if item]
    return [path for path in paths if not any(part in EXCLUDED_PARTS for part in Path(path).parts)]


def render_tree(paths: list[str]) -> str:
    tree: dict[str, dict | None] = {}
    for path in paths:
        parts = Path(path).parts
        node = tree
        for part in parts[:-1]:
            child = node.get(part)
            if child is None:
                child = {}
                node[part] = child
            node = child
        node[parts[-1]] = None

    lines = ["Chain-Reaction-Game/"]

    def visit(node: dict[str, dict | None], prefix: str) -> None:
        entries = sorted(node.items(), key=lambda item: (item[1] is None, item[0].casefold()))
        for index, (name, child) in enumerate(entries):
            last = index == len(entries) - 1
            lines.append(prefix + ("└── " if last else "├── ") + name + ("/" if child is not None else ""))
            if child is not None:
                visit(child, prefix + ("    " if last else "│   "))

    visit(tree, "")
    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="Fail if the documented tree is stale.")
    args = parser.parse_args()
    generated = render_tree(tracked_paths())
    try:
        content = DOC.read_text(encoding="utf-8")
    except OSError as exc:
        print(f"Cannot read {DOC}: {exc}", file=sys.stderr)
        return 2

    if content.count(BEGIN) != 1 or content.count(END) != 1:
        print(f"{DOC.relative_to(ROOT)} must contain one generated-tree marker pair.", file=sys.stderr)
        return 2

    start = content.index(BEGIN) + len(BEGIN)
    finish = content.index(END)
    if finish < start:
        print("Generated tree markers are reversed.", file=sys.stderr)
        return 2

    existing = content[start:finish].strip("\n")
    if args.check:
        if existing != generated:
            print("Project structure documentation is stale. Run python scripts/check_project_structure.py.", file=sys.stderr)
            return 1
        print("Project structure documentation matches the tracked Git tree.")
        return 0

    updated = content[:start] + "\n" + generated + "\n" + content[finish:]
    DOC.write_text(updated, encoding="utf-8")
    print(f"Updated project structure from {len(tracked_paths())} tracked paths.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
