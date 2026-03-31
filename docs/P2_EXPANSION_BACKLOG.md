# P2 expansion backlog

## Objetivo

Abrir la fase de expansión controlada después del cierre de `P1`.

## P2.1 — Second domain

**Status:** implementation started in framework

Dominio recomendado:

- `tenant access and delegation governance`

## P2.2 — Resolver selección dinámica de capabilities por dominio

**Status:** implemented in framework (minimum dynamic override)

Objetivo:

- dejar de depender sólo de bindings default por `result_type` cuando el dominio ya requiera selección más rica.

## P2.3 — Conectores enterprise de mayor complejidad

**Status:** implemented baseline in framework

Objetivo:

- introducir conectores más hostiles o externos después de consolidar el segundo dominio.

## Orden recomendado

1. `P2.1`
2. `P2.2`
3. `P2.3`
