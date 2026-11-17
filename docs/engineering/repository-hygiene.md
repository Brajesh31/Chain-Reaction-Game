# 🧹 Repository Hygiene

## Finding
The repository tree includes `server/node_modules`. These generated installation artifacts should not be versioned. Root `.gitignore` already ignores `/server/node_modules/`, but ignore rules do not untrack files already committed.

## Dedicated cleanup procedure
1. Confirm the directory is not intentionally vendored.
2. Preserve `server/package.json` and lockfile only if the server package is intended.
3. Remove tracked dependency artifacts in a separate reviewed commit.
4. Reinstall with `npm ci --prefix server` only when server source/scripts are meaningful.
5. Review repository size after cleanup.

This documentation pass does not silently delete a large tracked tree.

## Standards
Commit source, lockfiles, assets and documentation, not installed packages. Never commit `.env`, credentials, local caches or build output. Avoid personal email addresses in automation identities. Keep generated artifacts reproducible.
