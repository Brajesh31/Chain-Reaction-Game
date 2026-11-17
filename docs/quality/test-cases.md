# ✅ Game Behavior Test Cases

These are acceptance scenarios, not evidence that automated tests already exist.

| ID | Scenario | Expected result |
|---|---|---|
| CR-001 | Place on empty cell | One orb added; cell owned by active player |
| CR-002 | Place on own cell | One orb added |
| CR-003 | Place on opponent cell | Rejected; state unchanged |
| CR-004 | Corner burst | Two orthogonal neighbors receive an orb |
| CR-005 | Edge burst | Three in-bounds orthogonal neighbors receive an orb |
| CR-006 | Interior burst | Four orthogonal neighbors receive an orb |
| CR-007 | Diagonal-only cell | Receives no orb |
| CR-008 | Capture opponent neighbor | Owner changes to initiating player |
| CR-009 | Neighbor reaches threshold | Neighbor joins same cascade |
| CR-010 | Multiple unstable cells | All bursts resolve |
| CR-011 | Cascade settles | Turn advances once |
| CR-012 | Reset | Fresh board uses selected dimensions and players |
| CR-013 | Two-player match | Winner behavior correct |
| CR-014 | Three-player match | Winner behavior correct |
| CR-015 | Four-player match | Winner behavior correct |
| CR-016 | Reload browser | Active match is not restored |
| CR-017 | Theme switch | UI changes without modifying board rules |
| CR-018 | Small viewport | Board and controls remain usable |

## Edge fixtures
Include minimum/maximum dimensions, narrow boards if supported, cascades that revisit coordinates, high orb counts, early elimination and turn-order boundaries. Store starting and expected final board snapshots in test source.
