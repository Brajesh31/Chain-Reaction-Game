# ⚙️ Cascade Resolution

## Implementation
Cascade resolution is implemented as the pure `resolveMove` function in `src/game/rules.js`. `Game.js` controls interaction lockout and visual timing, then commits the returned settled board.

## Resolution sequence
1. Validate board shape, coordinate, active player and target ownership.
2. Clone the board and apply one orb to the target cell.
3. If the cell reaches its critical mass, add its coordinate to a work queue.
4. Dequeue a coordinate and read its latest cell state.
5. Burst unstable cells, clear the source cell and distribute one orb to each in-bounds orthogonal neighbor.
6. Assign each affected neighbor to the initiating player.
7. Enqueue neighbors that reach critical mass.
8. Continue until the queue is empty.
9. Return the settled board, total bursts and changed-cell count.
10. Evaluate winner and next player after successful resolution.

## Critical mass
For row r, column c, board rows R and columns C:

`criticalMass(r,c) = (r>0) + (r<R-1) + (c>0) + (c<C-1)`

The result is 2 at corners, 3 on non-corner edges and 4 in interior cells.

## Queue safety
- Queue coordinates, not stale cell object references.
- Read current state when processing a coordinate.
- De-duplicate only while a coordinate is pending.
- Remove a coordinate from the pending set when dequeued so a later hit can enqueue it again.
- Never use a permanent processed set for cascade coordinates.
- Bound the maximum burst count to protect against non-terminating closed-board cycles.
- On a safety-limit failure, return the original board unchanged and do not advance the turn.

## Invariants
- Input board is not mutated.
- Invalid moves do not partially alter state.
- Only orthogonal neighbors receive orbs.
- Ownership transfers to the initiating player.
- The turn advances only after successful stabilization.
- The UI is locked while the cascade presentation is active.

## Tests
See `src/game/rules.test.js` and [engine test coverage](../quality/engine-test-coverage.md) for corner, edge, interior, multi-wave and cycle-limit fixtures.
