# 💾 Backup and Recovery

## Current data model
Game state is held in browser memory and is not durably stored. Reloading ends the in-progress match. There is no database backup process.

## Recovery today
- Restore the previous static deployment artifact.
- Restore source from Git history and tags.
- Rebuild using the committed lockfile.
- Smoke-test before redeploying.

## Future persistence
If match saves or accounts are implemented, design export/import formats, backup frequency, encryption, retention, restore testing and deletion policies before enabling persistent player data.

Record affected release SHA, known-good SHA, restored artifact, verification and follow-up issue during recovery.
