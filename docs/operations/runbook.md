# 🧯 Operations Runbook

## Application type
Static React single-page application built with Create React App. Production output is `build/`. No production API implementation was identified.

## Local startup
```bash
npm ci
npm start
```
The development server normally uses port 3000.

## Production build
```bash
npm ci
npm run build
```
Publish `build/` to a static host with SPA fallback to `index.html`.

## Smoke checks
Load root URL, start a local match, make a legal move, trigger a known cascade, switch theme and inspect console/network for errors.

## Incidents
| Symptom | Checks | Response |
|---|---|---|
| Blank page | Console, assets, build output | Restore known-good static build |
| Refresh fails | Host rewrite | Configure SPA fallback |
| Build fails | Node/npm and lockfile | Reproduce with clean install |
| Cascade freezes | Fixture, state mutation, input guard | Capture reproduction and block release |
| Browser styling differs | CSS support/warnings | Verify declared browser matrix |

Rollback by redeploying previous verified artifact, not by force-pushing history.
