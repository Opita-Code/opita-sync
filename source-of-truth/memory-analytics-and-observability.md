# Memoria, analítica y observabilidad

## Regla principal
Separar memoria operativa y telemetría analítica.

## Memoria operativa
Guardar:
- hechos estables
- preferencias operativas
- resúmenes útiles
- decisiones y justificación breve
- contratos relevantes
- resultados finales útiles
- relaciones entre entidades

No guardar por defecto:
- secretos
- credenciales
- PII innecesaria en claro
- resultados sensibles completos si basta referencia, hash o resumen
- cadenas largas de razonamiento interno

## Telemetría analítica
Capturar:
- trazas
- spans
- handoffs
- tool calls
- errores
- tiempos
- costo
- aprobaciones
- métricas de éxito

## Capas de captura
### Capa 1 — negocio
- intención original
- contrato normalizado
- tipo de caso de uso
- objetivo
- resultado esperado
- riesgo
- estado final
- éxito o fracaso
- motivo del fracaso

### Capa 2 — orquestación
- agente principal
- subagentes invocados
- handoffs
- reglas cargadas
- memoria cargada
- tools candidatas
- tools realmente usadas
- racional de selección

### Capa 3 — ejecución
- tool calls
- argumentos normalizados
- resultado bruto
- resultado filtrado
- redacciones aplicadas
- aprobaciones
- tiempos por paso
- errores
- reintentos

### Capa 4 — calidad
- éxito por tipo de resultado
- cumplimiento del plan
- intervención humana
- tasa de aprobación
- tasa de rollback
- utilidad percibida
- cobertura de contexto
- precisión del contrato

### Capa 5 — costo y rendimiento
- tokens entrada/salida
- costo estimado
- latencia total
- latencia por span
- memoria recuperada vs usada
- reglas recuperadas vs usadas

## Eventos base
- intent_received
- inspection_contract_created
- contract_updated
- context_retrieved
- rules_selected
- memory_selected
- plan_generated
- plan_edited
- approval_requested
- approval_resolved
- tool_selected
- tool_executed
- output_filtered
- response_generated
- user_feedback_captured
- trace_closed
