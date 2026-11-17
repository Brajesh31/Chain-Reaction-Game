# 🚚 Build-Tool Migration Guide

The project currently uses Create React App 5 / react-scripts 5.0.1. The dependency audit reports advisories in the legacy transitive graph. A Vite migration is a reasonable proposal but is not implemented.

## Migration objectives
- Preserve React 19 and styled-components behavior.
- Preserve public asset paths and app metadata.
- Preserve tests or replace them with an equivalent runner.
- Preserve static-host output and cache behavior.
- Reduce legacy build-tool dependency exposure.

## Suggested sequence
1. Create an ADR and focused branch.
2. Record current tests/build and artifact behavior.
3. Add Vite config and equivalent HTML entry.
4. Replace CRA environment-variable handling intentionally.
5. Migrate test execution/setup.
6. Verify CSS, SVG, imports and public assets.
7. Compare production output and smoke-test all screens.
8. Remove react-scripts only after replacement CI passes.
9. Update docs, scripts, lockfile and deployment guide.

Do not mix a major toolchain migration with unrelated gameplay changes.
