# S10 — Pilot plan for tenant access and delegation governance v1

## Objetivo

Definir el piloto inicial del segundo dominio `tenant access and delegation governance`.

## In scope

- tenants piloto iniciales;
- grants y delegaciones sensibles;
- revocación auditada;
- métricas y criterios de éxito del segundo dominio.

## Out of scope

- identity federation enterprise completa;
- recertificación masiva;
- integración IAM externa profunda.

## Requirements

### Requirement: Pilot tenants
The pilot SHALL define at least one tenant focused on grants and one tenant focused on delegation.

#### Scenario: Split by authority use case
- GIVEN the second domain is access and delegation governance
- WHEN the pilot is prepared
- THEN one tenant SHALL validate grants and one tenant SHALL validate delegation-heavy cases

### Requirement: Sensitive access changes
The pilot MUST cover at least one approval-sensitive grant or delegation.

#### Scenario: Sensitive grant
- GIVEN a capability grant targets an approval-sensitive action
- WHEN the change is run through the corridor
- THEN approval SHALL be explicit before activation

### Requirement: Revocation path
The pilot MUST cover revocation of both a grant or a delegation.

#### Scenario: Revocation audit
- GIVEN a grant or delegation is revoked
- WHEN the action completes
- THEN the revoke event SHALL be visible and auditable

### Requirement: Workspace usability
The pilot SHALL validate that tenant admin can understand the access plane through the access admin workspace.

#### Scenario: Access workspace review
- GIVEN grants and delegations exist for a tenant
- WHEN tenant admin inspects the workspace
- THEN blocked, active and revoked items SHALL be understandable without reading only raw records

## Initial pilot tenants

- `tenant-gamma-access`
- `tenant-delta-delegation`

## Minimal scenario suite

- grant visible capability
- grant sensitive capability with approval
- revoke active grant
- delegate sensitive capability temporarily
- revoke active delegation

## Acceptance criteria

- grants/delegations corren por el corredor gobernado;
- approval explícita aparece cuando corresponde;
- revoke queda visible y auditada;
- la access admin workspace ayuda realmente al tenant admin;
- al menos 80% de los casos son reconstruibles end-to-end.

## Dependencies

- `source-of-truth/pilot-plan-tenant-access-and-delegation-governance.md`
- `source-of-truth/second-domain-tenant-access-and-delegation-governance.md`
