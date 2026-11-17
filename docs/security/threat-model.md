# 🔐 Threat Model

## Current scope
The shipped application is a browser-only local game. It has no login, remote match server, payment, user profile or database. Primary risks are dependency/supply-chain hygiene and unsafe future additions.

## Assets and trust boundaries
| Boundary | Risk | Mitigation |
|---|---|---|
| npm dependencies | Vulnerable or compromised package | Review updates, lockfile and advisories |
| Browser bundle | Source/config publicly inspectable | Never embed private secrets |
| User input | Malformed values if import/network arrives later | Validate dimensions, coordinates and payload |
| Future socket server | Spoofed moves, room abuse, replay | Server validation, authorization and rate limits |
| Future storage | Unauthorized access or data leak | Minimize data and enforce access |

## Future multiplayer threats
- Client submits a move for another player.
- Client submits a fabricated board or winner.
- Out-of-turn or duplicate move is accepted.
- Malformed coordinates cause errors or resource exhaustion.
- Reconnect creates stale state or duplicate move application.
- Room identifiers are guessed or reused.

## Principles
If online play is introduced, the server must be authoritative. Treat browser data as untrusted, validate every transition server-side, and keep secrets out of frontend configuration.
