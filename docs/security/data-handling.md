# 🔐 Data Handling and Privacy

## Current data flow
The inspected app supports local hot-seat play with React component state. No account service, remote match API, database or analytics backend was found in the repository inspection.

| Data | Current location | Retention |
|---|---|---|
| Board and turn state | React/browser memory | Lost on reload/session end |
| Theme/UI state | React state | Durable retention not confirmed |
| Environment configuration | `.env` ignored; app should not require secrets | Never commit values |

## Privacy requirements
- Do not introduce player names, contacts or analytics without a clear need.
- Never put credentials in React source or public build-time variables.
- Explain future browser storage and provide a reset mechanism.
- Treat future online identifiers and IP addresses as personal data.
- Keep privacy claims aligned with observed network behavior.

## Future online mode
Before release, document collection purposes, retention, deletion paths, processors and controls. This document is not a claim of legal compliance.
