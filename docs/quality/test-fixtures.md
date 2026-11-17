# 🧩 Deterministic Test Fixtures

Human-readable notation:
- . = empty cell.
- R1 = red/player 1 owns one orb.
- B2 = blue/player 2 owns two orbs.

Use explicit objects/JSON in executable tests. The notation above is for documentation.

| Fixture | Purpose |
|---|---|
| 2×2 corner | Critical mass 2 |
| 3×3 edge | Edge critical mass 3 |
| 3×3 center | Interior critical mass 4 |
| Mixed ownership | Capture conversion |
| Multi-wave chain | Successive bursts |
| Revisited coordinate | Queue re-evaluation |
| Almost-eliminated player | Survival rule |
| Terminal board | Reject moves after game end |
| Rectangular grid | Row/column bounds |
| Largest offered grid | Rendering/performance profile |

Keep fixtures minimal. Assert full resulting state, current player, terminal flag and winner, not only total orb count.
