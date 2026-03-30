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
