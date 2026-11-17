# 🗂️ Project Structure

This document is the repository map. The generated tree is derived from tracked Git files and checked in CI.

## Main directories

| Path | Responsibility |
|---|---|
| .github/ | Issue/discussion forms, PR guidance and GitHub Actions |
| docs/architecture/ | Editable Mermaid sources |
| docs/assets/ | Banner and original SVG illustrations |
| docs/design/ | Design system, responsive and accessibility guidance |
| docs/engineering/ | Development, rules, state and dependency standards |
| docs/operations/ | Hosting, incident handling, backups and release operations |
| docs/product/ | Product requirements, features, personas and journeys |
| docs/quality/ | Tests, QA, accessibility and performance guidance |
| docs/security/ | Threat, frontend, dependency and secure-development material |
| docs/templates/ | Reusable product, engineering, QA, security and operations templates |
| public/ | HTML entry, manifest, icons and browser assets |
| scripts/ | Repository, project-tree, SVG and audit-report utilities |
| src/ | React application, components, styles and pure rules |

## Entry points and core files

| File | Responsibility |
|---|---|
| public/index.html | HTML document and React mount element |
| src/index.js | Creates React root and mounts App |
| src/App.js | Screen selection and shared theme |
| src/components/FloatingBubblesPage.js | Title/start screen |
| src/components/WelcomePage.js | Player/grid setup and critical-mass preview |
| src/components/Game.js | Match state, moves, turns, resets and winner UI |
| src/components/Board.js | Semantic grid and keyboard focus |
| src/components/Cell.js | Cell button, orb and explosion presentation |
| src/game/rules.js | Pure move, cascade, winner and next-player rules |
| src/game/rules.test.js | Deterministic rules tests |
| src/components/Game.test.js | Cascade input-lock regression test |
| package.json / package-lock.json | npm scripts, dependencies and reproducible install graph |
| .nvmrc | Node.js runtime selection |

## Frontend/backend boundary

There is no backend directory or server application. This repository is a static React frontend with local in-memory match state. API/database pages describe absence and future prerequisites rather than invented services.

## Generated tree

The generated block below includes the actual tracked files. Do not edit this block manually.

<!-- BEGIN GENERATED REPOSITORY TREE -->
Chain-Reaction-Game/
├── .github/
│   ├── DISCUSSION_TEMPLATE/
│   │   ├── announcements.yml
│   │   ├── ideas.yml
│   │   └── questions.yml
│   ├── ISSUE_TEMPLATE/
│   │   ├── accessibility_report.yml
│   │   ├── bug_report.yml
│   │   ├── config.yml
│   │   ├── docs_report.yml
│   │   ├── feature_request.yml
│   │   ├── gameplay_bug.yml
│   │   ├── performance_issue.yml
│   │   └── security_report.yml
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── codeql.yml
│   │   ├── dependency-audit.yml
│   │   ├── dependency-review.yml
│   │   ├── docs-validation.yml
│   │   ├── release.yml
│   │   ├── secret-scan.yml
│   │   └── update-readme.yml
│   ├── dependabot.yml
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── accessibility/
│   │   ├── accessibility-testing.md
│   │   ├── color-contrast.md
│   │   ├── screen-reader-support.md
│   │   └── wcag-compliance.md
│   ├── architecture/
│   │   ├── algorithm-complexity.md
│   │   ├── application-activity.mmd
│   │   ├── cascade-resolution.md
│   │   ├── ci-cd-pipeline.mmd
│   │   ├── component-map.mmd
│   │   ├── deployment-flow.mmd
│   │   ├── dfd-level-0.mmd
│   │   ├── dfd-level-1.mmd
│   │   ├── error-handling.mmd
│   │   ├── future-online-architecture.mmd
│   │   ├── game-state-machine.mmd
│   │   ├── keyboard-navigation.mmd
│   │   ├── move-sequence.mmd
│   │   ├── README.md
│   │   ├── security-boundary.mmd
│   │   ├── system-context.mmd
│   │   ├── turn-lifecycle.mmd
│   │   └── use-case-diagram.mmd
│   ├── assets/
│   │   ├── application-architecture.svg
│   │   ├── cascade-resolution.svg
│   │   ├── game-board.svg
│   │   ├── player-journey.svg
│   │   ├── project-banner.svg
│   │   ├── README.md
│   │   └── release-pipeline.svg
│   ├── design/
│   │   ├── accessibility.md
│   │   ├── branding-guidelines.md
│   │   ├── color-system.md
│   │   ├── component-library.md
│   │   ├── design-system.md
│   │   ├── design-tokens.md
│   │   ├── interaction-patterns.md
│   │   ├── motion-guidelines.md
│   │   ├── navigation-structure.md
│   │   ├── page-documentation.md
│   │   ├── responsive-guidelines.md
│   │   ├── typography.md
│   │   └── ui-guidelines.md
│   ├── engineering/
│   │   ├── branching-and-commits.md
│   │   ├── browser-compatibility.md
│   │   ├── dependency-management.md
│   │   ├── development-standards.md
│   │   ├── error-handling.md
│   │   ├── game-engine.md
│   │   ├── game-rules-module.md
│   │   ├── glossary.md
│   │   ├── release-process.md
│   │   ├── repository-hygiene.md
│   │   ├── state-model.md
│   │   └── technical-debt.md
│   ├── operations/
│   │   ├── backup-recovery.md
│   │   ├── deployment-hosting.md
│   │   ├── environment-configuration.md
│   │   ├── incident-response.md
│   │   ├── monitoring.md
│   │   ├── release-rollback.md
│   │   └── runbook.md
│   ├── product/
│   │   ├── feature-inventory.md
│   │   ├── features.md
│   │   ├── functional-requirements.md
│   │   ├── gameplay-balance.md
│   │   ├── non-functional-requirements.md
│   │   ├── player-journeys.md
│   │   ├── player-personas.md
│   │   ├── problem-statement.md
│   │   ├── product-overview.md
│   │   ├── project-background.md
│   │   ├── project-brief.md
│   │   ├── project-objectives.md
│   │   ├── requirements.md
│   │   ├── solution-overview.md
│   │   ├── strategy-guide.md
│   │   ├── use-cases.md
│   │   └── user-stories.md
│   ├── quality/
│   │   ├── accessibility-audit.md
│   │   ├── browser-matrix.md
│   │   ├── definition-of-done.md
│   │   ├── e2e-testing.md
│   │   ├── engine-test-coverage.md
│   │   ├── integration-testing.md
│   │   ├── keyboard-accessibility.md
│   │   ├── manual-playtest-script.md
│   │   ├── performance-testing.md
│   │   ├── performance.md
│   │   ├── qa-checklist.md
│   │   ├── quality-gates.md
│   │   ├── regression-matrix.md
│   │   ├── test-cases.md
│   │   ├── test-coverage.md
│   │   ├── test-fixtures.md
│   │   ├── testing-strategy.md
│   │   ├── unit-testing.md
│   │   └── visual-regression.md
│   ├── screenshots/
│   │   └── README.md
│   ├── security/
│   │   ├── data-handling.md
│   │   ├── dependency-audit.md
│   │   ├── dependency-security.md
│   │   ├── frontend-security.md
│   │   ├── secret-management.md
│   │   ├── secure-development.md
│   │   ├── security-testing.md
│   │   ├── threat-assessment.md
│   │   ├── threat-model.md
│   │   └── vulnerability-management.md
│   ├── templates/
│   │   ├── accessibility-review.md
│   │   ├── adr.md
│   │   ├── api-documentation-template.md
│   │   ├── architecture-review.md
│   │   ├── bug-report.md
│   │   ├── change-request-template.md
│   │   ├── code-review-template.md
│   │   ├── content-review.md
│   │   ├── database-schema-template.md
│   │   ├── dependency-update.md
│   │   ├── deployment-checklist.md
│   │   ├── design-review.md
│   │   ├── feature-proposal.md
│   │   ├── game-rule-change.md
│   │   ├── gameplay-playtest.md
│   │   ├── incident-report.md
│   │   ├── maintenance-checklist.md
│   │   ├── meeting-notes-template.md
│   │   ├── migration-template.md
│   │   ├── project-status-template.md
│   │   ├── pull-request.md
│   │   ├── qa-test-case-template.md
│   │   ├── README.md
│   │   ├── release-checklist.md
│   │   ├── release-notes.md
│   │   ├── risk-assessment-template.md
│   │   ├── risk-register.md
│   │   ├── rollback-checklist.md
│   │   ├── security-audit-template.md
│   │   ├── security-review.md
│   │   ├── test-plan.md
│   │   └── test-report-template.md
│   ├── accessibility.md
│   ├── api-authentication.md
│   ├── api-errors.md
│   ├── api-reference.md
│   ├── api.md
│   ├── application-lifecycle.md
│   ├── architecture.md
│   ├── ci-cd.md
│   ├── code-standards.md
│   ├── compliance.md
│   ├── component-architecture.md
│   ├── configuration.md
│   ├── contributor-guide.md
│   ├── cookie-policy.md
│   ├── data-deletion.md
│   ├── data-dictionary.md
│   ├── data-flow.md
│   ├── data-retention.md
│   ├── data-validation.md
│   ├── database-schema.md
│   ├── database.md
│   ├── decision-log.md
│   ├── deployment.md
│   ├── deprecation-policy.md
│   ├── design-patterns.md
│   ├── development.md
│   ├── environment-variables.md
│   ├── external-dependencies.md
│   ├── faq.md
│   ├── game-rules.md
│   ├── github-actions.md
│   ├── hosting.md
│   ├── installation.md
│   ├── integrations.md
│   ├── known-issues.md
│   ├── legal-considerations.md
│   ├── maintenance.md
│   ├── migration-guide.md
│   ├── module-documentation.md
│   ├── privacy.md
│   ├── production-setup.md
│   ├── project-structure.md
│   ├── README.md
│   ├── repository-enhancement-audit.md
│   ├── risk-register.md
│   ├── scalability.md
│   ├── scope-and-limitations.md
│   ├── security.md
│   ├── technical-overview.md
│   ├── technology-stack.md
│   ├── testing.md
│   └── troubleshooting.md
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.svg
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── scripts/
│   ├── check_project_structure.py
│   ├── README.md
│   ├── summarize_npm_audit.py
│   ├── validate_docs.py
│   ├── validate_repository.py
│   └── validate_svg.py
├── src/
│   ├── components/
│   │   ├── Board.js
│   │   ├── Cell.js
│   │   ├── Cell.test.js
│   │   ├── FloatingBubblesPage.js
│   │   ├── Game.js
│   │   ├── Game.test.js
│   │   ├── GameControls.js
│   │   ├── PerformanceMonitor.js
│   │   └── WelcomePage.js
│   ├── game/
│   │   ├── rules.js
│   │   └── rules.test.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .editorconfig
├── .env.example
├── .gitattributes
├── .gitignore
├── .gitleaks.toml
├── .markdownlint-cli2.jsonc
├── .nvmrc
├── ACCESSIBILITY.md
├── ASSET_ATTRIBUTION.md
├── AUTHORS.md
├── CHANGELOG.md
├── CITATION.cff
├── CODE_OF_CONDUCT.md
├── CODEOWNERS
├── CONTRIBUTING.md
├── GOVERNANCE.md
├── LICENSE
├── MAINTAINERS.md
├── package-lock.json
├── package.json
├── PRIVACY.md
├── README.md
├── ROADMAP.md
├── SECURITY.md
└── SUPPORT.md
<!-- END GENERATED REPOSITORY TREE -->

## Updating the tree

Run python scripts/check_project_structure.py to regenerate the tree and python scripts/check_project_structure.py --check to verify it.
