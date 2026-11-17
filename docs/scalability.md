# 📈 Scalability and Performance Boundaries

This is a local browser game, not a multi-tenant service. Main workloads are finite grid initialization, move resolution and queued cascading bursts.

## Current controls
- Large-grid initialization is batched across animation frames.
- Cascade processing has a 10,000-burst safety ceiling.
- Input is locked while cascade presentation is active.
- An optional performance monitor provides browser-side diagnostics.
- Reduced-motion CSS limits animation when requested by the OS.

The burst ceiling is a safety bound, not a performance benchmark. No server throughput, multi-user load or cloud scaling test applies.

A future online service requires authoritative move processing, room concurrency design, rate/message limits, reconnect semantics, persistence decisions, monitoring and load tests.
