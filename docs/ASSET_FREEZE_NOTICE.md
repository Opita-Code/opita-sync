# Asset freeze notice

## Objetivo

Congelar operativamente las partes del brand kit que **no deben usarse tal cual** hasta ser reescritas o realineadas con la verdad actual de Opita Sync.

## Regla general

Hasta nuevo aviso:

- el brand kit NO define el producto;
- el brand kit NO define la estrategia;
- el brand kit NO define el posicionamiento;
- el brand kit NO define la narrativa comercial.

La autoridad sigue siendo:

- `source-of-truth/product-definition.md`
- `source-of-truth/architecture-direction.md`
- roadmap, specs y decisiones publicadas en el repo producto.

## Zonas congeladas (no usar tal cual)

### 1. Strategy reference

- `08_strategy_reference/*`

Motivo:

- cuenta una versión vieja del producto;
- mezcla framing de motor/interoperabilidad/universalidad que ya no corresponde.

### 2. Messaging system

- `16_messaging_system/*`

Motivo:

- contiene positioning y copy blocks desalineados con el producto actual.

### 3. Product storytelling

- `19_product_storytelling/*`
- `07_product_visuals/*`

Motivo:

- la narrativa visual sigue siendo vieja y puede empujar una historia incorrecta.

### 4. Sales/press sensibles

- `22_sales_enablement/*`
- `23_partner_press_kit/company_boilerplate.md`

Motivo:

- alto riesgo de comunicar el producto equivocado.

### 5. Starters contaminantes

- `14_design_system/html/landing-starter.html`
- `14_design_system/react/Hero.tsx`
- `20_docs_developer_kit/docs-page-template.html`
- `20_docs_developer_kit/api-reference-template.html`

Motivo:

- pueden propagar copy vieja directamente a sitios, docs o demos.

## Zonas NO congeladas (rescatables)

Estas zonas pueden reutilizarse con mucho menos riesgo:

- `01_logos/*`
- `02_icons/*`
- `03_tokens/*`
- `04_patterns_backgrounds/*`
- `10_web_app_icons/*`
- `13_web_delivery_pack/icons/*`
- `15_accessibility/*`

Motivo:

- el problema principal del kit no es visual, sino narrativo/estratégico.

## Qué sí se puede hacer mientras tanto

- reutilizar logos e iconografía;
- reutilizar tokens y estilos base;
- reutilizar assets técnicos de delivery web;
- reutilizar foundations visuales y de accesibilidad;
- NO reutilizar copy, messaging ni storytelling sin pasar por remediación.

## Estado

- **asset freeze activo** sobre narrativa/copy/storytelling del kit

## Criterio de salida del freeze

El freeze puede levantarse por zonas cuando:

1. el archivo o grupo se reescribe/re-alinea contra el source-of-truth;
2. deja de vender un producto viejo;
3. deja de mezclar framework y producto.
