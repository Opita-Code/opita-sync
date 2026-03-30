# Permisos, delegación y policies

## Modelo central
Modelo híbrido y empresarial:
- RBAC como base
- ABAC para contexto
- ReBAC para relaciones y delegación
- policies explícitas para approvals, deny y compliance

## Delegación
La delegación es una capa explícita y multientidad.

Debe soportar:
- persona -> persona
- persona -> equipo
- rol/cargo -> persona
- rol/cargo -> equipo
- unidad organizacional -> persona o equipo
- herencia por organigrama
- delegación temporal
- delegación permanente
- re-delegación limitada
- precedencia de deny/policy sobre grants delegados

## Objeto recomendado de delegación
- grant_id
- source_principal
- target_principal
- authority_source
- scope_type
- scope_ref
- allowed_actions
- denied_actions
- valid_from
- valid_until
- requires_approval
- can_redelegate
- max_depth
- conditions_ref
- justification
- revoked_at
- revoked_by
- trace_ref

## Regla de resolución
rol base -> relaciones del grafo -> delegaciones activas -> policies contextuales -> forbid/deny -> decisión final

## Policies globales del tenant
Modelo mixto con plantillas base:
- el núcleo define plantillas base
- el tenant puede configurarlas dentro de límites controlados

## Jerarquía administrativa interna del tenant
- cada tenant puede tener admins y subadmins
- los admins deciden quién puede delegar y a quién
- los admins asignan o quitan visibilidad y permiso de uso sobre acciones publicadas dentro de límites definidos por el superadmin
