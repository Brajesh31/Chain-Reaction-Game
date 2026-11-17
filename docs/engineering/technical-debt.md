# 🧱 Technical Debt Register

| ID | Item | Impact | Recommended action | Priority |
|---|---|---|---|---|
| TD-01 | Rules and orchestration concentrated in Game component | Difficult to unit test | Extract pure engine behind fixtures | High |
| TD-02 | Setup preview diverged from engine | Misleads players | Keep preview and tests aligned | High |
| TD-03 | Dedicated cascade tests are limited | Rule regressions may escape | Add deterministic fixtures | High |
| TD-04 | Match state is not persisted | Reload loses match | Decide whether local save is required | Low |
| TD-05 | Server manifests exist without server source | Misleading architecture signal | Implement or retire manifests | Medium |
| TD-06 | Motion and keyboard accessibility need audit | Some users may be blocked | Complete accessibility review | High |

Debt items need an owner and review date. Do not classify every future feature as debt. Close an item only when verification evidence is linked.
