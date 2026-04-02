# Access temporal validity update — 2026-04-02

## Qué cambió

La vigencia temporal del segundo dominio ya no es decorativa.

## Cambios principales

- grants y delegations pueden recibir `valid_until`;
- no se aceptan grants/delegations nuevas con `valid_until` en el pasado;
- la access admin workspace ahora muestra:
  - `expired_items`
  - `expired_grant_ids`
  - `expired_delegation_ids`
- promotion advice cambia cuando hay items expirados.

## Impacto

- mejor consistencia del access plane;
- mejor visibilidad para tenant admin;
- menor riesgo de confiar en grants/delegations vencidas sin notarlo.

## Resultado

- mejora concreta del polish de madurez del segundo dominio
