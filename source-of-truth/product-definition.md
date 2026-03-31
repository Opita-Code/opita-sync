# Definición del producto

## Qué es

**Opita Sync** es un **control plane gobernado, IA-First**, construido sobre **Opita Sync Framework (OSF)**.

Permite convertir intención operativa en lenguaje natural en **cambios y workflows auditables, aprobables, ejecutables, inspeccionables y recuperables** sobre sistemas reales.

La IA es la interfaz principal de experiencia, interpretación y asistencia.  
OSF es el kernel canónico de governance, ejecución, evidencia e inspección.

## Qué no es

Opita Sync **no es**:

- OSF
- un agente libre
- un chat que ejecuta cosas directamente
- un wrapper simple sobre APIs
- un motor universal sin foco
- una UI aislada sin kernel gobernado

## Relación con OSF

La separación entre OSF y Opita Sync es estructural.

### OSF

**Opita Sync Framework** es el framework/kernel reusable del sistema.

Resuelve:

- contratos canónicos
- compile path
- policy
- approvals
- runtime
- event log
- evidencia
- inspection/recovery
- registry/resolution

### Opita Sync

**Opita Sync** es el producto que consume ese kernel.

Resuelve:

- experiencia IA-First
- onboarding de tenant
- catálogo visible
- surfaces de operator/admin/approver
- realtime derivado
- operación del producto
- activación por tenant
- uso continuo del sistema

## Principio rector

**Opita Sync es IA-First en experiencia y OSF-First en autoridad.**

Eso significa:

- la IA interpreta, resume, propone, explica y asiste
- OSF conserva la autoridad sobre runtime, governance, policy, evidence y execution semantics

## Problema que resuelve

Las organizaciones necesitan operar sistemas reales con menos fricción, pero sin perder:

- control
- approvals
- trazabilidad
- visibilidad
- capacidad de inspección
- capacidad de recovery

Opita Sync resuelve esa tensión al combinar una experiencia IA-First con un corredor gobernado y auditable.

## Cómo genera valor

Opita Sync genera valor en dos etapas:

### 1. Implementación del tenant

Cada tenant se activa hasta quedar **operable**.

Eso incluye, como mínimo:

- baseline de governance
- catálogo visible
- conectores habilitados
- approvals base
- policy base
- classification base
- corredor inicial funcionando

### 2. Uso del producto

Una vez operable, el tenant consume Opita Sync a través del uso real del corredor gobernado.

El detalle de pricing queda abierto, pero el modelo es **híbrido**:

- implementación/activación por tenant
- uso posterior del sistema

La monetización acompaña el modelo operativo del producto; no define su esencia.

## Alcance inicial del producto

La primera vertical de Opita Sync es:

**gobernanza de cambios de configuración operativa del tenant**

El corredor inicial obligatorio es:

`intake -> proposal -> preview -> governance -> execution -> inspection/recovery`

## Usuario inicial

Opita Sync v1 está diseñado para estos roles:

- **Admin tenant**
- **Operator**
- **Approver**

## Qué hace

Opita Sync v1:

- captura intención operativa desde lenguaje natural
- estructura esa intención como artifacts gobernados
- prepara proposals y previews
- aplica policy y approvals antes de ejecutar
- ejecuta dentro de boundaries explícitos
- deja evidencia reconstruible
- permite inspección y recovery controlado

## Qué no hace

Opita Sync v1 no:

- convierte conversación libre en apply directo
- elimina governance por conveniencia
- reemplaza OSF como autoridad canónica
- ofrece desde el día 1 un producto universal para cualquier dominio
- prioriza amplitud sobre operabilidad

## Principios de producto

1. **IA primero en experiencia**
   - la IA guía la interacción y reduce fricción

2. **Governance primero en ejecución**
   - ninguna acción relevante salta el corredor gobernado

3. **La conversación no ejecuta**
   - chat libre nunca equivale a apply directo

4. **La verdad canónica vive en OSF**
   - Opita Sync no duplica runtime, policy ni truth plane

5. **Inspección y recovery son parte central del producto**
   - no son extras; son parte del valor principal

## Posicionamiento recomendado

Opita Sync debe posicionarse como:

**un control plane gobernado, IA-First, para operar cambios y workflows empresariales sobre sistemas reales**

No debe posicionarse como:

- agente universal
- chat empresarial genérico
- framework
- plataforma infinita desde el día 1

## Definición de éxito v1

Opita Sync v1 existe realmente cuando:

- un tenant puede quedar `operable`
- un operator puede recorrer el corredor completo
- un approver puede decidir con evidencia suficiente
- la IA reduce fricción sin romper governance
- cada caso puede reconstruirse end-to-end
- el sistema puede pilotearse sobre una vertical real
