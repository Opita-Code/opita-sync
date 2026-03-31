# Pilot execution checklist — Tenant configuration governance

## Objetivo

Checklist operativo para ejecutar el piloto de Opita Sync sobre el dominio `tenant configuration governance` sin perder trazabilidad ni criterio de validación.

## Preparación previa

### Repos y contexto
- [ ] repo `opita-sync` actualizado
- [ ] repo `opita-sync-framework` actualizado
- [ ] `docs/ENGRAM_HANDOFF.md` leídos en ambos repos
- [ ] boundary OSF vs producto entendido por quienes participan

### Entorno
- [ ] región AWS efectiva confirmada
- [ ] ambiente de piloto definido (`dev` o `pilot`)
- [ ] storage y secretos disponibles
- [ ] repositorio framework con tests verdes (`go test ./...`)

### Tenants piloto
- [ ] `tenant-alpha-ops` bootstrappeado
- [ ] `tenant-beta-governance` bootstrappeado
- [ ] ambos tenants con `admin tenant`, `operator` y `approver`
- [ ] ambos tenants en estado `operable`

### Baselines del tenant
- [ ] policy baseline aplicada
- [ ] approval baseline aplicada
- [ ] classification baseline aplicada
- [ ] catálogo visible cargado
- [ ] connector projection cargada

## Ejecución del piloto

### Escenario 1 — Habilitar capability visible
- [ ] intake generado
- [ ] proposal creada
- [ ] preview legible revisada
- [ ] execution/inspection completadas
- [ ] evidence trail verificada

### Escenario 2 — Habilitar execution path gobernado
- [ ] preview bloquea o advierte correctamente
- [ ] approval request generada
- [ ] release/reject/escalate probado según corresponda
- [ ] outcome final registrado

### Escenario 3 — Activar conector
- [ ] connector projection actualizada
- [ ] provider evidence refs generadas
- [ ] inspection muestra el cambio

### Escenario 4 — Cambiar classification baseline
- [ ] preview muestra warning
- [ ] approval requerida si corresponde
- [ ] operator puede inspeccionar impacto

### Escenario 5 — Recovery de cambio bloqueado o incierto
- [ ] recovery candidate creada
- [ ] estado bloqueado/ejecutado visible
- [ ] outcome de recovery auditado

## Métricas a capturar

### Tiempo
- [ ] intención -> proposal
- [ ] proposal -> preview
- [ ] preview -> approval
- [ ] approval -> execution
- [ ] incidente -> recovery decision

### Gobernanza
- [ ] bloqueos por governance
- [ ] approvals requeridas
- [ ] releases exitosos
- [ ] mismatches de fingerprint

### Operabilidad
- [ ] casos con evidence trail completo
- [ ] casos reconstruibles end-to-end
- [ ] recovery candidates blocked vs executed
- [ ] tenants que siguen `operable`

### Calidad
- [ ] incidentes/gaps registrados
- [ ] intervención manual inesperada registrada
- [ ] claridad de preview/inspection evaluada

## Gate de cierre

- [ ] comparar resultados contra `success criteria`
- [ ] comparar resultados contra `failure criteria`
- [ ] registrar decisión final: `pilot_passed`, `pilot_passed_with_gaps`, `pilot_failed`

## Artefactos de salida obligatorios

- [ ] scorecard del piloto completa
- [ ] incident log completo
- [ ] resultados por escenario
- [ ] decisión final documentada
