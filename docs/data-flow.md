# 🔀 Data Flow

~~~mermaid
flowchart LR
 U[Player input] --> C[Cell button]
 C --> B[Board callback]
 B --> G[Game handler]
 G --> R[Pure rules module]
 R -->|Result or rejection| G
 G --> S[React match state]
 S --> V[Board and status render]
 V --> U
~~~

| Data | Producer | Consumer | Persistence |
|---|---|---|---|
| Grid dimensions | WelcomePage | App and Game | In-memory |
| Player count | WelcomePage | App and Game | In-memory |
| Cell owner/count | Rules transition | Game, Board and Cell | In-memory |
| Current player | Turn helper | Status and Board | In-memory |
| Winner | Winner helper | Game status | In-memory |
| Theme | App | Screens/components | In-memory |
| Performance metrics | Browser runtime | PerformanceMonitor | Optional local display |

No external service, database or analytics endpoint receives this data in the current application.
