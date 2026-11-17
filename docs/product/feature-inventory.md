# ✨ Feature Inventory

| Feature | Current implementation | Limitations / verification |
|---|---|---|
| Welcome experience | React title/setup screens | Verify navigation transitions |
| Local multiplayer | Shared-device turn state | No network play |
| 2–4 players | Player count state/colors | Verify elimination edge cases |
| Grid setup | Setup UI passes dimensions | Validate min/max bounds |
| Legal moves | Empty/self-owned cell checks | Assert rejected move is non-mutating |
| Critical mass | Count in-bounds orthogonal neighbors | 2 corner, 3 edge, 4 interior |
| Chain reaction | Burst and neighbor propagation in Game component | Extract pure engine and add tests |
| Theme | Light/dark state passed into screens | Verify contrast in both themes |
| Animation | Styled-components keyframes | Honor reduced motion |
| Performance view | Optional browser-side diagnostics | Validate metrics and visibility |

## Not shipped
Accounts, cloud identities, online matchmaking/rooms, database persistence, AI opponent, rankings and social features. Express/Socket.IO packages are not a working backend.

## Change control
When a feature is implemented, update this inventory, README, diagrams, tests and changelog in the same PR.
