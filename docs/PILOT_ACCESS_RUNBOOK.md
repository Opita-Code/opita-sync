# Pilot runbook — Tenant access and delegation governance

## Objetivo

Ejecutar el piloto del segundo dominio de Opita Sync: **tenant access and delegation governance**.

## Requisitos previos

- repo producto: `https://github.com/Opita-Code/opita-sync`
- repo framework: `https://github.com/Opita-Code/opita-sync-framework`
- framework levantado y accesible
- `go test ./...` verde en el repo framework

## Base URL sugerida

```bash
export BASE_URL="http://localhost:18080"
```

## Tenants del piloto

- `tenant-gamma-access`
- `tenant-delta-delegation`

## Paso 1 — Bootstrap de tenants

### Tenant Gamma

```bash
curl -X POST "$BASE_URL/v1/tenants/bootstrap" \
  -H "Content-Type: application/json" \
  -d '{
    "tenant_id": "tenant-gamma-access",
    "tenant_name": "Tenant Gamma Access",
    "admin_subject_id": "admin-gamma",
    "initial_catalog_refs": [
      "tenant.execution.inspect_run",
      "tenant.approval.release_blocked_execution",
      "tenant.recovery.request_manual_compensation"
    ],
    "initial_connector_refs": [
      "connector.default",
      "connector.execution.default"
    ],
    "policy_profile_ref": "policy.default",
    "approval_profile_ref": "approval.default",
    "classification_profile_ref": "classification.default",
    "context_seed": {
      "company": "Gamma Access",
      "pilot": true,
      "owner": "admin-gamma"
    }
  }'
```

### Tenant Delta

```bash
curl -X POST "$BASE_URL/v1/tenants/bootstrap" \
  -H "Content-Type: application/json" \
  -d '{
    "tenant_id": "tenant-delta-delegation",
    "tenant_name": "Tenant Delta Delegation",
    "admin_subject_id": "admin-delta",
    "initial_catalog_refs": [
      "tenant.execution.inspect_run",
      "tenant.approval.release_blocked_execution",
      "tenant.recovery.request_manual_compensation"
    ],
    "initial_connector_refs": [
      "connector.default",
      "connector.execution.enterprise"
    ],
    "policy_profile_ref": "policy.restrictive-v1",
    "approval_profile_ref": "approval.strict-v1",
    "classification_profile_ref": "classification.internal-first",
    "context_seed": {
      "company": "Delta Delegation",
      "pilot": true,
      "owner": "admin-delta"
    }
  }'
```

### Verificaciones rápidas

```bash
curl "$BASE_URL/v1/tenants/tenant-gamma-access"
curl "$BASE_URL/v1/tenant-admin/workspace/tenant-gamma-access"

curl "$BASE_URL/v1/tenants/tenant-delta-delegation"
curl "$BASE_URL/v1/tenant-admin/workspace/tenant-delta-delegation"
```

---

## Escenario 1 — Grant visible capability

```bash
curl -X POST "$BASE_URL/v1/tenant-access/grants" \
  -H "Content-Type: application/json" \
  -d '{
    "tenant_id": "tenant-gamma-access",
    "principal_ref": "user://alice",
    "principal_type": "person",
    "capability_id": "tenant.execution.inspect_run",
    "allowed_actions": ["use"],
    "justification": "allow inspection for operator alice",
    "trace_ref": "trace-gamma-grant-01"
  }'
```

Verificar:

```bash
curl "$BASE_URL/v1/tenant-access/grants/tenant-gamma-access"
curl "$BASE_URL/v1/tenant-access/workspace/tenant-gamma-access"
```

Expected outcome:
- `grant_applied`

---

## Escenario 2 — Grant sensitive capability with approval

### Crear grant

```bash
curl -X POST "$BASE_URL/v1/tenant-access/grants" \
  -H "Content-Type: application/json" \
  -d '{
    "tenant_id": "tenant-gamma-access",
    "principal_ref": "user://bob",
    "principal_type": "person",
    "capability_id": "tenant.approval.release_blocked_execution",
    "allowed_actions": ["approve"],
    "justification": "allow bob to release blocked executions",
    "trace_ref": "trace-gamma-grant-02"
  }'
```

Guardar:
- `grant_id`
- `approval_request_id`

### Aprobar

```bash
curl -X POST "$BASE_URL/v1/tenant-access/grants/<GRANT_ID>/approve" \
  -H "Content-Type: application/json" \
  -d '{
    "decided_by_subject_id": "approver-gamma",
    "decision_reason_codes": ["grant.approval.release.pilot"]
  }'
```

Verificar:

```bash
curl "$BASE_URL/v1/tenant-access/grants/tenant-gamma-access"
curl "$BASE_URL/v1/tenant-access/workspace/tenant-gamma-access"
```

Expected outcome:
- `grant_blocked_for_approval` -> `grant_applied`

---

## Escenario 3 — Revoke active grant

```bash
curl -X POST "$BASE_URL/v1/tenant-access/grants/<GRANT_ID>/revoke" \
  -H "Content-Type: application/json" \
  -d '{
    "revoked_by": "admin-gamma",
    "justification": "pilot revoke validation"
  }'
```

Verificar:

```bash
curl "$BASE_URL/v1/tenant-access/grants/tenant-gamma-access"
curl "$BASE_URL/v1/tenant-access/workspace/tenant-gamma-access"
```

Expected outcome:
- `grant_revoked`

---

## Escenario 4 — Delegate sensitive capability temporarily

```bash
curl -X POST "$BASE_URL/v1/tenant-access/delegations" \
  -H "Content-Type: application/json" \
  -d '{
    "tenant_id": "tenant-delta-delegation",
    "source_principal": "role://tenant-admin",
    "target_principal": "user://carol",
    "authority_source": "tenant-admin",
    "scope_type": "capability",
    "scope_ref": "tenant.recovery.request_manual_compensation",
    "allowed_actions": ["use"],
    "can_redelegate": true,
    "max_depth": 2,
    "justification": "temporary delegation for recovery ops",
    "trace_ref": "trace-delta-delegation-01"
  }'
```

Guardar:
- `grant_id`
- `approval_request_id`

### Aprobar delegación

```bash
curl -X POST "$BASE_URL/v1/tenant-access/delegations/<DELEGATION_ID>/approve" \
  -H "Content-Type: application/json" \
  -d '{
    "decided_by_subject_id": "approver-delta",
    "decision_reason_codes": ["delegation.approval.release.pilot"]
  }'
```

Verificar:

```bash
curl "$BASE_URL/v1/tenant-access/delegations/tenant-delta-delegation"
curl "$BASE_URL/v1/tenant-access/workspace/tenant-delta-delegation"
```

Expected outcome:
- `delegation_applied`

---

## Escenario 5 — Revoke active delegation

```bash
curl -X POST "$BASE_URL/v1/tenant-access/delegations/<DELEGATION_ID>/revoke" \
  -H "Content-Type: application/json" \
  -d '{
    "revoked_by": "admin-delta",
    "justification": "pilot delegation revoke validation"
  }'
```

Verificar:

```bash
curl "$BASE_URL/v1/tenant-access/delegations/tenant-delta-delegation"
curl "$BASE_URL/v1/tenant-access/workspace/tenant-delta-delegation"
```

Expected outcome:
- `delegation_revoked`

---

## Qué capturar

### Scorecards automáticas

```bash
curl "$BASE_URL/v1/pilot/scorecard?tenant_id=tenant-gamma-access"
curl "$BASE_URL/v1/pilot/scorecard?tenant_id=tenant-delta-delegation"
curl "$BASE_URL/v1/pilot/scorecard/scenarios?tenant_id=tenant-gamma-access"
curl "$BASE_URL/v1/pilot/scorecard/scenarios?tenant_id=tenant-delta-delegation"
curl "$BASE_URL/v1/pilot/incident-candidates?tenant_id=tenant-gamma-access"
curl "$BASE_URL/v1/pilot/incident-candidates?tenant_id=tenant-delta-delegation"
```

### Artefactos humanos

Completar:

- `PILOT_SCORECARD_TEMPLATE.md`
- `PILOT_INCIDENT_LOG_TEMPLATE.md`
- `PILOT_HUMAN_TIMING_TEMPLATE.md`
- `PILOT_SCENARIO_CHECKPOINTS.md`

---

## Criterio de cierre

La vertical de access/delegation queda razonablemente validada si:

1. grants y delegaciones sensibles requieren approval explícita cuando corresponde;
2. revoke deja efecto visible y audit trail;
3. la access admin workspace refleja correctamente blocked/active/revoked;
4. los casos son reconstruibles end-to-end.
