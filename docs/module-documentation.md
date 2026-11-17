# 📦 Module Documentation

- public/index.html: browser document and React mount element.
- src/index.js: React root, global styles and App mount.
- src/App.js: title/setup/game transition and shared theme.
- src/components/FloatingBubblesPage.js: animated title presentation.
- src/components/WelcomePage.js: player/grid choices and shared critical-mass preview.
- src/components/Game.js: match initialization, board state, turns, reset and winner orchestration.
- src/components/Board.js: semantic grid and keyboard focus.
- src/components/Cell.js: accessible cell button, orb and explosion presentation.
- src/components/GameControls.js: reset, theme and diagnostics actions.
- src/components/PerformanceMonitor.js: optional diagnostics.
- src/game/rules.js: neighbor, critical-mass, legality, cascade, winner and next-player functions.

## Tests
- src/App.test.js: top-level screen/setup tests.
- src/game/rules.test.js: deterministic rule tests.
- src/components/Cell.test.js: cell semantics and keyboard behavior.
- src/components/Game.test.js: cascade lock/settled-board regression.
- src/setupTests.js: Jest DOM setup.

Update this page when module names, responsibilities or dependencies change.
