# ⚠️ Project Risk Register

| ID | Risk | Likelihood | Impact | Mitigation | Review trigger |
|---|---|---|---|---|---|
| PR-01 | Cascade-rule regression | Medium | High | Pure rules module and deterministic tests | Any rule change |
| PR-02 | Match winner/turn edge case | Medium | High | Add 2–4 player integration suites | Endgame change |
| PR-03 | Legacy build dependency advisory | High | High | Audit, Dependabot and migration plan | Dependency alert |
| PR-04 | Accessibility defect | Medium | High | Keyboard semantics and manual audit | UI/release |
| PR-05 | Secret/generated artifact committed | Low/Medium | High | Ignore rules and validators/scanning | Repository change |
| PR-06 | Misleading online/persistence claim | Medium | Medium | Explicit feature boundary in docs | README/API update |

Accepted risks need a named owner and review date.
