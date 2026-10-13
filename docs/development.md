# Development

## Start the frontend

Install from the root lockfile and run:

```sh
npm ci
npm start
```

Create React App serves the browser game locally. The root package provides `start`, `build`, `test`, and `eject` scripts. `eject` is a one-way operation and is not needed for normal development.

## Tests and validation

`src/App.test.js` is still the default Create React App test: it searches for the “learn react” link. The current app shows a game title and does not render that starter content, so the test is stale and should be replaced. The test script runs Jest through Create React App, but a successful test run should not be treated as game-rule coverage until meaningful tests exist.

The `server/package.json` test command is a placeholder that deliberately exits with an error. The `server` folder currently has no tracked application source file. Do not describe it as a running server.

## Project structure and conventions

- `src/App.js` owns the high-level page flow and shared theme.
- `src/components/` contains UI components and game behavior, especially `Game.js`.
- Keep game rules consistent between engine behavior, the welcome-page text/preview, and documentation.
- Separate future networking or persistence code behind a documented design rather than assuming the listed Socket.IO packages create it.
- Prefer focused changes and verify visible behavior at desktop and narrow viewport sizes.

## Repository hygiene

Files under `server/node_modules` are already tracked in the current repository. The root ignore file does not untrack existing files; do not add more installed dependencies, build output, or local state to commits. A future cleanup should be reviewed separately because it would remove many tracked paths. The existing `.gitignore` has been extended to ignore plain `.env` and future nested server dependency installs.

## Credentials and browser safety

No credentials are needed for the current app. Do not put secrets into `REACT_APP_*` variables or frontend source because build-time values are visible in browser assets. Do not commit local `.env`, generated builds, or user data.
