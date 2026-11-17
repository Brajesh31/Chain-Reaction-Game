# 🏗️ Technical Overview

The application is a client-side React single-page application bootstrapped from public/index.html and src/index.js. src/App.js selects the title, setup or game screen and owns shared theme/screen settings. Game owns active match state. Board and Cell render the grid and orb presentation. src/game/rules.js contains pure rules helpers.

## Stack
- React 19 and React DOM for the UI.
- Create React App 5 / react-scripts for development, Jest integration and production bundling.
- styled-components for component-level styles.
- Framer Motion for motion in the title/visual experience.
- Jest and React Testing Library for tests.
- web-vitals is present for optional metric callbacks; no analytics endpoint is configured.

## Runtime boundary
No server process, application API, database, account service, analytics endpoint or remote multiplayer protocol is part of the current application.

## Commands
~~~bash
npm ci
npm start
npm test -- --watchAll=false --runInBand
npm run build
~~~

See [architecture](architecture.md), [technology stack](technology-stack.md) and [project structure](project-structure.md).
