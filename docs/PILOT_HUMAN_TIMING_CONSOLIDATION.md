# Pilot human timing consolidation — P0.2

## Objetivo

Consolidar los tiempos humanos capturados por escenario y compararlos con la scorecard automática.

## Tabla consolidada

| Tenant | Scenario | intention→proposal | proposal→preview | preview→approval | approval→execution | incident→recovery | Notes |
|---|---|---:|---:|---:|---:|---:|---|
| tenant-alpha-ops-r2 |  |  |  |  |  |  |  |
| tenant-beta-governance-r2 |  |  |  |  |  |  |  |

## Comparación con scorecard automática

Para cada tenant comparar:

- tiempos humanos capturados
- tiempos automáticos del endpoint `/v1/pilot/scorecard`

## Objetivo de la comparación

Detectar:

1. qué métricas automáticas siguen siendo insuficientes;
2. qué tramos del corredor requieren mejor instrumentación;
3. si la experiencia humana real sigue siendo aceptable aunque el scorecard automático todavía sea parcial.

## Resultado esperado de P0.2

Al terminar P0.2 debe quedar claro:

- qué tiempos humanos reales tuvo cada escenario;
- qué diferencias hay respecto de la scorecard automática;
- qué gaps pasan a `P0.3` o a mejoras de instrumentación futura.
