# Access observability check — 2026-03-31

## Alcance

Validación de observabilidad del segundo dominio con foco en:

- scorecard por tenant
- scorecard por escenario (`trace_id`)
- incident candidates

## Resultado

### 1. Scorecard por tenant

- **suficiente para el segundo dominio**
- ya refleja métricas access-aware de grants/delegaciones

### 2. Scorecard por escenario

- **funciona correctamente con `trace_id`**
- permite aislar mejor escenarios del access plane

### 3. Incident candidates

- antes: omitían casos obvios de awaiting approval del access plane
- ahora: incluyen también
  - `tenant_access.grant_awaiting_approval`
  - `tenant_access.delegation_awaiting_approval`

### 4. Evidencia real del rerun

- el rerun del segundo dominio mostró scorecards por tenant y por escenario con métricas access-aware útiles;
- los incident candidates del rerun ya incluyeron grants/delegaciones esperando approval;
- la observabilidad del segundo dominio dejó de depender casi por completo del corredor clásico con `execution_id`.

## Conclusión de Tarea 4

- **Tarea 4 = complete**

## Decisión provisional de readiness

Con Tarea 1, Tarea 2, Tarea 3 y Tarea 4 completas, el estado recomendado para Semana 1 pasa a ser:

- **`ready_for_week_2`**

## Observación

La observabilidad del segundo dominio todavía puede mejorar en elegancia, pero ya no omite sus casos obvios ni depende tanto del corredor clásico con `execution_id`.

Con el rerun del piloto, esta observación ya no es teórica: quedó validada con evidencia real.
