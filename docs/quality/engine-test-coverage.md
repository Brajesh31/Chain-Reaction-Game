# 🧪 Game Engine Test Coverage

## Implemented automated coverage
The pure rules module has tests for orthogonal neighbors at corners, edges and interior positions; invalid coordinates and dimensions; critical-mass values 2, 3 and 4; rectangular boards; legal empty/self-owned moves; rejection of opponent-owned cells, and winner suppression until all configured players have participated.

## Tests still required
- [ ] Immutable board update for a legal move.
- [ ] Opponent target leaves the complete board unchanged.
- [ ] Corner, edge and interior burst state.
- [ ] Multi-wave cascade and revisited coordinate.
- [ ] Full cascade resolution for multiple burst waves and revisited coordinates.
- [ ] Elimination across real match sequences for two, three and four players.
- [ ] Restart after terminal state.
- [ ] No interaction during cascade animation.

Coverage percentage alone is not a quality guarantee. Prioritize full board state, active player, terminal status and winner assertions.
