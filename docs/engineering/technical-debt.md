# 🧱 Technical Debt Register

| ID | Item | Impact | Recommended action | Priority |
|---|---|---|---|---|
| TD-01 | Full match integration coverage is incomplete | Winner/turn regressions can escape unit tests | Add 2-, 3- and 4-player end-to-end fixtures | High |
| TD-02 | Screen-reader verification is not complete | Announcements can differ across browser/AT combinations | Complete manual assistive-technology testing | High |
| TD-03 | Contrast, zoom and responsive accessibility need manual sign-off | Some players may be blocked | Review both themes, 200% zoom and narrow viewports | High |
| TD-04 | Match state is not persisted | Reload loses the current game | Decide whether local save/resume is required | Low |
| TD-05 | Server manifests exist without server source | Dependencies imply backend functionality that is not present | Implement intentionally or retire manifests and unused dependencies | Medium |
| TD-06 | A browser/runtime smoke matrix is not automated | Browser-specific layout defects may escape | Add browser automation if maintenance cost is justified | Medium |

## Resolved in current branch
- Extracted shared pure board rules and critical-mass calculation.
- Added deterministic move/cascade resolution and a bounded cycle safeguard.
- Corrected the setup preview to use the shared critical-mass helper.
- Added opening-turn winner protection and next-player skipping.
- Removed tracked nested server dependency artifacts.
- Added documentation and repository hygiene validation workflows.
- Added native named cell buttons and one-tab-stop arrow-key grid navigation.
- Added live announcements for turn changes and rejected moves.
- Added reduced-motion support and animation timer cleanup.
- Added component tests for keyboard navigation and cell descriptions.
- Corrected semantic grid rows and removed the `display: contents` dependency.

Debt items need an owner and review date. Close items only when evidence is linked.
