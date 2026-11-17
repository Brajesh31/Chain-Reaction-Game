# 🚦 Quality Gates

## Pull request checks
- Jest tests and production build.
- Markdown local links.
- Repository hygiene and package-lock synchronization.
- Generated project structure and SVG validation.
- CodeQL and secret scanning.
- Dependency review for dependency changes.

## Advisory reporting
The npm audit workflow generates a report and artifact. It is advisory while the legacy CRA graph is triaged. A green workflow means the report was generated, not that all vulnerabilities are fixed.

## Release gates
Complete manual match QA, reset/cascade interruption checks, accessibility review where required, production smoke test and docs/changelog review. Do not mark a gate complete without evidence linked to the tested commit.
