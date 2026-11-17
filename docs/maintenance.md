# 🛠️ Maintenance Guide

## Routine maintenance
- Review Dependabot updates and dependency advisories.
- Run npm ci, Jest and production build after changes.
- Review CodeQL and secret-scanning results.
- Verify docs links, project tree and SVGs.
- Review known issues, risks and technical debt.
- Check release and rollback readiness before tagging.

## Dependency maintenance
Use npm to update package.json and package-lock.json together. Review transitive changes and avoid blanket force-upgrades. CRA 5 has legacy dependency findings; a Vite migration should be scoped and tested separately.

## Documentation maintenance
When source, component, rule, workflow or capability changes, update project structure, architecture, requirements, quality guides and README references in the same pull request.
