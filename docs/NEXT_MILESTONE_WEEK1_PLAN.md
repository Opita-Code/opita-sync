# Next milestone — Week 1 execution plan

## Objetivo de la semana

Consolidar técnicamente el segundo dominio (`tenant access and delegation governance`) antes de volver a pilotearlo o expandirlo.

## Resultado esperado al cierre de la semana

- second domain sin drift evidente entre framework y producto;
- gaps técnicos del access plane explicitados y priorizados;
- baseline suficientemente estable para entrar a la Semana 2 del roadmap.

---

## Tarea 1 — Auditoría rápida del access plane

### Objetivo

Revisar el estado actual de:

- grants
- delegations
- approve / revoke
- access admin workspace
- scorecards access-aware

### Entregable

- lista corta de gaps técnicos reales

### Done

- [ ] se revisó framework vs producto
- [ ] se listaron gaps concretos del segundo dominio
- [ ] se clasificaron en `bloqueante` / `molesto` / `nice-to-have`

---

## Tarea 2 — Validar consistencia de estados del access plane

### Objetivo

Revisar que los estados de grants/delegaciones no tengan contradicciones.

### Foco

- `active`
- `blocked`
- `revoked`

### Entregable

- checklist de consistencia de estados

### Done

- [ ] no hay transitions incoherentes obvias
- [ ] approve/revoke dejan estado final esperable
- [ ] workspace refleja correctamente los estados

---

## Tarea 3 — Revisar visibilidad de approval-sensitive items

### Objetivo

Asegurar que grants y delegaciones sensibles sean claramente visibles para tenant admin.

### Entregable

- lista de mejoras o confirmación de claridad suficiente

### Done

- [ ] blocked grants se ven claramente
- [ ] blocked delegations se ven claramente
- [ ] revocations se distinguen de blocked
- [ ] promotion advice no resulta ambiguo

---

## Tarea 4 — Revisar observabilidad del segundo dominio

### Objetivo

Confirmar que la scorecard access-aware y los incident candidates ya cubren lo mínimo necesario.

### Entregable

- validación o lista de faltantes

### Done

- [ ] scorecard por tenant refleja grants/delegations
- [ ] scorecard por escenario funciona con `trace_id`
- [ ] incident candidates no omiten casos obvios del access plane

---

## Tarea 5 — Preparar la siguiente validación

### Objetivo

Dejar al segundo dominio listo para la Semana 2 del roadmap.

### Entregable

- decisión explícita: `ready_for_week_2` o `needs_fix_before_week_2`

### Done

- [ ] existe decisión de readiness
- [ ] si hay gaps bloqueantes, quedan documentados
- [ ] si no hay gaps bloqueantes, se habilita rerun del piloto del segundo dominio

---

## Prioridad diaria sugerida

### Día 1
- tarea 1
- tarea 2

### Día 2
- tarea 3
- tarea 4

### Día 3
- tarea 5
- consolidación de hallazgos

---

## Criterio de éxito de la semana

La semana se considera exitosa si al final podemos afirmar una de estas dos cosas con claridad:

1. **`ready_for_week_2`** — el segundo dominio está suficientemente estable para rerun del piloto.
2. **`needs_fix_before_week_2`** — hay gaps concretos y pequeños que deben resolverse antes del rerun.

## Regla de foco

No abrir nuevos features esta semana.

La semana 1 es de:

- revisión,
- consistencia,
- observabilidad,
- readiness.
