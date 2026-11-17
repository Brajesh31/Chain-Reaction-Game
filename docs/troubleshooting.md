# 🧰 Troubleshooting

## Development server fails
Confirm repository root, Node/npm installation and run `npm ci`. Check port 3000 and read the first actionable terminal error.

## Build fails
Reinstall from lockfile, confirm CRA-compatible Node version and inspect the first compiler error. Do not commit node_modules to work around dependency issues.

## Test fails on “learn react”
The test is the default CRA starter sample. The game no longer renders that link. Replace the test with game behavior assertions instead of restoring obsolete starter UI.

## Move is rejected
Only an empty cell or cell owned by the active player can be selected. Opponent-owned cell rejection is expected.

## Explosion threshold confusion
Engine thresholds are corner 2, edge 3, interior 4. Welcome-page preview currently shows 1/2/3 and is inconsistent.

## Progress disappears
State lives in React memory. Reload loses the match; persistent saves are not implemented.

## Multiplayer across devices
Not available. Socket.IO packages alone do not make a server or connect a client.

## Server folder
Contains package manifests and tracked dependency artifacts, but no application entry point.

## Report a defect
Use the bug template. Include browser, OS, board size, player count, reproduction steps and expected/actual behavior. Remove secrets from logs.
