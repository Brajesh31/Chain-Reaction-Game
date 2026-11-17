# ⚡ Performance Guidance

## Existing diagnostics
The app includes a browser-side performance monitor. It is a diagnostic display, not a benchmark guarantee.

## Workload hotspots
- Rendering the grid and cells.
- Orb and explosion animations.
- Processing dense chain reactions.
- Updating board state after a move.

## Guidance
- Keep transitions deterministic.
- Avoid mutating prior board snapshots.
- Avoid recalculating unrelated presentation data on every cell render.
- Profile before adding memoization.
- Do not let animation timing become the source of game rules.
- Exercise large supported boards and dense cascades.
- Avoid React state updates once per visual frame unless needed.

## Measurement record
Record browser, viewport, board dimensions, player count, scenario and actual measurements. Compare production builds. Never publish performance claims without reproducible evidence.
