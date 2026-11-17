# 🔄 Application Lifecycle

~~~mermaid
flowchart TD
 A[Browser loads public/index.html] --> B[src/index.js]
 B --> C[React root mounts App]
 C --> D{Screen state}
 D -->|Title| E[FloatingBubblesPage]
 D -->|Setup| F[WelcomePage]
 D -->|Playing| G[Game]
 G --> H[Board and Cell render]
 H --> I[Player action]
 I --> J[src/game/rules.js]
 J --> K{Valid result?}
 K -->|No| L[Feedback, no state commit]
 K -->|Yes| M[Preview and cascade presentation]
 M --> N[Commit settled state]
 N --> O[Winner check and next turn]
 O --> H
~~~

The title screen transitions to setup. Setup passes selected grid dimensions and player count to the match. Game owns board, current player, participation history, terminal result and animation lock. Reset cancels pending presentation and reinitializes state. Large-grid initialization is batched and guarded so stale asynchronous work cannot overwrite a newer reset.

The application does not persist or restore a match from browser storage or a remote service.
