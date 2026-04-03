# Opita Sync

**Opita Sync** es el **producto/control plane IA-First** construido sobre **Opita Sync Framework (OSF)**.

Este repositorio contiene la **definición de producto**, el **source of truth**, el **roadmap**, y la línea de **productization gap closure** que guía cómo convertir OSF en un producto usable por tenants reales.

## Boundary obligatorio

- **OSF** = framework/kernel gobernado y canónico
- **Opita Sync** = producto/control plane que consume ese kernel

La frase rectora es:

> **Opita Sync es IA-First en experiencia y OSF-First en autoridad.**

## Qué contiene este repo

- `source-of-truth/` — definición formal del producto, dirección arquitectónica y principios de tenant/catálogo/policies
- `docs/OPITA_SYNC_PRODUCT_ROADMAP.md` — roadmap del producto
- `docs/OPITA_SYNC_IMPLEMENTATION_READY.md` — paquete implementation-ready del producto
- `docs/OPITA_SYNC_SPEC_MODEL.md` — modelo de spec para gap closure
- `specs/productization-gap-closure/` — specs normativas del producto sobre OSF
- `packages/opita-brand-core` — contenido reusable y serializable del sistema de assets
- `packages/opita-brand-ui` — foundations, componentes, secciones, páginas y templates editoriales
- `storybook/` — showcase navegable del asset system actual

## Qué NO contiene este repo

- el kernel reusable de ejecución/policy/runtime/evidence
- la implementación base del framework
- el baseline reusable v1 del engine

Eso vive en el repo hermano:

- **Opita Sync Framework**

## Estado actual

Este repo es **product-first y docs-first**.

La separación con OSF es deliberada:

- el producto define qué debe existir
- el framework define cómo se gobierna y ejecuta

## Asset system actual

Este repo hoy también contiene un **asset system inicial** para posicionamiento, storytelling y surfaces de producto.

Separación actual:

- `packages/opita-brand-core` = contenido reusable
- `packages/opita-brand-ui` = UI reusable
- `storybook/` = surface viva para revisar el sistema
- `docs/ASSET_REGEN_INTEGRATION_PLAN.md` = criterio de integración desde `ASSET_REGEN`

Esto no reemplaza el source of truth del producto.

Lo acompaña.

El objetivo es que el material regenerado y narrativo deje de vivir como docs sueltas y pase a existir como sistema reusable.

Guía rápida de uso:

- `docs/ASSET_SYSTEM_USAGE.md`

Ejemplo conceptual de consumo:

```ts
import { homepageHeroContent, domainContents } from '@opita-code/opita-brand-core';
import { Hero, DomainNarrativePage, SalesEmailTemplate } from '@opita-code/opita-brand-ui';
```

La regla correcta es:

- contenido desde `brand-core`
- UI desde `brand-ui`
- review visual y narrativa desde `storybook`

## Flujo del producto

El corredor inicial obligatorio es:

`intake -> proposal -> preview -> governance -> execution -> inspection/recovery`

## Modelo comercial base

Opita Sync se activa por tenant y luego se consume por uso.

El pricing exacto queda abierto para futuro, pero el modelo operativo es:

1. implementación / activación del tenant
2. uso continuo del producto

## Repositorio hermano

El framework base está separado en:

- `Opita Sync Framework`

Este repo debe evolucionar el producto sin volver a mezclar framework y producto.
