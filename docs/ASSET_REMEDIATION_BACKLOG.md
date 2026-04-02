# Asset remediation backlog

## Regla de trabajo

Este backlog parte de una regla explícita:

- **el zip de assets no define la verdad del producto**
- **la verdad vive en `source-of-truth/`, roadmap, specs y decisiones ya cerradas**

## Objetivo

Convertir el brand kit auditado en una base realmente alineada con Opita Sync actual.

## Formato

- `P0` = obligatorio antes de usar narrativa/copy/strategy del kit
- `P1` = importante para alinear storytelling y material de go-to-market
- `P2` = expansión/pulido

---

## P0 — obligatorio

### A1 — Reescribir strategy reference
- **Archivos**:
  - `08_strategy_reference/product-definition.md`
  - `08_strategy_reference/decision-log.md`
  - `08_strategy_reference/opita_sync_strategy_summary.md`
- **Problema**: posicionan un producto viejo (motor/interoperabilidad/universal)
- **Acción**: reescribir desde cero
- **Fuente correcta**:
  - `source-of-truth/product-definition.md`
  - `source-of-truth/architecture-direction.md`
  - `docs/WHAT_NEXT_NOW.md`
  - `docs/NEXT_STRATEGIC_MOVE_2026-04-02.md`
- **Impacto**: evita vender el producto equivocado

### A2 — Reescribir messaging system
- **Archivos**:
  - `16_messaging_system/product_positioning.md`
  - `16_messaging_system/homepage_copy_starter.md`
  - `16_messaging_system/copy_blocks.md`
  - `16_messaging_system/messaging_matrix.md`
  - `16_messaging_system/terminology_guide.md`
  - `16_messaging_system/partner_message_kit.md`
  - `16_messaging_system/cta_library.md`
- **Problema**: mezcla claims viejos con framing demasiado genérico
- **Acción**: reescribir fuerte
- **Fuente correcta**:
  - source of truth del producto
  - dominio 1
  - dominio 2
  - controlled adoption
- **Impacto**: alinea narrativa comercial y de producto

### A3 — Corregir starters que pueden contaminar implementaciones
- **Archivos**:
  - `14_design_system/html/landing-starter.html`
  - `14_design_system/react/Hero.tsx`
  - `20_docs_developer_kit/docs-page-template.html`
  - `20_docs_developer_kit/api-reference-template.html`
- **Problema**: pueden propagar copy vieja directamente a web/docs
- **Acción**: mantener layout y reescribir copy base
- **Impacto**: evita que futuras implementaciones arranquen mal de entrada

### A4 — Resolver QA contradictoria
- **Archivos**:
  - `26_quality_assurance/release_gate.md`
  - `26_quality_assurance/strict_round_4/strict_release_gate_round4.md`
  - `26_quality_assurance/strict_round_4/strict_qa_findings_round4.md`
- **Problema**: PASS y FAIL conviven
- **Acción**: unificar criterio y dejar estado real
- **Impacto**: recupera confianza en el paquete

---

## P1 — importante

### B1 — Regenerar storytelling visual del producto
- **Archivos**:
  - `19_product_storytelling/architecture-map.svg`
  - `19_product_storytelling/intent-contract-flow.svg`
  - `19_product_storytelling/policy-approval-flow.svg`
  - `19_product_storytelling/audit-evidence-flow.svg`
  - `19_product_storytelling/tenant-isolation-diagram.svg`
  - `07_product_visuals/intent-to-evidence-flow.svg`
  - `07_product_visuals/governed-execution-flow.svg`
- **Problema**: cuentan una historia vieja del producto
- **Acción**: regenerar
- **Fuente correcta**:
  - corredor gobernado actual
  - OSF vs producto
  - dominio 1 y 2
- **Impacto**: mejora demo, web y ventas a la vez

### B2 — Reescribir materiales comerciales y de prensa
- **Archivos**:
  - `22_sales_enablement/one-pager-copy-template.md`
  - `22_sales_enablement/sales_email_template.md`
  - `23_partner_press_kit/company_boilerplate.md`
- **Problema**: riesgo de posicionar mal el producto
- **Acción**: reescribir
- **Impacto**: prepara mejor la fase de adopción controlada

### B3 — Alinear visuales de pricing/adopción
- **Archivos**:
  - `14_design_system/html/pricing-section.html`
  - `17_web_marketing_assets/pricing-visual.svg`
- **Problema**: probable framing demasiado genérico
- **Acción**: llevarlo a activation por tenant + uso posterior
- **Impacto**: coherencia con el modelo comercial real

---

## P2 — expansión / pulido

### C1 — Crear paquetes por dominio
- **Objetivo**: material de marketing/storytelling separado para dominio 1 y dominio 2

### C2 — Crear paquetes por rol
- **Objetivo**: assets para admin tenant / operator / approver

### C3 — Pulir blockers visuales
- **Archivos**:
  - `27_event_field_marketing/sticker-sheet.png`
  - `00_brand_manual/pages/page-08.png`
  - `00_brand_manual/pages/page-09.png`
  - `14_design_system/preview/ui-system-overview.png`

### C4 — Reusar visual system sin tocar demasiado
- **Archivos**:
  - `01_logos/*`
  - `02_icons/*`
  - `03_tokens/*`
  - `04_patterns_backgrounds/*`
  - `10_web_app_icons/*`
  - `15_accessibility/*`
- **Acción**: preservar con cambios mínimos

---

## Orden recomendado de ejecución

1. `A1`
2. `A2`
3. `A3`
4. `A4`
5. `B1`
6. `B2`
7. `B3`
8. `C1`
9. `C2`
10. `C3`
11. `C4`

---

## Resultado esperado

Al cerrar este backlog, el brand kit debería:

- seguir siendo fuerte visualmente;
- dejar de vender el producto equivocado;
- reflejar OSF vs Opita Sync correctamente;
- reflejar los dos dominios reales;
- servir para adopción controlada, no para generar confusión.
