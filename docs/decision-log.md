# 🧾 Decision Log

| Date | Decision | Rationale | Status |
|---|---|---|---|
| 2026-11-17 | Keep release as local hot-seat game | No authoritative backend exists | Current |
| 2026-11-17 | Extract pure rules into src/game/rules.js | Deterministic behavior can be isolated and tested | Implemented |
| 2026-11-17 | Bound cascade processing | Avoid unbounded browser work | Implemented |
| 2026-11-17 | Lock input through cascade presentation | Prevent second move against preview board | Implemented and regression-tested |
| 2026-11-17 | Use semantic grid and keyboard navigation | Make the board operable without pointer | Implemented; manual AT review open |
| 2026-11-17 | Remove empty server manifests and unused packages | No server application existed | Implemented |
| 2026-11-17 | Keep npm audit reporting advisory during CRA triage | Avoid blind major dependency upgrades | Current |

Use ADR templates for material product, architecture or security decisions. Update the log when a decision is superseded.
