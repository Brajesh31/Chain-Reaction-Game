#!/usr/bin/env python3
"""Fail if generated dependencies, build output or secret files are tracked."""
from __future__ import annotations
import subprocess
import sys

FORBIDDEN_PARTS = ("/node_modules/", "/build/", "/coverage/")
FORBIDDEN_NAMES = {".env", ".env.local", ".env.production", ".DS_Store"}


def main() -> int:
    try:
        result = subprocess.run(["git", "ls-files", "-z"], check=True, capture_output=True, text=True)
    except (OSError, subprocess.CalledProcessError) as exc:
        print(f"Could not inspect Git index: {exc}")
        return 2
    tracked = [path for path in result.stdout.split("\0") if path]
    issues = []
    for path in tracked:
        normalized = f"/{path}/"
        if any(part in normalized for part in FORBIDDEN_PARTS):
            issues.append(f"Generated directory is tracked: {path}")
        if path in FORBIDDEN_NAMES or path.endswith("/.env"):
            issues.append(f"Potential environment secret file is tracked: {path}")
    if issues:
        print("\n".join(issues))
        return 1
    print(f"Repository hygiene validated across {len(tracked)} tracked files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
