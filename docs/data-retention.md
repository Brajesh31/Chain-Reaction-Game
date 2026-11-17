# 🗄️ Data Retention

Board, current player and match progress are held in React memory. They are lost on page refresh or session end. The app does not create a server-side match or account record.

Hosting-provider access-log and CDN retention are outside this repository and must be checked with the deployment provider before making broader privacy claims.

Any future localStorage, IndexedDB, database or analytics feature must document purpose, fields, retention, deletion trigger, backup expiry and owner before release.
