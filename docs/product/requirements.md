# 📋 Product Requirements

## Functional requirements
| ID | Requirement | Acceptance evidence | Status |
|---|---|---|---|
| FR-01 | Start a local match | Setup transitions into a board | Implemented |
| FR-02 | Support 2–4 local players | Each configured player receives a turn | Implemented, edge cases require tests |
| FR-03 | Enforce legal ownership | Opponent-cell click does not mutate state | Present in game logic |
| FR-04 | Compute critical mass | Corner/edge/interior thresholds are 2/3/4 | Implemented |
| FR-05 | Resolve all bursts | Cascades settle before next turn | Present, automated coverage missing |
| FR-06 | Transfer ownership | Affected neighbors belong to initiator | Present |
| FR-07 | Detect elimination and winner | No winner before every configured player has moved; terminal state blocks input | Participation guard implemented; full endgame fixtures still required |
| FR-08 | Restart cleanly | Fresh board and initial turn restored | Verify controls |
| FR-09 | Change theme | Theme changes without losing match | Implemented |
| FR-10 | Operate on small screens | Board remains operable | Partial, test matrix needed |

## Non-functional requirements
- **Determinism:** identical state/action inputs produce identical state.
- **Safety:** reject invalid coordinates, dimensions and ownership moves.
- **Performance:** cascade work must not freeze typical supported boards.
- **Accessibility:** actions need names, focus visibility and non-color-only player cues.
- **Maintainability:** rules should be pure functions independent of React.
- **Compatibility:** verify declared browser targets with a production build.

## Constraints
The app uses Create React App 5 and React 19 packages. Verify compatibility through actual clean build/test runs.

## Acceptance policy
A control existing is not proof the feature works. Record test environment and evidence.
