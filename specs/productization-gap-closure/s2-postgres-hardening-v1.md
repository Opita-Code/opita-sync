# S2 — PostgreSQL hardening v1

## Objetivo

Fijar el hardening mínimo necesario del modo PostgreSQL para soportar piloto de producto sin ambigüedad operacional.

## In scope

- persistencia canónica de artifacts críticos;
- roundtrip y correlación;
- simetría mínima memory/postgres.

## Out of scope

- tuning enterprise de performance;
- multiregión;
- object storage productivo.

## Requirements

### Requirement: Canonical persistence coverage
The PostgreSQL mode MUST persist compiled contracts, execution records, event records, approvals and critical surface artifacts required by the governed corridor.

#### Scenario: Critical artifact persistence
- GIVEN a full governed corridor run
- WHEN the system uses PostgreSQL mode
- THEN all critical artifacts SHALL be retrievable from canonical storage

### Requirement: Correlation roundtrip
The system MUST preserve `execution_id`, `contract_id`, `trace_id` and related corridor identifiers through create/read roundtrip.

#### Scenario: Roundtrip correlation
- GIVEN a persisted corridor artifact
- WHEN it is read back from PostgreSQL
- THEN correlation identifiers SHALL match the original canonical values

### Requirement: Minimum parity with memory mode
The observable behavior of PostgreSQL mode SHOULD match memory mode for critical pilot paths.

#### Scenario: Parity on critical path
- GIVEN the same corridor input is executed in both modes
- WHEN the result is compared
- THEN the externally visible governed behavior SHOULD remain equivalent

### Requirement: Persistence failures
Persistence failures MUST surface auditable errors and MUST NOT silently degrade the corridor.

#### Scenario: Write failure
- GIVEN PostgreSQL rejects a canonical write
- WHEN the corridor attempts persistence
- THEN the system SHALL return a traceable failure instead of pretending success

## Critical artifacts

- `compiled_contract`
- `execution_record`
- `event_record`
- `foundation_run`
- `approval_request`
- `intake_turn`
- `intake_session`
- `intent_candidate`
- `proposal_draft`
- `patchset_candidate`
- `preview_candidate`
- `simulation_result`
- `recovery_action_candidate`
- `maintenance_action_candidate`

## Acceptance criteria

- artifacts críticos definidos;
- correlación mínima cerrada;
- paridad mínima memory/postgres definida;
- fallos de persistencia con trazabilidad explícita.

## Dependencies

- `internal/platform/postgres/schema.sql`
- `docs/OPITA_SYNC_IMPLEMENTATION_READY.md`
