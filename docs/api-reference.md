# 🔌 API Reference

There is no application HTTP API in the checked-in source. No REST endpoint, GraphQL operation, WebSocket event or public service contract is implemented.

The internal rules module exports functions rather than network endpoints:

| Export | Purpose |
|---|---|
| getOrthogonalNeighbors | Return in-bounds orthogonal coordinates |
| getCriticalMass | Count the cell's orthogonal neighbors |
| isLegalMove | Validate empty/self-owned target |
| resolveMove | Return a validated move and settled cascade result |
| getWinner | Identify winner after all players have participated |
| getNextPlayer | Select next eligible player |

A future service must document method/event, authentication, authorization, schemas, response examples, errors, idempotency, versioning and rate limits before release.
