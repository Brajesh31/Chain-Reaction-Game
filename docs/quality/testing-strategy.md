# 🧪 Testing Strategy

## Current status
Jest and React Testing Library are listed as dependencies. `src/App.test.js` remains the default CRA example and expects the starter “learn react” link. This does not test game rules. Do not treat it as meaningful coverage.

## Test layers

### Unit tests
Once rules are extracted from React components, test:
- critical mass for corner, edge and interior coordinates;
- orthogonal neighbor enumeration;
- legal/illegal move validation;
- orb placement and cell ownership;
- single-cell explosion;
- multi-cell cascade;
- captured-cell ownership;
- queue processing and termination;
- turn progression;
- player elimination and winner detection;
- reset initialization.

### Component tests
Verify setup selection, match start, visible active turn, valid/invalid cell interactions, reset, theme controls and accessible labels/status announcements.

### Integration tests
Play complete turns over multiple cells and compare the settled board and active player with an expected state fixture.

### Manual browser QA
Test all player counts, board sizes, long cascades, repeated reset, theme switching, keyboard focus, reduced motion and narrow viewports.

## Command
```bash
npm test -- --watchAll=false
```
The current starter test may fail because it expects obsolete UI. Replace it before using the command as a quality gate.

## Quality gates
- Every rules change has deterministic tests.
- UI changes have component or manual verification.
- Production build completes.
- No secrets or dependency artifacts are introduced.
- Docs reflect shipped behavior.
