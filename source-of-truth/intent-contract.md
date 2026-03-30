# Contrato de intención/inspección

## Rol
Es la unidad operativa central del sistema y la traducción estructurada de la intención del usuario antes de planear o ejecutar.

## Objetivos
- normalizar intención
- reducir ambigüedad
- permitir inspección previa
- habilitar validación de policies
- mejorar selección de herramientas
- dejar una base auditable

## Modelo de edición
Edición controlada.

### Lo que el usuario puede editar
- objetivo
- alcance
- tipo_de_resultado_esperado
- autonomia_solicitada
- aprobacion_requerida

### Lo que el sistema controla o enriquece
- tools
- datos permitidos
- riesgo
- restricciones
- contexto relevante

## Campos obligatorios recomendados
- objetivo
- tipo_de_resultado_esperado
- alcance
- restricciones
- sistemas_posibles
- datos_permitidos
- autonomia_solicitada
- aprobacion_requerida
- criterios_de_exito

## Campos enriquecibles por el sistema
- herramientas_permitidas
- herramientas_bloqueadas
- contexto_relevante
- nivel_de_riesgo
- datos_restringidos
- notas_de_contexto

## Campos técnicos
- request_id
- tenant_id
- workspace_id
- user_id
- session_id
- timestamp
