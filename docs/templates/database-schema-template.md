# 🗃️ Database Schema Template

Use only when a real database is selected. This template does not define a schema for the current in-memory game.

## Database context
Engine/version, environment, owner, schema version, migration tool, backup owner.

## Entity inventory
| Entity/table | Purpose | Sensitivity | Retention |
|---|---|---|---|

## Table definition
| Column | Type | Nullable | Default | Key/constraint | Description |
|---|---|---|---|---|---|

## Relationships
Document keys, cardinality and delete behavior. Include Mermaid ER diagram.

## Indexes and query patterns
List important indexes and justify them.

## Data lifecycle and security
Document creation, update, archive, delete, backup expiry, roles, encryption and audit.

## Migration and evidence
Include forward migration, rollback feasibility, integrity checks and restore test.
