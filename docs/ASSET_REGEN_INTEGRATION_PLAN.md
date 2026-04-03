# Asset regen integration plan

## Objetivo

Integrar el contenido regenerado en `docs/ASSET_REGEN/` al workspace nuevo sin mezclar:

- estrategia de producto;
- messaging reusable;
- componentes/patrones UI;
- stories/demo assets;
- documentación operativa.

## Regla arquitectónica

El workspace no debe convertirse en un basural de copy suelta.

Separación correcta:

- `packages/opita-brand-core` = tokens, constantes de marca, metadata reusable, contenido corto canónico y serializable
- `packages/opita-brand-ui` = componentes React presentacionales y patterns UI
- `storybook/` = showcase vivo de assets, componentes y templates
- `docs/` = estrategia, positioning, packages por dominio/rol, storytelling y material comercial

## Estado actual verificado

- `@opita-code/opita-brand-core` hoy solo exporta tokens
- `@opita-code/opita-brand-ui` hoy solo expone un `Button`
- `docs/ASSET_REGEN/` contiene contenido regenerado de cuatro naturalezas distintas
- Storybook hoy tiene placeholders para tokens/logos/icons

## Clasificación por carpeta origen

### 1. `docs/ASSET_REGEN/08_strategy_reference/*`

**Naturaleza:** estrategia / source-aligned narrative

**Destino:** mantener en `docs/`

**Motivo:**

- define framing del producto
- no es contenido de runtime del design system
- no corresponde meter strategy en packages consumibles

**Acción recomendada:**

- preservar como documentación de referencia
- citar desde futuros docs de branding/adopción

---

### 2. `docs/ASSET_REGEN/16_messaging_system/*`

#### 2.1 Mantener en `docs/`

- `product_positioning.md`
- `messaging_matrix.md`
- `partner_message_kit.md`
- `terminology_guide.md`

**Motivo:** son artefactos de positioning, narrativa y lenguaje.

#### 2.2 Extraer a `packages/opita-brand-core`

- `copy_blocks.md`
- `homepage_copy_starter.md`
- `cta_library.md`

**Motivo:**

- contienen copy corta y reusable
- pueden transformarse en objetos/constantes tipadas
- sirven para web, demos y Storybook sin acoplar React

**Forma sugerida:**

- `packages/opita-brand-core/src/content/homepage.ts`
- `packages/opita-brand-core/src/content/copy-blocks.ts`
- `packages/opita-brand-core/src/content/cta.ts`

---

### 3. `docs/ASSET_REGEN/14_design_system/react/Hero.tsx`

**Destino:** `packages/opita-brand-ui`

**Motivo:**

- es un componente React presentacional
- reutiliza `Button`
- encaja como hero de marketing/product positioning

**Forma sugerida:**

- `packages/opita-brand-ui/src/Hero.tsx`
- `packages/opita-brand-ui/src/index.ts`

**Ajuste recomendado antes de integrarlo:**

- evitar hardcodear copy dentro del componente
- recibir props o consumir contenido exportado desde `brand-core`

---

### 4. `docs/ASSET_REGEN/14_design_system/html/landing-starter.html`

**Destino:** `storybook/` como referencia demostrable, no como package core

**Motivo:**

- es template estático
- sirve para demo/documentación
- no debería vivir como API reusable del package

**Forma sugerida:**

- convertir su estructura a una story de landing/marketing page
- o preservarlo como fixture/documentación en `docs/`

---

### 5. `docs/ASSET_REGEN/19_product_storytelling/*`

**Destino:** mantener en `docs/`

**Motivo:**

- describe narrativa visual y conceptual
- todavía no son assets finales ni componentes
- su output posterior puede transformarse en stories o SVGs, pero estos `.md` no deben ir a packages

---

### 6. `docs/ASSET_REGEN/20_docs_developer_kit/*`

**Destino:** `storybook/` o `docs/`, según evolución

**Motivo:**

- son templates de documentación
- no pertenecen a `brand-core`
- solo entrarían a un package si luego existe un verdadero docs-theme reusable

**Acción recomendada:**

- mantenerlos como fixtures regenerados
- decidir más adelante si hay un package específico de docs theme

---

### 7. `docs/ASSET_REGEN/22_sales_enablement/*` y `23_partner_press_kit/*`

**Destino:** mantener en `docs/`

**Motivo:**

- son artefactos go-to-market
- no son diseño reusable ni componente UI

---

### 8. `docs/ASSET_REGEN/domain_*` y `role_*`

**Destino:** mantener en `docs/`

**Motivo:**

- son content packages estratégicos por dominio/rol
- alimentan ventas, demos y storytelling
- pueden inspirar stories o páginas, pero no deben serializarse enteros como package técnico

## Mapeo de implementación inicial

### Fase 1 — `brand-core`

Crear exports tipados para contenido corto reutilizable:

1. homepage hero copy
2. value cards
3. CTA labels
4. short/medium descriptions
5. domain summary blocks

### Fase 2 — `brand-ui`

Integrar componentes presentacionales:

1. `Hero`
2. eventualmente `FeatureCard`, `SectionHeading`, `ValueGrid`

Regla:

- componentes sin strategy embebida de forma rígida
- contenido importable desde `brand-core`

### Fase 3 — Storybook

Agregar stories reales para:

1. `Brand/Hero`
2. `Brand/Landing Sections`
3. `Brand/Domain Messaging`
4. mejoras a stories de tokens/logos para dejar de ser placeholders

### Fase 4 — docs

Mantener y ordenar como docs fuente:

1. strategy reference
2. messaging matrix y positioning
3. storytelling
4. domain/role packages
5. sales/partner content

## Primer corte recomendado

El primer corte de integración debería hacer solo esto:

1. crear contenido reusable en `brand-core`
2. migrar `Hero` a `brand-ui`
3. crear una story de `Hero` conectada a ese contenido

Eso da una vertical mínima coherente:

- copy canónica
- componente reusable
- showcase vivo

Sin mezclar estrategia, marketing docs y UI en el mismo lugar.

## Qué NO hacer

- no copiar todos los `.md` dentro de packages
- no hardcodear todo el copy dentro de React
- no usar Storybook como depósito de strategy docs
- no mover domain/role packages a código técnico si todavía son artefactos narrativos

## Resultado esperado

Después de la primera integración:

- `brand-core` deja de ser solo tokens
- `brand-ui` deja de ser solo un botón
- Storybook deja de mostrar solo placeholders
- `docs/ASSET_REGEN` sigue siendo fuente editorial sin contaminar el design system
