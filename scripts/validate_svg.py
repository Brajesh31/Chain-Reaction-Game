#!/usr/bin/env python3
"""Validate repository SVG assets as XML and reject active/external resource patterns."""
from __future__ import annotations
import sys
from pathlib import Path
from xml.etree import ElementTree

ROOT = Path(__file__).resolve().parents[1]
SEARCH_ROOTS = (ROOT / "docs" / "assets", ROOT / "public", ROOT / "src")
FORBIDDEN_TAGS = {"script", "foreignObject"}
FORBIDDEN_ATTRS = {"onload", "onclick", "onerror", "onmouseover"}


def main() -> int:
    files = sorted(
        path for base in SEARCH_ROOTS if base.exists()
        for path in base.rglob("*.svg")
        if not any(part in {"node_modules", "build", ".git"} for part in path.parts)
    )
    problems: list[str] = []
    for path in files:
        try:
            root = ElementTree.parse(path).getroot()
        except (ElementTree.ParseError, OSError) as exc:
            problems.append(f"{path.relative_to(ROOT)}: invalid SVG/XML: {exc}")
            continue
        if not root.tag.endswith("svg"):
            problems.append(f"{path.relative_to(ROOT)}: root element is not SVG")
            continue
        for element in root.iter():
            local_tag = element.tag.rsplit("}", 1)[-1].lower()
            if local_tag in FORBIDDEN_TAGS:
                problems.append(f"{path.relative_to(ROOT)}: forbidden active element {local_tag}")
            for attr, value in element.attrib.items():
                local_attr = attr.rsplit("}", 1)[-1].lower()
                if local_attr in FORBIDDEN_ATTRS:
                    problems.append(f"{path.relative_to(ROOT)}: event handler attribute {local_attr}")
                if local_attr in {"href", "src"} and value and not value.startswith("#") and not value.startswith("data:image/"):
                    problems.append(f"{path.relative_to(ROOT)}: external resource reference in {local_attr}")
    if problems:
        print("\n".join(problems), file=sys.stderr)
        return 1
    print(f"Validated {len(files)} SVG files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
