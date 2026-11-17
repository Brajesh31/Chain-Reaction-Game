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
- [Player personas](product/player-personas.md)
- [Strategy guide](product/strategy-guide.md)
- [Balance notes](product/gameplay-balance.md)

## Architecture and engineering
- [Architecture](architecture.md)
- [Editable diagrams](architecture/README.md)
- [Game engine design](engineering/game-engine.md)
- [Shared rules module](engineering/game-rules-module.md)
- [Branching and commits](engineering/branching-and-commits.md)
- [Cascade resolution](architecture/cascade-resolution.md)
- [Algorithm complexity](architecture/algorithm-complexity.md)
- [State model](engineering/state-model.md)
- [Development standards](engineering/development-standards.md)
- [Browser compatibility](engineering/browser-compatibility.md)
- [Dependency management](engineering/dependency-management.md)
- [Repository hygiene](engineering/repository-hygiene.md)
- [Technical debt](engineering/technical-debt.md)
- [API and multiplayer status](api.md)
- [Database status](database.md)

## Quality
- [Testing strategy](quality/testing-strategy.md)
- [Test cases](quality/test-cases.md)
- [Engine test coverage](quality/engine-test-coverage.md)
- [Keyboard accessibility](quality/keyboard-accessibility.md)
- [Visual regression](quality/visual-regression.md)
- [Test fixtures](quality/test-fixtures.md)
- [Regression matrix](quality/regression-matrix.md)
- [Browser matrix](quality/browser-matrix.md)
- [Manual playtest script](quality/manual-playtest-script.md)
- [QA checklist](quality/qa-checklist.md)
- [Definition of done](quality/definition-of-done.md)
- [Performance guidance](quality/performance.md)
- [Performance testing](quality/performance-testing.md)
- [Accessibility audit](quality/accessibility-audit.md)

## Design, security and operations
- [Design system](design/design-system.md)
- [Responsive guidelines](design/responsive-guidelines.md)
- [Interaction patterns](design/interaction-patterns.md)
- [Accessibility](design/accessibility.md)
- [Motion](design/motion-guidelines.md)
- [Threat model](security/threat-model.md)
- [Data handling](security/data-handling.md)
- [Frontend security](security/frontend-security.md)
- [Dependency security](security/dependency-security.md)
- [Deployment](deployment.md)
- [Hosting guide](operations/deployment-hosting.md)
- [Environment configuration](operations/environment-configuration.md)
- [Monitoring](operations/monitoring.md)
- [Backup and recovery](operations/backup-recovery.md)
- [Operations runbook](operations/runbook.md)
- [Release and rollback](operations/release-rollback.md)
- [Incident response](operations/incident-response.md)
- [Troubleshooting](troubleshooting.md)

## Visual assets and templates
- [SVG asset catalog](assets/README.md)
- [Screenshot capture guide](screenshots/README.md)
- [Reusable template index](templates/README.md)

## Accuracy policy
Every document must distinguish implemented, partially implemented, planned and unknown. Never infer a working backend, persistence, authentication or online multiplayer from dependency declarations alone.
