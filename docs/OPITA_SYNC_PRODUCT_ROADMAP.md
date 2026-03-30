# Opita Sync — Product Roadmap on top of OSF

> Estado: Sprint 1-3 definidos y listos para implementación  
> Baseline: OSF reusable baseline v1  
> Madurez actual: Alfa técnica  
> Objetivo: construir Opita Sync v1 como producto encima de OSF sin reabrir la arquitectura base del framework.

---

## 1. Resumen ejecutivo

### North Star

Lograr que un tenant pueda operar una vertical real con este corredor:

`intake -> proposal -> preview -> governance -> execution -> inspection/recovery`

### Roadmap por trimestres

| Quarter | Objetivo | Exit criteria | Prioridad |
|---|---|---|---|
| Q1 | Definir Opita Sync v1 + hardening P0 del baseline | producto definido + baseline apto para piloto | P0 |
| Q2 | Tenant operable + governance + surface usable | tenant operable + flujo usable | P0 |
| Q3 | Primera vertical funcional + piloto | 1 vertical completa validada | P0 |
| Q4 | Productización inicial | readiness para salida v1 | P1 |

### Artefactos implementation-ready

- `docs/OPITA_SYNC_IMPLEMENTATION_READY.md` — paquete de definición y especificación listo para implementar Sprint 1-3
- `docs/OPITA_SYNC_SPEC_MODEL.md` — modelo de spec a usar para gap closure
- `specs/productization-gap-closure/*` — línea normativa nueva para cerrar gaps de producto y hardening P0
- `specs/productization-gap-closure/s1a-aws-platform-profile-v1.md` — profile AWS-first para implementación sin reabrir seams
- `specs/productization-gap-closure/s1c-aws-bootstrap-and-landing-zone-v1.md` — landing zone y bootstrap AWS mínimo recomendado

---

## 2. Epics

| Epic | Quarter | Priority | Status | Outcome esperado |
|---|---|---:|---|---|
| E1 — Product Definition v1 | Q1 | P0 | Ready for implementation | vertical inicial definida |
| E2 — OSF Hardening P0 | Q1 | P0 | Ready for implementation | baseline deja de ser solo slice alfa |
| E3 — Tenant Onboarding | Q2 | P0 | Ready for implementation | tenant queda operable |
| E4 — Operational Surface | Q2 | P0 | Not started | operator/admin pueden usar el sistema |
| E5 — First Vertical | Q3 | P0 | Not started | caso real de negocio punta a punta |
| E6 — Metrics & Evals | Q3 | P1 | Not started | medir valor real |
| E7 — Productive Artifact/Retrieval Plane | Q4 | P1 | Not started | soporte operativo serio |
| E8 — Identity & Platform | Q4 | P1 | Not started | operación seria |
| E9 — Commercial Expansion | Later | P2 | Not started | escalar producto |

---

## 3. Milestones priorizados

| ID | Issue | Epic | Quarter | Priority | Status | Depends on |
|---|---|---|---|---:|---|---|
| M1.1 | Definir vertical inicial v1 | E1 | Q1 | P0 | Ready for implementation | - |
| M1.2 | Definir roles y journeys | E1 | Q1 | P0 | Ready for implementation | M1.1 |
| M1.3 | Definir catálogo inicial de capabilities | E1 | Q1 | P0 | Ready for implementation | M1.1 |
| M1.4 | Definir tenant minimum hard v1 | E1 | Q1 | P0 | Ready for implementation | M1.2 |
| M2.1 | Auditar gap OSF docs vs slice implementada | E2 | Q1 | P0 | Ready for implementation | - |
| M2.2 | Endurecer persistencia PostgreSQL del core | E2 | Q1 | P0 | Ready for implementation | M2.1 |
| M2.3 | Endurecer approvals/release path | E2 | Q1 | P0 | Ready for implementation | M2.1 |
| M2.4 | Consolidar evidence trail correlado | E2 | Q1 | P0 | Ready for implementation | M2.2, M2.3 |
| M2.5 | Endurecer recovery/compensation mínimo | E2 | Q1 | P0 | Ready for implementation | M2.4 |
| M3.1 | Implementar onboarding de tenant operable | E3 | Q2 | P0 | Ready for implementation | E1, E2 |
| M3.2 | Bootstrap de policies/approvals/clasificación | E3 | Q2 | P0 | Not started | M3.1 |
| M3.3 | Habilitación inicial de catálogo y conectores | E3 | Q2 | P0 | Not started | M3.1 |
| M4.1 | Surface usable de intake/proposal | E4 | Q2 | P0 | Not started | E3 |
| M4.2 | Preview legible con diff/riesgo/approvals | E4 | Q2 | P0 | Not started | M4.1 |
| M4.3 | Inspection/recovery usable para operator | E4 | Q2 | P0 | Not started | M4.2 |
| M5.1 | Elegir y modelar primer dominio | E5 | Q3 | P0 | Not started | E4 |
| M5.2 | Implementar connectors del dominio | E5 | Q3 | P0 | Not started | M5.1 |
| M5.3 | Pilotear con 1–2 tenants | E5 | Q3 | P0 | Not started | M5.2 |

---

## 4. Aceptación técnica por milestone

### M1.1 — Definir vertical inicial v1
- [ ] existe documento de alcance v1 con una sola vertical priorizada
- [ ] la vertical elegida se mapea a capabilities concretas
- [ ] la vertical no exige reabrir el framework base
- [ ] existen inputs, outputs, approvals y outcomes esperables definidos
- [ ] existe lista inicial de actores, sistemas y conectores involucrados

### M1.2 — Definir roles y journeys
- [ ] están definidos `admin`, `operator`, `approver`
- [ ] existen journeys punta a punta por rol
- [ ] cada paso del journey se mapea a artifacts del sistema
- [ ] no hay pasos que dependan de magia manual no documentada
- [ ] los journeys preservan boundary entre chat libre y acción gobernada

### M1.3 — Definir catálogo inicial de capabilities
- [ ] existe lista priorizada de 10–15 capabilities
- [ ] cada capability tiene result type esperado
- [ ] cada capability tiene policy/approval expectations iniciales
- [ ] cada capability puede mapearse a manifest/binding/provider
- [ ] no se introducen capabilities que requieran distribution layer

### M1.4 — Definir tenant minimum hard v1
- [ ] el mínimo duro incluye admin, policies base, approvals base, clasificación base, catálogo visible y al menos un conector
- [ ] el tenant tiene criterio explícito de `operable`
- [ ] onboarding parcial deja el tenant en estado no operable
- [ ] el esquema es reproducible y automatizable
- [ ] existe checklist de bootstrap

### M2.1 — Auditar gap OSF docs vs slice implementada
- [ ] existe matriz `documentado vs implementado`
- [ ] están identificados gaps bloqueantes vs no bloqueantes
- [ ] están identificados componentes convergentes no materializados aún
- [ ] los gaps tienen clasificación `P0/P1/P2`
- [ ] se evita asumir como implementado algo que solo existe en docs

### M2.2 — Endurecer persistencia PostgreSQL del core
- [ ] `contract`, `execution`, `events`, `approval`, `preview` y artifacts críticos persisten consistentemente
- [ ] no hay divergencia funcional grave entre modo memory y modo postgres
- [ ] los IDs correlacionables sobreviven roundtrip completo
- [ ] hay tests de persistencia y lectura por path crítico
- [ ] errores de persistencia dejan evidencia trazable

### M2.3 — Endurecer approvals/release path
- [ ] el bloqueo por governance ocurre antes de ejecución efectiva cuando corresponde
- [ ] el release es explícito y auditable
- [ ] approvals inválidas no liberan ejecución
- [ ] cambios materiales invalidan approvals previas
- [ ] existen tests para `approved`, `blocked`, `rejected`, `re-evaluated`

### M2.4 — Consolidar evidence trail correlado
- [ ] el corredor correlaciona `conversation_turn_id`, `proposal_draft_id`, `patchset_candidate_id`, `preview_candidate_id`, `contract_id`, `contract_fingerprint`, `execution_id`, `policy_decision_id`, `approval_request_id`
- [ ] el event log sigue siendo append-only
- [ ] observabilidad derivada no reemplaza evidencia primaria
- [ ] los artifacts pueden reconstruir el caso de punta a punta
- [ ] existen tests e2e del evidence trail

### M2.5 — Endurecer recovery/compensation mínimo
- [ ] `failed`, `blocked`, `compensating` y `unknown_outcome` son estados visibles y operables
- [ ] existe acción de recovery permitida y auditada
- [ ] `unknown_outcome` no se degrada artificialmente a success/failure
- [ ] compensación y rollback no se mezclan conceptualmente
- [ ] hay evidencia mínima exigida antes de cerrar manualmente

### M3.1 — Implementar onboarding de tenant operable
- [ ] existe endpoint/flujo de bootstrap de tenant
- [ ] el tenant queda en `operable` solo si cumple mínimo duro
- [ ] se generan artifacts iniciales del tenant
- [ ] existe validación de precondiciones
- [ ] hay test de onboarding exitoso y fallido

### M3.2 — Bootstrap de policies/approvals/clasificación
- [ ] cada tenant recibe configuración base gobernada
- [ ] approvals base existen y son auditablemente visibles
- [ ] clasificación base aplica antes de entregar resultados
- [ ] policy y clasificación no quedan hardcodeadas ad hoc en surface
- [ ] existen fixtures o test data reproducibles

### M3.3 — Habilitación inicial de catálogo y conectores
- [ ] el tenant solo ve capabilities habilitadas
- [ ] existe relación visible entre catálogo, binding y provider
- [ ] conectores no se activan sin governance
- [ ] hay al menos un conector funcional por tenant piloto
- [ ] no hay bypass directo desde chat a provider

### M4.1 — Surface usable de intake/proposal
- [ ] chat o input libre no aplica cambios directamente
- [ ] el intake genera artifacts gobernados
- [ ] proposal workspace muestra estado y próximos gates
- [ ] UX mínima permite seguir el flujo sin leer solo raw JSON
- [ ] la surface no duplica semántica del kernel

### M4.2 — Preview legible con diff/riesgo/approvals
- [ ] preview muestra diff humano y material
- [ ] preview muestra simulación, riesgo y approvals requeridas
- [ ] preview reutiliza evidencia real del kernel
- [ ] diferencia explícitamente predicción vs verdad confirmada
- [ ] preview no recalcula soberanamente policy ni outcome

### M4.3 — Inspection/recovery usable para operator
- [ ] operator puede ver lifecycle, outcome y evidence trail
- [ ] operator puede disparar recovery permitido
- [ ] se ven claramente estados `blocked`, `failed`, `compensating`, `unknown_outcome`
- [ ] toda acción queda auditada
- [ ] no existe mutación directa del estado canónico fuera del corredor

### M5.1 — Elegir y modelar primer dominio
- [ ] el dominio tiene caso de uso claro y repetible
- [ ] el dominio cabe dentro de capabilities y governance existentes
- [ ] el dominio define conectores, approvals y outcomes requeridos
- [ ] existe suite mínima de escenarios del dominio
- [ ] el dominio puede pilotearse sin inventar producto paralelo

### M5.2 — Implementar connectors del dominio
- [ ] connectors respetan manifest/binding/provider
- [ ] cada ejecución usa idempotency key
- [ ] connectors entregan evidence refs mínimas
- [ ] connectors no redefinen runtime ni policy
- [ ] hay tests de integración con casos exitosos y fallidos

### M5.3 — Pilotear con 1–2 tenants
- [ ] existen tenants piloto configurados
- [ ] el flujo completo corre con artifacts reales
- [ ] se miden tiempos, bloqueos, approvals y outcomes
- [ ] se registran incidentes o gaps del piloto
- [ ] existe criterio explícito de éxito o fracaso del piloto

---

## 5. Vistas sugeridas para Notion

### By Quarter
Agrupar por `Quarter`.

### P0 Only
Filtrar por `Priority = P0`.

### Operator Readiness
Filtrar por `Epic in E3, E4, E5`.

### Blocked by Framework
Filtrar por `Epic = E2`.

### Pilot Readiness
Filtrar por `Epic in E1, E2, E3, E4, E5` y `Status != Done`.

---

## 6. Properties sugeridas

- `Title`
- `Type` → Epic / Milestone / Issue
- `Quarter`
- `Priority` → P0 / P1 / P2
- `Status` → Not started / In progress / Blocked / Done
- `Owner`
- `Depends on`
- `Technical Acceptance`
- `Business Outcome`
- `Risk`
- `Notes`

---

## 7. Orden recomendado de ejecución

1. E1 — Product Definition v1
2. E2 — OSF Hardening P0
3. E3 — Tenant Onboarding
4. E4 — Operational Surface
5. E5 — First Vertical
6. E6 — Metrics & Evals
7. E8 — Identity & Platform
8. E7 — Productive Artifact/Retrieval Plane
9. E9 — Commercial Expansion

---

## 8. Sprints sugeridos para arrancar

### Sprint 1
- M1.1
- M1.2
- M1.3
- M2.1

### Sprint 2
- M1.4
- M2.2
- M2.3

### Sprint 3
- M2.4
- M2.5
- M3.1

---

## 9. Regla de gobierno del plan

Este roadmap es un plan de producto sobre OSF.

No debe usarse para:
- reabrir decisiones duras del framework base
- asumir como implementado lo que hoy solo existe en documentación
- introducir distribution layer de forma implícita
- confundir convergencia técnica futura con capacidad ya disponible en la slice actual
