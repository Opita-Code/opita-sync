# Post-pilot plan — from `pilot_passed_with_gaps` to `pilot_passed`

## Estado de partida

El piloto inicial cerró en:

- `pilot_passed_with_gaps`

No porque el corredor haya fallado, sino porque la validación ocurrió en condiciones todavía demasiado favorables:

1. ejecución local / simulada;
2. tiempos casi `0` en varios tramos por ausencia de pausas humanas reales;
3. ausencia de conectores enterprise externos o condiciones operativas más adversas.

## Objetivo de esta fase

Convertir `pilot_passed_with_gaps` en `pilot_passed` sin reabrir el producto ni el framework innecesariamente.

La meta no es agregar features por ansiedad.  
La meta es **subir el nivel de realismo y confianza** del piloto.

---

## P0 — obligatorio antes de promover a `pilot_passed`

### P0.1 — Segunda vuelta del piloto en entorno más realista

Ejecutar el mismo pilot pack en un entorno no tan favorable como memoria local pura.

Incluye:

- framework levantado en entorno reproducible;
- evidencia del corredor con timings más realistas;
- tenants ejecutados con secuencia más cercana a uso humano real.

### P0.2 — Captura humana real de tiempos y decisiones

La scorecard automática sirve, pero hoy varios tiempos quedan cerca de `0`.

Hace falta capturar manualmente o semimanualmente:

- intención -> proposal
- proposal -> preview
- preview -> approval
- approval -> execution
- incidente -> recovery decision

con tiempos de interacción humana reales.

### P0.3 — Completar scorecard consolidada del piloto

Completar efectivamente:

- `docs/PILOT_SCORECARD_TEMPLATE.md`
- `docs/PILOT_INCIDENT_LOG_TEMPLATE.md`

No alcanza con tener templates vacíos; hay que consolidar la evidencia en una scorecard final.

### P0.4 — Introducir al menos un conector menos “feliz” que el default

No hace falta ir a un conector enterprise monstruoso, pero sí hace falta una condición menos ideal que el default connector actual.

Objetivo:

- validar que el dominio aguanta un conector con restricciones más realistas;
- observar cómo se comportan preview, approval y recovery con ese conector.

### P0.5 — Revalidar decisión final del piloto

Sólo después de P0.1–P0.4 se puede reabrir la pregunta:

- `pilot_passed`
- o continuar en `pilot_passed_with_gaps`

---

## P1 — mejora fuerte, pero no bloquea la promoción inmediata

### P1.1 — Scorecard por escenario, no sólo por tenant

Hoy la scorecard ya deriva métricas por tenant.

Siguiente mejora útil:

- desglose por escenario;
- trazabilidad más directa entre resultado y caso de uso.

### P1.2 — Export de incidentes/gaps desde evidence trail

Hoy el incident log sigue siendo manual.

Mejora deseable:

- generar prefilled incident candidates desde eventos, approvals, recoveries y mismatches.

### P1.3 — Runbook de piloto con “expected vs actual” más estructurado

El runbook ya existe, pero se puede enriquecer con:

- checkpoints por escenario;
- expected outcome machine-readable;
- trazas mínimas obligatorias por paso.

### P1.4 — Tenant admin UX más concreta para el dominio

Hoy el dominio ya corre, pero todavía depende bastante del corredor técnico.

Mejora útil:

- surface más explícita para cambios de catálogo, conectores y baselines del tenant.

---

## P2 — expansión después de consolidar el piloto

### P2.1 — Segunda vertical

No abrir antes de consolidar la actual.

### P2.2 — Resolver selección dinámica de capabilities por dominio

Hoy el framework sigue usando bindings default por `result_type`.

Eso está bien para esta etapa. Más adelante puede abrirse una resolución más rica por dominio/tenant.

### P2.3 — Conectores enterprise de mayor complejidad

Después de consolidar el tenant configuration plane con realismo operativo.

---

## Orden recomendado

1. `P0.1`
2. `P0.2`
3. `P0.3`
4. `P0.4`
5. `P0.5`
6. `P1.x`
7. `P2.x`

---

## Regla de decisión

No promover a `pilot_passed` sólo porque el corredor ya funciona técnicamente.

Promover a `pilot_passed` únicamente si:

- la segunda vuelta mantiene los criterios funcionales;
- los tiempos ya representan mejor un uso real;
- el conector menos ideal no rompe el dominio;
- la scorecard consolidada sigue mostrando governance, reconstructability y recovery aceptables.

---

## Resultado esperado de esta fase

Al terminar esta fase, el equipo debería poder decir una de dos cosas con evidencia:

1. **`pilot_passed`** — el dominio quedó validado con suficiente realismo operativo.
2. **seguimos en `pilot_passed_with_gaps`** — pero ahora con gaps mucho mejor identificados y priorizados.
