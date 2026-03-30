# Opita Sync — Sprint 1-3 Implementation-Ready Package

> Estado: listo para empezar a implementarse  
> Alcance: cierre de definición y preparación técnica de Sprint 1, Sprint 2 y Sprint 3 del roadmap de producto  
> Importante: este documento **no afirma que las features ya estén implementadas**; afirma que quedaron definidas con el nivel de detalle necesario para empezar implementación sin ambigüedad bloqueante.

## Línea normativa actualizada

La traducción normativa de este paquete quedó formalizada en:

- `docs/OPITA_SYNC_SPEC_MODEL.md`
- `specs/productization-gap-closure/*`

## Overlay de plataforma recomendado

La implementación ahora asume perfil AWS-first documentado en:

- `specs/productization-gap-closure/s1a-aws-platform-profile-v1.md`
- `specs/productization-gap-closure/s1c-aws-bootstrap-and-landing-zone-v1.md`

Este documento sigue siendo útil como resumen operativo, pero la lectura principal para cerrar gaps pasa a estar en esa línea de specs.

---

## 1. Definición de readiness

Un milestone se considera **implementation-ready** cuando cumple estas condiciones:

1. tiene objetivo de negocio y alcance explícito;
2. tiene boundary claro respecto del baseline OSF actual;
3. tiene artefactos, endpoints y seams afectados identificados;
4. tiene aceptación técnica verificable;
5. tiene secuencia de implementación recomendada;
6. no depende de reabrir decisiones duras del framework base.

---

## 2. Sprint 1 cerrado a nivel de definición

Sprint 1 incluye:

- M1.1 — Definir vertical inicial v1
- M1.2 — Definir roles y journeys
- M1.3 — Definir catálogo inicial de capabilities
- M2.1 — Auditar gap OSF docs vs slice implementada

---

## 3. M1.1 — Vertical inicial v1

### Decisión

La vertical inicial de **Opita Sync v1** será:

**Gobernanza de cambios operativos del tenant**.

En términos de producto, Opita Sync v1 arranca como una superficie para:

- capturar intención operativa desde lenguaje natural;
- convertirla en artifacts gobernados;
- previsualizar impacto, riesgo y approvals;
- ejecutar o liberar ejecución gobernada;
- inspeccionar evidencia y operar recovery.

### Por qué esta vertical y no otra

Porque es la vertical que mejor aprovecha la slice actual ya implementada:

- intake
- proposal
- patchset
- preview/simulation
- compile intent
- approval/release
- inspection/recovery
- maintenance/debug
- artifact upload/retrieval

Intentar arrancar con una vertical de negocio externa más ambiciosa antes de endurecer esta base sería una mala decisión arquitectónica.

### In scope v1

- cambios operativos gobernados dentro del tenant;
- preparación de proposals y patchsets;
- previsualización de cambios antes de ejecutar;
- decisiones humanas de approval;
- inspección de corrida y evidence trail;
- recovery básico sobre estados bloqueados, failed o unknown.

### Out of scope v1

- distribution layer;
- monetización;
- rollout multi-tenant comercial masivo;
- UI final enterprise;
- breadth funcional fuera del corredor gobernado;
- conectores enterprise profundos con apply irreversible en sistemas críticos.

### Actores iniciales

- **Admin tenant**: configura el tenant y su baseline gobernado.
- **Operator**: inicia, prepara, inspecciona y recupera operaciones.
- **Approver**: revisa y libera operaciones bloqueadas.

### Sistemas y conectores iniciales

Para v1 no se requiere breadth de conectores externos. El primer dominio puede ejecutarse con:

- registry local de capabilities;
- provider default por manifest/binding;
- artifact store local/filesystem;
- PostgreSQL opcional;
- Cerbos opcional.

### Inputs esperables

- intención libre de operator;
- contexto de tenant;
- artifacts referenciados;
- restricciones, criterios de éxito y alcance;
- reglas de approval/policy/classification.

### Outputs esperables

- proposal draft;
- patchset candidate;
- preview candidate + simulation results;
- compiled contract;
- execution record;
- approval request si aplica;
- inspection view;
- recovery candidate;
- event log y evidence refs.

### Aceptación técnica de M1.1

- [x] existe una sola vertical priorizada;
- [x] la vertical se mapea a capabilities concretas del corredor actual;
- [x] la vertical no requiere reabrir OSF base;
- [x] inputs, outputs y outcomes quedaron definidos;
- [x] existen actores y sistemas iniciales identificados.

---

## 4. M1.2 — Roles y journeys

### Roles v1

| Rol | Responsabilidad | No puede hacer |
|---|---|---|
| Admin tenant | bootstrap del tenant, catálogo visible, conectores habilitados, políticas base | saltarse governance global del core |
| Operator | intake, proposal, preview, inspección, recovery permitido, mantenimiento asistido | aplicar cambios directos desde chat libre |
| Approver | revisar y liberar requests bloqueadas según policy | ejecutar como operator ni reconfigurar tenant |

### Journey 1 — Operator

1. inicia intención libre por `POST /v1/intake/turns`
2. obtiene `conversation_turn`, `intake_session`, `intent_candidate`
3. crea proposal por `POST /v1/proposals`
4. crea patchset por `POST /v1/patchsets`
5. crea preview por `POST /v1/previews`
6. compila intención por `POST /v1/intents/compile`
7. inspecciona corrida por `GET /v1/foundation/runs/{execution_id}` y `GET /v1/inspection/executions/{execution_id}`
8. si queda bloqueado, solicita recovery permitido

### Journey 2 — Approver

1. consulta approval por `GET /v1/approvals/{approval_request_id}`
2. revisa reason codes y contexto
3. libera por `POST /v1/approvals/{approval_request_id}/release`
4. operator reinspecciona ejecución y evidencia

### Journey 3 — Admin tenant

1. crea tenant
2. aplica bootstrap mínimo duro
3. habilita catálogo visible y conectores iniciales
4. valida que el tenant quede en estado `operable`

### Mapeo journey -> artifacts

| Paso | Artifact principal |
|---|---|
| Intake | `conversation_turn`, `intake_session`, `intent_candidate` |
| Proposal | `proposal_draft` |
| Patchset | `patchset_candidate` |
| Preview | `preview_candidate`, `simulation_result` |
| Compile | `compiled_contract`, `compilation_report` |
| Governance | `approval_request`, `policy_decision` |
| Runtime | `execution_record` |
| Inspection | `foundation_run`, `inspection_view`, `event_records` |
| Recovery | `recovery_action_candidate` |

### Guardrails obligatorios del journey

- el chat libre nunca aplica cambio directo;
- approvals y release no son implícitos;
- inspection y recovery trabajan sobre estado canónico y evidencia correlada;
- operator y approver tienen boundaries distintos.

### Aceptación técnica de M1.2

- [x] roles definidos;
- [x] journeys punta a punta definidos;
- [x] cada paso se mapea a artifacts del sistema actual;
- [x] se eliminaron dependencias de “magia manual” no documentada;
- [x] se preservó el boundary entre conversación libre y acción gobernada.

---

## 5. M1.3 — Catálogo inicial de capabilities

### Regla de diseño

El catálogo de producto vive por encima del baseline actual de manifests. Hoy el repo solo materializa dos manifests default (`plan` y `execution`) en `definitions/capabilities/`; por lo tanto, el catálogo inicial de producto se define como **catálogo objetivo v1**, no como inventario ya implementado al 100%.

### Capabilities iniciales v1

| ID | Tipo | Objetivo | Result type | Sensibilidad | Riesgo | Approval | Estado |
|---|---|---|---|---|---|---|---|
| `tenant.intake.capture_intent` | action | captar intención operativa inicial | `plan` | internal | low | no | planned |
| `tenant.intake.shape_intent` | action | convertir input libre en candidate gobernado | `inspection` | internal | low | no | planned |
| `tenant.proposal.create_change_draft` | workflow | crear proposal draft | `change_proposal` | internal | medium | no | planned |
| `tenant.patchset.prepare_candidate` | action | preparar patchset material | `change_proposal` | internal | medium | no | planned |
| `tenant.preview.run_governance_preview` | workflow | simular diff, risk, policy y approvals | `report` | internal | medium | no | planned |
| `tenant.execution.compile_governed_intent` | action | compilar intent a contrato ejecutable | `execution` | internal | medium | maybe | partial |
| `tenant.execution.inspect_run` | action | reconstruir corrida correlada | `inspection` | internal | low | no | partial |
| `tenant.approval.release_blocked_execution` | action | liberar ejecución bloqueada | `governance_decision` | restricted | high | yes | partial |
| `tenant.recovery.resume_after_approval` | action | retomar ejecución luego de release | `execution` | restricted | high | yes | partial |
| `tenant.recovery.request_manual_compensation` | action | iniciar compensación manual gobernada | `governance_decision` | restricted | high | yes | partial |
| `tenant.artifacts.upload_evidence` | action | subir evidencia/artifacts | `report` | internal | low | no | partial |
| `tenant.retrieval.search_evidence` | action | buscar artifacts relevantes | `query` | internal | low | no | partial |
| `tenant.maintenance.request_human_review` | action | abrir maintenance candidate | `governance_decision` | internal | medium | yes | partial |

### Tenant visibility recomendada por default

| Capability | visible | usable | approvable | assignable | administrable |
|---|---|---|---|---|---|
| intake / shaping | yes | operator | no | admin | admin |
| proposal / patchset / preview | yes | operator | no | admin | admin |
| compile / inspect | yes | operator | no | admin | admin |
| approval release | yes | approver | approver | admin | admin |
| recovery actions | yes | operator | approver cuando aplique | admin | admin |
| artifacts / retrieval | yes | operator | no | admin | admin |
| maintenance review | yes | operator | approver | admin | admin |

### Mapping a manifests actuales

- hoy existe manifest directo para `plan`
- hoy existe manifest directo para `execution`
- las demás capabilities requieren expansión de manifests o resolución por workflow/product layer

### Aceptación técnica de M1.3

- [x] existe lista inicial de 10+ capabilities;
- [x] cada capability tiene result type esperado;
- [x] cada capability tiene expectativa de policy/approval inicial;
- [x] quedó explícito qué mapea hoy a manifests y qué queda para expansión;
- [x] no se introdujo distribution layer.

---

## 6. M2.1 — Gap audit OSF docs vs slice implementada

### Resumen ejecutivo del gap

La documentación convergente define un profile técnico más amplio que la slice Go materializada. Eso NO invalida el baseline actual, pero sí obliga a priorizar qué gaps bloquean producto y cuáles pueden diferirse.

### Matriz documentado vs implementado

| Área | Documentado | Implementado verificado | Gap | Prioridad |
|---|---|---|---|---|
| Runtime durable | Temporal como runtime de verdad | orchestrator in-process + stores memory/postgres | durable runtime real no materializado | P1 |
| Policy | Cerbos como PDP principal | Cerbos opcional + stub memory | falta endurecimiento de escenarios ricos | P0 |
| Truth plane | PostgreSQL durable | PostgreSQL opcional para varios artifacts | cobertura y simetría incompletas | P0 |
| Event log | append-only canónico | existe `event_records` + append actual | faltan invariantes y correlación más estricta | P0 |
| Approvals | governance robusta | create/get/update state básicos | lifecycle y enforcement todavía mínimos | P0 |
| Artifact plane | S3-compatible object storage | filesystem local | artifact plane productivo ausente | P1 |
| Retrieval plane | OpenSearch complementario | retrieval en memoria | retrieval productivo ausente | P1 |
| Cache/locks | Valkey | no materializado | diferible para v1 inicial | P2 |
| Observabilidad | OTel + LGTM | no materializado | observabilidad derivada ausente | P1 |
| Connector SDK | baseline convergente | mock SDK inicial | falta path productivo | P1 |
| Tenant onboarding | tenant operable explícito | no existe bootstrap de tenant | bloqueo directo a producto | P0 |
| Catálogo tenant-scoped | catálogo visible/usable por tenant | registry mínimo por result type | falta catálogo de producto | P0 |

### Gaps P0 para empezar producto

1. hardening de persistencia PostgreSQL;
2. hardening de approvals/release;
3. evidence trail correlado y reconstruible;
4. recovery/compensation mínimamente operables;
5. onboarding de tenant operable;
6. catálogo inicial de producto y visibilidad tenant-scoped.

### Gaps P1 que no deben bloquear arranque

1. Temporal real;
2. artifact plane S3-compatible;
3. retrieval productivo/OpenSearch;
4. OTel/LGTM;
5. connector SDK productivo.

### Gaps P2 diferibles

1. Valkey;
2. Keycloak;
3. Langfuse;
4. distribution layer.

### Aceptación técnica de M2.1

- [x] existe matriz documentado vs implementado;
- [x] gaps bloqueantes vs diferibles clasificados;
- [x] componentes convergentes no materializados identificados;
- [x] priorización `P0/P1/P2` definida;
- [x] se evita tratar documentación como si ya fuera código.

---

## 7. Sprint 2 cerrado a nivel de especificación de implementación

Sprint 2 incluye:

- M1.4 — Definir tenant minimum hard v1
- M2.2 — Endurecer persistencia PostgreSQL del core
- M2.3 — Endurecer approvals/release path

---

## 8. M1.4 — Tenant minimum hard v1

### Regla

Un tenant solo puede pasar a `operable` si cumple el mínimo duro. Existir en base de datos no alcanza.

### Minimum hard v1

1. `tenant_id` y metadata base del tenant
2. `admin_subject_id` inicial
3. baseline de policies del tenant
4. baseline de approvals del tenant
5. baseline de classification del tenant
6. catálogo visible inicial
7. al menos un conector/provider habilitado
8. memoria/contexto inicial del tenant
9. estado explícito del tenant (`draft`, `configured`, `operable`, `blocked`)

### No obligatorio en el bootstrap mínimo

- organigrama completo
- subadmins
- retrieval productivo
- SSO enterprise

### Checklist de bootstrap

- [ ] tenant creado
- [ ] admin asignado
- [ ] policy baseline aplicada
- [ ] approvals baseline aplicadas
- [ ] classification baseline aplicada
- [ ] catálogo visible cargado
- [ ] al menos un conector/binding habilitado
- [ ] contexto inicial cargado
- [ ] health check de operabilidad exitoso

### Criterio de operable

El tenant queda `operable` cuando puede completar exitosamente:

`intake -> proposal -> preview -> compile -> approval lookup/release -> inspection`

### Aceptación técnica de M1.4

- [x] mínimo duro definido;
- [x] criterio de `operable` definido;
- [x] onboarding parcial deja estado no operable;
- [x] checklist reproducible definido;
- [x] modelo automatizable sin exigir organigrama completo.

---

## 9. M2.2 — Especificación de hardening PostgreSQL del core

### Objetivo

Llevar el modo PostgreSQL de “opcional y útil” a “suficientemente sólido para piloto”.

### Tablas ya presentes en schema

- `compiled_contracts`
- `execution_records`
- `event_records`
- `foundation_runs`
- `approval_requests`
- `intake_turns`
- `intake_sessions`
- `intent_candidates`
- `proposal_drafts`
- `patchset_candidates`
- `preview_candidates`
- `simulation_results`
- `recovery_action_candidates`
- `maintenance_action_candidates`

### Gaps técnicos actuales

1. no todas las relaciones tienen constraints o índices adicionales;
2. hay persistencia por payload JSONB, pero faltan invariantes funcionales de lectura/escritura;
3. falta validación de roundtrip y correlación profunda entre artifacts;
4. errores de persistencia todavía no están normalizados como taxonomy operativa;
5. la simetría memory/postgres no está explícitamente protegida por test matrix.

### Implementación recomendada

#### Paso 1 — Endurecer esquema
- agregar índices por `tenant_id`, `contract_id`, `trace_id`, `session_id` donde aplique;
- documentar llaves lógicas esperadas aunque se mantenga payload JSONB;
- asegurar unicidad o deduplicación donde el corredor lo necesite.

#### Paso 2 — Validar roundtrip
- tests por artifact `create -> get/list -> compare`;
- tests de correlación por `execution_id`, `contract_id`, `trace_id`;
- tests de no-regresión frente al modo memory.

#### Paso 3 — Normalizar errores
- taxonomy de errores de persistencia por dominio (`contract`, `runtime`, `approval`, `preview`, `recovery`);
- logging técnico sin perder reason codes del negocio.

#### Paso 4 — Cerrar simetría mínima
- mismo comportamiento observable entre memory y postgres para paths críticos del piloto;
- diferencias permitidas solo cuando estén documentadas explícitamente.

### Aceptación técnica de M2.2

- [x] artifacts críticos identificados;
- [x] pasos de endurecimiento definidos;
- [x] estrategia de tests de roundtrip definida;
- [x] necesidad de simetría memory/postgres explicitada;
- [x] milestone listo para empezar implementación.

---

## 10. M2.3 — Especificación de hardening approvals/release

### Estado actual verificado

Hoy la slice soporta:

- creación de approval request desde `FoundationOrchestrator`
- lectura por ID
- update de estado
- release vía endpoint
- resume vía recovery action

### Gaps actuales

1. no existe actor aprobador explícito en el record;
2. no existe comentario/justificación de approval o rejection;
3. el path de rechazo/escalación no está completo en surface pública;
4. no existe invalidación explícita por cambio material del contrato en el path HTTP actual;
5. el release es funcional pero todavía poco rico para auditoría de piloto.

### Decisión de implementación mínima v1

Para el piloto, el subsistema debe soportar como mínimo:

- `awaiting_approval`
- `released`
- `rejected`
- `escalated`

con estos campos adicionales en payload:

- `decided_by_subject_id`
- `decision_comment`
- `decision_reason_codes`
- `released_at` o `rejected_at`
- `source_contract_fingerprint`

### Cambios recomendados

#### Dominio
- enriquecer `approvals.Request` con sujeto decisor, comentario y fingerprint fuente.

#### Persistence
- persistir esos campos en payload sin romper compatibilidad;
- agregar tests de update state enriquecido.

#### Surface/API
- exponer `reject` y `escalate` además de `release`;
- exigir identidad del actor aprobador;
- devolver reason codes auditables.

#### Governance
- validar que approval liberada solo aplica si el fingerprint actual coincide con el aprobado;
- si cambia materialmente el contrato, la approval previa queda inválida.

### Aceptación técnica de M2.3

- [x] lifecycle mínimo objetivo definido;
- [x] gaps actuales identificados;
- [x] cambios de dominio, persistence y surface definidos;
- [x] invalidación por fingerprint explicitada;
- [x] milestone listo para implementación.

---

## 11. Sprint 3 cerrado a nivel de especificación de implementación

Sprint 3 incluye:

- M2.4 — Consolidar evidence trail correlado
- M2.5 — Endurecer recovery/compensation mínimo
- M3.1 — Implementar onboarding de tenant operable

---

## 12. M2.4 — Especificación de evidence trail correlado

### Cadena canónica requerida

El corredor debe reconstruirse de punta a punta con estas referencias:

- `conversation_turn_id`
- `intake_session_id`
- `intent_candidate_id`
- `proposal_draft_id`
- `patchset_candidate_id`
- `preview_candidate_id`
- `simulation_result_id`
- `contract_id`
- `contract_fingerprint`
- `execution_id`
- `trace_id`
- `policy_decision_id`
- `approval_request_id` cuando aplique
- `recovery_action_candidate_id` cuando aplique

### Estado actual verificado

El e2e actual ya demuestra gran parte del corredor, pero no valida todavía con rigor:

- completitud de correlación en todos los payloads;
- invariantes de reconstrucción;
- consistencia de `trace_id` en surface vs engine;
- diferencia entre evidencia primaria y observabilidad derivada.

### Decisión técnica

La autoridad de evidencia seguirá en:

- PostgreSQL
- event log canónico
- artifacts persistidos

Nunca en:

- retrieval index
- observabilidad derivada
- vistas calculadas efímeras

### Eventos mínimos obligatorios

- `intake.turn_recorded`
- `proposal.created`
- `patchset.created`
- `preview.created`
- `preview.simulation_recorded`
- `contract.compilation_completed`
- `policy.decision_recorded`
- `execution.created`
- `approval.awaiting` cuando aplique
- `execution.released` cuando aplique
- `execution.unknown_outcome` cuando aplique
- `compensation.requested` cuando aplique

### Implementación recomendada

1. fijar schema de correlación por event payload;
2. completar payloads faltantes con IDs canónicos;
3. asegurar que inspection view pueda reconstruirse sin heurística blanda;
4. agregar tests e2e que validen correlación completa, no solo existencia de registros.

### Aceptación técnica de M2.4

- [x] cadena canónica definida;
- [x] autoridad de evidencia explicitada;
- [x] taxonomía mínima de eventos definida;
- [x] pasos de implementación definidos;
- [x] milestone listo para implementación.

---

## 13. M2.5 — Especificación de recovery/compensation mínimo

### Estado actual verificado

Hoy existen estos recovery actions en tipos:

- `retry_technical_step`
- `resume_after_approval`
- `request_human_review`
- `request_manual_compensation`
- `acknowledge_unknown_outcome`
- `escalate_for_human_review`

Y la surface ejecuta realmente:

- `resume_after_approval`
- `acknowledge_unknown_outcome`
- `request_manual_compensation`

### Decisión de v1

Para el primer piloto, los únicos recovery actions obligatorios son:

1. `resume_after_approval`
2. `acknowledge_unknown_outcome`
3. `request_manual_compensation`

Los demás quedan diferidos o expuestos como candidatos no ejecutables hasta tener runtime más rico.

### Reglas

- `unknown_outcome` no se convierte artificialmente en success o failure;
- `manual_compensation` no equivale a rollback automático;
- toda acción de recovery debe dejar event record;
- inspection debe mostrar estado actual y reason codes.

### Evidencia mínima antes de recovery

- `execution_id`
- `current_runtime_state`
- `requested_by_subject_id`
- `requested_action`
- `approval_request_id` si aplica
- `reason_codes`
- referencia al conjunto mínimo de events y artifacts asociados

### Implementación recomendada

1. endurecer validaciones por estado actual;
2. persistir identity y justificación del actor operador;
3. emitir eventos consistentes de recovery;
4. bloquear acciones no soportadas con reason codes claros;
5. agregar tests por transición válida e inválida.

### Aceptación técnica de M2.5

- [x] subset mínimo de recovery definido;
- [x] separación entre compensation y rollback explicitada;
- [x] evidencia mínima requerida definida;
- [x] estrategia de validación y tests definida;
- [x] milestone listo para implementación.

---

## 14. M3.1 — Especificación de onboarding de tenant operable

### Objetivo

Crear un flujo de bootstrap para que un tenant pase de inexistente o draft a `operable` con precondiciones verificadas.

### Estado objetivo del tenant

- `draft`
- `configuring`
- `configured`
- `operable`
- `blocked`

### Flujo propuesto

#### Paso 1 — Crear tenant
- crear metadata base del tenant;
- asignar `admin_subject_id`.

#### Paso 2 — Aplicar baseline
- policies base;
- approvals base;
- classification base;
- catálogo visible inicial;
- conector/provider inicial.

#### Paso 3 — Cargar contexto inicial
- información mínima del tenant;
- memoria/corpus base si existe;
- references iniciales necesarias para operar.

#### Paso 4 — Validar operabilidad
- correr un health check funcional del corredor;
- marcar `operable` solo si pasa.

### Endpoint recomendado

`POST /v1/tenants/bootstrap`

Payload mínimo:

- `tenant_id`
- `tenant_name`
- `admin_subject_id`
- `initial_catalog_refs`
- `initial_connector_refs`
- `policy_profile_ref`
- `approval_profile_ref`
- `classification_profile_ref`
- `context_seed`

### Artifacts que debe producir

- `tenant_bootstrap_record`
- `tenant_policy_profile_applied`
- `tenant_approval_profile_applied`
- `tenant_classification_profile_applied`
- `tenant_catalog_projection`
- `tenant_connector_projection`
- `tenant_operability_report`

### Tests mínimos

#### Success path
- tenant con todos los mínimos queda `operable`

#### Failure paths
- sin admin → no operable
- sin policy baseline → no operable
- sin catálogo visible → no operable
- sin conector/provider inicial → no operable
- sin health check funcional → no operable

### Dependencias

- M1.4 definido
- M2.2 definido
- M2.3 definido
- M2.4 definido
- M2.5 definido

### Aceptación técnica de M3.1

- [x] estados del tenant definidos;
- [x] flujo de bootstrap definido;
- [x] payload mínimo definido;
- [x] artifacts de salida definidos;
- [x] success/failure paths definidos;
- [x] milestone listo para implementación.

---

## 15. Gate final — listo para empezar implementación

Se considera que Sprint 1-3 quedaron listos para implementarse porque:

- [x] la vertical inicial está cerrada;
- [x] roles y journeys están cerrados;
- [x] el catálogo inicial está definido;
- [x] el mínimo duro del tenant está definido;
- [x] existe gap audit priorizado;
- [x] existe especificación de hardening PostgreSQL;
- [x] existe especificación de hardening approvals/release;
- [x] existe especificación de evidence trail;
- [x] existe especificación de recovery/compensation;
- [x] existe especificación de onboarding de tenant operable.

### Lo que sigue ahora

No hace falta seguir pensando el roadmap base. Hace falta IMPLEMENTAR en este orden:

1. M2.2 — hardening PostgreSQL
2. M2.3 — hardening approvals/release
3. M2.4 — evidence trail correlado
4. M2.5 — recovery/compensation mínimo
5. M3.1 — onboarding de tenant operable

Recién después conviene abrir surface rica adicional o primera vertical externa más amplia.
