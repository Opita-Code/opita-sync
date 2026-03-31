# Pilot results — Tenant access and delegation governance (2026-03-31)

## Contexto

- framework repo: `Opita-Code/opita-sync-framework`
- product repo: `Opita-Code/opita-sync`
- execution mode: framework local/dockerized service at `http://localhost:18080`

## Qué se ejecutó realmente

### Tenant Gamma — `tenant-gamma-access-p2`

Escenarios ejecutados:

1. grant visible capability
2. grant sensitive capability with approval
3. revoke active grant

Resultados observados:

- grant visible: `active`
- grant sensible luego de approval: `active`
- grant luego de revoke: `revoked`
- access workspace boundary: `access_admin_surface_reads_grants_and_guides_governed_authority_changes`

### Tenant Delta — `tenant-delta-delegation-p2`

Escenarios ejecutados:

4. delegate sensitive capability temporarily
5. revoke active delegation

Resultados observados:

- delegation luego de approval: `active`
- delegation luego de revoke: `revoked`
- access workspace boundary: `access_admin_surface_reads_grants_and_guides_governed_authority_changes`

## Evaluación cualitativa

### Lo que sí quedó validado

1. grants y delegaciones sensibles pueden quedar bloqueados por approval y luego liberarse explícitamente;
2. revoke deja efecto visible y audit trail explícito;
3. la access admin workspace refleja blocked/active/revoked de forma mucho más usable;
4. el segundo dominio ya no depende de puro modelado o endpoints crudos.

### Lo que NO quedó bien medido todavía

La scorecard automática actual sigue orientada principalmente a ejecuciones del corredor clásico con `execution_id`.

Para este segundo dominio:

- `tracked_executions` queda vacío;
- métricas automáticas de timing/governance aparecen en `0`;
- el valor actual está más en `scenario scorecards` y en la surface del access plane que en la scorecard agregada por tenant.

## Incidentes

- incident candidates automáticos: `0` en esta corrida

Esto no significa ausencia absoluta de gaps, sino que no emergieron warnings/blocked recoveries/fingerprint mismatches dentro de las señales actuales del event log.

## Decisión del piloto del segundo dominio

Estado:

- `pilot_passed_with_gaps`

## Por qué

El dominio demostró funcionalidad real:

- grants
- delegation
- approval
- revoke
- workspace usable

pero la instrumentación automática todavía no representa bien esta vertical nueva.  
O sea: el dominio pasó funcionalmente, pero la observabilidad del piloto todavía quedó detrás.

## Próximo paso recomendado

Antes de declarar esta vertical como `pilot_passed`, conviene:

1. extender la scorecard para dominios sin `execution_id` clásico;
2. definir métricas específicas del access plane;
3. correr una segunda vuelta del piloto del segundo dominio con esas métricas más maduras.
