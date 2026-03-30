# Dirección arquitectónica

## Dirección general

La dirección arquitectónica del proyecto parte de una separación obligatoria:

- **OSF** es el framework/kernel reusable del sistema
- **Opita Sync** es el producto que consume ese kernel

El producto debe ser **IA-First en experiencia** y **OSF-First en autoridad**.

Eso implica:

- experiencia principal guiada por IA
- kernel gobernado y canónico separado del producto
- control plane de producto sin duplicar runtime, policy ni truth plane
- corredor gobernado obligatorio: `intake -> proposal -> preview -> governance -> execution -> inspection/recovery`

## Dirección del boundary OSF vs Opita Sync

### OSF

OSF conserva la autoridad sobre:

- contratos canónicos
- compile path
- policy y approvals core
- runtime
- event log
- evidencia canónica
- inspection/recovery core
- registry/resolution

### Opita Sync

Opita Sync conserva la autoridad sobre:

- surfaces de producto
- experiencia IA-First
- onboarding de tenant
- catálogo visible y usable
- operación por roles
- realtime derivado
- activación del tenant y consumo del producto

### Regla dura

Opita Sync **no** redefine OSF.  
OSF **no** se presenta como el producto final.

## Dirección de la experiencia IA-First

La IA debe ser la interfaz principal del producto para:

- capturar intención
- pedir aclaraciones
- estructurar contexto
- proponer acciones y previews
- explicar riesgo, bloqueos y approvals
- asistir inspection y recovery

La IA no puede:

- ejecutar cambios directamente desde conversación libre
- reemplazar governance
- reemplazar evidencia canónica
- convertirse en una segunda autoridad operativa

## Dirección del control plane de producto

El control plane de Opita Sync debe enfocarse en:

- dejar tenants en estado `operable`
- configurar governance base
- proyectar catálogo visible
- habilitar conectores permitidos
- operar surfaces para `admin tenant`, `operator` y `approver`
- exponer experiencia utilizable sobre la verdad del kernel

El producto genera valor primero al activar un tenant operable y luego al acompañar su uso continuo.

## Dirección del plano de gobierno

El plano de gobierno debe cubrir, como mínimo:

- permisos
- approvals
- clasificación
- visibilidad
- reason codes auditables
- separation of duties

La autorización final debe separar:

- estructura
- relación
- contexto
- policy

## Dirección del plano de catálogo

El catálogo debe soportar:

- acciones atómicas
- workflows gobernados
- visibilidad por tenant
- usabilidad por rol

El catálogo publicado al tenant debe ser una proyección gobernada del sistema, no un acceso libre al kernel.

## Dirección del plano de conectores

Los conectores y systems bindings deben seguir siendo gobernados.

Dirección inicial:

- gestión centralizada del catálogo y bindings
- habilitación explícita por tenant
- sin bypass directo desde chat hacia provider
- sin convertir conectores en seams autónomos del producto

## Dirección del plano de realtime

El producto debe ser realtime-friendly, pero sin crear una segunda verdad.

Dirección recomendada:

- **SSE first** para updates de execution, approvals, inspection y event feed
- **WebSocket optional** sólo si aparece una necesidad real de bidireccionalidad

Todo realtime debe derivarse de records canónicos y event log.

## Dirección de plataforma

La implementación recomendada es **AWS-first**, respetando las decisiones duras del baseline:

- **Aurora PostgreSQL** como truth plane transaccional
- **Amazon EKS** como baseline de despliegue
- **Temporal en EKS** como runtime durable
- **Cerbos en EKS** como PDP principal
- **S3** como artifact/evidence plane
- **ElastiCache for Valkey** como plano efímero complementario
- **OpenSearch** sólo como retrieval/corpus plane cuando haga falta

AWS entra como profile de plataforma, no como redefinición del dominio.

## Dirección del plano de monetización

La monetización sigue un modelo híbrido:

- implementación/activación por tenant
- uso posterior del sistema

El detalle de pricing queda abierto.  
La monetización debe acompañar el modelo operativo del producto y no dominar la definición conceptual.

## Nota

Esta sección recoge dirección arquitectónica aceptada para producto y plataforma.  
No reemplaza schemas, contratos exactos ni specs normativas más detalladas.
