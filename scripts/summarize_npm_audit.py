#!/usr/bin/env python3
"""Summarize npm audit JSON without hiding or suppressing advisory findings."""
from __future__ import annotations

import json
import sys
from pathlib import Path
from typing import Any

SEVERITY_ORDER = ("critical", "high", "moderate", "low", "info")


def markdown_cell(value: object) -> str:
    return str(value).replace("|", "\\|").replace("\n", " ")


def main() -> int:
    path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("npm-audit.json")
    try:
        report = json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        print("# npm audit report\n\nReport file not found: " + str(path))
        return 0
    except (OSError, UnicodeError, json.JSONDecodeError) as exc:
        print("# npm audit report\n\nCould not parse npm audit JSON: " + str(exc))
        return 0

    if not isinstance(report, dict):
        print("# npm audit report\n\nUnexpected report format.")
        return 0

    if report.get("error"):
        error = report["error"]
        print("# npm audit report\n")
        print("npm audit returned an error: **" + markdown_cell(error.get("summary", error)) + "**")
        return 0

    metadata = report.get("metadata", {}).get("vulnerabilities", {})
    vulnerabilities = report.get("vulnerabilities", {})
    if not isinstance(metadata, dict):
        metadata = {}
    if not isinstance(vulnerabilities, dict):
        vulnerabilities = {}

    total = metadata.get("total", 0)
    print("# npm audit summary\n")
    print("**Total findings: " + str(total) + "**\n")
    print("| Severity | Count |")
    print("|---|---:|")
    for severity in SEVERITY_ORDER:
        print("| " + severity.title() + " | " + str(metadata.get(severity, 0)) + " |")

    if not vulnerabilities:
        print("\nNo package-level vulnerability entries were returned.")
        return 0

    print("\n## Package findings\n")
    print("| Package | Severity | Direct | Affected range | Fix available | Advisory |")
    print("|---|---|:---:|---|---|---|")

    def severity_rank(entry: dict[str, Any]) -> int:
        severity = str(entry.get("severity", "info")).lower()
        try:
            return SEVERITY_ORDER.index(severity)
        except ValueError:
            return len(SEVERITY_ORDER)

    for name, entry in sorted(
        vulnerabilities.items(),
        key=lambda pair: (severity_rank(pair[1]), pair[0]),
    ):
        via = entry.get("via", [])
        advisory_titles = []
        for advisory in via:
            if isinstance(advisory, dict):
                title = advisory.get("title", "Advisory")
                url = advisory.get("url")
                advisory_titles.append("[" + str(title) + "](" + str(url) + ")" if url else str(title))
            elif isinstance(advisory, str):
                advisory_titles.append(advisory)
        advisory_text = "; ".join(advisory_titles[:3]) or "See npm audit artifact"
        fix = entry.get("fixAvailable", "Unknown")
        if isinstance(fix, dict):
            fix = (fix.get("name", name) + " " + str(fix.get("version", ""))).strip()
        elif fix is True:
            fix = "Yes"
        elif fix is False:
            fix = "No"
        else:
            fix = str(fix)

        values = (
            name,
            entry.get("severity", "unknown"),
            "Yes" if entry.get("isDirect") else "No",
            entry.get("range", "Not specified"),
            fix,
            advisory_text,
        )
        print("| " + " | ".join(markdown_cell(value) for value in values) + " |")

    print("\n## Interpretation")
    print(
        "This report describes the installed dependency graph. It does not by itself "
        "prove that each vulnerable package is reachable in the shipped browser bundle. "
        "Review direct/transitive paths, affected code paths, fixed versions and breaking "
        "changes before accepting or applying a remediation."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
