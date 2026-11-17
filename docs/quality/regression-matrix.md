# 📊 Gameplay Regression Matrix

| Area | 2 players | 3 players | 4 players | Automated coverage target |
|---|---|---|---|---|
| Setup | Required | Required | Required | Component test |
| Legal move | Required | Required | Required | Engine unit test |
| Opponent rejection | Required | Required | Required | Engine unit test |
| Corner/edge/interior burst | Required | Required | Required | Parameterized engine test |
| Multi-wave cascade | Required | Required | Required | Deterministic fixture |
| Ownership transfer | Required | Required | Required | Engine unit test |
| Elimination | Required | Required | Required | Endgame fixture |
| Winner detection | Required | Required | Required | Endgame fixture |
| Restart | Required | Required | Required | Integration test |
| Theme persistence | Required | Required | Required | UI integration test |

Current automated tests cover entry/setup and rules-panel interactions. This matrix describes next targets and is not a claim that every row passes.
