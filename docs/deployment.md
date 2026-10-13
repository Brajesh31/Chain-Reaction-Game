# Deployment

## Current deployment shape

The root `npm run build` command creates a static Create React App bundle under `build/`. The current game can be hosted by a static web host that serves those assets. There is no backend runtime, database, API, authentication service, or online multiplayer server to deploy.

## Build

From the repository root:

```sh
npm ci
npm run build
```

Publish the contents of `build/` using the chosen host's documented static-site workflow. Configure a single-page application fallback to `index.html` if the host requires one. The game currently uses no client-side URL routes beyond its main page.

## Before publishing

- Confirm the build completes with the supported Node.js version selected for the project.
- Check the game in target browsers and narrow viewports.
- Replace or remove the stale starter test and add coverage for game rules.
- Review the source and third-party asset/package licenses before redistribution.
- Do not put private credentials in frontend environment variables or build output.
- Confirm the host serves HTTPS and the static assets load correctly.

## Future backend deployment

The nested `server` package has dependencies but no application source, start script, health endpoint, or documented socket protocol. Do not deploy it as an online service until the server is implemented, its trust model is designed, and API/event behavior, validation, monitoring, and data handling are documented.
