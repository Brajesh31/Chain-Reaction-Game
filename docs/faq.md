# ❓ Frequently Asked Questions

**Is this online multiplayer?** No. It is local hot-seat play in one browser.

**How many players?** The setup supports two, three or four local players.

**Does it save a match?** No. React memory state is lost on page reload.

**Why does the preview show different explosion thresholds?** The welcome preview is inconsistent. Engine thresholds are 2/3/4 for corner/edge/interior.

**Do diagonal cells receive orbs?** No, only orthogonal neighbors.

**Is there an API or database?** No application API or database is implemented.

**Why are Express and Socket.IO dependencies present?** They appear in manifests, but there is no server source or connected client.

**Why does the test expect “learn react”?** It is a stale default Create React App sample test and should be replaced.

**Can I deploy to static hosting?** Yes. Run `npm run build` and deploy `build/`.

**Where should bugs go?** Use the GitHub issue template with reproducible steps.
