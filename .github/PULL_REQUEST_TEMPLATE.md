## 🎯 Summary
What changed and why?

## Related issue
Closes #

## Change type
- [ ] Gameplay rule
- [ ] UI/presentation
- [ ] Accessibility
- [ ] Performance
- [ ] Documentation
- [ ] Tooling/CI
- [ ] Security

## Behavior evidence
Describe before/after behavior. For gameplay changes include board fixtures and expected ownership/counts.

## Visual evidence
Attach verified screenshots for user-facing changes. Concept diagrams are not runtime screenshots.

## Verification
- [ ] npm ci
- [ ] npm test -- --watchAll=false --runInBand
- [ ] npm run build
- [ ] python scripts/validate_docs.py
- [ ] python scripts/validate_repository.py
- [ ] Relevant manual gameplay/browser checks

## Risk and rollback
Potential regression, affected modules and safe reversal.

## Checklist
- [ ] No generated dependencies, build output, secrets or unrelated files.
- [ ] README/docs match implemented behavior.
- [ ] Tests cover changed behavior.
- [ ] Accessibility and reduced-motion impacts reviewed.
