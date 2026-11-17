# 🌐 Deployment Checklist

## Build
- [ ] Approved commit checked out.
- [ ] npm ci completed.
- [ ] Jest suite passed.
- [ ] npm run build completed.
- [ ] Artifact reviewed.

## Hosting
- [ ] Static build contents uploaded.
- [ ] HTTPS enabled.
- [ ] MIME types correct.
- [ ] Cache headers configured.
- [ ] SPA fallback enabled only when required.
- [ ] No .env or secret copied to host.

## Smoke test
- [ ] Title and setup load.
- [ ] Match starts with selected settings.
- [ ] Legal and illegal moves work.
- [ ] Cascade settles and locks input.
- [ ] Reset/theme work.
- [ ] Keyboard and mobile viewport checked.

Record provider, environment, deployment ID, commit, operator and rollback target.
