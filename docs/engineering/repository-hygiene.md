# 🧹 Repository Hygiene

## Current state
The previously committed `server/node_modules` tree has been removed from Git. The server package manifests and lockfile remain because they may still be useful if the project later adds a real server. No server application source currently exists.

The root `.gitignore` excludes root and nested dependency folders, build output, coverage, local environment files and common IDE metadata. `scripts/validate_repository.py` checks the Git index for generated dependency/build directories and environment secret files.

## Required rules
- Commit source, lockfiles, original assets and documentation, not installed packages.
- Never commit `.env`, credentials, private keys, local caches or build output.
- Use `npm ci` in CI and reproducible environments.
- Keep the nested server manifests only while they have an intentional maintenance purpose.
- Avoid committing large generated binaries or dependency snapshots.
- Review SVGs and images for embedded metadata and external references.

## Verification
Run:

```bash
python scripts/validate_repository.py
git ls-files | grep -E '(^|/)node_modules/|^build/|^coverage/'
```

The validator should pass and the grep should return no tracked generated paths. If the second command finds files, review them before removal rather than blindly deleting legitimate vendored source.
