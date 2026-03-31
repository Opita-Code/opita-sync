# P0.4 results — restricted connector validation

## Objetivo

Validar que el dominio `tenant configuration governance` aguanta un conector más exigente que los usados hasta ahora.

## Conector probado

- `connector.execution.restricted`

## Qué lo hace más exigente

- scope: `execution_restricted`
- eleva riesgo y restricciones del provider;
- fuerza un comportamiento más cercano a un execution path con controles adicionales.

## Ejecución realizada

- tenant: `tenant-beta-governance-r3`
- bootstrap: **operable**
- connector projection: `connector.execution.restricted`
- escenario: habilitar y promover conector restringido para el tenant beta

## Observaciones clave

### Preview legible

- `preview_state = preview_warning`
- `approvals.required = true`
- `risk.summary = medium impact expected`
- `promotion_readiness = requires_operator_review`

### Approval

- approval request explícita generada
- release explícita ejecutada
- decision reason code: `approval.release.restricted-connector`

### Execution

- execution state final: `execution_released`
- operator workspace boundary preservado:
  - `operator_surface_reads_and_requests_kernel_executes`

### Scorecard

- governance blocks: `1`
- approvals required: `1`
- successful releases: `1`
- fingerprint mismatches: `0`
- cases with full evidence trail: `1`
- end-to-end reconstructable: `1`

## Conclusión de P0.4

Estado:

- `P0.4 completed`

El dominio soportó un conector más exigente sin romper:

- governance
- approvals
- readable preview
- evidence trail
- operator workspace

## Qué NO demuestra todavía

No demuestra aún un conector enterprise realmente hostil o externo.

Pero sí sube de nivel el realismo respecto de:

- `connector.default`
- `connector.plan.default`

## Impacto sobre el post-piloto

Con `P0.1`, `P0.2`, `P0.3` y `P0.4` ya trabajados, el siguiente paso sano es:

- `P0.5` — revalidar la decisión global del piloto
