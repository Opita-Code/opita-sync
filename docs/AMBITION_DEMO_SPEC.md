# Ambition demo spec

## Objetivo

Definir una demo ambiciosa de Opita Sync que funcione como landing principal del producto y como tenant demo operativo para mostrar una visión superior al tenant inicial comercial.

## Declaración de producto

La demo debe dejar claro que Opita Sync:

- reemplaza procesos manuales fragmentados;
- convierte IA en ventaja operativa real con control;
- apunta a una categoría nueva de control plane gobernado;
- no es un agente libre ni un chat que ejecuta directo.

## Público principal

- demo mixta
- prioridad dominante: **ejecutiva**

La profundidad operativa y técnica existe para sostener confianza, no para robar el foco.

## Momento wow

El momento wow principal es:

> desde mobile, iniciar una llamada en tiempo real con el agente operativo, expresar una intención, recibir una propuesta gobernada, ejecutar sobre sistemas reales de demo y verificar el resultado.

## Entrypoint de experiencia

### Forma elegida

- landing única con adaptación automática por dispositivo

### Web

Debe priorizar:

- narrativa ejecutiva
- estado del tenant demo
- workflow visible
- explainability
- audit trail
- before / after
- recomendaciones y desvíos

### Mobile

Debe priorizar:

- llamada en tiempo real
- intención operativa
- repreguntas cortas de alto valor
- propuesta
- confirmación
- seguimiento de ejecución
- verificación compacta

## Comportamiento del agente operativo

### Durante la llamada

Debe:

- interpretar rápido la intención
- devolver una propuesta inicial
- hacer 1 o 2 repreguntas importantes
- explicar riesgos o sensibilidad
- proponer un plan gobernado

### Después de cada acción

Debe:

- resumir qué pasó
- explicar por qué pasó
- verificar si hubo mejora
- detectar desvíos
- sugerir el siguiente mejor paso

## Caso principal

### Tipo de caso

- **cambio de datos operativos**

### Riesgo

- **escalonado**
- empieza en nivel medio
- escala hacia una decisión más sensible

### Verificación

- automática primero
- validación humana guiada después

## Sistemas reales de demo

La demo tenant debe operar sobre sistemas preparados y reales de sandbox:

1. tenant config system
2. access / delegation system
3. operational data system
4. incident / audit system

## Sandbox ERP — Opita Office

### Rol

`Opita Office` será el ERP sandbox del demo tenant y actuará como easter egg del próximo proyecto relacionado.

### Requisitos

- básico pero creíble
- fácil de conectar a Opita Sync
- persistencia durante el día
- reset automático diario
- journal de cambios del agente

### Módulos mínimos

#### Customers

- id
- name
- segment
- owner
- riskLevel
- status

#### Orders

- id
- customerId
- status
- priority
- total
- owner
- lastUpdatedAt

#### Inventory

- sku
- productName
- availableUnits
- reorderThreshold
- status

#### Approvals / Tasks

- id
- taskType
- subjectRef
- sensitivity
- status
- assignee
- comments

### Persistencia

#### Opción elegida

- SQLite local

### Motivo

- más creíble que JSON
- simple de consultar
- suficiente para demo ambiciosa
- liviano para reset diario

### Reglas de estado

- guardar cambios del día
- guardar journal de acciones del agente
- guardar verificaciones
- resetear a baseline seed al empezar un nuevo día

## Journal del agente

Cada caso debe dejar rastros explícitos de:

1. intención original
2. propuesta del agente
3. repreguntas realizadas
4. decisión humana
5. plan de cambio
6. ejecución
7. evidencia
8. verificación
9. siguiente recomendación

## Guardrails

### Obligatorios

- la conversación no equivale a apply directo
- la IA propone y asiste; OSF conserva autoridad
- approvals visibles cuando el riesgo escala
- inspection y recovery visibles
- no vender al sandbox como ERP universal ni como producto ya lanzado

## Arquitectura sugerida en este repo

### Nuevo package

- `packages/opita-office-sandbox`

### Rol del package

- modelos del ERP sandbox
- dataset seed
- runtime store local
- journal diario
- estrategia de reset por fecha
- helpers para verificación before/after

### Consumidores futuros

- surface web de demo
- surface mobile de demo
- Storybook o docs técnicas para evolución de la demo

## Casos prioritarios del demo tenant

### Caso 1 — cambio de datos operativo

- detectar un problema real en orders/customers
- proponer corrección
- ejecutar cambio
- verificar resultado

### Caso 2 — escalamiento por sensibilidad

- un cambio derivado necesita approval
- mostrar governance explícita
- ejecutar una vez resuelto

### Caso 3 — recomendación posterior

- el sistema detecta desvío residual
- propone siguiente mejor acción

## Criterios de éxito de la demo

La demo existe realmente cuando:

- una persona ejecutiva entiende el valor sin necesitar contexto técnico profundo;
- el caso principal se siente real y no teatral;
- mobile y web se sienten experiencias distintas pero coherentes;
- el sandbox guarda cambios del día y se reinicia automáticamente al día siguiente;
- el sistema puede explicar todo el caso end-to-end.
