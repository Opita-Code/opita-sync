# Asset P0 — Strategy rewrite brief

## Objetivo

Dar una base correcta para reescribir la carpeta:

- `08_strategy_reference/*`

del brand kit, sin volver a contaminarla con la narrativa vieja del producto.

## Regla de oro

No se corrige “editando un poco” el texto viejo.

Se **reescribe desde cero** usando la verdad actual del proyecto.

## Fuente única permitida

- `source-of-truth/product-definition.md`
- `source-of-truth/architecture-direction.md`
- `docs/WHAT_NEXT_NOW.md`
- `docs/NEXT_STRATEGIC_MOVE_2026-04-02.md`
- `docs/GLOBAL_PROJECT_EVALUATION_2026-03-31.md`
- `docs/DOMAIN_COMPARISON_2026-04-02.md`
- `docs/SECOND_DOMAIN_CONSOLIDATION_2026-04-02.md`

## Qué debe desaparecer

Eliminar por completo del nuevo strategy reference cualquier framing basado en:

- “motor universal”
- “interoperability engine” como idea central
- “enterprise AI” genérico como identidad principal
- autonomía configurable como promesa visible de producto
- mezcla difusa entre framework y producto

## Qué debe aparecer obligatoriamente

### 1. Separación estructural

- **OSF** = framework/kernel reusable
- **Opita Sync** = producto/control plane que consume ese kernel

### 2. Principio rector

- **IA-First en experiencia**
- **OSF-First en autoridad**

### 3. Corredor gobernado

`intake -> proposal -> preview -> governance -> execution -> inspection/recovery`

### 4. Modelo de valor

- activación por tenant
- uso posterior del producto

### 5. Dominios reales

- `tenant configuration governance`
- `tenant access and delegation governance`

### 6. Fase estratégica actual

- consolidación comercial / adopción controlada
- no abrir una tercera vertical todavía

## Qué debe decir el nuevo strategy reference

### Product definition

Debe decir que Opita Sync es:

- un control plane gobernado;
- IA-First;
- construido sobre OSF;
- centrado en operar cambios y workflows con approvals, evidence, inspection y recovery.

### Strategy summary

Debe decir que el foco actual es:

- aprovechar dos dominios ya consolidados;
- convertir profundidad en adopción controlada;
- no abrir breadth innecesario.

### Decision log

Debe reflejar decisiones vivas como:

- no motor universal;
- no tercera vertical todavía;
- dos dominios reales ya validados o consolidados;
- governance corridor obligatorio;
- tenant activation + usage model;
- OSF vs producto como boundary dura.

## Entregables del Paso 2

1. nueva versión de `product-definition.md` del kit
2. nueva versión de `decision-log.md` del kit
3. nueva versión de `strategy-summary` del kit

## Criterio de done

El Paso 2 queda bien hecho si:

1. el strategy reference ya no describe otro producto;
2. la separación OSF vs Opita Sync queda clara;
3. los dos dominios reales aparecen;
4. la fase actual de adopción controlada aparece;
5. alguien del equipo puede leerlo y reconocer el producto real sin fricción.
