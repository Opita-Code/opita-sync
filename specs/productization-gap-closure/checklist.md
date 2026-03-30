# Checklist operativo — Productization Gap Closure

## S0 — Product scope and first vertical
- [x] definir vertical inicial v1
- [x] definir roles y journeys
- [x] definir catálogo inicial de capabilities
- [x] fijar guardrails de producto sobre la slice actual

## S0A — OSF vs Opita Sync consumption boundary
- [x] fijar separación framework vs producto
- [x] fijar ownership por plano
- [x] fijar modelo de consumo de OSF por Opita Sync
- [x] prohibir duplicación de runtime, truth y policy en producto

## S1 — Tenant operable baseline
- [x] definir tenant minimum hard v1
- [x] definir estados del tenant
- [x] definir criterio de `operable`
- [x] definir health check funcional mínimo

## S1A — AWS-first platform profile
- [x] mapear seams principales a servicios AWS recomendados
- [x] fijar qué decisiones duras NO se reemplazan por servicios AWS alternativos
- [x] fijar baseline AWS recomendado para truth plane, runtime, policy, artifacts, cache, retrieval y compute
- [x] fijar opcionales y tradeoffs de identity, edge y observability

## S1C — AWS bootstrap and landing zone
- [x] fijar región efectiva válida del proyecto
- [x] fijar landing zone private-first para EKS y Aurora
- [x] fijar baseline de secretos, cifrado y tagging
- [x] fijar estrategia recomendada de VPC y egress

## S2 — PostgreSQL hardening
- [x] fijar artifacts críticos a persistir
- [x] fijar invariantes de roundtrip y correlación
- [x] fijar expectativas de simetría memory/postgres
- [x] fijar acceptance técnica del hardening

## S3 — Approvals and release hardening
- [x] fijar lifecycle mínimo de approval
- [x] fijar identidad del actor decisor
- [x] fijar invalidación por fingerprint
- [x] fijar surface mínima de release/reject/escalate

## S4 — Evidence trail hardening
- [x] fijar cadena canónica de correlación
- [x] fijar eventos mínimos obligatorios
- [x] fijar autoridad de evidencia
- [x] fijar acceptance de reconstrucción end-to-end

## S5 — Recovery and compensation minimum
- [x] fijar subset mínimo de recovery soportado
- [x] fijar reglas de `unknown_outcome`
- [x] fijar evidencia previa mínima
- [x] fijar escenarios válidos e inválidos

## S6 — Tenant bootstrap operable
- [x] fijar endpoint o flujo de bootstrap
- [x] fijar payload mínimo
- [x] fijar artifacts de salida
- [x] fijar success y failure paths

## Estado operativo actual

- [x] los bloques S0-S6 ya tienen spec escrita
- [x] la línea quedó lista para guiar implementación
- [ ] falta implementación real en código
