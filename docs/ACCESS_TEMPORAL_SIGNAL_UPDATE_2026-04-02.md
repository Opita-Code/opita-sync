# Access temporal signal update — 2026-04-02

## Qué cambió

La scorecard del framework ahora deriva mejor timing del access plane usando hitos propios de grants/delegaciones.

## Impacto

- el segundo dominio deja de mostrar tantos tramos en `0` por defecto;
- approval -> release y create -> release/revoke del access plane ya pueden reflejar mejor su propio ritmo;
- la brecha de señal respecto del primer dominio se reduce.

## Resultado

- mejora concreta del polish temporal del segundo dominio
- base más fuerte para próximas evaluaciones o reruns
