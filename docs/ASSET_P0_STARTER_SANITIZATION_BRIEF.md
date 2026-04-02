# Asset P0 — Starter sanitization brief

## Objetivo

Definir cómo neutralizar los starters del brand kit que pueden contaminar implementaciones nuevas con una narrativa vieja de Opita Sync.

## Problema

Hoy los starters del kit mezclan cosas peligrosas como:

- `Governed interoperability`
- `From intent to execution`
- `connect enterprise systems`
- `proposes or executes`
- `autonomy: review_required`

Eso puede terminar copiado y pegado en:

- landing pages
- docs
- demos
- reference HTML
- React starters

y volver a instalar un framing incorrecto del producto.

## Archivos afectados

### Design system starters

- `14_design_system/html/landing-starter.html`
- `14_design_system/react/Hero.tsx`

### Docs developer kit starters

- `20_docs_developer_kit/docs-page-template.html`
- `20_docs_developer_kit/api-reference-template.html`

## Regla de saneamiento

No se elimina el starter.

Se conserva:

- layout
- spacing
- component structure
- visual hierarchy

Se reescribe:

- eyebrow
- hero title
- subtitle
- CTA labels cuando hagan claims peligrosos
- docs example copy
- API example payloads y headings cuando impliquen un producto viejo

## Qué debe desaparecer

- `Governed interoperability`
- `connect enterprise systems`
- `proposes or executes governed actions`
- `Create intent`
- `autonomy` como campo protagonista del ejemplo de docs
- cualquier frase que implique engine universal o ejecución libre desde lenguaje natural

## Qué debe aparecer

### Landing / hero

- control plane gobernado
- IA-First en experiencia
- tenant activation
- governance + evidence + recovery
- dos dominios reales del producto

### Docs / API examples

- lenguaje de corredor gobernado
- ejemplos consistentes con el producto actual
- separación entre conversación libre y acción gobernada
- referencias a proposals, preview, governance e inspection cuando corresponda

## Nueva dirección sugerida para cada starter

### `landing-starter.html`

Debe comunicar:

- qué es el producto hoy
- qué problema resuelve
- por qué es gobernado
- no “interoperability” como eje principal

### `Hero.tsx`

Debe quedar listo para una landing que diga algo como:

- control plane gobernado, IA-First
- no connect-everything engine

### `docs-page-template.html`

Debe usar un ejemplo más alineado con el corredor real del producto.

En vez de:

- `Create intent`
- `autonomy: review_required`

debería mostrar algo más cercano a:

- compile governed request
- preview / approval / inspection

### `api-reference-template.html`

Debe dejar de parecer la API de un agente genérico y pasar a verse como:

- una API del corredor gobernado
- más explícita en tenant / governance / artifacts

## Criterio de done

El Paso 4 queda bien si:

1. los starters ya no pueden contaminar futuras implementaciones con la narrativa vieja;
2. el layout visual se conserva;
3. la semántica del producto se alinea con el source-of-truth actual;
4. alguien del equipo puede usar esos starters sin volver a vender un producto equivocado.
