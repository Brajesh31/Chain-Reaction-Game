# Chain Reaction

Chain Reaction is a browser-based, turn-by-turn grid strategy game built with React. Two to four players share one browser and take turns placing colored orbs. When a cell reaches its critical mass, it bursts into its orthogonal neighbors and can trigger a chain reaction.

The current application is local hot-seat play. It has no online multiplayer service, API, or database. Socket.IO appears in package manifests, but the checked-in application has no server implementation or client connection.

## Features

- Welcome screen with grid and player-count selection
- Grid choices from 6×6 through 15×10 and two, three, or four local players
- Turn validation and cell ownership
- Corner, edge, and interior cell capacities
- Cascading explosions that transfer neighboring cells to the active player
- Dark and light themes, animated orbs, a board maximize control, and a performance overlay
- Responsive layout for smaller screens

## Play

1. Open the welcome screen and choose a grid size and number of players.
2. Start the game. Players take turns using the same device.
3. Select an empty cell or a cell already owned by the active player.
4. Build a cell to its critical mass to burst it. Each orthogonal neighbor receives one orb owned by the player whose chain reaction is running.
5. Continue until the game displays a winner. Use **Reset Game** to start over.

The default grid is 6×6 and the default player count is two. Game state is held in React component state and is lost when the page reloads.

## Requirements

- Node.js and npm
- A modern browser with JavaScript enabled

There are no required credentials, external services, or database configuration for the current frontend.

## Run locally

From the repository root:

```sh
npm install
npm start
```

Create React App starts its development server and opens the game, usually at `http://localhost:3000`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Create React App development server |
| `npm run build` | Create a static production build in `build/` |
| `npm test` | Start the Create React App/Jest test runner |
| `npm run eject` | Copy Create React App configuration into the project; this is a one-way operation |

The current `src/App.test.js` is the original Create React App sample and looks for the removed “learn react” text. Replace it with game behavior tests before treating the test suite as meaningful. The nested `server` package has no application entry point; its only test script exits with an “no test specified” message. No tests are claimed as run for this documentation change.

## Repository layout

```text
src/
  App.js                  Screen flow and application theme
  components/
    Game.js               Board state, turns, capacities, and chain reactions
    Board.js              Grid layout
    Cell.js               Cell rendering and explosion effects
    WelcomePage.js        Game settings and rules
    FloatingBubblesPage.js Animated title screen
    GameControls.js       Reset, theme, and monitor controls
    PerformanceMonitor.js Browser performance display
public/                   HTML shell and static icons
server/                   Package manifests only; no server source is present
```

More detail is in [docs/architecture.md](docs/architecture.md), [docs/development.md](docs/development.md), and [docs/troubleshooting.md](docs/troubleshooting.md).

## Current limitations

- Play is local only. The Socket.IO and Express dependencies do not provide an online game by themselves.
- The game has no accounts, match persistence, database, or HTTP API.
- The welcome-screen cell-capacity preview uses values one below the actual game thresholds; the game logic uses neighbor counts (2 for corners, 3 for edges, 4 for interior cells).
- The win check and chain-reaction queue need focused tests, especially for initial player turns and repeated cascades.
- The checked-in CRA test still describes the default starter application.
- `server/node_modules` is tracked in the current repository history. Avoid committing additional dependency installation output; see [docs/development.md](docs/development.md).

## Contributing, support, and security

Read [CONTRIBUTING.md](CONTRIBUTING.md) before sending a pull request. Use [SUPPORT.md](SUPPORT.md) for questions and [SECURITY.md](SECURITY.md) for private vulnerability reports. The [ROADMAP.md](ROADMAP.md) records possible follow-up work without promising delivery dates.

## License

The MIT grant in [LICENSE](LICENSE) applies to the repository handbook and guidance authored by Brajesh Kumar (`@brajesh31`) in this contribution. It does not claim rights to pre-existing game code, assets, or third-party packages whose provenance is not established by the repository metadata.

Last updated: 2026-10-15 18:58 UTC
