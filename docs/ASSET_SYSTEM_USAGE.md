# Asset system usage

## Objetivo

Explicar cómo usar el asset system actual sin confundirlo con una app runtime ya existente.

Hoy este repo no tiene una app de producto consumiendo estos packages.

La surface real actual es:

- `storybook/` para review visual y narrativa
- `README.md` y docs para ubicar el sistema dentro del repo producto

## Capas del sistema

### `@opita-code/opita-brand-core`

Contiene contenido reusable y serializable:

- homepage copy
- CTA
- copy blocks
- domains
- roles
- pages
- editorial

Usarlo cuando necesitás:

- contenido canónico
- narrativa reusable
- texto compartido entre stories, páginas o surfaces futuras

No usarlo para:

- componentes React
- layout
- strategy docs completas

### `@opita-code/opita-brand-ui`

Contiene UI reusable:

- foundations (`Button`, `Callout`, `CodeBlock`, etc.)
- components (`Hero`, `DomainCard`, `RoleCard`, etc.)
- sections (`DomainSection`, `RoleSection`)
- pages y templates (`LandingPage`, `DocsPage`, `StoryNarrativePage`, etc.)

Usarlo cuando necesitás:

- componer surfaces visuales
- crear stories o páginas nuevas
- conectar contenido de `brand-core` con UI

### `storybook/`

Es la surface viva del sistema actual.

Taxonomía actual:

- `Brand/Foundations/*`
- `Brand/Components/*`
- `Brand/Sections/*`
- `Brand/Pages/*`
- `Brand/Editorial/*`

## Cómo consumir el sistema

Ejemplo conceptual:

```ts
import { homepageHeroContent, domainContents } from '@opita-code/opita-brand-core';
import { Hero, DomainNarrativePage, SalesEmailTemplate } from '@opita-code/opita-brand-ui';
```

La regla correcta es:

- contenido desde `brand-core`
- surface visual desde `brand-ui`

No consumir desde:

- `packages/*/src/...` en stories o consumidores externos

## Qué no es este sistema

No es:

- la app de producto final
- el source of truth principal
- el framework/kernel

## Próximo paso natural

Cuando exista una app o surface runtime real en este repo, debería consumir:

1. contenido desde `@opita-code/opita-brand-core`
2. componentes y páginas desde `@opita-code/opita-brand-ui`

Hasta entonces, Storybook sigue siendo la surface principal para validar el sistema.
