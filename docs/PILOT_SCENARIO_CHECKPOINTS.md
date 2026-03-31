# Pilot scenario checkpoints

## Objetivo

Dar a cada escenario del piloto una estructura explícita de:

- expected outcome;
- checkpoints;
- trazas mínimas obligatorias;
- expected vs actual.

## Convención

Cada escenario debe registrar como mínimo:

- `scenario_id`
- `tenant_id`
- `operator_subject_id`
- `approver_subject_id`
- `trace_id`
- `execution_id`

---

## Scenario 1 — enable_visible_capability

### Expected outcome

```yaml
scenario_id: enable_visible_capability
tenant: tenant-alpha-ops
expected_outcome: tenant_change_applied
expected_approval: optional_or_light_review
expected_risk: low_to_medium
```

### Checkpoints

- [ ] intake captured
- [ ] proposal draft created
- [ ] patchset candidate created
- [ ] preview readable reviewed
- [ ] compile completed
- [ ] inspection available

### Mandatory evidence

- `conversation_turn_id`
- `proposal_draft_id`
- `patchset_candidate_id`
- `preview_candidate_id`
- `execution_id`

---

## Scenario 2 — enable_governed_execution_path

### Expected outcome

```yaml
scenario_id: enable_governed_execution_path
tenant: tenant-alpha-ops
expected_outcome: blocked_for_approval_then_applied
expected_approval: required
expected_risk: medium_to_high
```

### Checkpoints

- [ ] preview indicates approval path
- [ ] approval request created
- [ ] release/reject/escalate path exercised
- [ ] execution final state explicit
- [ ] operator workspace reviewed

### Mandatory evidence

- `approval_request_id`
- `execution_id`
- `trace_id`
- `operator_workspace_ref` (logical)

---

## Scenario 3 — enable_connector

### Expected outcome

```yaml
scenario_id: enable_connector
tenant: tenant-alpha-ops
expected_outcome: tenant_change_applied
expected_approval: maybe_required
expected_risk: medium
```

### Checkpoints

- [ ] connector projection updated
- [ ] preview reviewed
- [ ] provider evidence generated
- [ ] final state explicit

### Mandatory evidence

- `connector_projection`
- `provider_call_ref`
- `artifact_ref`
- `execution_id`

---

## Scenario 4 — change_classification_baseline

### Expected outcome

```yaml
scenario_id: change_classification_baseline
tenant: tenant-beta-governance
expected_outcome: preview_warning_plus_approval_or_recovery
expected_approval: required
expected_risk: high
```

### Checkpoints

- [ ] preview warning visible
- [ ] approval path explicit
- [ ] inspection shows impact
- [ ] final state explicit

### Mandatory evidence

- `preview_candidate_id`
- `simulation_result_ids`
- `approval_request_id`
- `execution_id`

---

## Scenario 5 — recover_blocked_or_uncertain_change

### Expected outcome

```yaml
scenario_id: recover_blocked_or_uncertain_change
tenant: tenant-beta-governance
expected_outcome: explicit_recovery_outcome
expected_approval: depends_on_case
expected_risk: high
```

### Checkpoints

- [ ] recovery candidate created
- [ ] candidate state explicit
- [ ] execute or blocked path explicit
- [ ] outcome reflected in operator workspace

### Mandatory evidence

- `recovery_action_candidate_id`
- `execution_id`
- `trace_id`
- `operator_workspace_ref` (logical)

---

## Expected vs actual table

| Scenario | Expected outcome | Actual outcome | Passed | Notes |
|---|---|---|---|---|
| enable_visible_capability |  |  |  |  |
| enable_governed_execution_path |  |  |  |  |
| enable_connector |  |  |  |  |
| change_classification_baseline |  |  |  |  |
| recover_blocked_or_uncertain_change |  |  |  |  |
