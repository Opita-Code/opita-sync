# Engram handoff — Opita Sync

## Repo

- GitHub: `https://github.com/Opita-Code/opita-sync`
- Scope: **producto / control plane IA-First**
- Repo hermano: `https://github.com/Opita-Code/opita-sync-framework`

## Boundary

- **OSF** = framework/kernel canónico
- **Opita Sync** = producto que consume OSF

No volver a mezclar estas dos capas.

## Estado actual del producto

Este repo es **docs-first / product-first**.

Contiene:

- `source-of-truth/` con definición formal del producto
- `docs/OPITA_SYNC_PRODUCT_ROADMAP.md`
- `docs/OPITA_SYNC_IMPLEMENTATION_READY.md`
- `docs/OPITA_SYNC_SPEC_MODEL.md`
- `specs/productization-gap-closure/`

## Concepto vigente

**Opita Sync** es un **control plane gobernado, IA-First**, construido sobre **OSF**.

Frase rectora:

> **Opita Sync es IA-First en experiencia y OSF-First en autoridad.**

## Modelo operativo

- activación / implementación por tenant
- uso posterior del producto

## Vertical inicial

- gobernanza de cambios operativos del tenant

## Corredor obligatorio

`intake -> proposal -> preview -> governance -> execution -> inspection/recovery`

## Línea normativa vigente

Leer en este orden:

1. `source-of-truth/product-definition.md`
2. `source-of-truth/architecture-direction.md`
3. `docs/OPITA_SYNC_PRODUCT_ROADMAP.md`
4. `docs/OPITA_SYNC_IMPLEMENTATION_READY.md`
5. `specs/productization-gap-closure/_status.md`
6. `specs/productization-gap-closure/checklist.md`

## Productization gap closure

Ya definidos en specs:

- `S0` alcance y vertical
- `S0A` boundary OSF vs Opita Sync
- `S1` tenant operable baseline
- `S1A` AWS-first platform profile
- `S1C` AWS bootstrap and landing zone
- `S2` PostgreSQL hardening
- `S3` approvals and release hardening
- `S4` evidence trail hardening
- `S5` recovery and compensation minimum
- `S6` tenant bootstrap operable

## Modelado de dominio y piloto

Ya definidos en este repo:

- `S7` first domain: tenant configuration governance
- `S8` pilot plan for tenant configuration governance

## Estado de modelado del producto

- `M5.1` definido: primer dominio real = `tenant configuration governance`
- `M5.3` definido: piloto con `tenant-alpha-ops` y `tenant-beta-governance`, escenarios, métricas y success/failure criteria
- assets operativos del piloto versionados en `docs/PILOT_*`
- runbook ejecutable del piloto versionado en `docs/PILOT_RUNBOOK.md`
- primer resultado parcial del piloto versionado en `docs/PILOT_RUN_RESULTS_2026-03-31.md`
- plan post-piloto versionado en `docs/POST_PILOT_PLAN.md`
- segunda vuelta del piloto definida en `docs/PILOT_SECOND_ROUND_PLAN.md`
- segunda vuelta ejecutada y evaluada en `docs/PILOT_SECOND_ROUND_RESULTS_2026-03-31.md`
- captura humana de tiempos para `P0.2` en `docs/PILOT_HUMAN_TIMING_*`
- cierre de `P0.3` en `docs/PILOT_SCORECARD_FINAL_2026-03-31.md` y `docs/PILOT_INCIDENT_LOG_FINAL_2026-03-31.md`
- validación de `P0.4` en `docs/PILOT_P0_4_RESULTS_2026-03-31.md`
- revalidación final de `P0.5` en `docs/PILOT_FINAL_REVALIDATION_2026-03-31.md`

## Estado de implementación relevante

El código del framework en el repo hermano ya implementa:

- `S2` hardening inicial de PostgreSQL
- `S3` approvals/release auditables
- `S4` evidence trail correlado
- `S5` recovery mínimo gobernado
- `S6` tenant bootstrap baseline
- `M3.2` baseline profiles de policy/approval/classification
- `M3.3` catálogo visible y conectores habilitados por tenant
- `M4.1` workspace usable de intake/proposal
- `M4.2` readable preview
- `M4.3` operator inspection workspace

## Próximo trabajo recomendado en producto

1. tomar `pilot_passed_with_gaps` como estado consolidado actual del piloto
2. usar `docs/PILOT_FINAL_REVALIDATION_2026-03-31.md` como decisión ejecutiva vigente
3. pasar a backlog de endurecimiento `P1` o a una validación humana más fuerte
4. mantener source of truth y roadmap sincronizados con el repo framework

## AWS / plataforma

- owner GitHub correcto: `Opita-Code`
- profile AWS-first definido en specs
- región validada operativamente: `us-east-1`
- OpenSearch no debe asumirse disponible por default

## Cómo retomar en otra PC

1. clonar/fetchear ambos repos:
   - `Opita-Code/opita-sync`
   - `Opita-Code/opita-sync-framework`
2. leer este archivo
3. leer `docs/REPO_BOUNDARY.md` en ambos repos
4. ir al repo framework para continuar implementación
5. usar este repo producto como source of truth del roadmap y del concepto

## Nota sobre Engram

La base local de Engram no se sincroniza sola con `git fetch`.

Este archivo existe justamente para serializar la memoria útil del proyecto y poder continuar en otra máquina sin arrancar ciego.
