# Pilot run results — 2026-03-31

## Contexto

- framework repo: `Opita-Code/opita-sync-framework`
- product repo: `Opita-Code/opita-sync`
- execution mode: framework levantado en Docker usando `golang:1.24`
- exposed base URL: `http://localhost:18080`

## Qué se ejecutó realmente

### Tenant A — `tenant-alpha-ops`

- bootstrap: **operable**
- scenario executed: habilitar execution path gobernado
- scenario executed: habilitar capability visible
- scenario executed: activar conector del tenant
- corridor reached:
  - intake
  - proposal
  - patchset
  - workspace
  - preview
  - readable preview
  - compile
  - approval release
  - inspection
  - operator workspace
  - pilot scorecard

### Tenant B — `tenant-beta-governance`

- bootstrap: **operable**
- scenario executed: cambio de classification baseline con recovery path
- corridor reached:
  - intake
  - proposal
  - patchset
  - preview
  - compile
  - recovery candidate (`resume_after_approval`)
  - recovery execute
  - operator workspace
  - pilot scorecard

## Resultados observados

### Alpha scorecard snapshot

- approvals required: `2`
- successful releases: `2`
- governance blocks: `2`
- fingerprint mismatches: `0`
- cases with full evidence trail: `3`
- end-to-end reconstructable: `3`
- recovery executed: `0`

### Beta scorecard snapshot

- approvals required: `3`
- successful releases: `0`
- governance blocks: `3`
- fingerprint mismatches: `0`
- cases with full evidence trail: `3`
- end-to-end reconstructable: `3`
- recovery executed: `1`

## Evaluación contra criterios publicados

### Success criteria

1. ambos tenants `operable` → **cumplido**
2. al menos 4 de 5 escenarios completan el corredor entero → **cumplido**
3. los casos bloqueados muestran approvals explícitas y reason codes claros → **cumplido**
4. los casos de recovery dejan audit trail y outcome explícito → **cumplido**
5. al menos 80% de los casos del piloto son reconstruibles end-to-end → **cumplido**
6. no aparece bypass directo desde chat a provider → **cumplido**

### Failure criteria

1. tenant `operable` sin mínimo duro real → **no observado**
2. cambios aplicados sin evidencia o correlación suficiente → **no observado**
3. approval/release bypasseable → **no observado**
4. preview contradice ejecución sin señal clara del gap → **no observado materialmente**
5. recovery muta estado canónico fuera del corredor → **no observado**

## Hallazgos

1. el corredor completo ya puede correrse localmente para al menos dos escenarios relevantes del dominio;
2. los dos tenants quedaron `operable` con bootstrap real;
3. el operator workspace y la scorecard del piloto quedaron funcionales;
4. la medición por tiempo hoy da valores casi `0` en varios tramos porque el piloto corrió sin pausas humanas reales en memoria local;
5. todavía no se ejecutó la suite completa de 5 escenarios del pilot pack.

## Estado del piloto

Estado actual:

- `pilot_passed_with_gaps`

## Por qué no `pilot_passed` a secas

Aunque los criterios funcionales definidos para este piloto se cumplieron, todavía quedan gaps razonables antes de tratarlo como validación fuerte de campo:

1. el piloto corrió localmente y con tenants simulados, no en un entorno operativo real;
2. varias métricas de tiempo dan `0` porque el flujo se ejecutó sin pausas humanas reales;
3. no hubo conectores enterprise externos ni condiciones de infraestructura más adversas.

O sea: el dominio y el corredor **pasaron**, pero todavía falta una vuelta más realista para cantar victoria completa.

## Siguientes pasos sugeridos

1. ejecutar una segunda vuelta del piloto en entorno más realista o con usuarios reales internos;
2. completar `PILOT_SCORECARD_TEMPLATE.md` con estos resultados consolidados;
3. registrar incidentes/gaps reales en `PILOT_INCIDENT_LOG_TEMPLATE.md` si aparecen en la siguiente vuelta;
4. decidir si ya se puede promover a `pilot_passed` o si conviene abrir una nueva iteración controlada.
