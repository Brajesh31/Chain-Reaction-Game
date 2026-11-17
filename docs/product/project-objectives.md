# 🎯 Project Objectives

1. Deliver a playable local match for two to four people.
2. Apply identical critical-mass rules in the setup preview and live game.
3. Reject illegal moves without mutating the board.
4. Resolve a complete cascade before another move is accepted.
5. Communicate active player, winner, ownership and orb count clearly.
6. Support keyboard operation and reduced-motion preferences.
7. Keep installation, tests and production builds reproducible.
8. Keep documentation, diagrams and project structure synchronized with the code.

## Engineering objectives
- Keep game rules pure and independently testable.
- Separate game-state transitions from decorative animation.
- Bound cascade processing to prevent unbounded browser work.
- Exclude generated dependencies, build output and secrets from Git.
- Use CI to verify tests, build, docs, repository hygiene and security checks.

Remote matchmaking, player profiles, leaderboards, AI opponents and cloud saves are proposals, not current delivery objectives.
