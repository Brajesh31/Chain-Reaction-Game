# API and Multiplayer Status

## HTTP API

There is no application HTTP API in the current repository. The React game runs entirely in the browser and does not call `fetch`, Axios, or an application endpoint.

## Socket.IO

Socket.IO packages appear in the root and nested server manifests, but source inspection found no server entry point, event handlers, or client socket connection. No socket event names, payloads, authentication rules, or reconnect behavior can be documented as existing behavior. The game currently supports local players sharing the same browser.

## Future API changes

If networking is added, document each endpoint or socket event with payload schema, authorization, validation, error behavior, versioning, reconnect semantics, and server-side move validation. The server must remain authoritative for online turns and win conditions; clients should not be trusted to submit final game outcomes.
