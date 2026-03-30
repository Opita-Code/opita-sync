# S4 — Evidence trail hardening v1

## Objetivo

Fijar el evidence trail mínimo y reconstruible del corredor gobernado de producto.

## In scope

- cadena canónica de correlación;
- taxonomía mínima de eventos;
- autoridad de evidencia.

## Out of scope

- observabilidad enterprise completa;
- analytics avanzadas;
- retrieval como fuente de verdad.

## Requirements

### Requirement: Canonical correlation chain
The governed corridor MUST correlate intake, proposal, preview, contract, execution, approval and recovery artifacts through canonical identifiers.

#### Scenario: End-to-end reconstruction
- GIVEN a governed corridor run completed or blocked
- WHEN the case is inspected
- THEN the system SHALL reconstruct the case through canonical correlated identifiers

### Requirement: Append-only event authority
The event log MUST remain append-only and SHALL serve as canonical evidence together with durable records.

#### Scenario: Evidence source authority
- GIVEN derived telemetry exists
- WHEN the case evidence is evaluated
- THEN derived telemetry SHALL NOT replace canonical records or append-only events

### Requirement: Minimum event taxonomy
The system MUST emit the minimum event set required to explain the corridor.

#### Scenario: Approval corridor events
- GIVEN an execution requires approval
- WHEN it is created and later released
- THEN the event trail SHALL include creation, policy decision, approval awaiting and execution released evidence

## Canonical identifier chain

- `conversation_turn_id`
- `intake_session_id`
- `intent_candidate_id`
- `proposal_draft_id`
- `patchset_candidate_id`
- `preview_candidate_id`
- `simulation_result_id`
- `contract_id`
- `contract_fingerprint`
- `execution_id`
- `trace_id`
- `policy_decision_id`
- `approval_request_id`
- `recovery_action_candidate_id`

## Minimum event set

- `intake.turn_recorded`
- `proposal.created`
- `patchset.created`
- `preview.created`
- `preview.simulation_recorded`
- `contract.compilation_completed`
- `policy.decision_recorded`
- `execution.created`
- `approval.awaiting`
- `execution.released`
- `execution.unknown_outcome`
- `compensation.requested`

## Acceptance criteria

- cadena canónica cerrada;
- eventos mínimos definidos;
- autoridad de evidencia explícita;
- reconstrucción end-to-end definida como criterio obligatorio.

## Dependencies

- `internal/e2e/slice_test.go`
- `internal/engine/events/types.go`
