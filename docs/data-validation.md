# ✅ Data Validation

src/game/rules.js validates:
- Board is an array with at least two rows and two columns.
- Every row has the same number of cells.
- Each cell has a non-negative integer owner and orb count.
- Coordinates are integers inside board bounds.
- Active player is a positive integer.
- Target cell is empty or owned by the active player.
- Selected cell is not already unstable before a new move.
- Cascade burst limit is a positive integer.

Rejected operations return ok=false with a reason such as invalid-board, invalid-coordinate, invalid-player, invalid-burst-limit, illegal-move, unstable-board or cascade-limit. The input board is returned unchanged.

UI constraints improve usability, but the rules module is the final authority for local transitions. Future network requests must repeat validation server-side.
