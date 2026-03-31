# Pilot runbook — Tenant configuration governance

## Objetivo

Ejecutar el piloto de Opita Sync sobre el dominio `tenant configuration governance` usando el framework publicado y los assets operativos del repo producto.

## Requisitos previos

- repo producto: `https://github.com/Opita-Code/opita-sync`
- repo framework: `https://github.com/Opita-Code/opita-sync-framework`
- framework levantado localmente con `go run ./cmd/intent-service`
- `go test ./...` verde en el repo framework

## Variables sugeridas

```bash
export BASE_URL="http://localhost:8080"
export TENANT_ALPHA="tenant-alpha-ops"
export TENANT_BETA="tenant-beta-governance"
```

## Paso 1 — Bootstrap de tenants

### Tenant A — tenant-alpha-ops

```bash
curl -X POST "$BASE_URL/v1/tenants/bootstrap" \
  -H "Content-Type: application/json" \
  -d '{
    "tenant_id": "tenant-alpha-ops",
    "tenant_name": "Tenant Alpha Ops",
    "admin_subject_id": "admin-alpha",
    "initial_catalog_refs": [
      "tenant.intake.capture_intent",
      "tenant.execution.inspect_run",
      "tenant.execution.compile_governed_intent"
    ],
    "initial_connector_refs": [
      "connector.default",
      "connector.execution.default"
    ],
    "policy_profile_ref": "policy.default",
    "approval_profile_ref": "approval.default",
    "classification_profile_ref": "classification.default",
    "context_seed": {
      "company": "Alpha Ops",
      "pilot": true,
      "owner": "admin-alpha"
    }
  }'
```

### Tenant B — tenant-beta-governance

```bash
curl -X POST "$BASE_URL/v1/tenants/bootstrap" \
  -H "Content-Type: application/json" \
  -d '{
    "tenant_id": "tenant-beta-governance",
    "tenant_name": "Tenant Beta Governance",
    "admin_subject_id": "admin-beta",
    "initial_catalog_refs": [
      "tenant.intake.capture_intent",
      "tenant.execution.inspect_run",
      "tenant.approval.release_blocked_execution",
      "tenant.recovery.request_manual_compensation"
    ],
    "initial_connector_refs": [
      "connector.default",
      "connector.execution.default"
    ],
    "policy_profile_ref": "policy.restrictive-v1",
    "approval_profile_ref": "approval.strict-v1",
    "classification_profile_ref": "classification.internal-first",
    "context_seed": {
      "company": "Beta Governance",
      "pilot": true,
      "owner": "admin-beta"
    }
  }'
```

### Verificaciones rápidas

```bash
curl "$BASE_URL/v1/tenants/tenant-alpha-ops"
curl "$BASE_URL/v1/tenants-catalog/tenant-alpha-ops"
curl "$BASE_URL/v1/tenants-connectors/tenant-alpha-ops"

curl "$BASE_URL/v1/tenants/tenant-beta-governance"
curl "$BASE_URL/v1/tenants-catalog/tenant-beta-governance"
curl "$BASE_URL/v1/tenants-connectors/tenant-beta-governance"
```

## Paso 2 — Escenario base del corredor

Usá este patrón para cada escenario.

### 2.1 Intake

```bash
curl -X POST "$BASE_URL/v1/intake/turns" \
  -H "Content-Type: application/json" \
  -d '{
    "tenant_id": "tenant-alpha-ops",
    "session_id": "pilot-session-alpha-01",
    "subject_id": "operator-alpha",
    "raw_text": "quiero habilitar la capability de ejecucion gobernada para el tenant alpha",
    "trace_id": "trace-alpha-01"
  }'
```

Guardar de la respuesta:

- `conversation_turn_id`
- `intake_session.IntakeSessionID`
- `intent_candidate.IntentCandidateID`

### 2.2 Proposal

```bash
curl -X POST "$BASE_URL/v1/proposals" \
  -H "Content-Type: application/json" \
  -d '{
    "tenant_id": "tenant-alpha-ops",
    "session_id": "pilot-session-alpha-01",
    "subject_id": "operator-alpha",
    "trace_id": "trace-alpha-01",
    "intake_session_id": "<INTAKE_SESSION_ID>",
    "source_intent_refs": ["<INTENT_CANDIDATE_ID>"],
    "title": "Enable governed execution capability",
    "summary": "Enable tenant.execution.compile_governed_intent for tenant alpha",
    "human_diff_ref": "human-diff-alpha-01",
    "material_diff_ref": "material-diff-alpha-01"
  }'
```

Guardar:

- `ProposalDraftID`

### 2.3 Patchset

```bash
curl -X POST "$BASE_URL/v1/patchsets" \
  -H "Content-Type: application/json" \
  -d '{
    "trace_id": "trace-alpha-01",
    "proposal_draft_id": "<PROPOSAL_DRAFT_ID>",
    "target_artifacts": ["tenant-alpha-ops/catalog/tenant.execution.compile_governed_intent"],
    "material_operations": ["enable capability visibility and usability"],
    "material_diff_hash": "patchset-alpha-01",
    "policy_preview_inputs_ref": "policy-preview-alpha-01",
    "approval_preview_inputs_ref": "approval-preview-alpha-01",
    "classification_preview_inputs_ref": "classification-preview-alpha-01"
  }'
```

Guardar:

- `PatchsetCandidateID`

### 2.4 Workspace usable

```bash
curl "$BASE_URL/v1/workspaces/intake-proposal?intake_session_id=<INTAKE_SESSION_ID>&intent_candidate_id=<INTENT_CANDIDATE_ID>&proposal_draft_id=<PROPOSAL_DRAFT_ID>&patchset_candidate_id=<PATCHSET_CANDIDATE_ID>"
```

Validar:

- `chat_boundary = free_chat_never_applies_directly`
- `next_gates` no vacío

### 2.5 Preview

```bash
curl -X POST "$BASE_URL/v1/previews" \
  -H "Content-Type: application/json" \
  -d '{
    "tenant_id": "tenant-alpha-ops",
    "session_id": "pilot-session-alpha-01",
    "subject_id": "operator-alpha",
    "trace_id": "trace-alpha-01",
    "proposal_draft_id": "<PROPOSAL_DRAFT_ID>",
    "contract_id": "contract-alpha-preview-01",
    "execution_id": "execution-alpha-preview-01",
    "patchset_ref": "<PATCHSET_CANDIDATE_ID>",
    "human_diff_ref": "human-diff-alpha-01",
    "material_diff_ref": "material-diff-alpha-01",
    "material_diff_hash": "patchset-alpha-01",
    "preview_scope": "pilot-alpha"
  }'
```

Guardar:

- `PreviewCandidateID`
- `SimulationResultID`(s)

### 2.6 Preview legible

```bash
curl "$BASE_URL/v1/readable-previews/<PREVIEW_CANDIDATE_ID>"
```

Validar:

- `prediction_boundary = simulation_preview_not_kernel_truth`
- sección `diff`
- sección `approvals`
- sección `risk`

### 2.7 Compile / run

```bash
curl -X POST "$BASE_URL/v1/intents/compile" \
  -H "Content-Type: application/json" \
  -d '{
    "request_id": "req-alpha-01",
    "tenant_id": "tenant-alpha-ops",
    "workspace_id": "workspace-alpha",
    "user_id": "operator-alpha",
    "session_id": "pilot-session-alpha-01",
    "trace_id": "trace-alpha-01",
    "conversation_turn_id": "<CONVERSATION_TURN_ID>",
    "intake_session_id": "<INTAKE_SESSION_ID>",
    "intent_candidate_id": "<INTENT_CANDIDATE_ID>",
    "proposal_draft_id": "<PROPOSAL_DRAFT_ID>",
    "patchset_candidate_id": "<PATCHSET_CANDIDATE_ID>",
    "preview_candidate_id": "<PREVIEW_CANDIDATE_ID>",
    "simulation_result_ids": ["<SIM_RESULT_ID_1>"],
    "objetivo": "apply governed tenant configuration change",
    "alcance": "pilot-alpha-scope",
    "tipo_de_resultado_esperado": "execution",
    "autonomia_solicitada": "assisted",
    "criterios_de_exito": ["evidence trail completo"],
    "restricciones": ["no bypass de governance"]
  }'
```

Guardar:

- `execution_id`
- `contract_id`
- `approval.approval_request_id` si aparece

## Paso 3 — Approval flow

### Ver approval

```bash
curl "$BASE_URL/v1/approvals/<APPROVAL_REQUEST_ID>"
```

### Release

```bash
curl -X POST "$BASE_URL/v1/approvals/<APPROVAL_REQUEST_ID>/release" \
  -H "Content-Type: application/json" \
  -d '{
    "decided_by_subject_id": "approver-alpha",
    "decision_reason_codes": ["approval.release.pilot"]
  }'
```

### Reject / escalate (si aplica)

```bash
curl -X POST "$BASE_URL/v1/approvals/<APPROVAL_REQUEST_ID>/reject" \
  -H "Content-Type: application/json" \
  -d '{
    "decided_by_subject_id": "approver-beta",
    "decision_reason_codes": ["approval.reject.pilot"]
  }'
```

```bash
curl -X POST "$BASE_URL/v1/approvals/<APPROVAL_REQUEST_ID>/escalate" \
  -H "Content-Type: application/json" \
  -d '{
    "decided_by_subject_id": "approver-beta",
    "decision_reason_codes": ["approval.escalate.pilot"]
  }'
```

## Paso 4 — Inspection / operator workspace

```bash
curl "$BASE_URL/v1/inspection/executions/<EXECUTION_ID>"
curl "$BASE_URL/v1/operator/executions/<EXECUTION_ID>/workspace"
```

Validar:

- `conversation_turn_refs` no vacío
- `proposal_draft_refs` no vacío
- `preview_candidate_refs` no vacío
- `boundary = operator_surface_reads_and_requests_kernel_executes`

## Paso 5 — Recovery scenarios

### Crear candidate

```bash
curl -X POST "$BASE_URL/v1/recovery-actions" \
  -H "Content-Type: application/json" \
  -d '{
    "execution_id": "<EXECUTION_ID>",
    "requested_action": "resume_after_approval",
    "requested_by_subject_id": "operator-alpha",
    "approval_request_id": "<APPROVAL_REQUEST_ID>"
  }'
```

O para unknown outcome / manual compensation:

```bash
curl -X POST "$BASE_URL/v1/recovery-actions" \
  -H "Content-Type: application/json" \
  -d '{
    "execution_id": "<EXECUTION_ID>",
    "requested_action": "acknowledge_unknown_outcome",
    "requested_by_subject_id": "operator-beta"
  }'
```

```bash
curl -X POST "$BASE_URL/v1/recovery-actions" \
  -H "Content-Type: application/json" \
  -d '{
    "execution_id": "<EXECUTION_ID>",
    "requested_action": "request_manual_compensation",
    "requested_by_subject_id": "operator-beta"
  }'
```

### Ejecutar candidate

```bash
curl -X POST "$BASE_URL/v1/recovery-actions/<RECOVERY_ACTION_CANDIDATE_ID>/execute"
```

## Paso 6 — Scorecard del piloto

### Tenant A

```bash
curl "$BASE_URL/v1/pilot/scorecard?tenant_id=tenant-alpha-ops"
```

### Tenant B

```bash
curl "$BASE_URL/v1/pilot/scorecard?tenant_id=tenant-beta-governance"
```

Usar la respuesta para completar:

- `docs/PILOT_SCORECARD_TEMPLATE.md`

## Paso 7 — Incident log

Por cada gap/incidente, abrir una entrada en:

- `docs/PILOT_INCIDENT_LOG_TEMPLATE.md`

Campos mínimos:

- tenant
- scenario
- execution id
- trace id
- expected vs actual
- evidence refs
- outcome

## Paso 8 — Gate final

Tomar los resultados y compararlos contra:

- success criteria
- failure criteria

Decisión final permitida:

- `pilot_passed`
- `pilot_passed_with_gaps`
- `pilot_failed`

## Artefactos que deben quedar completados

- `PILOT_EXECUTION_CHECKLIST.md`
- `PILOT_SCORECARD_TEMPLATE.md`
- `PILOT_INCIDENT_LOG_TEMPLATE.md`
- resultados/export del endpoint `/v1/pilot/scorecard`
