# Architecture

## System overview

The checked-in application is a client-side React single-page game created with Create React App. It does not communicate with a backend, API, database, or online game service. Game state is held in React component state in the current browser session.

```text
Browser
  -> public/index.html (Create React App HTML shell)
  -> src/index.js (React root)
  -> src/App.js (welcome/title/game screen flow and theme)
  -> WelcomePage / FloatingBubblesPage / Game
  -> Board -> Cell
```

## Main components

- `src/index.js`: mounts `App` in React Strict Mode and registers the Web Vitals helper.
- `src/App.js`: controls the title, settings, and game screens, initial grid/player settings, and shared theme.
- `src/components/FloatingBubblesPage.js`: animated title page.
- `src/components/WelcomePage.js`: grid and player selection, rule preview, and displayed game rules.
- `src/components/Game.js`: board state, legal-move checks, player turns, critical mass, chain reactions, winner status, and performance controls.
- `src/components/Board.js`: maps the two-dimensional game grid into cells.
- `src/components/Cell.js`: renders the orb contents and visual explosion effects.
- `src/components/GameControls.js`: reset, theme, and monitor controls.
- `src/components/PerformanceMonitor.js`: displays browser FPS, memory when available, and render-related metrics.
- `public/`: HTML shell, icons, and web-app manifest.

## Game state and turn flow

Each cell contains an owner number and an orb count. Owner `0` means empty; player numbers identify the local players. A valid move adds one orb to an empty cell or a cell belonging to the active player. When the count reaches the cell's critical mass, the game queues explosions, resets the exploding cell, and gives one orb to each orthogonal neighbor. Those neighboring cells become owned by the active player, allowing cascades to capture other players' cells.

The current engine derives critical mass from neighbor count: corners 2, edges 3, interior cells 4. The welcome-page preview derives corner/edge/interior display values as 1/2/3, so the preview does not match the engine.

## Networking and persistence status

The root package lists Express, Socket.IO, and their client library, and a nested `server/package.json` lists server dependencies. However, the tracked `server` directory contains package manifests and lockfile only; no server entry point or route/event handler is present. The frontend contains no Socket.IO client connection. Package dependencies alone do not implement online multiplayer. There is no database or state persistence.

## Repository maintenance observation

The repository currently tracks files under `server/node_modules`. The root `.gitignore` ignores root `node_modules` but does not remove already tracked nested files. A dependency-artifact cleanup would need its own carefully reviewed change; this handbook does not remove those files.
