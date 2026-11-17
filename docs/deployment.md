# 🚀 Deployment

## Current model
The app builds to static frontend assets. No server process or database is required for local play.

## Build
```bash
npm ci
npm run build
```
Publish the contents of `build/` through a static hosting provider.

## Host requirements
- Serve `index.html` at the root.
- Serve assets with correct MIME types.
- Enable HTTPS.
- Configure SPA fallback if client routes are introduced later.
- Do not cache `index.html` indefinitely.
- Never expose environment secrets in browser JavaScript.

## Release checklist
- [ ] Clean install from lockfile
- [ ] Production build succeeds
- [ ] Meaningful automated tests pass
- [ ] Manually test 2/3/4 players
- [ ] Test corner, edge and interior bursts
- [ ] Test a multi-cell cascade
- [ ] Test reset and theme controls
- [ ] Check keyboard, reduced motion and narrow viewport
- [ ] Check console/network errors
- [ ] Verify HTTPS deployment

## Future backend
Do not deploy nested `server` package as an online service. It has no application entry point, start script, health endpoint, socket protocol or security design.
