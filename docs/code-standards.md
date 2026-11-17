# 🧑‍💻 Code Standards

- Prefer small components with one rendering responsibility.
- Keep pure rule functions in src/game/rules.js.
- Use descriptive names for players, coordinates, state and callbacks.
- Avoid hidden mutation of the board or player list.
- Clear timers and invalidate asynchronous work during reset/unmount.
- Use semantic controls with accessible names.
- Prevent styling-only props from leaking onto native DOM elements.
- Do not add backend abstractions until a backend exists.
- Use stable keys for mapped elements.
- Keep animation separate from authoritative game transitions.

## Tests
Rules changes require deterministic tests. Player-visible changes should add component/integration tests or documented manual QA. Assert user-visible state changes rather than private implementation details.

## Documentation
Update README, relevant handbook pages, diagrams and changelog in the same change that alters behavior.
