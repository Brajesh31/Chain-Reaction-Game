# Roadmap

This is a directional list for the current React game prototype. It has no delivery dates and does not promise that any item will be implemented.

## Near-term quality work

- Replace the leftover Create React App sample test with tests for turns, ownership, critical mass, cascades, and win conditions.
- Make the rules preview use the same critical-mass values as the game engine.
- Verify chain-reaction queue handling when one cell receives multiple orbs during a cascade.
- Define the elimination and win rules for two, three, and four players, including the opening turns.
- Reduce repository noise from dependency installation artifacts through a reviewed repository cleanup.
- Add accessibility checks for keyboard operation, reduced motion, and color distinction.

## Possible future features

- Save and restore local game settings or match state.
- Add a real online multiplayer server with authoritative move validation and documented Socket.IO events.
- Add deployment and operational guidance if a backend or hosted service is introduced.

## Propose work

Open an issue describing the player problem, expected behavior, and any compatibility or persistence effects. See [CONTRIBUTING.md](CONTRIBUTING.md). Priorities may change as the project evolves.
