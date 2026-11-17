# ✅ Solution Overview

The application uses React screen components for title, setup and match presentation. The Game component owns an active match. Board and Cell render the grid and expose keyboard-accessible controls. The pure rules module in src/game/rules.js validates moves and resolves complete cascades independently of React.

## Move lifecycle
1. The player activates a cell.
2. Game supplies the current board, coordinate and player to resolveMove.
3. The rules module validates board shape, coordinates, player and ownership.
4. The module computes a preview and resolves queued bursts.
5. If the burst safety limit is reached, the operation is rejected without exposing partial board state.
6. The UI presents the move animation while locking input.
7. The settled board is committed, winner state is checked and the next eligible player is selected.

This boundary keeps rules testable and presentation replaceable. A future online system could reuse the rules module server-side, but would still need identity, authorization, protocol validation, persistence decisions and operational controls.

No HTTP API, database, login, remote analytics or multiplayer server is part of the current solution.
