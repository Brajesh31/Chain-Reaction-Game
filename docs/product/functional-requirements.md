# 📋 Functional Requirements

| ID | Requirement | Acceptance evidence | Status |
|---|---|---|---|
| FR-01 | Show title/start experience | App renders title screen | Implemented |
| FR-02 | Configure two, three or four players | Setup passes selected count to Game | UI implemented; full match scenarios incomplete |
| FR-03 | Choose a grid size | Setup selection determines board dimensions | UI implemented |
| FR-04 | Accept empty-cell move | Cell receives one orb and active owner | Implemented |
| FR-05 | Accept own-cell move | Own cell count increments | Implemented |
| FR-06 | Reject opponent-cell move | Board remains unchanged | Implemented in rules path |
| FR-07 | Compute critical mass | Corner 2, edge 3, interior 4 | Implemented and unit-tested |
| FR-08 | Propagate orthogonally | Only up/down/left/right neighbors receive orbs | Implemented |
| FR-09 | Transfer ownership | Affected neighbors become initiating player | Implemented and tested |
| FR-10 | Resolve complete cascade | Queue drains before turn progression | Implemented; full-match coverage incomplete |
| FR-11 | Bound pathological cascades | Burst limit rejects without partial commit | Implemented |
| FR-12 | Protect opening turns | No elimination before participation | Implemented in rules module |
| FR-13 | Skip eliminated players | Next-player selection skips eliminated participants | Implemented in rules module |
| FR-14 | Announce turn and winner | Status is exposed through live regions | Implemented; manual AT review open |
| FR-15 | Navigate grid by keyboard | Arrow/Home/End keys move focus | Implemented and component-tested |
| FR-16 | Reset match | Empty board and initial turn restored | Implemented; manual reset QA remains |
| FR-17 | Change theme | Theme toggles without losing match | Implemented |
| FR-18 | Toggle diagnostics | Performance panel can be shown/hidden | Implemented |

A visible control is not proof of a working feature. Verify state transitions, invalid input, keyboard behavior, reset and error handling.
