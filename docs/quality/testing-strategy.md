# 🧪 Testing Strategy

## Current automated coverage
Jest and React Testing Library are used by the frontend CI workflow. `src/game/rules.test.js` validates pure rule helpers and deterministic board transitions. `src/App.test.js` exercises the title screen, setup choices and rules panel.

## Test layers

### Pure engine unit tests
Cover neighbor enumeration, critical mass, move legality, immutable updates, corner/edge/interior bursts, multi-wave cascade, re-queued coordinates, cycle-limit rollback, winner participation and turn progression.

### Component tests
Verify accessible setup controls, selected player/grid settings, visible active turn, valid/invalid cell interactions, reset, theme controls, error feedback and status announcements.

### Integration tests
Play complete two-, three- and four-player sequences. Compare the settled board, participating-player list, active player, terminal state and winner against deterministic fixtures.

### Manual browser QA
Test every offered grid size and player count, long cascades, reset during/after play, theme switching, keyboard focus, reduced motion, screen reader feedback and narrow viewports.

## Local commands
```bash
npm ci
npm test -- --watchAll=false --runInBand
npm run build
```

## Quality gates
- Every rules change has deterministic tests.
- UI changes have component or manual verification.
- The production build completes.
- No secrets or generated dependencies are introduced.
- Documentation describes actual behavior, including known limits.
