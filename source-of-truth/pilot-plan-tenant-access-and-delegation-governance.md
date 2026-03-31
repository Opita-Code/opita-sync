# Plan de piloto — Tenant access and delegation governance v1

## Objetivo

Pilotear el segundo dominio de Opita Sync sobre 1–2 tenants para validar grants, delegación, approval explícita y revoke dentro del corredor gobernado.

## Regla del piloto

Este piloto no busca probar toda identity enterprise.

Busca validar que el tenant access plane puede recorrer con seguridad:

`grant/delegation request -> preview/governance -> approval -> activation or revoke -> inspection`

sin romper el corredor central ni introducir otra fuente de verdad.

## Tenants piloto propuestos

### Tenant A — `tenant-gamma-access`

Perfil:

- tenant con foco en grants directos;
- admin tenant activo;
- approver dedicado.

Objetivo:

- validar grants de bajo y medio riesgo.

Escenarios foco:

1. conceder uso de una capability visible;
2. conceder un grant sensible con approval;
3. revocar un grant activo.

### Tenant B — `tenant-delta-delegation`

Perfil:

- tenant con foco en delegación y authority-sensitive actions.

Objetivo:

- validar delegación temporal, bloqueos y revocación.

Escenarios foco:

1. delegar temporalmente una capability sensible;
2. bloquear una delegación inválida o demasiado profunda;
3. revocar una delegación activa.

## Escenarios mínimos del piloto

### Escenario 1 — Grant visible capability

- tenant: `tenant-gamma-access`
- expected outcome: `grant_applied`
- expected approval mode: none or light review.

### Escenario 2 — Grant sensitive capability

- tenant: `tenant-gamma-access`
- expected outcome: `grant_blocked_for_approval` seguido por `grant_applied`
- expected approval mode: pre_execution.

### Escenario 3 — Revoke active grant

- tenant: `tenant-gamma-access`
- expected outcome: `grant_revoked` explícito y auditado.

### Escenario 4 — Delegate sensitive capability temporarily

- tenant: `tenant-delta-delegation`
- expected outcome: `delegation_applied` con approval o bloqueo explícito según riesgo.

### Escenario 5 — Revoke active delegation

- tenant: `tenant-delta-delegation`
- expected outcome: `delegation_revoked` explícito y visible.

## Métricas del piloto

### Tiempo

- tiempo desde intención a grant/delegation draft;
- tiempo desde draft a approval;
- tiempo desde approval a activación;
- tiempo desde revocation request a revocation visible.

### Gobernanza

- cantidad de grants bloqueados por approval;
- cantidad de delegaciones bloqueadas;
- cantidad de revocaciones auditadas;
- cantidad de approvals exitosas.

### Operabilidad

- porcentaje de grants reconstruibles end-to-end;
- porcentaje de delegaciones reconstruibles end-to-end;
- claridad de la access admin workspace para tenant admin;
- consistencia entre grant/delegation state y evidence trail.

## Criterio de éxito

El piloto se considera exitoso si:

1. ambos tenants pueden operar grants/delegaciones sin bypass del corredor;
2. al menos 4 de 5 escenarios completan el corredor esperado;
3. grants/delegaciones sensibles requieren approval explícita cuando corresponde;
4. revoke queda visible y auditada;
5. al menos el 80% de los casos son reconstruibles end-to-end.

## Criterio de fracaso

El piloto se considera fallido si ocurre cualquiera de estas:

1. un grant sensible queda activo sin approval cuando debía bloquearse;
2. una revocación no deja efecto visible ni audit trail;
3. una delegación bypassea depth/authority constraints;
4. la access admin workspace contradice el estado canónico del access plane.

## Próximo paso después del piloto

Si el piloto pasa:

- endurecer access admin UX;
- enriquecer grants/delegaciones con más casos de negocio;
- abrir integración más fuerte con identity/authority context.

Si falla:

- cerrar gaps del segundo dominio antes de escalarlo.
