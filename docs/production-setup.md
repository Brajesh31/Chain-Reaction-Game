# 🚀 Production Setup

The production frontend is generated into build/ by npm run build. Publish the contents of build/ to a static host.

## Requirements
- Serve index.html and compiled assets.
- Enable HTTPS.
- Serve correct MIME types.
- Cache hashed assets long-term but do not cache index.html indefinitely.
- Configure SPA fallback only if client routes are introduced.
- Never upload .env files or expose secrets in the bundle.
- Verify the deployed commit and the title/setup/game journey.

No API process, database, socket server or background worker is required for the current local game.
