# Opita Sync — Spec Model for Gap Closure

## Objetivo

Definir el modelo de especificación a usar para cerrar gaps de productización sobre OSF sin reabrir el roadmap A-E ya congelado.

## Regla central

La línea `specs/productization-gap-closure/` es una línea **nueva y explícita** de trabajo.

No continúa implícitamente A-E.
No reemplaza el baseline reusable v1.
No redefine el framework.

Su función es convertir el plan de producto y hardening P0 en specs ejecutables y auditables.

## Estructura

Cada spec de esta línea debe incluir, como mínimo:

1. `Objetivo`
2. `In scope`
3. `Out of scope`
4. `Requirements` con lenguaje normativo (`MUST`, `SHALL`, `SHOULD`, `MAY`)
5. `Scenarios` en formato `GIVEN / WHEN / THEN`
6. `Acceptance criteria`
7. `Dependencies`

## Artefactos normativos

La fuente principal para cerrar gaps queda así:

- `specs/productization-gap-closure/*` — verdad normativa nueva para productización y hardening P0
- `docs/OPITA_SYNC_IMPLEMENTATION_READY.md` — documento de trabajo y resumen operativo
- `docs/OPITA_SYNC_PRODUCT_ROADMAP.md` — roadmap y priorización

## Secuencia de lectura recomendada

1. `specs/productization-gap-closure/_status.md`
2. `specs/productization-gap-closure/checklist.md`
3. `specs/productization-gap-closure/s0-product-scope-and-vertical-v1.md`
4. `specs/productization-gap-closure/s1-tenant-operable-baseline-v1.md`
5. `specs/productization-gap-closure/s2-postgres-hardening-v1.md`
6. `specs/productization-gap-closure/s3-approvals-release-hardening-v1.md`
7. `specs/productization-gap-closure/s4-evidence-trail-hardening-v1.md`
8. `specs/productization-gap-closure/s5-recovery-compensation-minimum-v1.md`
9. `specs/productization-gap-closure/s6-tenant-bootstrap-operable-v1.md`
