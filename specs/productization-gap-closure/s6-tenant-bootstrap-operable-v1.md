# S6 — Tenant bootstrap operable v1

## Objetivo

Definir el flujo de bootstrap que lleve un tenant desde creación hasta estado `operable`.

## In scope

- endpoint o flujo de bootstrap;
- payload mínimo;
- artifacts de salida;
- success and failure paths.

## Out of scope

- console administrativa final;
- SSO enterprise;
- automatización avanzada de tenant fleets.

## Requirements

### Requirement: Bootstrap entrypoint
The system SHALL provide a tenant bootstrap flow capable of creating and validating an operable tenant baseline.

#### Scenario: Bootstrap success
- GIVEN a valid bootstrap payload with all minimum-hard components
- WHEN the bootstrap flow runs successfully
- THEN the tenant SHALL reach `operable`

### Requirement: Minimum bootstrap payload
The bootstrap flow MUST require tenant identity, admin identity, initial catalog refs, initial connector refs and baseline governance profiles.

#### Scenario: Missing required payload field
- GIVEN the bootstrap payload lacks a required minimum-hard field
- WHEN bootstrap is attempted
- THEN the tenant MUST remain non-operable

### Requirement: Bootstrap artifacts
The system MUST emit auditable artifacts describing the bootstrap result.

#### Scenario: Bootstrap evidence
- GIVEN a tenant bootstrap completed
- WHEN the result is inspected
- THEN the system SHALL expose bootstrap record, applied profiles and operability report artifacts

### Requirement: Functional operability validation
Bootstrap MUST include a functional validation before declaring the tenant operable.

#### Scenario: Functional validation fails
- GIVEN bootstrap metadata exists but the minimum governed corridor cannot run
- WHEN operability is evaluated
- THEN the tenant SHALL NOT be marked `operable`

## Recommended payload

- `tenant_id`
- `tenant_name`
- `admin_subject_id`
- `initial_catalog_refs`
- `initial_connector_refs`
- `policy_profile_ref`
- `approval_profile_ref`
- `classification_profile_ref`
- `context_seed`

## Expected artifacts

- `tenant_bootstrap_record`
- `tenant_policy_profile_applied`
- `tenant_approval_profile_applied`
- `tenant_classification_profile_applied`
- `tenant_catalog_projection`
- `tenant_connector_projection`
- `tenant_operability_report`

## Acceptance criteria

- flujo de bootstrap definido;
- payload mínimo cerrado;
- artifacts de salida definidos;
- success y failure paths testeables;
- criterio de `operable` acoplado a validación funcional.

## Dependencies

- `specs/productization-gap-closure/s1-tenant-operable-baseline-v1.md`
- `docs/OPITA_SYNC_IMPLEMENTATION_READY.md`
