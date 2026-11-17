# 🔍 Code Review Checklist

## Correctness
- [ ] Change solves stated problem.
- [ ] Edge/failure cases handled.
- [ ] Game rules are deterministic and source board is not mutated.
- [ ] Timers/async work are cleaned or invalidated.

## Design/UI
- [ ] Components have clear responsibilities.
- [ ] No speculative abstraction or unused dependency.
- [ ] Accessible names, keyboard focus and reduced motion remain correct.
- [ ] Both themes and responsive states considered.

## Security/operations
- [ ] No secrets or unsafe data handling.
- [ ] Workflow permissions remain minimal.
- [ ] Errors do not leak sensitive information.
- [ ] Docs, tests and rollback notes updated.

Record tests/build, CI run, visual evidence if relevant, reviewer, commit and residual risks.
