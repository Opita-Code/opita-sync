# Asset system bootstrap

## Objetivo

Arrancar la base técnica del sistema de assets con una fuente única de tokens, un package de brand core y un Storybook mínimo.

## Componentes iniciales creados

- `package.json`
- `.gitignore`
- `assets-system/source/tokens/design-tokens.json`
- `config/style-dictionary.config.mjs`
- `config/svgo.config.mjs`
- `scripts/build-tokens.mjs`
- `scripts/optimize-svg.mjs`
- `packages/opita-brand-core/`
- `packages/opita-brand-ui/`
- `storybook/.storybook/`
- `storybook/stories/brand/`

## Orden recomendado de trabajo a partir de acá

1. instalar dependencias del workspace
2. correr `Style Dictionary` y validar outputs generados
3. completar exports reales en `packages/opita-brand-core`
4. usar `SVGO` para logos/icons/visuals
5. conectar logos/icons a Storybook
6. expandir el package `opita-brand-ui`

## Nota operativa

En esta fase quedó preparado el bootstrap del workspace, pero no se ejecutaron builds del pipeline todavía.

Eso permite revisar y ajustar la estructura antes de instalar dependencias o correr Storybook/Style Dictionary.

## Estado actual del bootstrap

- dependencias del workspace instaladas
- `Style Dictionary` disponible
- `Storybook` disponible
- build mínimo de tokens ejecutado con éxito
- outputs generados en `assets-system/build/css`, `assets-system/build/scss` y `assets-system/build/ts`
- bootstrap de `SVGO` preparado, pero todavía no ejecutado

## Nota

Esto es bootstrap, no sistema terminado.

El objetivo es fijar cimientos correctos antes de escalar el kit regenerado.
