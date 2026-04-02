# Access sensitive visibility check — 2026-03-31

## Alcance

Revisión de visibilidad para:

- blocked grants
- blocked delegations
- revoked grants
- revoked delegations
- promotion advice del access admin workspace

## Resultado

### 1. Blocked grants

- **visible claramente**
- la workspace ya muestra `blocked_grants` y ahora también `blocked_grant_ids`

### 2. Blocked delegations

- **visible claramente**
- la workspace ya muestra `blocked_delegations` y ahora también `blocked_delegation_ids`

### 3. Revocations separadas de blocked

- **visible claramente**
- grants y delegations revocadas ahora tienen `revoked_*_ids` explícitos en la workspace

### 4. Promotion advice

- **suficientemente claro por ahora**
- no perfecto ni hermoso, pero ya no ambiguo en el caso sensible principal

## Decisión de Tarea 3

- **Tarea 3 = complete**

## Observación

La surface del segundo dominio sigue pudiendo mejorar mucho a nivel elegancia, pero ya supera el umbral de claridad mínima para tenant admin.

## Impacto sobre Semana 1

Con Tarea 1, Tarea 2 y Tarea 3 cerradas, la decisión de readiness queda principalmente en manos de:

- Tarea 4 — observabilidad del segundo dominio
- Tarea 5 — decisión final `ready_for_week_2` o `needs_fix_before_week_2`
