# 🚀 Release Process

## Release gates
- [ ] Scope and user-facing changes are understood.
- [ ] Automated test suite passes.
- [ ] Production build succeeds.
- [ ] Rule changes have deterministic fixtures.
- [ ] Setup, 2–4 player configurations and endgame have been manually exercised.
- [ ] Responsive and accessibility checks are complete.
- [ ] README, docs, changelog and roadmap match shipped behavior.
- [ ] Dependencies and asset attribution reviewed.

## Sequence
1. Merge reviewed changes to the default branch.
2. Verify CI against the merge commit.
3. Create a version/tag only when an intentional release is needed.
4. Deploy the static build artifact.
5. Run post-deployment smoke checks.
6. Publish release notes and record deployed SHA.

## Rollback
Redeploy the last known-good static artifact. Do not rewrite shared Git history. Record the cause and add regression coverage.
