# Pilot final revalidation — P0.5 (2026-03-31)

## Objetivo

Revalidar formalmente el estado global del piloto después de haber trabajado:

- `P0.1` segunda vuelta más realista
- `P0.2` captura humana preparada
- `P0.3` scorecard e incident log finales
- `P0.4` conector más exigente

## Evidencia considerada

- `PILOT_RUN_RESULTS_2026-03-31.md`
- `PILOT_SECOND_ROUND_RESULTS_2026-03-31.md`
- `PILOT_SCORECARD_FINAL_2026-03-31.md`
- `PILOT_INCIDENT_LOG_FINAL_2026-03-31.md`
- `PILOT_P0_4_RESULTS_2026-03-31.md`

## Lo que quedó validado con suficiente fuerza

### 1. Corredor gobernado

El corredor:

`intake -> proposal -> preview -> governance -> execution -> inspection/recovery`

quedó validado funcionalmente en más de una vuelta del piloto.

### 2. Tenant operable

Los tenants del piloto pudieron quedar `operable` con baseline real.

### 3. Governance

Los casos bloqueados generaron approvals explícitas, decision actors, reason codes y release/recovery auditados.

### 4. Evidence trail

Los casos ejecutados fueron reconstruibles end-to-end con evidence trail suficiente.

### 5. Recovery

Recovery fue validado sin mutación canónica fuera del corredor.

### 6. Connector adversity

El dominio soportó un conector más exigente (`connector.execution.restricted`) sin romper preview, approvals, evidence ni operator workspace.

## Lo que todavía NO alcanza para promoción total

### Gap A — timing humano consolidado no ejecutado completamente

Se preparó `P0.2`, pero la captura humana consolidada todavía no quedó llenada completamente como evidencia final versionada.

### Gap B — realismo humano todavía limitado

La segunda vuelta aumentó realismo, pero siguió siendo una ejecución controlada y no una prueba con participantes más amplios o entorno más parecido a operación cotidiana.

### Gap C — conector exigente, sí; conector realmente hostil/externo, no todavía

`connector.execution.restricted` subió el listón, pero todavía no representa una integración enterprise externa verdaderamente hostil o impredecible.

## Decisión final de P0.5

### Estado global del piloto

- **se mantiene en `pilot_passed_with_gaps`**

## Por qué no se promueve a `pilot_passed`

Porque hacerlo ahora sería confundir:

- validación funcional sólida
con
- validación operacional suficientemente realista

Y todavía no estamos en el segundo caso con la fuerza necesaria.

## Qué sí cambió

El significado de `pilot_passed_with_gaps` ahora es más estrecho y mucho más sano:

- ya no expresa duda sobre el corredor ni sobre el dominio;
- expresa principalmente que falta una validación operativa más fuerte.

O sea:

- **el dominio pasó**
- **el corredor pasó**
- **la promoción total todavía espera una validación más realista**

## Próximo foco recomendado

Ya no conviene seguir alargando `P0` indefinidamente.

La opción sana es una de estas dos:

1. ejecutar una validación humana/operativa más fuerte y entonces reabrir la decisión;
2. aceptar `pilot_passed_with_gaps` como cierre suficiente para entrar en una nueva iteración de endurecimiento y expansión controlada.

## Recomendación

Recomendación actual:

- **cerrar esta fase con `pilot_passed_with_gaps`**
- abrir backlog de endurecimiento `P1`
- evitar seguir iterando `P0` sin un cambio real del contexto operativo

## Resumen ejecutivo

> Opita Sync ya validó su primer dominio y su corredor gobernado con evidencia suficiente para seguir avanzando.
> 
> El piloto no está fallando.
> 
> Pero todavía no conviene llamarlo `pilot_passed` sin una ronda humana más realista o un contexto operativo más exigente.
