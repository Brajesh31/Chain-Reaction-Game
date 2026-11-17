# 📦 Dependency Management

## Source of truth
Root package.json and package-lock.json define the frontend dependency graph. Use npm ci in CI and clean environments.

## Change procedure
1. Identify why the dependency is needed.
2. Check maintenance, release cadence, license and advisories.
3. Check compatibility with React 19 and Create React App 5.
4. Update manifest and lockfile together.
5. Run tests and production build.
6. Inspect bundle impact and transitive changes.
7. Record migration and rollback notes.

## Dependency scope
The root manifest now contains only packages imported by the frontend or used by the test/build toolchain. Networking/server packages were removed because there is no server application. Online play requires a separate backend design and dependency review before any server packages are reintroduced.

Never commit node_modules, build output, caches, credentials or local environment files.
