# 🔌 API and Multiplayer Status

## Current implementation
There is no application HTTP API in the checked-in source. The game runs in the browser without application endpoint calls. Express and Socket.IO appear in package manifests, but no server entry point, route, socket handler, client connection, event contract, authentication, or room manager is present.

## Current supported mode
- 2–4 players sharing one browser
- Turn-based moves in local React state
- No online rooms or matchmaking
- No accounts or identity provider
- No server persistence or public API

## Proposed future event contract
The following names are design placeholders only, not implemented events.

| Direction | Proposed event | Purpose |
|---|---|---|
| Client → server | `room:create` | Create a room |
| Client → server | `room:join` | Join with a room code |
| Client → server | `move:submit` | Submit a proposed coordinate |
| Server → client | `room:state` | Deliver authoritative state |
| Server → client | `move:rejected` | Explain an invalid move |
| Server → client | `match:ended` | Announce final result |

## Requirements before networking
Define payload schemas, authorization, player identity, turn validation, idempotency, rate limits, reconnect semantics, versioning and error codes. A client must submit a proposed move, not a trusted board snapshot or claimed winner. The server must validate and apply each move.
