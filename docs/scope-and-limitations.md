# 🚧 Scope and Limitations

## In scope
- Local hot-seat play for two to four players.
- Rectangular board configurations exposed by setup.
- Orthogonal critical-mass and chain-reaction rules.
- Cell ownership transfer, turn progression and winner state.
- Title/setup/game screens, theme and performance controls.
- Keyboard grid navigation and reduced-motion CSS.
- Unit/component tests and GitHub automation.

## Not implemented
- Remote matchmaking, online rooms, reconnect or invite links.
- Player accounts, passwords, identity federation or role system.
- Persistent match history, cloud saves, leaderboard or analytics.
- AI opponents.
- HTTP endpoints, webhooks, database, background workers or server jobs.
- Payments, advertising, tracking or monetization.

## Known limitations
- Complete two-, three- and four-player match integration fixtures are incomplete.
- Manual screen-reader, contrast, zoom and reflow sign-off is still needed.
- Create React App 5 remains the build tool; migration is a separate engineering task.
- The dependency audit workflow is advisory while the legacy dependency graph is triaged.
- No verified runtime screenshot set is checked in; existing SVGs are illustrations.

Any network, storage, identity or analytics feature changes the privacy/security boundary and needs a feature proposal, threat assessment, requirements, ADR, tests and operational plan.
