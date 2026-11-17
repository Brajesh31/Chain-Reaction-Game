# 🧪 Game Engine and Interface Test Coverage

## Implemented automated coverage
The pure rules module has deterministic unit tests for neighbor geometry, invalid coordinates, rectangular grids, critical-mass values 2/3/4, move ownership, immutable orb placement, corner/edge/interior bursts, multi-wave cascades, ownership conversion, cycle-limit rollback, opening participation, winner determination and next-player selection.

The App suite covers the title screen, match setup and rules panel. Cell/Board component tests cover accessible cell names, ownership cues, one-tab-stop focus order and arrow-key navigation. The Game component test verifies that a cascade blocks input for the full 550 ms presentation interval, then commits the settled board before enabling the next move.

## Still required
- [ ] Full two-player match through winner announcement.
- [ ] Full three-player match with an eliminated participant.
- [ ] Full four-player match with multiple eliminations.
- [ ] Reset after a completed match.
- [ ] Manual verification with representative screen readers.
- [ ] Contrast, zoom/reflow and complete keyboard-only match review.

Coverage percentage alone is not a quality guarantee. Assert the full board, active player, participant list, terminal state and winner.
