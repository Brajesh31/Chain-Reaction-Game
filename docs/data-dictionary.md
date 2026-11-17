# 📚 Data Dictionary

This page documents current in-memory concepts. It is not a database schema.

| Field | Type | Meaning | Validation |
|---|---|---|---|
| rows | Positive integer | Board height | At least two in rules layer |
| cols | Positive integer | Board width | At least two in rules layer |
| owner | Non-negative integer | 0 empty; 1–4 local players | Integer |
| count | Non-negative integer | Number of orbs | Integer |
| row / col | Integer | Zero-based coordinate | Inside board bounds |
| currentPlayer | Positive integer | Active local player | In configured player range |
| playersWhoHaveMoved | Integer array | Players who have taken an opening turn | Valid player IDs |
| gameOver | Boolean | Terminal match state | Blocks further input |
| winner | Player number or null | Surviving player after participation | Calculated by winner helper |

Malformed board structures are rejected rather than coerced.
