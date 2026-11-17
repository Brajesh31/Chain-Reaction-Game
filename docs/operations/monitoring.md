# 📈 Monitoring and Observability

## Current capabilities
The app has an optional browser-side performance monitor. No hosted telemetry, backend monitoring or persistent analytics service was identified.

## Manual production signals
- App loads successfully.
- Static assets return successfully.
- No uncaught browser exceptions during core flow.
- Legal moves update the board.
- Cascades complete without freezing.
- Theme and layout controls remain responsive.

## Future telemetry safeguards
Define the product question, event schema, opt-out expectations, retention and privacy review before adding a provider. Do not collect player identity or behavior data by default.

## Incident evidence
Record app version/commit, browser, device, viewport, board dimensions, player count, move sequence and console error. Redact personal and secret data.
