# S5 — Recovery and compensation minimum v1

## Objetivo

Definir el subset mínimo de recovery y compensation necesario para piloto sin falsear estados operativos.

## In scope

- `resume_after_approval`
- `acknowledge_unknown_outcome`
- `request_manual_compensation`

## Out of scope

- rollback automático generalizado;
- orquestación avanzada multi-step de compensation;
- recovery técnico profundo de runtime durable completo.

## Requirements

### Requirement: Supported minimum actions
The system MUST support `resume_after_approval`, `acknowledge_unknown_outcome` and `request_manual_compensation` as the minimum executable recovery actions for v1.

#### Scenario: Resume after approval
- GIVEN an execution is awaiting approval and has a valid approval request
- WHEN the operator triggers `resume_after_approval`
- THEN the execution SHALL transition to released state

### Requirement: Unknown outcome integrity
The system MUST preserve `unknown_outcome` as an explicit state and MUST NOT silently coerce it into success or failure.

#### Scenario: Unknown stays explicit
- GIVEN runtime certainty is lost
- WHEN the operator acknowledges the condition
- THEN the system SHALL keep the execution in explicit `unknown_outcome` state

### Requirement: Manual compensation semantics
Manual compensation SHALL remain distinct from automatic rollback.

#### Scenario: Compensation request
- GIVEN an execution failed or is unknown
- WHEN `request_manual_compensation` is executed
- THEN the system SHALL mark compensation pending instead of pretending rollback happened

### Requirement: Recovery evidence
Every recovery action MUST leave auditable evidence with actor, action, runtime state and reason codes.

#### Scenario: Recovery audit trail
- GIVEN a recovery candidate is executed
- WHEN inspection reads the case
- THEN the related recovery evidence SHALL be visible in canonical records or events

## Minimum evidence before recovery

- `execution_id`
- `current_runtime_state`
- `requested_by_subject_id`
- `requested_action`
- `approval_request_id` when applicable
- `reason_codes`

## Acceptance criteria

- subset mínimo soportado definido;
- `unknown_outcome` protegido de falsos cierres;
- compensation separada de rollback;
- evidencia mínima previa y posterior definida.

## Dependencies

- `internal/app/operatorsurface/http.go`
- `internal/engine/inspection/types.go`
- `internal/engine/runtime/types.go`
