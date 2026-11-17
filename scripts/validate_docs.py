#!/usr/bin/env python3
"""Validate relative Markdown links in this repository."""
from __future__ import annotations
import re
import sys
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]
LINK_RE = re.compile(r"!?\[[^\]]*\]\(([^)]+)\)")


def main() -> int:
    failures: list[str] = []
    for source in ROOT.rglob("*.md"):
        if any(part in {"node_modules", ".git", "build"} for part in source.parts):
            continue
        try:
            content = source.read_text(encoding="utf-8")
        except (OSError, UnicodeError) as exc:
            failures.append(f"{source}: cannot read: {exc}")
            continue
        for match in LINK_RE.finditer(content):
            raw = match.group(1).strip().split()[0].strip("<>")
            parsed = urlsplit(raw)
            if parsed.scheme or parsed.netloc:
                continue
            local_path = unquote(parsed.path)
            target = (source.parent / local_path).resolve() if local_path else source
            try:
                target.relative_to(ROOT)
            except ValueError:
                failures.append(f"{source.relative_to(ROOT)}: link escapes repository: {raw}")
                continue
            if target.is_dir():
                target = target / "README.md"
            if not target.exists():
                failures.append(f"{source.relative_to(ROOT)}: missing target: {raw}")
    if failures:
        print("\n".join(failures))
        print(f"\nFound {len(failures)} broken local Markdown link(s).")
        return 1
    print("Markdown local links validated successfully.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
