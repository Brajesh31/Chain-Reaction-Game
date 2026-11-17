# ⚠️ API and Rules Error Handling

There are no application HTTP status codes or remote response schemas because no API is implemented.

## Rules failure reasons
| Reason | Meaning | Expected behavior |
|---|---|---|
| invalid-board | Board shape/cells invalid | Reject without mutation |
| invalid-coordinate | Coordinate outside board or not an integer | Reject without mutation |
| invalid-player | Active player invalid | Reject without mutation |
| invalid-burst-limit | Safety option invalid | Reject without mutation |
| illegal-move | Target belongs to another player | Reject without mutation |
| unstable-board | Selected cell already unstable before move | Reject invalid state |
| cascade-limit | Burst safety ceiling exceeded | Reject without partial cascade |

The UI should explain rejected actions without exposing stack traces. Future networking requires a separate versioned API error model.
