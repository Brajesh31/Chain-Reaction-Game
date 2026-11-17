# 🧪 Unit Testing

The rules module is the primary pure unit-test boundary. Tests supply board fixtures and assert result state, failure reason and input immutability.

Required cases include neighbor geometry, rectangular dimensions, critical mass 2/3/4, legal/illegal moves, corner/edge/interior bursts, multi-wave cascades, ownership conversion, re-queued unstable cells, cycle-limit rollback, malformed inputs, opening participation, winner and next-player selection.

Run npm test -- --watchAll=false --runInBand. Keep fixtures deterministic and explain expected state using row/column coordinates.
