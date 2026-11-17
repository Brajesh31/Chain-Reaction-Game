# 🛠️ Development Standards

## Before coding
Read affected components and callers, identify state ownership and side effects, separate rules from presentation, and inspect existing tests/issues.

## React
- Keep components focused on presentation and interaction.
- Use stable keys for collections.
- Do not mutate nested board arrays/cells in place.
- Guard terminal and animation states against duplicate actions.
- Clean up subscriptions, timers and effects.
- Avoid storing derived values unnecessarily.

## Game rules
- Prefer pure functions for validation, critical mass, bursts and winner evaluation.
- Make invalid actions explicit and non-mutating.
- Resolve cascades deterministically.
- Test corners, edges, interiors, revisited coordinates and multi-wave cascades.
- Do not let help/preview copy contradict engine behavior.

## Accessibility
Use semantic controls, visible focus, non-color player identity and reduced-motion support. Test both themes and narrow viewports.

## Quality gates
Run `npm ci`, `npm test -- --watchAll=false` and `npm run build` when supported. Include evidence in PRs. Never claim a test is green without checking CI.
