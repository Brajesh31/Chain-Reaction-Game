# 📚 Chain Reaction Documentation

This handbook documents the current React implementation and separates shipped behavior from future proposals. The current game is local hot-seat play, not online multiplayer.

## Start here
- [Project overview](../README.md)
- [Rules](game-rules.md)
- [Installation](installation.md)
- [Development](development.md)
- [FAQ](faq.md)

## Product and gameplay
- [Project brief](product/project-brief.md)
- [Requirements](product/requirements.md)
- [Feature inventory](product/feature-inventory.md)
- [Player stories](product/user-stories.md)
- [Use cases](product/use-cases.md)
- [Player journeys](product/player-journeys.md)
- [Game rules](game-rules.md)

## Architecture and engineering
- [Architecture](architecture.md)
- [Editable diagrams](architecture/README.md)
- [Game engine design](engineering/game-engine.md)
- [State model](engineering/state-model.md)
- [Development standards](engineering/development-standards.md)
- [Repository hygiene](engineering/repository-hygiene.md)
- [API and multiplayer status](api.md)
- [Database status](database.md)

## Quality
- [Testing strategy](quality/testing-strategy.md)
- [Test cases](quality/test-cases.md)
- [Manual QA checklist](quality/qa-checklist.md)
- [Definition of done](quality/definition-of-done.md)
- [Performance guidance](quality/performance.md)
- [Accessibility audit](quality/accessibility-audit.md)

## Design, security and operations
- [Accessibility guidance](design/accessibility.md)
- [UI guidelines](design/ui-guidelines.md)
- [Motion guidelines](design/motion-guidelines.md)
- [Threat model](security/threat-model.md)
- [Data handling](security/data-handling.md)
- [Secure development checklist](security/secure-development.md)
- [Deployment](deployment.md)
- [Operations runbook](operations/runbook.md)
- [Release and rollback](operations/release-rollback.md)
- [Incident response](operations/incident-response.md)
- [Troubleshooting](troubleshooting.md)

## Templates
See [template index](templates/README.md) for ADR, feature, bug, test plan, game rule change, security, accessibility, release, incident and pull-request templates.

## Accuracy policy
Every page must distinguish implemented, partially implemented, planned and unknown. Never infer a working backend, persistence, authentication or online multiplayer from dependency declarations alone.
