# Asset P0 execution plan

## Objetivo

Ejecutar la parte más urgente de la remediación del brand kit sin dispersarse.

## Regla de esta fase

No corregir “un poco de todo”.

Primero hay que corregir la capa que más contamina al proyecto si se usa tal cual:

- strategy reference
- messaging system
- starters con copy vieja
- QA contradictoria

---

## Paso 1 — Congelación operativa

### Acción

Marcar como **no publicables tal cual** estas zonas del kit:

- `08_strategy_reference/*`
- `16_messaging_system/*`
- `19_product_storytelling/*`
- `22_sales_enablement/*`
- `23_partner_press_kit/company_boilerplate.md`

### Resultado esperado

- nadie del equipo los usa como fuente de verdad mientras se reescriben.

---

## Paso 2 — Reescritura del núcleo estratégico

### Archivos

1. `08_strategy_reference/product-definition.md`
2. `08_strategy_reference/decision-log.md`
3. `08_strategy_reference/opita_sync_strategy_summary.md`

### Orden correcto

- primero product-definition
- después strategy summary
- después decision-log

### Fuente única

- `source-of-truth/product-definition.md`
- `source-of-truth/architecture-direction.md`
- `docs/WHAT_NEXT_NOW.md`
- `docs/NEXT_STRATEGIC_MOVE_2026-04-02.md`

### Done

- [ ] ya no habla de “motor universal”
- [ ] ya no confunde OSF con Opita Sync
- [ ] ya posiciona a Opita Sync como control plane gobernado IA-First

---

## Paso 3 — Reescritura del messaging system

### Archivos

1. `16_messaging_system/product_positioning.md`
2. `16_messaging_system/homepage_copy_starter.md`
3. `16_messaging_system/copy_blocks.md`
4. `16_messaging_system/messaging_matrix.md`
5. `16_messaging_system/terminology_guide.md`
6. `16_messaging_system/partner_message_kit.md`
7. `16_messaging_system/cta_library.md`

### Orden correcto

- positioning
- homepage copy
- copy blocks
- messaging matrix
- terminology / CTA / partner kit

### Done

- [ ] messaging alinea con los dos dominios reales
- [ ] desaparece la narrativa genérica de interoperability engine
- [ ] aparece claramente la separación OSF vs Opita Sync

---

## Paso 4 — Contención de contaminación en starters

### Archivos

1. `14_design_system/html/landing-starter.html`
2. `14_design_system/react/Hero.tsx`
3. `20_docs_developer_kit/docs-page-template.html`
4. `20_docs_developer_kit/api-reference-template.html`

### Acción

- mantener estructura y estilo;
- reemplazar completamente copy y claims base.

### Done

- [ ] ningún starter deja copy vieja lista para copiar/pegar

---

## Paso 5 — QA única y consistente

### Archivos

1. `26_quality_assurance/release_gate.md`
2. `26_quality_assurance/strict_round_4/strict_release_gate_round4.md`
3. `26_quality_assurance/strict_round_4/strict_qa_findings_round4.md`

### Acción

- dejar un solo estado real del kit;
- si hay blockers, que se vean;
- si se resuelven, que quede claro qué cambió.

### Done

- [ ] no hay contradicción PASS/FAIL

---

## Gate de cierre de P0

P0 queda realmente cerrado si:

1. el kit ya no cuenta un producto viejo;
2. ya no mezcla framework y producto;
3. los starters no contaminan implementaciones nuevas;
4. la QA del kit es internamente coherente.

## Resultado esperado

Al cerrar P0, el kit todavía no tiene que estar perfecto.

Pero sí debe quedar:

- estratégicamente seguro de usar;
- narrativamente alineado con Opita Sync actual;
- sin riesgos graves de contaminar web/docs/sales con framing viejo.
