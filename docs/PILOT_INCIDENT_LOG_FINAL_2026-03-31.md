# Pilot incident log final — 2026-03-31

## Summary

No critical incident was observed that invalidated the governed corridor.

However, the pilot produced **follow-up gaps** that justify keeping the global status in `pilot_passed_with_gaps`.

## Gap 1 — automatic timing still incomplete

- Incident ID: `gap-001`
- Severity: medium
- Summary: automatic scorecard still reports several corridor timings as `0`
- Expected behavior: scorecard should reflect more of the human-relevant stage timing
- Actual behavior: only some segments (approval -> execution, incident -> recovery) become meaningful consistently
- Evidence refs:
  - pilot scorecards in first and second round results
- Recovery used: not applicable
- Outcome: no functional failure, but weaker operational realism
- Root cause hypothesis: current event grouping is insufficient to derive all human-relevant timings from canonical events alone
- Follow-up required: yes (`P0.2`, maybe future framework instrumentation)

## Gap 2 — second round still used controlled participants

- Incident ID: `gap-002`
- Severity: medium
- Summary: second round improved realism, but still ran as a controlled flow and not with a wider real operator/approver set
- Expected behavior: broader real-world human operation and approval cadence
- Actual behavior: more realistic than first round, but still limited
- Evidence refs:
  - `PILOT_SECOND_ROUND_RESULTS_2026-03-31.md`
- Recovery used: not applicable
- Outcome: no functional failure, but insufficient real-world confidence for full `pilot_passed`
- Root cause hypothesis: pilot scope intentionally constrained
- Follow-up required: yes (`P0.4`, later broader field validation)

## Gap 3 — connector adversity still moderate

- Incident ID: `gap-003`
- Severity: medium
- Summary: `connector.plan.default` was less ideal than `connector.default`, but still not a truly hostile or enterprise-grade connector scenario
- Expected behavior: one tougher connector scenario before promoting pilot to fully passed
- Actual behavior: connector adversity improved but remained moderate
- Evidence refs:
  - `PILOT_SECOND_ROUND_RESULTS_2026-03-31.md`
- Recovery used: not applicable
- Outcome: domain still validated, but resilience not fully challenged
- Root cause hypothesis: current connector set is intentionally minimal
- Follow-up required: yes (`P0.4`)

## Conclusion

No blocker-grade incident was observed.

The final incident picture is:

- no critical corridor break
- no governance bypass
- no evidence trail collapse
- no illegal recovery mutation
- yes, several follow-up gaps that justify staying in `pilot_passed_with_gaps`
