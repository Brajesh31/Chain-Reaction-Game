# 🛡️ Secure Development Checklist

## Frontend
- [ ] No secrets/private keys in source or public environment variables.
- [ ] Dependencies install from committed lockfile.
- [ ] User text is rendered as text, not unsafe injected HTML.
- [ ] External navigation uses safe attributes where applicable.
- [ ] Production build excludes development diagnostics.

## Game logic
- [ ] Reject malformed coordinates and dimensions.
- [ ] Prevent input during cascade and after game completion.
- [ ] Bound supported board dimensions.
- [ ] Keep actions within configured players.

## Future server
- [ ] Validate every move authoritatively.
- [ ] Never trust client owner, turn or winner fields.
- [ ] Authenticate room membership and authorize actions.
- [ ] Rate-limit events and cap message sizes.
- [ ] Handle disconnect/reconnect and stale clients.
- [ ] Restrict CORS and allowed origins.
- [ ] Store secrets outside repository.
- [ ] Avoid logging tokens and unnecessary personal data.

Critical unresolved security findings block release. Record accepted risks with owner and review date.
