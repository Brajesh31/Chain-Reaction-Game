# 🛠️ Development Guide

## Prerequisites
Use Node.js compatible with the Create React App 5 dependency tree and npm. The project uses npm lockfiles. Do not mix package managers.

## First run
```bash
git clone https://github.com/Brajesh31/Chain-Reaction-Game.git
cd Chain-Reaction-Game
npm ci
npm start
```

## Workflow
1. Create a focused branch from the default branch.
2. Reproduce the issue or define expected game behavior.
3. Make the smallest coherent change.
4. Add tests for rule changes.
5. Update rules and architecture documentation.
6. Run relevant tests and production build.
7. Inspect the diff for secrets, generated files and unrelated edits.
8. Open a pull request with actual verification results.

## Code organization
- Keep app orchestration in `App.js`.
- Keep board and cell rendering in presentation components.
- Avoid duplicating rules in UI components.
- Prefer pure functions for critical mass, neighbors, legal moves and cascade resolution.
- Keep animation timing separate from rule state.
- Use explicit row, column, player, owner and orb terminology.

## Tests
`src/App.test.js` is a stale CRA sample expecting the starter “learn react” link. Replace it with game-specific tests. See [strategy](quality/testing-strategy.md) and [cases](quality/test-cases.md).

## Repository hygiene
Do not commit node_modules, build output, coverage, editor files or local environment files. The repository currently tracks nested `server/node_modules` artifacts; ignore rules do not untrack existing files. See [repository hygiene](engineering/repository-hygiene.md).

## Secrets
The current app needs no credentials. Never place private secrets in React source or `REACT_APP_*` variables because browser build values are public.

## Pull requests
Describe behavior, add test plan and actual results, link docs, include screenshots for UI changes, and state limitations honestly.
