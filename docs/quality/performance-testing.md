# ⚡ Performance Testing

## Goal
A legal move and resulting cascade should complete without a perceptible freeze for all offered board presets.

## Test approach
1. Use a fixed browser and device profile.
2. Warm up the app before measurement.
3. Use repeatable fixtures rather than random play.
4. Measure move-to-settled duration, burst count and changed cells.
5. Repeat each case multiple times.
6. Compare small, default and largest offered boards.
7. Test reduced motion to isolate rule processing from animation cost.

## Metrics
Interaction-to-next-paint, cascade duration, main-thread long tasks, number of rendered cells and memory growth across repeated matches.

Do not claim improvement from one run. Record device, browser, build mode, fixture and sample count.
