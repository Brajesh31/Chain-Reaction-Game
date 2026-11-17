# 🕹️ Interaction Patterns

## Cell selection
A cell action must provide a clear accepted/rejected result. An invalid opponent-cell selection must not partially update ownership or orb count.

## Turn feedback
The active player and turn transition must be visible and perceivable to assistive technology. Color alone is insufficient.

## Cascade feedback
- Prevent duplicate move input while resolving a cascade.
- Keep the active player identifiable.
- Do not hide the settled board behind indefinite animation.
- Provide reduced-motion behavior that preserves the information conveyed by motion.

## Setup controls
Player count and board dimensions should visibly expose selected options. Controls need semantic names, keyboard focus and adequate touch areas.

## Reset actions
Clearly label new-match/reset actions so players do not accidentally discard an in-progress match.
