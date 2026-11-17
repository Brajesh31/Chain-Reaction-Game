# ♻️ Deprecation Policy

No public API or stable third-party package contract is published. Internal component props and scripts may change through reviewed pull requests.

For any future public API, persisted data format or plugin contract:
1. Identify consumers and compatibility impact.
2. Publish a migration path and target removal version.
3. Test old/new behavior during the compatibility window.
4. Update docs and examples.
5. Announce removal in release notes.
6. Remove only after the migration window and evidence are complete.

Do not invent a formal deprecation schedule for internal features with no external consumers.
