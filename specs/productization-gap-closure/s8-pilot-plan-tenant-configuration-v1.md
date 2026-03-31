# S8 — Pilot plan for tenant configuration governance v1

## Objetivo

Definir el piloto inicial de Opita Sync sobre 1–2 tenants para validar el primer dominio real de producto.

## In scope

- tenants piloto iniciales;
- escenarios mínimos del piloto;
- métricas de tiempo, governance y operabilidad;
- criterio explícito de éxito o fracaso.

## Out of scope

- adopción masiva;
- rollout comercial amplio;
- automatización enterprise multi-dominio.

## Requirements

### Requirement: Pilot tenants
The pilot SHALL define at least one low-friction tenant and one governance-sensitive tenant.

#### Scenario: Two-tenant pilot shape
- GIVEN the first domain is tenant configuration governance
- WHEN the pilot is prepared
- THEN it SHALL include one tenant focused on happy-path operations and one tenant focused on governance-sensitive changes

### Requirement: Pilot scenarios
The pilot MUST cover capability enablement, connector enablement, governance baseline changes and recovery.

#### Scenario: Coverage of domain behaviors
- GIVEN the pilot scenario suite
- WHEN it is reviewed
- THEN it SHALL exercise both happy-path and blocked/recovery flows of the chosen domain

### Requirement: Pilot metrics
The pilot MUST measure timing, governance gates, outcomes and end-to-end reconstructability.

#### Scenario: Pilot evidence
- GIVEN a pilot scenario completes
- WHEN results are analyzed
- THEN the pilot SHALL provide metrics for proposal time, approval path, execution outcome and evidence trail completeness

### Requirement: Explicit success and failure criteria
The pilot MUST define concrete conditions for success and failure before execution starts.

#### Scenario: Pilot decision gate
- GIVEN the pilot ends
- WHEN results are reviewed
- THEN continuation or rollback SHALL be decided against explicit criteria rather than intuition

## Pilot tenants

- `tenant-alpha-ops`
- `tenant-beta-governance`

## Minimal scenario suite

- enable visible capability
- enable governed execution path
- enable connector
- change classification baseline
- recover a blocked or uncertain tenant change

## Success criteria

- ambos tenants quedan `operable`;
- al menos 4 de 5 escenarios recorren el corredor completo;
- los casos bloqueados muestran approvals explícitas;
- recovery deja audit trail y outcome explícito;
- al menos 80% de los casos son reconstruibles end-to-end;
- no existe bypass directo desde chat a provider.

## Failure criteria

- tenant `operable` sin mínimo duro real;
- cambios aplicados sin evidence trail suficiente;
- approvals/release bypasseables;
- recovery fuera del corredor gobernado;
- contradicción material no explicada entre preview y ejecución.

## Dependencies

- `source-of-truth/pilot-plan-tenant-configuration-governance.md`
- `source-of-truth/first-domain-tenant-configuration-governance.md`
- `specs/productization-gap-closure/s7-first-domain-tenant-configuration-governance-v1.md`
