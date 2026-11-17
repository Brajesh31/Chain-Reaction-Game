# 🧭 Navigation Structure

The application is a single-page experience controlled by React state rather than a URL router.

~~~mermaid
flowchart TD
 A[Initial App state] --> B[FloatingBubblesPage]
 B -->|Start| C[WelcomePage setup]
 C -->|Start match with settings| D[Game]
 D -->|Reset| D
 D -->|Theme toggle| D
~~~

The title screen introduces the game. Setup selects player count and grid dimensions. Game exposes board interaction, active-player status, reset/theme controls and winner feedback.

There are no application URL routes such as /game or /settings. Do not document paths as working routes unless a router is introduced and tested.
