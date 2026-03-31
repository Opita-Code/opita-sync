# Plan de piloto — Tenant configuration governance v1

## Objetivo

Pilotear Opita Sync sobre 1–2 tenants reales o simulados seriamente para validar el dominio `tenant configuration governance` sin abrir un producto paralelo.

## Regla del piloto

El piloto no busca demostrar “todo Opita Sync”.

Busca demostrar que un tenant puede recorrer con seguridad y trazabilidad:

`intake -> proposal -> preview -> governance -> execution -> inspection/recovery`

aplicado a cambios de configuración operativa del tenant.

## Tenants piloto propuestos

### Tenant A — `tenant-alpha-ops`

Perfil:

- equipo pequeño de operaciones internas;
- un admin tenant;
- un operator principal;
- un approver.

Objetivo:

- validar el corredor feliz y cambios de bajo/medio riesgo.

Escenarios foco:

1. habilitar capability de inspección;
2. habilitar capability de ejecución gobernada;
3. habilitar un conector default.

### Tenant B — `tenant-beta-governance`

Perfil:

- tenant más sensible desde governance;
- approval y classification más estrictas.

Objetivo:

- validar warnings, bloqueos, approvals y recovery.

Escenarios foco:

1. cambiar classification baseline;
2. cambiar approval baseline;
3. recuperar un cambio bloqueado;
4. compensar un cambio fallido o incierto.

## Escenarios mínimos del piloto

### Escenario 1 — Habilitar capability visible

- tenant: `tenant-alpha-ops`
- expected outcome: `tenant_change_applied`
- expected approval mode: no approval extra o review ligera según riesgo.

### Escenario 2 — Habilitar execution path gobernado

- tenant: `tenant-alpha-ops`
- expected outcome: `tenant_change_blocked_for_approval` seguido por `tenant_change_applied`
- expected approval mode: pre_execution.

### Escenario 3 — Activar conector

- tenant: `tenant-alpha-ops`
- expected outcome: `tenant_change_applied`
- expected evidence: connector projection actualizada + provider evidence refs.

### Escenario 4 — Cambiar classification baseline

- tenant: `tenant-beta-governance`
- expected outcome: preview warning + approval required.

### Escenario 5 — Recovery de cambio bloqueado o incierto

- tenant: `tenant-beta-governance`
- expected outcome: `tenant_change_applied`, `tenant_change_compensation_pending` o `tenant_change_unknown_outcome` explícito.

## Métricas del piloto

### Tiempo

- tiempo desde intención a proposal;
- tiempo desde proposal a preview;
- tiempo desde preview a approval;
- tiempo desde approval a ejecución;
- tiempo desde incidente a recovery decision.

### Gobernanza

- cantidad de cambios bloqueados por governance;
- cantidad de approvals requeridas;
- porcentaje de releases exitosos luego de approval;
- cantidad de mismatches de fingerprint detectados.

### Operabilidad

- porcentaje de casos con evidence trail completo;
- porcentaje de casos reconstruibles end-to-end;
- cantidad de recovery candidates `blocked` vs `executed`;
- porcentaje de tenants que permanecen `operable` luego del cambio.

### Calidad del piloto

- incidentes/gaps detectados por escenario;
- cantidad de cambios que requirieron intervención manual inesperada;
- claridad percibida del preview e inspection para operator/admin.

## Criterio de éxito

El piloto se considera exitoso si:

1. ambos tenants pueden quedar `operable`;
2. al menos 4 de 5 escenarios mínimos completan el corredor entero;
3. los casos bloqueados muestran approvals explícitas y reason codes claros;
4. los casos de recovery dejan audit trail y outcome explícito;
5. al menos el 80% de los casos del piloto son reconstruibles end-to-end;
6. no aparece bypass directo desde chat a provider.

## Criterio de fracaso

El piloto se considera fallido si ocurre cualquiera de estas:

1. un tenant queda marcado como `operable` sin cumplir mínimo duro real;
2. existen cambios aplicados sin evidencia o sin correlación suficiente;
3. approval/release puede bypassearse;
4. preview contradice de forma material lo que luego ocurre en ejecución sin señal clara del gap;
5. recovery produce mutación canónica fuera del corredor gobernado.

## Artefactos que deben quedar del piloto

- tenant bootstrap records de ambos tenants;
- proposals y patchsets por escenario;
- previews legibles y simulation results;
- approvals y decisiones auditadas;
- operator workspaces de inspection/recovery;
- incident log del piloto;
- tabla de métricas y resultados por escenario.

## Próximo paso después del piloto

Si el piloto pasa:

- endurecer conectores del dominio;
- abrir adopción limitada;
- preparar la siguiente vertical o ampliar el tenant configuration plane.

Si falla:

- cerrar gaps del corredor base antes de ampliar dominio.
