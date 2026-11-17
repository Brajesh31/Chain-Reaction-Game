# 🧭 Use Cases

## UC-01: Start a local match
**Actors:** Host and 1–3 additional local players.

**Preconditions:** The app is loaded.

**Main flow:** Host opens setup, chooses player count and an offered board size, confirms, and the app initializes a clean board with the first active player.

**Alternative:** Invalid settings are safely rejected or replaced with documented defaults. A failed setup must not leave a partial board.

## UC-02: Place an orb
1. Active player selects a cell.
2. Game validates coordinates and ownership.
3. One orb is added and ownership assigned.
4. If critical mass is reached, the cell bursts.
5. Orbs go to orthogonal neighbors and ownership changes.
6. Newly unstable cells are resolved.
7. Match state is evaluated, then turn advances if still active.

**Alternative:** Opponent-owned cell is selected. State remains unchanged.

## UC-03: Finish a match
When the winner rule is satisfied, enter terminal state, identify the winner and prevent further board mutation until restart.

## UC-04: Change theme
User toggles theme. Active screen updates without resetting board state.

## Out of scope
Remote rooms, invitations, authentication, reconnect, persistence and leaderboards require separately designed services.
