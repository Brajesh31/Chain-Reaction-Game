# Contributing

Thanks for considering a contribution. This repository contains a React game prototype. Focus changes on a clear player or maintenance need, and keep the documentation aligned with actual behavior.

## Before you begin

1. Read the README and the relevant pages in `docs/`.
2. Search existing issues and pull requests for the same problem.
3. For a large feature or behavior change, open an issue first to agree on scope.
4. Do not include credentials, private data, generated builds, browser profiles, or local dependency folders.

## Local setup

Install dependencies from the root lockfile with `npm ci` or `npm install`, then run `npm start`. No API service or environment credentials are currently required. See [docs/installation.md](docs/installation.md).

## Change guidelines

- Create a focused branch from the current default branch.
- Follow the existing React component and styled-components patterns unless the change intentionally improves them.
- Keep game rules in sync across `Game.js`, the welcome-screen rule text, and the handbook. In particular, the current rules preview has a threshold mismatch documented in the README.
- Avoid adding networking or persistence dependencies without a documented design and an actual server implementation.
- Replace or extend the stale starter test when changing player-visible behavior. Describe what you actually ran; do not report the existing test as meaningful coverage without updating it.
- Review the full diff for generated assets, build output, secrets, and unrelated changes.

## Pull requests

Explain the user-visible behavior, why the change is needed, and how it was checked. Include screenshots or a short recording for visual changes when useful. For rule changes, state the expected behavior for corner, edge, and interior cells, turn order, and win conditions. Mention browser and viewport coverage for responsive changes.

Update the API or database docs only if those services are actually added; until then the application has neither. Follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Authorship and licensing

Submit only work you have the right to contribute, and identify reused code, images, fonts, or other assets. The repository metadata does not establish authorship for all existing source and assets. The new handbook's MIT grant is limited to documentation authored by Brajesh Kumar; see [LICENSE](LICENSE). Ask before copying material with unclear permissions.
