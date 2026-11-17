# Changelog

This changelog records repository documentation, engineering and tooling improvements from the current maintenance pass. Earlier gameplay history remains in Git.

## Unreleased

### Added
- Product, gameplay, architecture, design, quality, security and operations handbook pages.
- Reusable review templates for ADRs, features, bugs, tests, gameplay rules, architecture, accessibility, security, dependencies, risks, playtests, incidents and releases.
- Mermaid architecture/state/sequence diagrams and repository-owned SVG illustrations.
- GitHub issue forms, pull-request template, CI, documentation validation, CodeQL, dependency review, Dependabot and tagged-release workflow.
- Scripts to validate local Markdown links, tracked repository hygiene and npm audit summaries.
- A scheduled dependency-audit workflow that stores machine-readable advisories and a Markdown summary.
- Accessible grid controls with named cells, ownership and orb counts, one-tab-stop keyboard navigation and live status announcements.
- Component tests for cell accessibility and keyboard focus navigation.

### Changed
- Extracted pure game-rule helpers and deterministic move/cascade resolution into `src/game/rules.js`.
- Replaced permanent cascade-coordinate suppression with a pending queue, allowing cells to be processed again after later hits.
- Added a burst safety limit that rejects pathological non-terminating cascades without committing partial board state.
- Updated turn progression to give each configured player an opening move, skip eliminated players and declare a winner only after all players have entered.
- Corrected setup preview to use the same critical-mass helper as live gameplay.
- Added reduced-motion support and cleaned up burst-animation timers.
- Updated architecture diagrams to show the actual shared rules module and keyboard grid navigation.
- Removed tracked `server/node_modules` artifacts. Server manifests remain, but no server application source has been added.
- Fixed styled-only setup props so they are not forwarded as invalid DOM attributes.
- Corrected the tagged-release workflow concurrency expression and grid row structure for assistive technology.

### Verification
- Frontend CI passed, including Jest tests and production build, on commit `034abb658f36790ffafa9855b8f6516c09883841`.
- Documentation/repository validation passed on the same commit.
- Grid semantic-row refinement is being validated in the next CI run.
