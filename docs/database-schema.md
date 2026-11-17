# 🗃️ Database Schema Status

There is no database connection, migration system, ORM or persistence adapter in this repository. The current match is held in React memory and is lost on reload.

## Conceptual future entities only
| Entity | Possible attributes | Purpose |
|---|---|---|
| Player | id, display_name, created_at | Persistent identity |
| Match | id, status, rows, columns, current_player, created_at | Match metadata |
| MatchPlayer | match_id, player_id, seat, result | Participation |
| Move | match_id, sequence, player_id, row, column | Replay/history |

These are design candidates, not existing database tables. Any future persistence requires key/relationship design, transaction and concurrency handling, schema migrations, retention, deletion and server-authoritative transitions.
