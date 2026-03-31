# Pilot second round plan — P0.1

## Objetivo

Ejecutar una **segunda vuelta del piloto** en condiciones más realistas para convertir `pilot_passed_with_gaps` en una validación más fuerte del dominio `tenant configuration governance`.

## Qué cambia respecto de la primera vuelta

La primera vuelta validó bien el corredor, pero en condiciones demasiado favorables:

- ejecución local muy rápida;
- poca fricción humana real;
- conectores demasiado ideales;
- poca separación temporal entre pasos.

La segunda vuelta debe introducir **fricción realista controlada**, no caos.

---

## Objetivo de esta segunda vuelta

Validar que Opita Sync sigue funcionando bien cuando:

- hay pausas reales entre etapas;
- participan personas distintas por rol;
- se usa un conector menos ideal que el default;
- los tiempos del corredor reflejan más de cerca el uso real;
- el scorecard final puede respaldar `pilot_passed`.

---

## Setup de la segunda vuelta

### Entorno objetivo

- entorno reproducible no efímero;
- framework levantado fuera de memoria local pura si es posible;
- base URL estable para toda la ronda;
- timestamps registrados manualmente además de scorecard automática.

### Tenants

- `tenant-alpha-ops`
- `tenant-beta-governance`

### Roles humanos

Cada tenant debe tener, idealmente, personas distintas para:

- `admin tenant`
- `operator`
- `approver`

No hace falta un equipo grande, pero sí importa separar al menos operator y approver en la segunda vuelta.

---

## Escenarios obligatorios de segunda vuelta

### Tenant Alpha

1. habilitar capability visible
2. habilitar execution path gobernado
3. activar conector del tenant

### Tenant Beta

4. cambiar classification baseline
5. recovery de cambio bloqueado o incierto

---

## Variaciones obligatorias para aumentar realismo

### Variación 1 — Pausa humana entre pasos

No correr todo en secuencia instantánea.

Aplicar pausas reales entre:

- intake y proposal
- preview y approval
- approval y execution
- incidente y recovery decision

Objetivo: capturar tiempos humanos reales.

### Variación 2 — Approval no inmediata

Al menos un escenario debe esperar una approval no instantánea.

Objetivo: validar mejor el tramo `preview -> approval -> execution`.

### Variación 3 — Conector menos ideal

Usar al menos un conector o binding con una condición menos feliz que el `connector.default` más cómodo.

No hace falta ir a enterprise completo; sí hace falta una condición más realista.

### Variación 4 — Registro humano del outcome esperado

Antes de cada escenario, el operator debe registrar:

- outcome esperado
- approval esperada o no
- riesgo esperado

Objetivo: luego comparar expected vs actual.

---

## Cronograma sugerido

### Día 1

- verificación de entorno
- bootstrap / sanity de tenants
- escenarios 1 y 2 de Alpha

### Día 2

- escenario 3 de Alpha
- escenario 4 de Beta

### Día 3

- escenario 5 de Beta
- consolidación de scorecard
- consolidación de incident log
- decisión final del piloto

---

## Registro obligatorio por escenario

Cada escenario debe dejar:

- tenant
- scenario id
- operator
- approver (si aplica)
- start time humano
- end time humano
- expected outcome
- actual outcome
- execution id
- trace id
- approval request id si aplica
- recovery action id si aplica

---

## Métricas que esta segunda vuelta debe mejorar

### Timing

Los tiempos ya no deberían quedar en `0` para la mayoría de tramos.

Especialmente:

- `intention_to_proposal_seconds`
- `preview_to_approval_seconds`
- `approval_to_execution_seconds`
- `incident_to_recovery_decision_seconds`

### Realismo operativo

- approval no inmediata en al menos un caso
- interacción humana real en al menos dos etapas del corredor
- conector menos ideal probado en al menos un escenario

---

## Criterio de cierre de P0.1

P0.1 se considera cumplido si:

1. los 5 escenarios vuelven a correrse con el corredor completo;
2. existe evidencia humana de tiempos y decisiones;
3. al menos un caso incluye approval no inmediata;
4. al menos un caso usa conector menos ideal;
5. la scorecard sigue mostrando governance y reconstructability aceptables.

---

## Artefactos obligatorios al final de P0.1

- scorecard automática por tenant
- scorecard humana consolidada
- incident log actualizado
- tabla `expected vs actual`
- decisión de si se avanza a `P0.2` o si hace falta corrección previa

---

## Riesgos a observar

- approvals demasiado manuales o lentas para el dominio;
- preview poco clara al subir sensibilidad;
- operator workspace insuficiente para decidir recovery;
- drift entre expected y actual no explicado;
- scorecard automática insuficiente para narrativa humana del piloto.

---

## Resultado esperado

Al terminar P0.1 el equipo debería poder afirmar:

- si el corredor soporta realismo operativo mejor que la primera vuelta;
- si el dominio sigue siendo el correcto para consolidar el producto;
- si hay base suficiente para avanzar a `P0.2` y `P0.3` sin reabrir el diseño.
