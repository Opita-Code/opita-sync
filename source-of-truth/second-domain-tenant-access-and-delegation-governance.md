# Segundo dominio — Gobernanza de accesos y delegación del tenant

## Decisión

El segundo dominio recomendado para Opita Sync es:

**gobernanza de accesos, grants y delegación dentro del tenant**.

## Por qué este dominio

Porque es la expansión más natural después de `tenant configuration governance`.

Ya validamos:

- tenant bootstrap;
- baselines de governance;
- catálogo visible;
- conectores habilitados;
- proposal / preview / approvals / inspection / recovery.

Lo siguiente lógico no es abrir un dominio ajeno, sino gobernar **quién puede usar qué** y **cómo se delega autoridad** dentro del tenant.

## Qué cubre

- grants de acceso a capabilities publicadas;
- cambios de visibilidad/uso/aprobación/asignación por principal o rol;
- delegación temporal o permanente dentro de límites gobernados;
- revocación de grants y delegaciones;
- cambios de autoridad interna del tenant sin bypassear policies base.

## Qué NO cubre todavía

- identity federation enterprise completa;
- IAM externo multi-cloud;
- recertificación masiva de accesos;
- organigramas de gran escala.

## Usuario principal

- `admin tenant`

## Usuarios secundarios

- `approver`
- `operator`

## Casos de uso iniciales

1. conceder uso de una capability a una persona o equipo;
2. restringir una capability previamente visible;
3. delegar temporalmente una capability sensible;
4. revocar una delegación activa;
5. promover o bloquear un grant sensible mediante approval explícita.

## Relación con el primer dominio

El primer dominio gobierna:

- **qué** existe y está habilitado para un tenant.

El segundo dominio gobierna:

- **quién** puede usarlo,
- **quién** puede aprobarlo,
- **quién** puede delegarlo.

## Activos clave del dominio

- capability grants
- delegation grants
- approval-required grants
- revocation events
- authority traces

## Reglas de approval del dominio

- grants de bajo riesgo pueden quedar dentro de límites automáticos del tenant;
- grants sobre capabilities restringidas o aprobables requieren approval explícita;
- delegaciones sobre authority-sensitive actions deben ser temporales o auditables por default;
- toda revocación debe dejar evidencia explícita y efecto visible en la surface del tenant admin.

## Outcomes requeridos

- `grant_applied`
- `grant_blocked_for_approval`
- `grant_rejected`
- `delegation_applied`
- `delegation_revoked`
- `delegation_compensation_pending`

## Escenarios mínimos del dominio

### 1. Conceder uso de capability visible
- riesgo bajo/medio;
- debe actualizar la surface de tenant admin.

### 2. Delegar temporalmente una capability sensible
- requiere preview legible;
- approval probable.

### 3. Revocar un grant existente
- debe dejar audit trail y efecto visible.

### 4. Bloquear una delegación inválida
- debe quedar explicitado por governance.

### 5. Recuperar una delegación parcialmente aplicada
- debe usar corredor gobernado y recovery explícito.

## Criterio de éxito

El segundo dominio queda bien elegido cuando:

- amplía naturalmente el tenant configuration plane;
- reutiliza el mismo corredor gobernado;
- tiene valor claro para tenant admin y approver;
- permite abrir una expansión creíble sin inventar un producto nuevo.
