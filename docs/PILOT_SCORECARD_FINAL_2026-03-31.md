# Pilot scorecard final — 2026-03-31

## Pilot info

- Pilot ID: `tenant-configuration-governance-2026-03-31`
- Date window: `2026-03-31`
- Environment: local reproducible / framework dockerized at `http://localhost:18080`
- Framework repo: `Opita-Code/opita-sync-framework`
- Product repo: `Opita-Code/opita-sync`
- Owner: pilot execution assisted by AI + single operator flow

## Tenants

| Tenant | Status | Notes |
|---|---|---|
| tenant-alpha-ops | operable | first round completed |
| tenant-beta-governance | operable | first round completed |
| tenant-alpha-ops-r2 | operable | second round completed |
| tenant-beta-governance-r2 | operable | second round completed |

## Scenario results

| Scenario | Tenant | Outcome expected | Outcome actual | Passed | Notes |
|---|---|---|---|---|---|
| Enable visible capability | tenant-alpha-ops / tenant-alpha-ops-r2 | tenant_change_applied | applied through governed corridor | yes | visible capability path behaved correctly |
| Enable governed execution path | tenant-alpha-ops / tenant-alpha-ops-r2 | blocked_for_approval -> applied | approval requested and release executed | yes | governance + approval path validated |
| Enable connector | tenant-alpha-ops / tenant-alpha-ops-r2 | tenant_change_applied | applied; second round included additional approval path | yes | connector path validated |
| Change classification baseline | tenant-beta-governance / tenant-beta-governance-r2 | preview warning + approval | preview warning observed; approval/recovery path engaged | yes | governance-sensitive case validated |
| Recovery of blocked/uncertain change | tenant-beta-governance / tenant-beta-governance-r2 | explicit recovery outcome | resume_after_approval executed with audit trail | yes | recovery path validated |

## Metrics

### Timing

| Metric | Value | Notes |
|---|---:|---|
| intention -> proposal | partially captured | automated values still show `0` in several cases |
| proposal -> preview | partially captured | automated values still show `0` in several cases |
| preview -> approval | partially captured | needs human consolidation from P0.2 |
| approval -> execution | observed (`~4s–15s`) | second round improved realism with delayed approval |
| incident -> recovery decision | observed (`~3s`) | recovery timing visible in second round |

### Governance

| Metric | Value | Notes |
|---|---:|---|
| governance blocks | present and explicit | approvals generated where expected |
| approvals required | present and explicit | alpha + beta both exercised approval paths |
| successful releases | observed | alpha release path validated |
| fingerprint mismatches | 0 observed | no mismatch reproduced in pilot |

### Operability

| Metric | Value | Notes |
|---|---:|---|
| cases with full evidence trail | observed across all executed scenarios | evidence trail complete in executed cases |
| end-to-end reconstructable cases | observed across all executed scenarios | inspection/operator workspace validated |
| recovery blocked | 0 observed in executed flows | recovery paths used were valid |
| recovery executed | observed | beta recovery path validated |
| tenants still operable after changes | yes | all pilot tenants remained operable |

## Success criteria check

- [x] both tenants operable
- [x] at least 4/5 scenarios completed end-to-end
- [x] blocked cases expose explicit approvals and reason codes
- [x] recovery left explicit audit trail and outcome
- [x] at least 80% of cases reconstructable end-to-end
- [x] no bypass from chat to provider

## Failure criteria check

- [ ] tenant marked operable without minimum hard
- [ ] change applied without sufficient evidence
- [ ] approvals/release bypass possible
- [ ] recovery mutated canonical state outside governed corridor
- [ ] unexplained contradiction between preview and execution

## Final decision

- Result: `pilot_passed_with_gaps`
- Decision summary: the governed corridor and first domain passed functional validation, but the pilot still lacks stronger realism in timing capture and connector adversity.
- Next actions: execute `P0.4` and then `P0.5` after consolidating human timing capture from `P0.2`.
