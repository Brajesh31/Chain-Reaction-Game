# 🧹 Repository Hygiene

## Current state
The previously committed `server/node_modules` tree and the empty nested server package manifests/lockfile have been removed. No server application source or server package remains.

The root `.gitignore` excludes root and nested dependency folders, build output, coverage, local environment files and common IDE metadata. `scripts/validate_repository.py` checks the Git index for generated dependency/build directories and environment secret files.

## Required rules
- Commit source, lockfiles, original assets and documentation, not installed packages.
- Never commit `.env`, credentials, private keys, local caches or build output.
- Use `npm ci` in CI and reproducible environments.
- Add a server package only alongside real server source, tests, configuration and operational documentation.
- Avoid committing large generated binaries or dependency snapshots.
- Review SVGs and images for embedded metadata and external references.

## Verification
Run:

```bash
python scripts/validate_repository.py
git ls-files | grep -E '(^|/)node_modules/|^build/|^coverage/'
```

The validator should pass and the grep should return no tracked generated paths. If the second command finds files, review them before removal rather than blindly deleting legitimate vendored source.
