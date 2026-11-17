# 🧩 Non-Functional Requirements

| Area | Requirement | Verification |
|---|---|---|
| Determinism | Identical inputs produce identical resolved state | Pure rules unit tests |
| State safety | Invalid input never mutates source board | Negative tests and immutability assertions |
| Bounded work | Cascade processing has an explicit burst ceiling | Cycle-limit test |
| Responsiveness | Offered grid sizes remain usable | Manual browser/viewport matrix |
| Accessibility | Semantic controls, focus and keyboard access | Component tests and manual AT review |
| Motion | Respect OS reduced-motion preference | CSS review and manual check |
| Maintainability | Rules remain independent of React | Module review |
| Reproducibility | Install from committed npm lockfile | npm ci in CI |
| Build quality | Production bundle builds | CI build |
| Security hygiene | No secrets or generated dependencies tracked | Repository validation and secret scan |
| Documentation | Links and project tree match Git | Documentation workflow |

These are requirements and verification targets, not a claim that the app has formal browser, accessibility or performance certification.
