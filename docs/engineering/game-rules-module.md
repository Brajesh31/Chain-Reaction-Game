# 🧩 Shared Game Rules Module

Pure helpers in src/game/rules.js are used by Game.js and WelcomePage.js, preventing the engine and setup preview from drifting apart.

| Helper | Contract |
|---|---|
| getOrthogonalNeighbors(row, col, rows, cols) | Returns in-bounds coordinates in up/down/left/right order |
| getCriticalMass(row, col, rows, cols) | Returns neighbor count, or zero for invalid coordinates |
| isLegalMove(cell, activePlayer) | Allows empty cells or cells owned by the active player |

The module does not read React state, mutate supplied cells, access the DOM or depend on styling.

The rule tests cover corners, edges, interior cells, rectangular grids, invalid coordinates and move ownership.

Cascade orchestration, elimination and winner detection remain in the Game component. Extract those only with full regression fixtures because they affect match semantics.
