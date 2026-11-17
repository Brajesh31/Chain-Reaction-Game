# 📊 Test Coverage Status

| Category | Suite | Status |
|---|---|---|
| Pure game rules | src/game/rules.test.js | Deterministic cases for key transitions |
| App/setup | src/App.test.js | Screen, setup and rules panel |
| Cell/Board | src/components/Cell.test.js | Cell semantics and keyboard focus |
| Game interaction | src/components/Game.test.js | Cascade input lock and settled-board commit |
| Full match | No complete two/three/four player suite | Incomplete |
| Browser E2E | No Playwright/Cypress config | Not automated |
| Screen reader | Manual evidence not checked in | Outstanding |

Do not publish an unverified coverage percentage. Report tested behavior and missing scenarios. Percentage alone does not prove winner, turn, reset or accessibility correctness.
