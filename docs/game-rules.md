# 💥 Game Rules and Gameplay

## Objective
Outlast the other players by capturing the board through cell explosions. Players may place orbs in empty cells or cells they own. Cascades transfer ownership to the player whose move initiated them.

## Players and board
The current setup screen supports two, three or four local players and exposes multiple board dimensions. Players take turns in one browser.

## Cell model
A cell has an owner identifier and a non-negative orb count. Owner zero represents an empty cell. Explosion neighbors are orthogonal only, diagonals do not receive orbs.

## Critical mass

| Position | Orthogonal neighbors | Critical mass |
|---|---:|---:|
| Corner | 2 | 2 |
| Non-corner edge | 3 | 3 |
| Interior | 4 | 4 |

The engine's threshold is the number of in-bounds orthogonal neighbors. The welcome screen preview currently displays 1/2/3, which is a known mismatch. The engine values above are authoritative.

## Legal move
A move is legal when the target is empty or owned by the active player. A move on an opponent-owned cell must be rejected without changing board state or advancing the turn.

## Explosion and capture
1. The selected cell receives one orb and is assigned to the active player.
2. When its count reaches critical mass, the cell bursts.
3. Each orthogonal neighbor receives one orb.
4. Affected neighbors are assigned to the initiating player.
5. Any neighbor reaching its threshold must also burst.
6. Processing continues until no unstable cells remain.
7. The turn advances after the entire cascade settles.

## Victory and reset
The app displays a winner when its winner check detects a winner. Exact edge cases around early elimination and all player counts need focused tests. Reset starts a fresh local game using the setup configuration.

## Session behavior
State is held in React memory. Reloading loses the current match. There are no saved games, player accounts, match history or networked rooms.

## Rules acceptance checklist
- [ ] Empty and own-cell placement is legal.
- [ ] Opponent-owned cell placement is rejected.
- [ ] Corner/edge/interior thresholds are 2/3/4.
- [ ] Only orthogonal neighbors receive orbs.
- [ ] Ownership changes to the initiating player.
- [ ] Cascades finish deterministically.
- [ ] The turn advances once after resolution.
- [ ] Winner handling works for 2, 3 and 4 players.
