# 📐 Algorithm and Complexity Notes

Let R be rows, C columns and V = R × C cells. Each cell has at most four orthogonal neighbors.

| Operation | Expected cost | Notes |
|---|---:|---|
| Read cell | O(1) | Direct matrix coordinate |
| Critical mass | O(1) | At most four bounds checks |
| Enumerate neighbors | O(1) | At most four coordinates |
| Render board | O(V) | One view per cell |
| Build capacity map | O(V) | One value per coordinate |
| Evaluate full board | O(V) | May inspect neighbors |
| Cascade | O(B + E) | B = burst events; E = neighbor updates |

## Cascade workload
A cascade can revisit cells. Work is proportional to processed burst events and neighbor updates, not just unique coordinates. Queue processing must read current state.

## Practical limits
The UI currently offers six board presets. Avoid allowing unbounded dimensions without benchmarking. Larger boards increase DOM size, rendering, memory allocation and animation work.

## Profiling
1. Use deterministic board fixtures.
2. Measure move-to-settled time.
3. Record burst count and changed cells.
4. Repeat on desktop and mobile profiles.
5. Compare median and 95th percentile.
6. Profile before optimizing.

Potential optimizations include extracting pure rules, batching updates and reducing unnecessary cell rerenders. Optimize only after evidence.
