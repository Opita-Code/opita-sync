# Pilot scorecard template — Tenant configuration governance

## Pilot info

- Pilot ID:
- Date window:
- Environment:
- Framework commit:
- Product commit:
- Owner:

## Tenants

| Tenant | Status | Notes |
|---|---|---|
| tenant-alpha-ops |  |  |
| tenant-beta-governance |  |  |

## Scenario results

| Scenario | Tenant | Outcome expected | Outcome actual | Passed | Notes |
|---|---|---|---|---|---|
| Enable visible capability | tenant-alpha-ops | tenant_change_applied |  |  |  |
| Enable governed execution path | tenant-alpha-ops | blocked_for_approval -> applied |  |  |  |
| Enable connector | tenant-alpha-ops | tenant_change_applied |  |  |  |
| Change classification baseline | tenant-beta-governance | preview warning + approval |  |  |  |
| Recovery of blocked/uncertain change | tenant-beta-governance | explicit recovery outcome |  |  |  |

## Metrics

### Timing

| Metric | Value | Notes |
|---|---|---|
| intention -> proposal |  |  |
| proposal -> preview |  |  |
| preview -> approval |  |  |
| approval -> execution |  |  |
| incident -> recovery decision |  |  |

### Governance

| Metric | Value | Notes |
|---|---|---|
| governance blocks |  |  |
| approvals required |  |  |
| successful releases |  |  |
| fingerprint mismatches |  |  |

### Operability

| Metric | Value | Notes |
|---|---|---|
| cases with full evidence trail |  |  |
| end-to-end reconstructable cases |  |  |
| recovery blocked |  |  |
| recovery executed |  |  |
| tenants still operable after changes |  |  |

## Success criteria check

- [ ] both tenants operable
- [ ] at least 4/5 scenarios completed end-to-end
- [ ] blocked cases expose explicit approvals and reason codes
- [ ] recovery left explicit audit trail and outcome
- [ ] at least 80% of cases reconstructable end-to-end
- [ ] no bypass from chat to provider

## Failure criteria check

- [ ] tenant marked operable without minimum hard
- [ ] change applied without sufficient evidence
- [ ] approvals/release bypass possible
- [ ] recovery mutated canonical state outside governed corridor
- [ ] unexplained contradiction between preview and execution

## Final decision

- Result: `pilot_passed` / `pilot_passed_with_gaps` / `pilot_failed`
- Decision summary:
- Next actions:
