# S1 — Tenant operable baseline v1

## Objetivo

Definir qué significa que un tenant esté realmente operativo para Opita Sync v1.

## In scope

- tenant minimum hard;
- estados del tenant;
- criterio funcional de `operable`.

## Out of scope

- organigrama completo;
- subadmins obligatorios;
- SSO enterprise;
- retrieval productivo.

## Requirements

### Requirement: Minimum hard
The system MUST require, at minimum, admin, policy baseline, approval baseline, classification baseline, visible catalog and at least one connector or provider binding before a tenant can become operable.

#### Scenario: Missing baseline blocks operability
- GIVEN a tenant exists but lacks one minimum-hard element
- WHEN operability is evaluated
- THEN the tenant SHALL remain non-operable

### Requirement: Tenant lifecycle
The tenant SHALL expose explicit states at least `draft`, `configured`, `operable` and `blocked`.

#### Scenario: Explicit operable state
- GIVEN a tenant finished bootstrap
- WHEN all minimum-hard checks pass
- THEN the tenant SHALL transition to `operable`

### Requirement: Functional operability check
The system MUST define operability through a functional corridor check, not just metadata presence.

#### Scenario: Functional health check
- GIVEN a tenant has baseline data loaded
- WHEN the system runs the minimum corridor check
- THEN operability SHALL require successful intake, proposal, preview, compile and inspection flow readiness

## Minimum hard baseline

- tenant metadata
- initial admin subject
- policy profile
- approval profile
- classification profile
- visible catalog
- at least one connector/provider binding
- initial context seed

## Acceptance criteria

- el mínimo duro queda definido;
- existir no equivale a operable;
- el lifecycle del tenant es explícito;
- el health check funcional mínimo está cerrado.

## Dependencies

- `source-of-truth/tenant-model.md`
- `source-of-truth/tenant-minimum-hard.md`
