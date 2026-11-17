# 🗃️ Database Status

## Current implementation
The game does not use a database. Board state, current player and match progress are kept in browser memory and are lost on page reload. No database client, schema, migration or persistence adapter is present.

## Is a database required now?
No. The current local game does not need persistent storage. Adding a database before deciding that match history, accounts or online rooms are actual requirements would add needless operational complexity.

## Potential future entities
| Entity | Possible fields | Purpose |
|---|---|---|
| players | id, display_name, created_at | Player identity |
| matches | id, status, board_config, current_turn, timestamps | Match metadata |
| match_players | match_id, player_id, seat, result | Participation |
| moves | match_id, sequence, player_id, row, column | Ordered history |

## Future design requirements
Use server-authoritative transitions, transaction/concurrency control, schema versioning, coordinate validation, retention policy and data minimization. This is a proposal, not a current schema.
