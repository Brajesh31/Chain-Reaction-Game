# 🧯 Error and Invalid-Action Handling

## Invalid game actions
Opponent-owned target selection, invalid coordinates, actions during a cascade and moves after completion must be rejected before changing board state.

## UI feedback
Where a rejected action is visible, provide concise feedback without exposing internal stack traces or implementation details.

## Rendering failures
Consider a top-level React error boundary with a recoverable reload/restart path so a rendering exception does not leave an unexplained blank screen.

## Async work
Clean up timers, animation callbacks and asynchronous initialization when components unmount. Avoid stale updates after a new match starts.

## Diagnostics
Capture reproducible state and move sequence. Do not collect personal data or secrets. Add regression tests for fixed failures.
