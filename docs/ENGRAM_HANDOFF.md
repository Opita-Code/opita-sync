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

## Próximo trabajo recomendado

1. `M4.3` inspection/recovery usable para operator
2. primera vertical real (`M5.1`)
3. conectores del dominio (`M5.2`)
4. piloto (`M5.3`)

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
