# Asset P0 — Messaging rewrite brief

## Objetivo

Definir cómo reescribir la carpeta:

- `16_messaging_system/*`

del brand kit para que deje de empujar una narrativa vieja y pase a comunicar el producto real de Opita Sync.

## Regla de oro

El messaging system del kit **no se corrige con ediciones menores**.

Se reescribe guiado por la verdad actual del producto.

## Fuentes permitidas

- `source-of-truth/product-definition.md`
- `source-of-truth/architecture-direction.md`
- `docs/NEXT_STRATEGIC_MOVE_2026-04-02.md`
- `docs/SECOND_DOMAIN_EXECUTIVE_BRIEF.md`
- `docs/GLOBAL_PROJECT_EVALUATION_2026-03-31.md`
- `docs/WHAT_NEXT_NOW.md`

## Qué debe desaparecer del messaging viejo

- “interoperability” como centro de posicionamiento;
- “connect enterprise systems” como frase madre del producto;
- lenguaje que sugiera “proposes or executes” como promesa visible sin enfatizar governance corridor;
- framing tipo “governed operational layer” si no aclara que es control plane gobernado sobre OSF.

## Qué debe aparecer obligatoriamente

### 1. Posicionamiento central

Opita Sync debe describirse como:

- **control plane gobernado, IA-First**;
- construido sobre **OSF**;
- para operar cambios y workflows empresariales sobre sistemas reales.

### 2. Frase rectora

- **IA-First en experiencia**
- **OSF-First en autoridad**

### 3. Modelo de valor

- activación por tenant
- uso posterior del producto

### 4. Dominios reales

- `tenant configuration governance`
- `tenant access and delegation governance`

### 5. Etapa estratégica actual

- consolidación comercial / adopción controlada

## Nueva estructura sugerida del messaging system

### `product_positioning.md`

Debe responder:

- qué es Opita Sync;
- qué no es;
- por qué es distinto;
- qué problema real resuelve.

### `homepage_copy_starter.md`

Debe centrarse en:

- control plane gobernado;
- tenant activation;
- dos dominios reales;
- governance + evidence + recovery;
- no prometer universalidad.

### `messaging_matrix.md`

Nuevos pilares sugeridos:

1. **Control plane gobernado**
2. **IA-First en experiencia**
3. **Governance con evidencia**
4. **Tenant operable**
5. **Roles y autoridad explícita**

### `copy_blocks.md`

Debe contener bloques reutilizables para:

- hero;
- subhead;
- domain 1;
- domain 2;
- tenant activation;
- approvals / evidence / recovery.

### `terminology_guide.md`

Debe prohibir o restringir términos como:

- universal engine
- enterprise AI platform
- interoperability engine
- autonomous execution layer

Y favorecer:

- control plane
- governance corridor
- tenant activation
- grants / delegation governance

### `cta_library.md`

Debe orientar CTAs a:

- ver cómo funciona;
- activar un tenant;
- revisar un dominio;
- evaluar adopción controlada.

No a:

- promesas demasiado amplias;
- claims genéricos de AI enterprise.

## Archivos a reescribir sí o sí

- `16_messaging_system/product_positioning.md`
- `16_messaging_system/homepage_copy_starter.md`
- `16_messaging_system/copy_blocks.md`
- `16_messaging_system/messaging_matrix.md`
- `16_messaging_system/terminology_guide.md`
- `16_messaging_system/partner_message_kit.md`
- `16_messaging_system/cta_library.md`

## Criterio de done

El Paso 3 queda bien hecho si:

1. el messaging ya no describe a Opita Sync como engine universal/interoperability-first;
2. la separación OSF vs producto aparece con claridad;
3. los dos dominios reales aparecen como parte del producto;
4. la fase de adopción controlada ya se refleja en la narrativa;
5. el copy puede usarse en web/docs/sales sin contaminar la estrategia del producto.
