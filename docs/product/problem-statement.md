# ❓ Problem Statement

A local strategy game needs more than an attractive board. Players must understand which cells they may select, how many neighbors receive orbs, who owns captured cells, when a cascade is complete, whose turn follows and when a match ends.

If rules live only inside presentation components, the setup preview and live game can disagree. If input remains enabled while a cascade is only partly presented, a second move can be calculated against a temporary board. If the interface relies only on color or animation, some players cannot reliably interpret the state.

## Problem to solve
Provide a deterministic, understandable local experience where the displayed board and rules engine agree, and invalid or premature actions do not corrupt match state.

## Failure modes to prevent
- Incorrect corner, edge or interior critical mass.
- Diagonal propagation instead of orthogonal propagation.
- Wrong ownership after a burst.
- A second move during cascade presentation.
- Elimination before every player has taken an opening turn.
- Keyboard users being unable to navigate the board.
- Documentation claiming an API, database or online mode that does not exist.

See the [rules module](../engineering/game-rules-module.md), [test strategy](../quality/testing-strategy.md) and [architecture diagrams](../architecture/README.md).
