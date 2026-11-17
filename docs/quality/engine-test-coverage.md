# 🧪 Game Engine Test Coverage

## Implemented automated coverage
The pure rules module has deterministic unit tests for:
- Orthogonal neighbor geometry at corners, edges and interior positions.
- Invalid coordinates, rectangular grids and critical-mass values 2, 3 and 4.
- Empty, own-cell and opponent-owned move validation.
- Immutable orb placement on a non-critical cell.
- Corner, edge and interior burst results.
- Multi-wave cascade resolution and ownership transfer.
- A pathological closed-board cycle reaching the safety limit without exposing partial state.
- Winner suppression until every configured player has made an opening move.
- Next-player selection for unplayed, surviving and eliminated participants.

The App test suite covers the title screen, match setup options and rules panel.

## Still required
- [ ] Full UI integration test for legal and invalid cell clicks.
- [ ] Full two-player match through winner announcement.
- [ ] Full three-player match with one eliminated participant.
- [ ] Full four-player match with multiple eliminations.
- [ ] Reset after a completed match.
- [ ] No interaction during delayed cascade presentation.
- [ ] Verify player status announcements with a screen reader.
- [ ] Reduced-motion behavior and keyboard-only board interaction.

Coverage percentage alone is not a quality guarantee. Assert the full board, active player, participant list, terminal state and winner.
