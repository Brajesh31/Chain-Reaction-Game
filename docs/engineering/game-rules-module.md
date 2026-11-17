# 🧩 Shared Game Rules Module

The pure rules module in `src/game/rules.js` is shared by `Game.js` and `WelcomePage.js`. It keeps neighbor geometry, critical mass, move validation, move resolution and setup preview rules consistent.

## Public functions

| Helper | Contract |
|---|---|
| `getOrthogonalNeighbors(row, col, rows, cols)` | Returns in-bounds up/down/left/right coordinates |
| `getCriticalMass(row, col, rows, cols)` | Returns the number of in-bounds orthogonal neighbors |
| `isLegalMove(cell, activePlayer)` | Accepts empty cells and cells owned by the active player |
| `resolveMove(board, row, col, activePlayer, options)` | Returns a new board state, preview state, burst count and changed-cell count, or a structured rejection |
| `getWinner(board, playerCount, playersWhoHaveMoved)` | Does not declare a winner until every configured player has entered; then returns the sole surviving owner |
| `getNextPlayer(board, playerCount, currentPlayer, playersWhoHaveMoved)` | Gives unplayed participants their opening turn and skips players who have already been eliminated |

## Move result contract
Successful results include `ok: true`, `grid`, `previewGrid`, `bursts` and `changedCells`. Rejections include `ok: false` and a reason such as `invalid-board`, `invalid-coordinate`, `illegal-move`, `unstable-board` or `cascade-limit`. A rejected move returns the original board and never exposes partially resolved state.

## Cascade queue behavior
A coordinate is de-duplicated only while it is waiting in the queue. Once dequeued, it can be queued again if a later burst makes it unstable. This prevents the earlier permanent-processed-set bug, where a cell reached again later in the same cascade could be skipped.

The resolver has a burst safety limit. Closed finite boards can form non-terminating cycles under a no-sink neighbor-transfer rule. When the limit is reached, the move is rejected and the UI receives the previous board instead of freezing.

## Design boundaries
The module has no React, DOM, animation or styling dependencies. It does not mutate supplied boards. UI animation, component state, performance display and delayed rendering remain in `Game.js`.

## Automated coverage
`src/game/rules.test.js` covers neighbor geometry, critical mass, move ownership, basic orb placement, corner/edge/interior bursts, multi-wave cascades, cycle-limit rollback, winner participation and next-player selection.
