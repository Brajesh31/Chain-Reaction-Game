# 📦 Installation

## Requirements
- Node.js LTS compatible with Create React App 5
- npm
- Modern browser with JavaScript

## Clone and install
```bash
git clone https://github.com/Brajesh31/Chain-Reaction-Game.git
cd Chain-Reaction-Game
npm ci
```

Use `npm install` only when intentionally changing dependencies and updating the lockfile.

## Start
```bash
npm start
```
Open http://localhost:3000.

## Production
```bash
npm run build
```
Static output is written to `build/`.

## Common issues
- Node compatibility: use an LTS Node version supported by the installed CRA 5 dependencies.
- Lockfile mismatch: use npm and review lockfile changes.
- Port conflict: stop the process using port 3000 or accept CRA's alternate port.
- Server folder: nested server package is not required to play and is not a deployable service.
