# S0 — Product scope and first vertical v1

## Objetivo

Definir el alcance exacto de Opita Sync v1 como producto sobre OSF y fijar la primera vertical sin reabrir arquitectura base.

## In scope

- gobernanza de cambios operativos del tenant;
- intake, proposal, preview, compile, approval, inspection y recovery;
- tres roles iniciales: admin, operator, approver;
- catálogo inicial de capabilities para el corredor gobernado.

## Out of scope

- distribution layer;
- monetización;
- UI final enterprise;
- breadth de conectores externos avanzados;
- rollout comercial multi-tenant masivo.

## Requirements

### Requirement: First vertical scope
The product MUST start with `tenant governed operational changes` as the first vertical.

#### Scenario: Happy path vertical alignment
- GIVEN the current slice already supports intake, proposal, preview, compile, approvals, inspection and recovery
- WHEN v1 product scope is selected
- THEN the chosen vertical SHALL map directly to that corridor

### Requirement: Chat boundary
The system MUST NOT allow direct apply from free chat.

#### Scenario: Free chat stays governed
- GIVEN a user enters free-form text
- WHEN the intake surface interprets it
- THEN the output SHALL be a governed artifact or a clarification request

### Requirement: Initial roles
The product MUST support `admin tenant`, `operator` and `approver` as distinct roles.

#### Scenario: Role separation
- GIVEN a blocked execution requiring approval
- WHEN an operator inspects the run
- THEN the operator SHALL NOT be treated as the approver by default

### Requirement: Initial capability catalog
The product SHALL define an initial catalog of tenant-governed capabilities mapped to canonical result types.

#### Scenario: Capability mapping
- GIVEN the initial v1 catalog
- WHEN a capability is reviewed
- THEN it SHALL declare result type, risk, sensitivity and approval expectation

## Initial capability set

- `tenant.intake.capture_intent`
- `tenant.intake.shape_intent`
- `tenant.proposal.create_change_draft`
- `tenant.patchset.prepare_candidate`
- `tenant.preview.run_governance_preview`
- `tenant.execution.compile_governed_intent`
- `tenant.execution.inspect_run`
- `tenant.approval.release_blocked_execution`
- `tenant.recovery.resume_after_approval`
- `tenant.recovery.request_manual_compensation`
- `tenant.artifacts.upload_evidence`
- `tenant.retrieval.search_evidence`
- `tenant.maintenance.request_human_review`

## Acceptance criteria

- la vertical inicial queda cerrada y única;
- los roles quedan separados por responsabilidad;
- el catálogo inicial existe y mapea a tipos canónicos;
- el boundary `chat -> governed artifact` queda explícito.

## Dependencies

- `source-of-truth/catalog-of-capabilities.md`
- `source-of-truth/intent-contract.md`
- `docs/OPITA_SYNC_IMPLEMENTATION_READY.md`
