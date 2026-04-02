# Next milestone roadmap — consolidate the second domain

## Objetivo del próximo milestone

Consolidar el segundo dominio de Opita Sync — **tenant access and delegation governance** — hasta llevarlo a un nivel comparable al primero en:

- claridad operativa;
- governance visible;
- validación real;
- usabilidad para tenant admin.

## Horizonte sugerido

- **4 a 6 semanas**

## Regla de foco

No abrir una tercera vertical.

No abrir una nueva gran arquitectura.

El milestone debe enfocarse en:

- profundizar el segundo dominio;
- mejorar su validación y su experiencia;
- consolidar lo ya construido.

---

## Semana 1 — consolidación técnica del segundo dominio

### Objetivos

- verificar baseline de grants y delegaciones;
- estabilizar flows de approval/revoke;
- revisar gaps de la access admin workspace;
- confirmar que el framework y el producto siguen sincronizados.

### Entregables

- sanity pass del access plane;
- revisión de endpoints y estados canónicos;
- issues/gaps concretos del segundo dominio.

### Criterio de salida

- el segundo dominio queda funcionalmente consistente;
- no hay drift entre producto y framework.

---

## Semana 2 — pilot run refinado del segundo dominio

### Objetivos

- rerun del piloto del segundo dominio con la scorecard access-aware ya mejorada;
- comparar expected vs actual por escenario;
- validar que revoke y approval siguen legibles para tenant admin.

### Entregables

- rerun documentado del piloto;
- scorecards por tenant y por escenario;
- incident candidates revisadas.

### Criterio de salida

- el segundo dominio tenga una lectura mucho más clara de qué pasa y por qué.

---

## Semana 3 — UX operativa del segundo dominio

### Objetivos

- pulir la access admin workspace;
- mejorar summary / promotion advice / recommended next actions;
- reducir interpretación libre del tenant admin.

### Entregables

- version mejorada de access admin workspace;
- feedback de usabilidad documentado.

### Criterio de salida

- tenant admin puede entender grants/delegaciones sin depender tanto del contexto técnico.

---

## Semana 4 — decisión de validación del segundo dominio

### Objetivos

- revisar si el segundo dominio ya está listo para un estado tipo `pilot_passed_with_gaps` o mejor;
- decidir si hace falta una vuelta adicional o si ya puede considerarse consolidado.

### Entregables

- evaluación formal del segundo dominio;
- decisión ejecutiva documentada.

### Criterio de salida

- estado del segundo dominio explícito y fetchable.

---

## Backlog prioritario del milestone

### P0 — obligatorio para cerrar el milestone

1. rerun del piloto del segundo dominio con scorecards access-aware
2. consolidación de expected vs actual por escenario
3. mejora puntual de la access admin workspace si aparecen fricciones claras
4. evaluación final del segundo dominio

### P1 — muy recomendable dentro del mismo milestone

1. enriquecer incident candidates del access plane
2. agregar métricas más humanas al piloto del segundo dominio
3. documentar mejor decisiones de grant/delegation y revoke para tenant admin

### P2 — sólo si sobra tiempo

1. preparar una integración más hostil para access plane
2. explorar recertificación simple o grants temporales más ricos

---

## Qué NO hacer en este milestone

- abrir una tercera vertical;
- reabrir el primer dominio;
- meterse en monetización avanzada;
- rehacer arquitectura del framework;
- perseguir enterprise breadth antes de consolidar el segundo dominio.

---

## Resultado esperado al final

Al cerrar este milestone, el proyecto debería poder afirmar una de estas dos cosas con bastante claridad:

1. el segundo dominio ya quedó validado y consolidado;
2. el segundo dominio todavía necesita una iteración acotada más, pero con gaps mucho más concretos y pequeños.

## Resumen ejecutivo

> El próximo milestone no es “hacer más cosas”.
> 
> Es **consolidar el segundo dominio hasta que deje de sentirse nuevo**.
