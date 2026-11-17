# 📋 Repository Enhancement Checklist Audit

This page maps the master repository enhancement standard to the actual Chain Reaction project. It distinguishes a dedicated file, an equivalent existing page and a capability that does not exist. It is not a claim that every proposed feature has been built.

## Main repository files
| Checklist item | Current file | Result |
|---|---|---|
| Expanded README, badges, banner and visuals | README.md, docs/assets/project-banner.svg | Implemented; concept SVG is not a runtime screenshot |
| License and attribution | LICENSE, ASSET_ATTRIBUTION.md, AUTHORS.md | License is documentation-scope only; app-source provenance still needs review |
| Conduct, contribution, security and support | CODE_OF_CONDUCT.md, CONTRIBUTING.md, SECURITY.md, SUPPORT.md | Present |
| Changelog, roadmap, citation and ownership | CHANGELOG.md, ROADMAP.md, CITATION.cff, MAINTAINERS.md, CODEOWNERS | Present |
| Funding metadata | Not created | Not applicable without a confirmed funding destination |
| Editor/Git/environment setup | .editorconfig, .gitattributes, .gitignore, .env.example, .nvmrc | Present |

## Documentation mapping
| Checklist area | Current location |
|---|---|
| Product overview/background/objectives/problem/solution | docs/product/ and docs/scope-and-limitations.md |
| Features and requirements | docs/product/features.md, functional-requirements.md, non-functional-requirements.md |
| Personas, journeys and use cases | docs/product/player-personas.md, player-journeys.md, use-cases.md |
| Glossary/FAQ | docs/engineering/glossary.md, docs/faq.md |
| Project structure | docs/project-structure.md, generated and CI-checked |
| Technical overview/lifecycle/components/modules/patterns | docs/technical-overview.md, application-lifecycle.md, component-architecture.md, module-documentation.md, design-patterns.md |
| Stack/dependencies/configuration | docs/technology-stack.md, external-dependencies.md, configuration.md, environment-variables.md |
| API/database/integrations | docs/api*.md, database*.md, integrations.md. These state there is no live API/database |
| UI/UX, tokens and components | docs/design/ |
| Security and threat assessment | docs/security.md and docs/security/ |
| Accessibility | docs/accessibility.md, docs/accessibility/ and docs/quality/keyboard-accessibility.md |
| Testing and QA | docs/testing.md and docs/quality/ |
| Deployment/DevOps | docs/deployment.md, docs/ci-cd.md, docs/github-actions.md, docs/operations/ |
| Privacy/retention/deletion | docs/privacy.md, data-retention.md, data-deletion.md and cookie-policy.md |
| Maintenance/risks/migration/decisions | docs/maintenance.md, known-issues.md, risk-register.md, migration-guide.md and decision-log.md |

## Diagrams and visuals
| Diagram/asset | Current location |
|---|---|
| System/component architecture | docs/architecture/ and docs/assets/application-architecture.svg |
| Game, player journey and cascade | docs/architecture/*.mmd, docs/assets/player-journey.svg and cascade-resolution.svg |
| DFD Level 0/1 and use cases | docs/architecture/dfd-level-0.mmd, dfd-level-1.mmd, use-case-diagram.mmd |
| Activity, error, CI/CD and security boundary | docs/architecture/application-activity.mmd, error-handling.mmd, ci-cd-pipeline.mmd, security-boundary.mmd |
| Banner/board | docs/assets/project-banner.svg, docs/assets/game-board.svg |
| Runtime screenshots | Not checked in | Capture from a verified build; do not substitute illustrations |

## Templates and GitHub automation
See docs/templates/README.md and .github/. The repository includes issue/discussion templates, PR template, CI, docs validation, CodeQL, dependency review, dependency audit, secret scan, release workflow and Dependabot.

## Explicitly not applicable today
- No live database or schema, so ER/entity design is conceptual only.
- No HTTP API, API authentication, webhooks or integrations.
- No login, authorization roles or user accounts.
- No Dockerfile because no container deployment target is configured.
- No FUNDING.yml because no confirmed sponsorship destination exists.
- No runtime screenshots yet.
- No formal WCAG certification or external security audit.

## Completion rule
A row is complete only when the linked file exists and matches current implementation. Run project-tree, Markdown, SVG, repository, test and build validation before closing the relevant work.
