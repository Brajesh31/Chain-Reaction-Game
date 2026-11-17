#!/usr/bin/env python3
"""Fail if generated dependencies, build output or secret files are tracked."""
from __future__ import annotations
import json
import subprocess
import sys

FORBIDDEN_PARTS = ("/node_modules/", "/build/", "/coverage/")
FORBIDDEN_NAMES = {".env", ".env.local", ".env.production", ".DS_Store"}


def validate_lockfile(root: Path) -> list[str]:
    """Check manifest/lockfile parity and reject orphaned package records."""
    package_path = root / "package.json"
    lock_path = root / "package-lock.json"
    issues: list[str] = []
    try:
        manifest = json.loads(package_path.read_text(encoding="utf-8"))
        lock = json.loads(lock_path.read_text(encoding="utf-8"))
    except (OSError, UnicodeError, json.JSONDecodeError) as exc:
        return [f"Could not validate npm manifests: {exc}"]

    packages = lock.get("packages", {})
    locked_root = packages.get("")
    if not isinstance(locked_root, dict):
        return ["package-lock.json does not contain the root package record"]

    for field in ("dependencies", "devDependencies", "optionalDependencies"):
        declared = manifest.get(field, {}) or {}
        locked = locked_root.get(field, {}) or {}
        if declared != locked:
            issues.append(f"package.json and package-lock.json root {field} are out of sync")

    def parent_package_path(path: str) -> str:
        index = path.rfind("/node_modules/")
        if index >= 0:
            return path[:index]
        if path.startswith("node_modules/"):
            return ""
        return ""

    def resolve_dependency(from_path: str, name: str) -> str | None:
        directory = from_path
        while True:
            candidate = f"{directory}/node_modules/{name}" if directory else f"node_modules/{name}"
            if candidate in packages:
                return candidate
            if not directory:
                return None
            directory = parent_package_path(directory)

    reachable: set[str] = set()
    pending: list[str] = []
    missing: list[str] = []

    for field in ("dependencies", "devDependencies", "optionalDependencies"):
        for name in (locked_root.get(field, {}) or {}):
            resolved = resolve_dependency("", name)
            if resolved:
                pending.append(resolved)
            elif field != "optionalDependencies":
                missing.append(f"root -> {name}")

    while pending:
        package_path = pending.pop()
        if package_path in reachable:
            continue
        reachable.add(package_path)
        package_record = packages.get(package_path, {})

        for field in ("dependencies", "optionalDependencies"):
            for name in (package_record.get(field, {}) or {}):
                resolved = resolve_dependency(package_path, name)
                if resolved:
                    pending.append(resolved)
                elif field == "dependencies":
                    missing.append(f"{package_path} -> {name}")

        # Include peer packages only when npm actually placed them in the lock.
        for name in (package_record.get("peerDependencies", {}) or {}):
            resolved = resolve_dependency(package_path, name)
            if resolved:
                pending.append(resolved)

    if missing:
        issues.append("package-lock.json has unresolved required dependencies: " + ", ".join(missing[:10]))

    package_paths = {
        path for path in packages
        if path and path.startswith("node_modules/")
    }
    orphaned = sorted(package_paths - reachable)
    if orphaned:
        sample = ", ".join(orphaned[:10])
        suffix = " ..." if len(orphaned) > 10 else ""
        issues.append(
            f"package-lock.json contains {len(orphaned)} unreachable package record(s): {sample}{suffix}"
        )

    return issues


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
    issues.extend(validate_lockfile(Path(__file__).resolve().parents[1]))
    if issues:
        print("\n".join(issues))
        return 1
    print(f"Repository hygiene validated across {len(tracked)} tracked files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
