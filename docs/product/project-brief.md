# 🎯 Product Brief: Chain Reaction Game

## Product summary
Chain Reaction is a browser-based, turn-based territory strategy game for two to four people sharing one device. Players place orbs on a rectangular grid. When a cell reaches critical mass, it bursts into orthogonal neighbors. Cascades can change ownership across the board.

## Audience and value
Casual players, friends and families, and developers learning React applications. The game offers simple input rules with emergent tactical depth.

## Current product boundary
**Implemented:** local hot-seat sessions, player/grid setup exposed by the UI, turn-based cell interaction, animated board presentation and theme controls.

**Not implemented:** accounts, remote matchmaking, authoritative multiplayer, persistence, ranking, analytics backend, cloud saves or server APIs. Express and Socket.IO dependencies do not imply a running server.

## Success measures
1. A new player can start without external instructions.
2. Invalid moves never alter the board.
3. Legal cascades settle deterministically.
4. Winner reporting is correct for 2–4 players.
5. Keyboard and touch players can complete core actions.

## Product decisions
Keep local play as default, separate rules from presentation, document source-backed behavior and scope online play as a separate server-backed feature.

## Open questions
- Is the first move exempt from elimination checks?
- Which minimum/maximum grid sizes should be supported?
- Should match history be stored locally?
- Which accessible grid interaction pattern should be adopted?
