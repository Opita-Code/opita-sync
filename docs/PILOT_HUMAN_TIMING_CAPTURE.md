# Pilot human timing capture — P0.2

## Objetivo

Capturar los tiempos y decisiones humanas que la scorecard automática todavía no refleja bien.

## Regla principal

La scorecard automática sigue siendo válida, pero **no alcanza sola** para describir el uso real.

Este documento agrega la capa humana necesaria para:

- intención -> proposal
- proposal -> preview
- preview -> approval
- approval -> execution
- incidente -> recovery decision

## Cuándo usarlo

Usarlo durante la **segunda vuelta del piloto** o cualquier vuelta posterior que busque mayor realismo operativo.

## Cómo capturar tiempos

Para cada escenario, registrar:

- `start_intention_at`
- `proposal_ready_at`
- `preview_reviewed_at`
- `approval_requested_at`
- `approval_decided_at`
- `execution_observed_at`
- `incident_detected_at` (si aplica)
- `recovery_decided_at` (si aplica)

## Convención

- usar timestamps UTC;
- registrar quién marcó cada hito;
- si un hito no aplica, dejarlo explícito como `n/a`.

## Campos obligatorios por escenario

- `tenant_id`
- `scenario_id`
- `operator_subject_id`
- `approver_subject_id` (si aplica)
- `execution_id`
- `trace_id`
- `expected_outcome`
- `actual_outcome`

## Derivaciones humanas mínimas

- `intention_to_proposal_seconds`
- `proposal_to_preview_seconds`
- `preview_to_approval_seconds`
- `approval_to_execution_seconds`
- `incident_to_recovery_decision_seconds`

## Regla de calidad

No completar estos datos al final “de memoria”.

Se deben registrar durante la corrida del escenario o inmediatamente después de cada hito.

## Relación con otros artefactos

- `PILOT_RUNBOOK.md` = pasos del corredor
- `PILOT_SCORECARD_TEMPLATE.md` = resumen del piloto
- `PILOT_INCIDENT_LOG_TEMPLATE.md` = incidentes/gaps
- este documento = tiempos y decisiones humanas por escenario
