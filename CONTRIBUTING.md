# Contributing

## Workflow mínimo para solo dev

Este repo usa un proceso simple y proporcional al tamaño del cambio.

### 1. Cambio chico

Ejemplos:

- typo
- texto
- color
- ajuste menor de Storybook
- orden de imports

Hacer:

- trabajar directo sobre `main`
- crear un commit claro
- no hace falta issue ni PR

### 2. Cambio mediano

Ejemplos:

- nuevo componente
- refactor de una sección
- nueva story importante
- mover contenido entre capas

Hacer:

- crear una branch corta
- hacer uno o varios commits claros
- mergear cuando el cambio esté revisado
- issue y PR son opcionales

### 3. Cambio grande o arquitectónico

Ejemplos:

- nuevo sistema
- cambio de boundaries
- refactor de arquitectura
- nueva convención del repo
- cambios que afectan varias capas

Hacer:

- crear issue
- trabajar en branch
- usar commits claros
- abrir PR
- dejar documentado el porqué del cambio

## Regla práctica

- si el cambio lleva menos de 1 hora y no toca arquitectura, puede ir directo a `main`
- si toca varias capas o requiere revisar el diff con calma, usar branch
- si cambia cómo se organiza o se entiende el repo, usar issue + PR

## Commits

Usar Conventional Commits:

- `feat: ...`
- `fix: ...`
- `refactor: ...`
- `docs: ...`
- `chore: ...`

## Criterio principal

Si en dos semanas necesitás recordar:

- qué problema resolvía el cambio
- por qué se hizo así
- qué boundary tocó

entonces no conviene hacerlo como cambio informal sin contexto.
