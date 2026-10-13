# Installation

## Requirements

- Node.js and npm
- Git
- A modern browser with JavaScript enabled

MongoDB, Cloudinary, and credentials are not required for the current frontend. The nested `server` folder has package metadata but no application entry point, so it is not a runnable backend at present.

## Install and start

From the repository root:

```sh
npm ci
npm start
```

`npm start` runs the Create React App development server. Open the local URL printed in the terminal, usually `http://localhost:3000`. If there is no root `node_modules` folder, `npm ci` installs dependencies according to the root `package-lock.json`.

For active development, `npm install` can be used if dependencies need to be updated. Avoid running an install inside `server/` unless working on a future server implementation; the current repository has no server source to run.

## Environment configuration

The frontend currently reads no environment variables. `.env.example` is therefore a comment-only template. If a future feature adds public React build-time settings, Create React App expects names prefixed with `REACT_APP_`; values embedded in a browser build are visible to every user and must never contain secrets.

## Available root scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Start the local React development server |
| `npm run build` | Build static production assets into `build/` |
| `npm test` | Start the Create React App test runner |
| `npm run eject` | Eject the Create React App configuration; this is one-way |

The existing test is a leftover starter assertion and does not currently describe the game. See [development.md](development.md) before relying on it. No test command is claimed as run for this documentation change.
