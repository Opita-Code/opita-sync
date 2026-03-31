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

- approvals required: `1`
- successful releases: `1`
- governance blocks: `1`
- fingerprint mismatches: `0`
- cases with full evidence trail: `1`
- end-to-end reconstructable: `1`
- recovery executed: `0`

### Beta scorecard snapshot

- approvals required: `3`
- successful releases: `0`
- governance blocks: `3`
- fingerprint mismatches: `0`
- cases with full evidence trail: `3`
- end-to-end reconstructable: `3`
- recovery executed: `1`

## Hallazgos

1. el corredor completo ya puede correrse localmente para al menos dos escenarios relevantes del dominio;
2. los dos tenants quedaron `operable` con bootstrap real;
3. el operator workspace y la scorecard del piloto quedaron funcionales;
4. la medición por tiempo hoy da valores casi `0` en varios tramos porque el piloto corrió sin pausas humanas reales en memoria local;
5. todavía no se ejecutó la suite completa de 5 escenarios del pilot pack.

## Estado del piloto

Estado actual:

- `pilot_in_progress`

No corresponde marcar aún:

- `pilot_passed`
- `pilot_failed`

porque todavía faltan escenarios del pilot pack y una scorecard completa consolidada.

## Siguientes pasos sugeridos

1. ejecutar los escenarios faltantes del pilot pack;
2. completar `PILOT_SCORECARD_TEMPLATE.md` con los resultados finales;
3. registrar incidentes concretos en `PILOT_INCIDENT_LOG_TEMPLATE.md` si aparecen gaps;
4. decidir `pilot_passed`, `pilot_passed_with_gaps` o `pilot_failed` con evidencia completa.
