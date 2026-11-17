# ⚖️ Gameplay Balance Notes

A cell's critical mass equals its number of in-bounds orthogonal neighbors. Corners have two neighbors, non-corner edges have three and interior cells have four. Lower-threshold cells are easier to destabilize, while interior cells tolerate more orbs before bursting.

## Design levers
- Board dimensions.
- Number of local players.
- Turn order.
- Player elimination rule.
- First-orb and first-turn handling.
- Cascade resolution policy.

## Review questions
1. Does every player have a fair opening opportunity?
2. Do rectangular boards create uneven starting positions?
3. Can a player be eliminated before meaningful participation?
4. Are three- and four-player endgames understandable?
5. Can a player return after losing their last orb through a capture?
6. Does animation obscure strategic information?

Do not adjust thresholds for visual reasons. Rule changes require rationale, fixtures, playtesting and updates to help copy, tests and architecture docs.
