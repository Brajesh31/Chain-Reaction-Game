# 🚦 Release and Rollback

## Preparation
Confirm scope; install from lockfile; run tests/build; complete gameplay, responsive and accessibility QA; update docs/changelog; verify artifact; record SHA.

## Flow
```mermaid
flowchart TD
  A[Change merged] --> B[Install from lockfile]
  B --> C[Run tests]
  C --> D{Tests pass?}
  D -- No --> E[Block release]
  D -- Yes --> F[Build bundle]
  F --> G{Build succeeds?}
  G -- No --> E
  G -- Yes --> H[Deploy static artifact]
  H --> I[Smoke test game]
  I --> J{Healthy?}
  J -- No --> K[Restore prior artifact]
  J -- Yes --> L[Publish release notes]
```

Rollback triggers: app unavailable, gameplay/state corruption or critical accessibility regression. Record release/rollback SHAs, reason, time, verification and follow-up issue.
