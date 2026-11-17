# 🌐 Hosting Guide

The current application is a static React build. A static host that serves HTML, JavaScript, CSS, SVG and image assets is sufficient.

## Deployment checklist
1. Run npm ci.
2. Run Jest.
3. Run npm run build.
4. Upload build/ contents, not node_modules.
5. Enable HTTPS.
6. Check title, setup and a local match on the production URL.
7. Verify MIME types and asset paths.
8. Confirm the deployed commit after cache purge.

No server process or database configuration is part of this repository.
