# Database and Persistence

## Current state

The application does not use a database. It has no database client, schema, migration, seed, or persistence service in the checked-in game source. The board, active player, theme, and selected settings live in React component state and are lost on refresh or when the game component is reset.

## If persistence is introduced

Decide whether state should remain local or be stored remotely before choosing a database. Document the state model, validation rules, migrations, backups, retention, and recovery behavior. For online matches, the server should validate moves and derive outcomes instead of accepting client-supplied winners.

No database credentials or variables are needed for the current build; see `.env.example`.
