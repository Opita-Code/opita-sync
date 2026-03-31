# Primer dominio — Gobernanza de cambios de configuración operativa del tenant

## Decisión

El primer dominio real de Opita Sync v1 es:

**gobernanza de cambios de configuración operativa del tenant**.

## Qué cubre

- habilitación o retiro de capabilities visibles para un tenant;
- habilitación o retiro de conectores del tenant;
- cambios sobre baselines de policy, approval y classification del tenant;
- cambios de readiness operativa del tenant dentro del corredor gobernado.

## Por qué este dominio

Porque es el dominio más coherente con lo ya implementado:

- tenant bootstrap;
- baseline profiles;
- catálogo visible;
- conectores habilitados;
- proposal / preview / approvals / inspection / recovery.

No exige inventar una línea de producto paralela ni depender todavía de conectores enterprise externos complejos.

## Usuario principal

- `admin tenant`

## Usuarios secundarios

- `operator`
- `approver`

## Casos de uso iniciales

1. habilitar una capability visible para un tenant;
2. habilitar un conector del tenant;
3. cambiar el baseline de approval del tenant;
4. cambiar el baseline de classification del tenant;
5. revisar preview antes de promover el cambio;
6. inspeccionar y recuperar si la activación queda bloqueada o inconsistente.

## Qué NO cubre todavía

- procesos de negocio externos al tenant configuration plane;
- automatización multi-sistema enterprise compleja;
- marketplace/distribution layer;
- catálogo global multi-producto;
- identity federation avanzada.

## Conectores iniciales del dominio

- `connector.default`
- `connector.plan.default`
- `connector.execution.default`

## Capabilities iniciales del dominio

- `tenant.intake.capture_intent`
- `tenant.proposal.create_change_draft`
- `tenant.preview.run_governance_preview`
- `tenant.execution.compile_governed_intent`
- `tenant.execution.inspect_run`
- `tenant.approval.release_blocked_execution`
- `tenant.recovery.resume_after_approval`
- `tenant.recovery.request_manual_compensation`

## Reglas de approval del dominio

- cambios de visibilidad menor del catálogo pueden quedar en `review_required` sin aprobación extra si no afectan ejecución ni clasificación sensible;
- cambios que habilitan execution paths, conectores activos o perfiles más sensibles deben requerir approval explícita;
- cambios sobre classification o approval baseline deben tratarse como cambios de alta sensibilidad;
- cualquier drift entre preview aprobado y configuración efectiva debe invalidar promoción previa.

## Outcomes requeridos

- `tenant_change_applied`
- `tenant_change_blocked_for_approval`
- `tenant_change_rejected`
- `tenant_change_compensation_pending`
- `tenant_change_unknown_outcome`

## Escenarios mínimos del dominio

### 1. Habilitar capability de inspección para un tenant
- bajo riesgo;
- preview legible;
- activation esperada sin compensación.

### 2. Habilitar capability de ejecución gobernada
- riesgo medio/alto;
- approval requerida;
- audit trail completo.

### 3. Activar un conector del tenant
- debe quedar visible en connector projection;
- no puede bypassear governance.

### 4. Cambiar classification baseline
- preview debe advertir impacto de visibilidad/redacción;
- approval requerida.

### 5. Recovery de activación bloqueada
- resume after approval o manual compensation cuando aplique.

## Criterio de éxito

El dominio queda bien modelado cuando:

- cabe dentro de capabilities y governance actuales;
- puede pilotearse con tenants reales o simulados;
- tiene outcomes, approvals y conectores explícitos;
- no necesita inventar un producto paralelo al corredor ya definido.
