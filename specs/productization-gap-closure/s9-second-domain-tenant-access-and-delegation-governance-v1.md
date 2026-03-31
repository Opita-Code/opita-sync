# S9 — Second domain: tenant access and delegation governance v1

## Objetivo

Definir el segundo dominio recomendado de Opita Sync después de validar `tenant configuration governance`.

## In scope

- grants de acceso a capabilities del tenant;
- delegación gobernada dentro del tenant;
- revocación de grants y delegaciones;
- approvals para cambios sensibles de authority.

## Out of scope

- identity federation enterprise completa;
- IAM externo multi-cloud;
- recertificación masiva de accesos.

## Requirements

### Requirement: Second domain selection
The second domain SHOULD be `tenant access and delegation governance`.

#### Scenario: Natural domain expansion
- GIVEN the first validated domain is tenant configuration governance
- WHEN the next domain is selected
- THEN it SHOULD expand from governing what exists to governing who can use and delegate it

### Requirement: Grant and delegation flow
The domain SHALL support grant, delegation and revocation flows through the governed corridor.

#### Scenario: Delegated capability use
- GIVEN a tenant wants to delegate a sensitive capability
- WHEN the flow is executed
- THEN proposal, preview, governance and inspection artifacts SHALL exist for that delegation

### Requirement: Sensitive authority changes
Changes affecting approval-sensitive or restricted capabilities MUST support explicit approval.

#### Scenario: Restricted capability grant
- GIVEN a grant targets a restricted or approvable capability
- WHEN the change is previewed
- THEN the domain SHALL support explicit approval before promotion

### Requirement: Revocation and recovery
The domain SHALL support revocation and governed recovery for inconsistent delegation states.

#### Scenario: Revocation with audit trail
- GIVEN a delegation is revoked
- WHEN the action completes
- THEN the domain SHALL leave explicit evidence and visible effect for tenant admin inspection

## Initial scenarios

- grant visible capability to a principal
- delegate a sensitive capability temporarily
- revoke an active grant
- block an invalid delegation
- recover a partially applied delegation

## Acceptance criteria

- el segundo dominio amplía naturalmente el primero;
- reutiliza el mismo corredor gobernado;
- tiene valor claro para tenant admin y approver;
- no requiere inventar un producto paralelo.

## Dependencies

- `source-of-truth/second-domain-tenant-access-and-delegation-governance.md`
- `source-of-truth/permissions-delegation-and-policies.md`
- `source-of-truth/tenant-model.md`
