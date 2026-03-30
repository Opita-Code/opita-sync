# S3 — Approvals and release hardening v1

## Objetivo

Fijar el hardening mínimo del subsistema de approvals para que release, reject y escalate sean auditables y seguros para piloto.

## In scope

- lifecycle mínimo de approval;
- identidad del actor decisor;
- invalidación por fingerprint;
- surface mínima de decisión.

## Out of scope

- user tasks enterprise avanzadas;
- SLA complejos multi-etapa;
- bandejas humanas completas.

## Requirements

### Requirement: Approval lifecycle
The system MUST support at least `awaiting_approval`, `released`, `rejected` and `escalated` as explicit approval states.

#### Scenario: Rejected approval
- GIVEN an approval request is awaiting decision
- WHEN the approver rejects it
- THEN the approval SHALL transition to `rejected`

### Requirement: Decision identity
Approval decisions MUST record the deciding subject identity and SHOULD record comment or reason context.

#### Scenario: Auditable release
- GIVEN an approval is released
- WHEN the release is stored
- THEN the decision SHALL retain who decided it and why

### Requirement: Fingerprint safety
Released approvals MUST validate against the approved contract fingerprint.

#### Scenario: Material change invalidates approval
- GIVEN an approval was emitted for one fingerprint
- WHEN the contract changes materially before release or execution
- THEN the previous approval MUST NOT authorize the new contract

### Requirement: Surface coverage
The approval surface SHALL expose release, reject and escalate as governed decisions.

#### Scenario: Surface decision options
- GIVEN an approver reviews a blocked execution
- WHEN the surface presents available decisions
- THEN it SHALL include release, reject or escalate according to policy

## Minimum decision fields

- `decided_by_subject_id`
- `decision_comment`
- `decision_reason_codes`
- `released_at` or `rejected_at`
- `source_contract_fingerprint`

## Acceptance criteria

- lifecycle mínimo definido;
- actor decisor explícito;
- invalidación por fingerprint cerrada;
- release/reject/escalate definidos como decisiones de surface.

## Dependencies

- `specs/phase-a/a4-approvals-v1.md`
- `internal/engine/approvals/types.go`
