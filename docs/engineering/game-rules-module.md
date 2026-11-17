# 🧩 Shared Game Rules Module

The pure helpers in `src/game/rules.js` are used by both `Game.js` and `WelcomePage.js`. This prevents the board engine and setup preview from drifting apart.

## Public helpers

| Helper | Contract |
|---|---|
| `getOrthogonalNeighbors(row, col, rows, cols)` | Returns in-bounds coordinates in up/down/left/right order |
| `getCriticalMass(row, col, rows, cols)` | Returns the number of orthogonal neighbors, or zero for invalid coordinates |
| `isLegalMove(cell, activePlayer)` | Allows empty cells and cells owned by the active player |

## Design
The module is intentionally pure. It does not read React state, mutate the supplied cell, access the DOM or depend on styled-components. This makes rule calculations deterministic and inexpensive to test.

## Test coverage
`src/game/rules.test.js` covers corners, edges, interior cells, rectangular boards, invalid coordinates and legal-move ownership.

## Still outstanding
This module centralizes the primitive board rules, but cascade resolution, player elimination and winner detection remain in the Game component. Those should be extracted only with full regression fixtures because they affect match semantics.
