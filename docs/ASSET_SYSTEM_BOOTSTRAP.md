# Asset system bootstrap

## Objetivo

Arrancar la base técnica del sistema de assets con una fuente única de tokens, un package de brand core y un Storybook mínimo.

## Componentes iniciales creados

- `assets-system/source/tokens/design-tokens.json`
- `config/style-dictionary.config.mjs`
- `scripts/build-tokens.mjs`
- `packages/opita-brand-core/`
- `storybook/.storybook/`
- `storybook/stories/brand/`

## Orden recomendado de trabajo a partir de acá

1. correr `Style Dictionary` y validar outputs generados
2. completar exports reales en `packages/opita-brand-core`
3. montar `SVGO` para logos/icons
4. conectar logos/icons a Storybook
5. empezar el package `opita-brand-ui`

## Nota

Esto es bootstrap, no sistema terminado.

El objetivo es fijar cimientos correctos antes de escalar el kit regenerado.
