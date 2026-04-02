# Access state consistency check — 2026-03-31

## Alcance

Validación de consistencia de estados para el segundo dominio:

- grants
- delegations
- approve
- revoke

## Estados revisados

- `active`
- `blocked`
- `revoked`

## Reglas verificadas

### 1. Approve solo desde `blocked`

Estado:

- **verificado**

Resultado:

- grants `active` ya no pueden aprobarse;
- delegations `active` ya no pueden aprobarse;
- la API devuelve conflicto (`409`) con error explícito de estado inválido.

### 2. Revoke no puede repetirse sobre `revoked`

Estado:

- **verificado**

Resultado:

- grants ya revocados no pueden revocarse otra vez;
- delegations ya revocadas no pueden revocarse otra vez;
- la API devuelve conflicto (`409`) con error explícito.

### 3. Approve sensible sigue requiriendo approval request válida

Estado:

- **verificado**

Resultado:

- si un item sensible no tiene `approval_request_id`, la API no lo aprueba;
- el estado canónico no se forza artificialmente.

### 4. Workspace refleja estados de forma coherente

Estado:

- **verificado**

Resultado:

- blocked grants se reflejan como bloqueados;
- revocations aparecen separadas de blocked;
- active items siguen visibles como activos.

## Conclusión de Tarea 2

No se detectaron contradicciones graves en el ciclo de estados del access plane después del endurecimiento realizado.

## Decisión

- **Tarea 2 = complete**

## Impacto sobre Semana 1

La decisión provisional de readiness mejora:

- si Tarea 3 y Tarea 4 también salen razonables, el segundo dominio puede considerarse `ready_for_week_2`.
