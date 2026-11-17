# 🛡️ Security Overview

The current application is a local browser game. There is no backend, API, database, login, authorization service or online match authority.

## Current controls
- No secret values are required for local play.
- Local match state is user-controlled browser state and is not trusted for competition.
- Game rules validate board shape, coordinates, player and cell ownership.
- Cascade resolution has a burst ceiling.
- CI runs CodeQL, dependency review, npm audit reporting and repository validation.
- Secret scanning checks repository changes/history.

The project has not undergone a formal penetration test or external security audit. A successful audit workflow means a report was generated, not that all advisories were fixed. See the [threat model](security/threat-model.md), [assessment](security/threat-assessment.md) and root [SECURITY.md](../SECURITY.md).
