# 🧱 Technical Debt Register

| ID | Item | Impact | Recommended action | Priority |
|---|---|---|---|---|
| TD-01 | Full match integration coverage is incomplete | Winner/turn regressions can escape unit tests | Add 2-, 3- and 4-player end-to-end fixtures | High |
| TD-02 | Keyboard operation of the complete board needs verification | Some users may not be able to play | Add keyboard interaction and screen-reader tests | High |
| TD-03 | Reduced-motion behavior needs verification | Motion may distract or block users | Honor prefers-reduced-motion and test the cascade feedback | High |
| TD-04 | Match state is not persisted | Reload loses the current game | Decide whether local save/resume is required | Low |
| TD-05 | Server manifests exist without server source | Dependencies imply backend functionality that is not present | Implement intentionally or retire manifests and unused dependencies | Medium |
| TD-06 | A browser/runtime smoke matrix is not automated | Browser-specific layout defects may escape | Add browser automation if maintenance cost is justified | Medium |

## Resolved in current branch
- Extracted shared pure board rules and critical-mass calculation.
- Added deterministic move/cascade resolution and a bounded cycle safeguard.
- Corrected the setup preview to use the shared critical-mass helper.
- Added opening-turn winner protection and next-player skipping.
- Removed the tracked nested server dependency directory.
- Added documentation and repository hygiene validation workflows.

Debt items need an owner and review date. Close items only when evidence is linked.
