# Productization Gap Closure — Estado actual

## Objetivo

Traducir el plan de desarrollo de Opita Sync sobre OSF a una línea nueva de specs para cerrar gaps de producto y hardening P0 con mejor precisión de implementación.

## Estado general

- Estado: **abierta como línea explícita de specs v1**
- Naturaleza: **productización y hardening focalizado sobre baseline reusable v1**
- Próximo bloque recomendado: **S1C — AWS bootstrap and landing zone v1**, luego **S2 — PostgreSQL hardening v1**

## Fases de esta línea

1. `S0` — product scope and first vertical
2. `S0A` — OSF vs Opita Sync consumption boundary
3. `S1` — tenant operable baseline
4. `S1A` — AWS-first platform profile
5. `S1C` — AWS bootstrap and landing zone
6. `S2` — PostgreSQL hardening
7. `S3` — approvals and release hardening
8. `S4` — evidence trail hardening
9. `S5` — recovery and compensation minimum
10. `S6` — tenant bootstrap operable
11. `S7` — first domain: tenant configuration governance
12. `S8` — pilot plan for tenant configuration governance

## Regla de lectura obligatoria

Esta línea:

- **no** reabre A-E;
- **no** redefine OSF;
- **sí** define cómo cerrar gaps reales del producto sobre la slice actual.

## Artefactos base

- `docs/OPITA_SYNC_PRODUCT_ROADMAP.md`
- `docs/OPITA_SYNC_IMPLEMENTATION_READY.md`
- `docs/OPITA_SYNC_SPEC_MODEL.md`

## Criterio de avance

Cada bloque pasa a implementación sólo cuando:

- su spec existe;
- sus escenarios son testeables;
- su acceptance criteria no depende de interpretación libre.
