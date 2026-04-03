# Ambition demo roadmap

## Objetivo

Construir una demo ambiciosa de Opita Sync que funcione como:

- landing principal del producto;
- demo guiada web + mobile con adaptación automática por dispositivo;
- tenant demo preparado para mostrar una visión más alta que el tenant inicial comercial;
- entorno controlado donde un agente operativo puede proponer, ejecutar, auditar, verificar y recomendar cambios reales.

## Principio rector

La demo puede ser más ambiciosa que el tenant inicial, pero no puede romper el framing del producto:

- **IA-First en experiencia**
- **OSF-First en autoridad**
- la conversación no ejecuta directo
- la governance sigue siendo visible

## Resultado esperado

Al cerrar este roadmap, Opita Sync debería tener:

1. una spec formal de demo ambiciosa;
2. un sandbox ERP básico (`Opita Office`) con persistencia diaria y reset automático;
3. una base de experiencia web/mobile demostrable;
4. una narrativa capaz de vender la visión del producto a nivel ejecutivo.

---

## Fase 0 — diseño y framing

### Objetivo

Cerrar la forma conceptual de la demo antes de construir runtime real.

### Entregables

- `docs/AMBITION_DEMO_SPEC.md`
- `docs/AMBITION_DEMO_ROADMAP.md`
- definición inicial de `Opita Office` como sandbox ERP del demo tenant

### Criterio de salida

- la demo tiene tesis clara;
- el momento wow está definido;
- los boundaries con OSF y con el tenant inicial comercial son explícitos.

---

## Fase 1 — sandbox ERP del demo tenant

### Objetivo

Crear `Opita Office` como ERP sandbox fácil de conectar a Opita Sync.

### Alcance mínimo

- customers
- orders
- inventory
- approvals / tasks
- journal de cambios del agente
- reset automático diario

### Entregables

- package `packages/opita-office-sandbox`
- dataset seed base
- modelo de datos TypeScript
- estrategia de persistencia local
- estrategia de reset diario

### Criterio de salida

- el sandbox puede persistir cambios del día;
- al cambiar la fecha, puede resetearse a baseline;
- el estado del ERP es suficientemente creíble para demo.

---

## Fase 2 — casos de demo y runtime narrativo

### Objetivo

Diseñar los workflows concretos que la demo debe soportar.

### Casos base

1. cambio de datos operativos de riesgo medio;
2. escalamiento a cambio más sensible;
3. approval visible cuando el riesgo aumenta;
4. verificación automática + validación humana guiada;
5. recomendación post-acción.

### Entregables

- catálogo de escenarios del demo tenant
- expected before/after por caso
- criterios de verificación y mejora

### Criterio de salida

- existe al menos un caso principal end-to-end que soporta plan, ejecución y verificación.

---

## Fase 3 — experiencia web

### Objetivo

Construir la landing-demo para desktop/web con foco ejecutivo.

### Debe mostrar

- propuesta de valor;
- estado del demo tenant;
- workflow activo o replay explicable;
- evidence / timeline / before-after;
- recomendaciones y desvíos.

### Entregables

- shell web de demo
- surface de explainability
- surface de before/after
- surface de audit trail resumida

### Criterio de salida

- una persona ejecutiva entiende el valor del producto sin necesitar contexto técnico profundo.

---

## Fase 4 — experiencia mobile

### Objetivo

Construir la entrada mobile con llamada en tiempo real al agente operativo.

### Debe mostrar

- intención expresada en llamada;
- interpretación rápida;
- 1 o 2 repreguntas de alto valor;
- propuesta gobernada;
- confirmación breve;
- seguimiento de ejecución;
- verificación compacta.

### Entregables

- shell mobile de demo
- flujo de llamada guiada
- resumen post-acción

### Criterio de salida

- la experiencia mobile tiene valor propio y no parece un responsive pobre de web.

---

## Fase 5 — conectores y loop operativo

### Objetivo

Conectar el agente operativo con el sandbox de demo y dejar visible el loop completo.

### Loop esperado

1. intención
2. propuesta
3. governance
4. ejecución
5. auditoría
6. verificación
7. siguiente recomendación

### Entregables

- change journal del agente
- evidence trail del caso
- deviation advisor
- next-best-action engine mínimo

### Criterio de salida

- la demo no sólo ejecuta: también explica, verifica y recomienda.

---

## Fase 6 — hardening de demo

### Objetivo

Convertir la demo en una experiencia repetible para ventas, narrativa y adopción controlada.

### Entregables

- reset diario estable
- demo seed reproducible
- runbook de demo
- lista de fallos tolerables / intolerables
- checklist de before-demo / after-demo

### Criterio de salida

- la demo puede correrse muchas veces sin degradar la calidad percibida.

---

## Prioridades inmediatas

### P0

1. spec formal
2. roadmap formal
3. scaffold de `Opita Office`
4. modelo de datos y seed inicial
5. estrategia de persistencia y reset diario

### P1

1. primer caso principal de cambio de datos
2. journal del agente
3. verificación before/after
4. surface web base

### P2

1. llamada mobile en tiempo real
2. deviation advisor
3. next-best-action engine
4. multi-step workflows más complejos

---

## Qué NO hacer

- no vender `Opita Office` todavía como producto separado lanzado;
- no fingir integraciones universales externas;
- no mezclar autoridad de OSF con experiencia de demo;
- no convertir la demo en “agente libre”;
- no construir primero una UI enorme sin definir datos, casos y journal.

---

## Resumen ejecutivo

> La landing-demo de Opita Sync debe convertirse en un tenant demo vivo.
>
> Ese tenant usará un ERP sandbox llamado `Opita Office` para mostrar cambios de datos reales, governance visible, auditoría, verificación y recomendaciones posteriores.
>
> El objetivo no es simular una app linda.
>
> El objetivo es demostrar una visión ambiciosa, creíble y controlada del producto.
