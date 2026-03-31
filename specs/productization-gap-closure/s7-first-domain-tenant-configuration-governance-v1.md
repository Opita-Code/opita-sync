# S7 — First domain: tenant configuration governance v1

## Objetivo

Definir el primer dominio real de producto para Opita Sync v1 sobre el corredor ya implementado.

## In scope

- cambios de configuración operativa del tenant;
- catálogo visible del tenant;
- conectores habilitados del tenant;
- baselines de policy / approval / classification del tenant.

## Out of scope

- procesos externos enterprise complejos;
- marketplace o distribution layer;
- automatización multi-dominio no alineada con tenant operable.

## Requirements

### Requirement: First domain selection
The first product domain MUST be `tenant configuration governance`.

#### Scenario: Domain fits current corridor
- GIVEN Opita Sync already supports tenant bootstrap, proposal, preview, approvals, inspection and recovery
- WHEN the first domain is chosen
- THEN it SHALL map directly to tenant configuration changes without inventing a parallel product

### Requirement: Domain use cases
The domain SHALL support enabling capabilities, enabling connectors and changing governance baselines for a tenant.

#### Scenario: Capability enablement
- GIVEN a tenant requests a new visible capability
- WHEN the domain flow runs
- THEN the request SHALL produce proposal, preview, governance and inspection artifacts

### Requirement: Domain governance
Changes affecting execution paths, connector activation or sensitive governance baselines MUST require explicit approval.

#### Scenario: Sensitive tenant change
- GIVEN a tenant change enables execution or modifies classification baseline
- WHEN the preview is evaluated
- THEN the flow SHALL require approval before promotion

### Requirement: Domain outcomes
The domain SHALL define explicit outcomes for applied, blocked, rejected, compensation_pending and unknown_outcome tenant changes.

#### Scenario: Recovery-aware tenant change
- GIVEN a tenant change cannot complete cleanly
- WHEN the operator inspects the case
- THEN the outcome SHALL remain explicit and recoverable through the governed corridor

## Initial connectors

- `connector.default`
- `connector.plan.default`
- `connector.execution.default`

## Initial domain capabilities

- `tenant.intake.capture_intent`
- `tenant.proposal.create_change_draft`
- `tenant.preview.run_governance_preview`
- `tenant.execution.compile_governed_intent`
- `tenant.execution.inspect_run`
- `tenant.approval.release_blocked_execution`
- `tenant.recovery.resume_after_approval`
- `tenant.recovery.request_manual_compensation`

## Minimal scenario suite

- enable inspection capability for a tenant
- enable governed execution capability for a tenant
- enable a connector for a tenant
- change classification baseline with preview warning
- recover a blocked tenant configuration change

## Acceptance criteria

- el dominio tiene caso de uso claro y repetible;
- el dominio cabe dentro de capabilities y governance existentes;
- el dominio define conectores, approvals y outcomes requeridos;
- existe suite mínima de escenarios del dominio;
- el dominio puede pilotearse sin inventar producto paralelo.

## Dependencies

- `source-of-truth/first-domain-tenant-configuration-governance.md`
- `source-of-truth/catalog-of-capabilities.md`
- `specs/productization-gap-closure/s0-product-scope-and-vertical-v1.md`
