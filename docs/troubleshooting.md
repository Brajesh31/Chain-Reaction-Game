# Troubleshooting

## `npm start` cannot find dependencies

Run `npm ci` from the repository root and check that it completes successfully. Do not assume a nested `server/node_modules` installation satisfies the root React package.

## Browser page is blank or does not load

- Check the terminal running Create React App for compile errors.
- Confirm JavaScript is enabled and reload the development URL printed by `npm start`.
- Check browser developer tools for runtime errors. Include the relevant component and reproduction steps in an issue, but remove personal paths and private values.

## The test fails looking for “learn react”

`src/App.test.js` still contains the Create React App starter assertion. The game replaced the starter screen, so update the test to cover current UI behavior before relying on it.

## Game preview and actual capacity disagree

The welcome-page preview calculates corner/edge/interior values as 1/2/3. The engine uses 2/3/4 based on adjacent cells. The preview is not authoritative; the mismatch is a documented issue to fix and test.

## A cascade gives an unexpected result

The cascade queue and its processed-cell tracking need dedicated tests for multiple hits and repeated bursts in the same chain. Record the grid, current player, and sequence of moves that reproduce the issue.

## Online play or server startup is unavailable

The current project is local hot-seat play. Socket.IO dependencies are present, but there is no checked-in server program or frontend socket client. No server command or public API is available.

## Static build does not work at a subpath

Create React App assets may need a deployment base path setting, and a static host may need an SPA fallback. See [deployment.md](deployment.md) and use the host's instructions for the chosen URL layout.
