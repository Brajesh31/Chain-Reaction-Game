# 🛡️ Frontend Security

## Current threat boundary
The game is client-side. Browser state can be modified by the user and is not authoritative for trust-sensitive outcomes.

## Requirements
- Never embed private secrets in source or public build variables.
- Avoid unsafe HTML rendering of untrusted strings.
- Validate values before using them as indexes or style fragments.
- Review dependencies and lockfile changes.
- Use HTTPS for deployment.
- Exclude sensitive diagnostics from production.
- Treat future remote client messages as untrusted input.

## Future online mode
A server must independently validate identity, room membership, turn order, board dimensions, ownership, move legality, cascade result and winner state. Never trust a client-calculated final board.

Threat-model every new external integration, input boundary or persistence feature before release.
