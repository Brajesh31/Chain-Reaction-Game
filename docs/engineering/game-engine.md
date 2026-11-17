# ⚙️ Game Engine Design

## Current location
Board state, move validation, turn progression, critical mass, cascades and winner logic currently live in `src/components/Game.js`. `Board.js` and `Cell.js` render the board.

## Vocabulary
- Board: rectangular matrix of cells.
- Cell: position with owner and orb count.
- Owner: player identifier, or zero for empty.
- Active player: player allowed to move.
- Neighbor: orthogonally adjacent cell.
- Critical mass: number of adjacent in-bounds orthogonal cells.
- Cascade: one move causing successive bursts.

## Critical-mass rule
`criticalMass(r,c) = (r > 0) + (r < rows-1) + (c > 0) + (c < cols-1)`

This yields 2 at corners, 3 on non-corner edges and 4 in the interior.

## Target deterministic transition
1. Validate board dimensions and coordinate.
2. Validate current player and target ownership.
3. Add one orb and assign ownership.
4. Queue unstable coordinates.
5. Process each burst and distribute one orb to orthogonal neighbors.
6. Transfer neighboring cells to initiating player.
7. Queue newly unstable neighbors.
8. Evaluate player survival and match completion.
9. Advance turn exactly once after cascade settles.

## Invariants
- Board dimensions remain stable during a match.
- Orb counts are non-negative.
- Empty cells have no player owner.
- Invalid moves do not mutate state.
- Only orthogonal neighbors receive explosion orbs.
- Captures belong to initiating player.
- Cascade processing terminates.
- Turn advances after all pending bursts settle.

## Queue safety
A coordinate can become unstable multiple times during a cascade. Queue logic must use current state when processing and must not drop bursts or loop indefinitely. Add fixtures for dense boards, revisited coordinates and repeated cascades.

## Refactoring direction
Extract pure deterministic rules into a module such as `src/game/engine.js` with no React imports. Keep UI components responsible for display and interaction. Capture existing behavior with tests before refactoring.

## Known mismatch
The welcome-screen threshold preview differs from engine logic. Update preview and tests in a focused change.
