# 🧿 Data Protection

## Current data boundary

The checked-in application keeps match state in React memory on the local browser. No account service, database, remote game API, cloud save or analytics backend is implemented. The current application therefore does not process a central player profile or remote match record.

The browser session is controlled by the local device user. Do not describe in-memory state as encrypted, tamper-proof or hidden from the device owner.

## Current handling rules

- Do not collect player names or contact details unless a future feature has a defined need.
- Do not embed secrets in React source or REACT_APP_ variables.
- Render user-controlled content as text, not injected HTML.
- Keep local match state ephemeral unless persistence becomes an explicit product requirement.
- Treat browser extensions, device malware and hosting-provider logs as outside this application's code boundary.
- Keep the privacy notice aligned with the actual network and storage behavior.

## Future online or persistent mode

Before introducing accounts, analytics, room hosting or match persistence, document:
1. Exact data fields and purpose.
2. Which party controls each data store.
3. Transport and storage protection.
4. Access and authorization rules.
5. Retention, deletion and backup expiry.
6. Logging exclusions and incident handling.
7. User notice and applicable consent requirements.

## Verification

- [x] Current repository source reviewed for API/database/account implementation.
- [x] No application backend or persistent match store identified.
- [ ] Re-review browser network/storage behavior after any integration is introduced.
- [ ] Review deployment-provider logs and privacy terms before making service-wide privacy claims.

See [data handling](data-handling.md), [retention](../data-retention.md), [deletion](../data-deletion.md) and root [PRIVACY.md](../../PRIVACY.md).
