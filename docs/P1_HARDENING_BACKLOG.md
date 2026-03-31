# P1 hardening backlog — after `pilot_passed_with_gaps`

## Objetivo

Abrir una fase de endurecimiento controlado sobre Opita Sync después del cierre formal del piloto en `pilot_passed_with_gaps`.

## Regla de esta fase

No se trata de reabrir el dominio ni el corredor.

Se trata de fortalecer lo ya validado para:

- mejorar realismo operativo;
- reducir trabajo manual alrededor del piloto;
- preparar mejor el siguiente salto de producto.

---

## P1.1 — Scorecard por escenario

**Status:** implemented in framework

### Problema

La scorecard actual está bien por tenant, pero todavía mezcla múltiples ejecuciones y hace más difícil leer el resultado por escenario.

### Objetivo

Agregar una vista por escenario que conecte mejor:

- caso de uso
- execution id
- outcome
- tiempos
- governance

### Entregables

- diseño de scenario identifier estable;
- scorecard por escenario;
- relación explícita tenant ↔ scenario ↔ execution.

### Acceptance

- cada escenario del pilot pack puede verse aislado;
- la scorecard deja de depender sólo del agrupamiento por tenant;
- expected vs actual se vuelve más legible.

---

## P1.2 — Incident candidates derivados del evidence trail

**Status:** implemented in framework

### Problema

El incident log final fue útil, pero sigue dependiendo de redacción manual.

### Objetivo

Derivar candidatos automáticos de incidentes/gaps desde:

- approvals
- recoveries
- mismatches
- events con warning o blocked states

### Entregables

- regla mínima para incident candidates;
- export legible o endpoint de incident candidates;
- payload mínimo para prellenar incident log.

### Acceptance

- al menos warnings, blocked recoveries y fingerprint mismatches generan candidate;
- el candidate incluye tenant, execution, trace, severity y summary inicial;
- sigue siendo una ayuda, no la nueva verdad del sistema.

---

## P1.3 — Runbook más estructurado

**Status:** implemented in product docs

### Problema

El runbook ya sirve, pero todavía puede mejorar en precisión operacional.

### Objetivo

Agregar:

- checkpoints por escenario;
- expected outcome machine-readable;
- trazas mínimas obligatorias por paso;
- mejor vínculo con scorecard final e incident log.

### Entregables

- versión enriquecida de `PILOT_RUNBOOK.md`;
- checklist por escenario;
- expected-vs-actual más estructurado.

### Acceptance

- un operador puede ejecutar el runbook con menos interpretación libre;
- cada escenario tiene checkpoints claros;
- el cierre del escenario deja artifacts humanos y técnicos alineados.

---

## P1.4 — Tenant admin UX más concreta

### Problema

El dominio ya corre, pero sigue siendo bastante técnico desde la experiencia de tenant admin.

### Objetivo

Hacer más explícita la operación de:

- catálogo visible;
- conectores habilitados;
- baselines de policy/approval/classification.

### Entregables

- surface más concreta para tenant admin;
- lenguaje más producto y menos artefacto crudo;
- summary de impacto antes de promover cambios.

### Acceptance

- tenant admin puede entender qué está habilitando o endureciendo;
- la surface no duplica el kernel;
- el dominio se vuelve más operable para uso real.

---

## Orden recomendado

1. `P1.1`
2. `P1.2`
3. `P1.3`
4. `P1.4`

---

## Resultado esperado

Al terminar `P1`, Opita Sync debería quedar mejor preparado para:

- una validación humana más fuerte;
- adopción más ordenada del tenant configuration plane;
- apertura futura de segunda vertical o expansión de conectores.
