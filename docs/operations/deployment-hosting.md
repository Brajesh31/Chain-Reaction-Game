# 🌍 Deployment and Hosting

## Artifact
The React app builds to build/ through npm run build. Deploy the contents of that directory, not source code, caches or node_modules.

## Static hosting requirements
- HTTPS.
- Correct asset base path.
- SPA history fallback to index.html.
- Cache fingerprinted assets appropriately while allowing HTML to refresh.
- Error handling that does not expose server internals.

## Smoke checks
1. Open the root URL and refresh.
2. Start a match and select a legal cell.
3. Trigger a known cascade where a fixture is available.
4. Change theme.
5. Test narrow and wide viewports.
6. Confirm no missing assets or console errors.

The current product is local-only. Do not provision a database or expose an API unless a real backend is implemented and documented.
