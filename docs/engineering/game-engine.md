# ⚙️ Game Engine Design

## Module boundaries
- `src/game/rules.js`: pure neighbor, critical-mass, move-validation, cascade-resolution, winner and next-player functions.
- `src/components/Game.js`: React state, UI feedback, animation timing, reset, performance display and commit of successful rule results.
- `src/components/Board.js` and `Cell.js`: board and cell presentation.
- `src/components/WelcomePage.js`: match setup and rules preview using the shared critical-mass helper.

## Critical-mass rule
For row r, column c, board rows R and columns C:

`criticalMass(r,c) = (r > 0) + (r < R-1) + (c > 0) + (c < C-1)`

This yields 2 at corners, 3 on non-corner edges and 4 in the interior.

## Move transaction
1. Validate the board, coordinate, player and target ownership.
2. Create a preview state with one orb placed.
3. Resolve any resulting bursts on a cloned board.
4. Read current cell values when dequeuing cascade coordinates.
5. De-duplicate only while a coordinate is pending, allowing later re-queue.
6. Reject a cascade that exceeds the configured burst safety limit, returning the original board.
7. Commit the settled board only after resolution succeeds.
8. Evaluate winner status after every configured player has participated.
9. Select the next unplayed or surviving player.

## Invariants
- The input board is never mutated.
- Board dimensions remain stable.
- Orb counts are non-negative integers.
- Invalid moves do not alter state or advance the turn.
- Only orthogonal neighbors receive burst orbs.
- Captured neighbors become owned by the initiating player.
- Cells reached again after bursting can be processed again.
- The turn advances only after the cascade has settled.
- A pathological cycle is rejected instead of locking the UI.

## Remaining product semantics
The current winner guard protects opening turns and next-player selection skips eliminated participants. Complete end-to-end playthrough tests are still needed for two, three and four players, including restart and long-cascade input handling.
