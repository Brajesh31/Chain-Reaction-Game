# FAQ

## Is this online multiplayer?

Not currently. Two to four local players take turns on the same browser/device. Socket.IO dependencies are listed, but there is no socket client/server implementation.

## Does the game need a database?

No. Game and theme state stay in React memory and are lost on refresh. There is no database code in the project.

## How do I run it?

From the repository root, run `npm ci` and `npm start`, then open the local URL shown in the terminal. See [installation.md](installation.md).

## What is a cell's critical mass?

The game engine uses 2 for corners, 3 for edges, and 4 for interior cells. The welcome-page preview currently displays values one lower; this is a known mismatch.

## Why does `npm test` fail?

The current test still expects the Create React App “learn react” starter link, which the game no longer displays. Replace it with tests for the actual game before relying on it.

## Is the nested server runnable?

No. The `server` directory has package metadata and installed dependency files but no tracked application entry point. Its test script is a placeholder that exits with an error.

## Where are environment variables configured?

The current frontend reads none. `.env.example` is comment-only. Never put secrets into variables embedded in a browser build.

## What does the MIT license cover?

The new documentation contribution is covered by the scoped grant in [LICENSE](../LICENSE). Existing code, assets, and third-party packages have separate or unconfirmed provenance; do not assume the documentation grant changes their rights.
