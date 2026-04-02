# Week 2 rerun results — tenant access and delegation governance

## Contexto

- framework repo: `Opita-Code/opita-sync-framework`
- product repo: `Opita-Code/opita-sync`
- execution mode: framework service at `http://localhost:18080`
- objective: rerun del piloto del segundo dominio con scorecards e incident candidates ya mejoradas

## Tenants usados

- `tenant-gamma-access-r3`
- `tenant-delta-delegation-r3`

## Expected vs actual por escenario

| Scenario | Tenant | Expected | Actual | Passed | Notes |
|---|---|---|---|---|---|
| enable visible capability grant | tenant-gamma-access-r3 | `grant_applied` | `active` | yes | flujo simple validado |
| grant sensitive capability | tenant-gamma-access-r3 | `grant_blocked_for_approval -> grant_applied` | `blocked -> active` | yes | approval explícita visible |
| revoke active grant | tenant-gamma-access-r3 | `grant_revoked` | `revoked` | yes | revocation visible en workspace |
| delegate sensitive capability | tenant-delta-delegation-r3 | `delegation_applied` | `blocked -> active` | yes | approval explícita visible |
| revoke active delegation | tenant-delta-delegation-r3 | `delegation_revoked` | `revoked` | yes | revocation visible en workspace |

## Señal automática observada

### Tenant Gamma

- `grants_created = 2`
- `grants_blocked_for_approval = 1`
- `grants_released = 1`
- `grants_revoked = 1`
- `access_scenarios_observed = 2`
- `access_scenarios_complete = 1`
- incident candidates: `1` (`grant awaiting approval`)

### Tenant Delta

- `delegations_created = 1`
- `delegations_blocked = 1`
- `delegations_released = 1`
- `delegations_revoked = 1`
- `access_scenarios_observed = 1`
- `access_scenarios_complete = 1`
- incident candidates: `1` (`delegation awaiting approval`)

## Evaluación

### Lo que mejoró respecto del primer piloto del segundo dominio

1. la observabilidad ya reconoce mejor grants y delegaciones como first-class citizens;
2. los incident candidates ya capturan awaiting approval del access plane;
3. el expected vs actual queda mucho más legible por escenario.

### Lo que todavía sigue corto

1. los tiempos automáticos del access plane todavía salen en `0` porque el corredor de grants/delegations no emite los mismos hitos temporales que el primer dominio;
2. la scorecard por escenario todavía es más útil que la scorecard agregada tenant-level para este dominio;
3. la UX del segundo dominio ya es usable, pero todavía no tan pulida como la del primero.

## Decisión de Semana 2 para el segundo dominio

Estado:

- `second_domain_rerun_passed_with_gaps`

## Por qué

Porque:

- todos los escenarios esperados pasaron;
- approval y revoke ya son parte normal del access plane;
- el workspace usable y la observabilidad mejorada demostraron valor real;
- pero la medición temporal y la elegancia operativa todavía están un paso detrás del primer dominio.

## Próximo paso sugerido

Dos caminos razonables:

1. consolidar aún más la observabilidad temporal del segundo dominio;
2. hacer una evaluación global del estado del segundo dominio frente al primero y decidir si ya se considera suficientemente maduro.
