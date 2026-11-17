# 🔍 Manual QA Checklist

## Setup
- [ ] Welcome screen loads without console errors.
- [ ] All offered grid sizes can be selected.
- [ ] 2, 3 and 4 player options work.
- [ ] Started board matches selected configuration.

## Rules
- [ ] Empty-cell move succeeds.
- [ ] Own-cell move succeeds.
- [ ] Opponent-cell move is rejected.
- [ ] Corner threshold is 2.
- [ ] Edge threshold is 3.
- [ ] Interior threshold is 4.
- [ ] Only orthogonal cells receive orbs.
- [ ] Captured cells change owner.
- [ ] Cascade settles before turn progression.
- [ ] Winner behavior is correct.

## Presentation and controls
- [ ] Reset creates a fresh match.
- [ ] Theme control works.
- [ ] Board maximize control works.
- [ ] Performance overlay does not block play.
- [ ] Animation does not obscure final board state.
- [ ] Desktop and mobile layouts work.

## Accessibility
- [ ] Interactive controls have accessible names.
- [ ] Keyboard focus is visible and logical.
- [ ] Turn changes are announced.
- [ ] Color is not the only ownership indicator.
- [ ] Reduced-motion preference is respected.

## Release
- [ ] Clean npm install succeeds.
- [ ] Tests assert game behavior.
- [ ] Production build succeeds.
- [ ] HTTPS deployment verified.
