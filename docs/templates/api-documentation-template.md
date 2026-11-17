# 🔌 API Documentation Template

Use only when an actual API or event transport exists. Do not populate with invented endpoints.

## Service identity
Service, owner, base URL/transport, version, environment and status.

## Authentication and authorization
Describe identity, session/token requirements, room ownership and denied actions.

## Endpoint/event inventory
| Name | Method/direction | Auth | Purpose | Status |
|---|---|---|---|---|

## Contract details
For every operation include path/event, headers, schemas, validation limits, example request/response, success status, error model, idempotency, concurrency and rate limits.

## Sequence diagram
Add Mermaid sequence matching implementation.

## Compatibility and security
Record versioning, breaking changes, data sensitivity, logging exclusions, retention and abuse controls.

## Verification
- [ ] Contract tests
- [ ] Authentication/authorization tests
- [ ] Error-path and rate-limit tests
- [ ] Documentation examples checked against the running service

Owner, reviewer, commit SHA, date and unresolved questions.
