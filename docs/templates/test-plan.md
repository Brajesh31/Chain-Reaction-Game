# 🧪 Test Plan

## Objective and scope
Feature/release under verification and exclusions.

## Build under test
Commit SHA, Node/npm versions and browser matrix.

## Test fixture
Player count, grid dimensions, owner/count matrix and move sequence.

## Scenarios
| ID | Preconditions | Action | Expected | Result |
|---|---|---|---|---|
| TP-01 | | | | Not run |

## Invariants
- Invalid moves do not mutate state.
- Counts remain non-negative.
- Bursts reach orthogonal neighbors only.
- Ownership changes to the initiating player.
- Cascade resolves before turn advancement.

## Accessibility and responsive checks
Keyboard, screen reader, reduced motion, contrast, touch and zoom.

## Exit criteria
Required pass rate, severity threshold and sign-off owner.
