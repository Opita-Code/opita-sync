# Pilot second round results — 2026-03-31

## Contexto

- framework repo: `Opita-Code/opita-sync-framework`
- product repo: `Opita-Code/opita-sync`
- execution mode: framework dockerizado en `http://localhost:18080`
- purpose: ejecutar `P0.1` con mayor realismo operativo que la primera vuelta

## Qué se ejecutó

### Tenant A — `tenant-alpha-ops-r2`

- bootstrap: **operable**
- escenario: habilitar execution path gobernado
- escenario: habilitar capability visible
- escenario: activar conector del tenant
- approval explícita con pausa humana entre compile y release

### Tenant B — `tenant-beta-governance-r2`

- bootstrap: **operable**
- escenario: cambio de classification baseline
- escenario: recovery `resume_after_approval`
- conector menos ideal usado en baseline del tenant: `connector.plan.default`

## Mejoras respecto de la primera vuelta

1. el framework corrió dockerizado, no sólo local suelto;
2. se introdujeron pausas humanas de 1–5 segundos entre pasos;
3. hubo approval no inmediata en Alpha;
4. se usó un conector menos ideal (`connector.plan.default`) en Beta;
5. se capturaron scorecards nuevas por tenant.

## Scorecard resumida

### Alpha

- governance blocks: `2`
- approvals required: `2`
- successful releases: `3`
- fingerprint mismatches: `0`
- cases with full evidence trail: `3`
- end-to-end reconstructable: `3`
- recovery executed: `0`
- approval_to_execution_seconds: `4.03`

### Beta

- governance blocks: `1`
- approvals required: `1`
- successful releases: `0`
- fingerprint mismatches: `0`
- cases with full evidence trail: `1`
- end-to-end reconstructable: `1`
- recovery executed: `1`
- incident_to_recovery_decision_seconds: `3.04`

## Evaluación de P0.1

### Lo que sí se cumplió

- tenants nuevos y `operable` en segunda vuelta;
- corredor ejecutado otra vez en entorno más realista;
- approval no inmediata probada;
- conector menos ideal introducido;
- scorecards nuevas capturadas.

### Lo que todavía quedó corto

1. la scorecard automática sigue dejando varios tiempos en `0` porque esos tramos aún no se derivan bien del event grouping actual;
2. el realismo humano mejoró, pero sigue siendo una prueba operada por una sola persona/flujo controlado;
3. el conector menos ideal introducido sigue siendo controlado, no un conector enterprise realmente hostil.

## Decisión de P0.1

Estado:

- `P0.1 completed with follow-up gaps`

Esto significa:

- la segunda vuelta del piloto SÍ se ejecutó;
- aumentó el realismo respecto de la primera;
- pero todavía no alcanza por sí sola para promover el estado global a `pilot_passed`.

## Impacto sobre el estado global del piloto

El estado global sigue siendo:

- `pilot_passed_with_gaps`

La segunda vuelta confirma que el corredor resiste mejor el realismo, pero aún quedan tareas explícitas de `P0.2`, `P0.3` y `P0.4` antes de reabrir la decisión final.

## Próximos pasos

1. `P0.2` — captura humana consolidada de tiempos y decisiones;
2. `P0.3` — completar scorecard e incident log finales;
3. `P0.4` — probar un conector menos ideal todavía más exigente;
4. `P0.5` — revalidar estado final del piloto.
