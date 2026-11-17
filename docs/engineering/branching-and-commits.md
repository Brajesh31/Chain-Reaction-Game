# 🌿 Branching and Commit Standards

Use focused branches for feature, fix, documentation, tooling and dependency updates. Avoid unrelated changes in one pull request.

Suggested prefixes: feature/, fix/, docs/, chore/, test/ and refactor/.

Use imperative commit summaries with scope, for example:
- feat(game): add replay history
- fix(rules): reject invalid coordinates
- docs(architecture): explain cascade queue
- test(engine): cover rectangular board edges

Pull requests should include linked issue, motivation, scope, tests, screenshots where relevant, risks and rollback. Never claim a test passed if it was not run.

Do not force-push shared branches or rewrite history to undo a release. Prefer a revert commit or static artifact rollback.
