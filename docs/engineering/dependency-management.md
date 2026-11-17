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

## Legacy server dependencies
A server manifest and lockfile exist, but no server implementation source was identified. Express/Socket.IO dependencies do not provide online multiplayer. Decide whether to implement or retire these manifests separately.

Never commit node_modules, build output, caches, credentials or local environment files.
