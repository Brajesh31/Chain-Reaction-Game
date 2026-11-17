# ↩️ Rollback Checklist

Record incident, player impact, detection time and decision owner.

- [ ] Identify previous known-good commit and artifact.
- [ ] Stop promotion of the faulty artifact.
- [ ] Restore previous static build.
- [ ] Preserve logs/artifact for investigation.
- [ ] Verify title, setup and game load.
- [ ] Verify a legal move and a cascade.
- [ ] Verify assets and HTTPS.
- [ ] Confirm deployed release identifier.

The current game has no server-side match database. If persistence is added, include schema compatibility and backup restore steps. Create an incident report and corrective follow-up.
