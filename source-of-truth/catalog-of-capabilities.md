# Catálogo de capacidades

## Qué es el catálogo
El registro central de capacidades gobernadas del sistema.

Cada item del catálogo puede ser:
- una acción atómica de negocio
- un workflow

## Tipos soportados
- `action`
- `workflow`

## Campos mínimos obligatorios por item
- `id`
- `nombre`
- `tipo`
- `objetivo`
- `descripcion`
- `sistemas_base_relacionados`
- `tipo_de_resultado_que_produce`
- `nivel_de_sensibilidad`
- `nivel_de_riesgo`
- `requiere_aprobacion`
- `roles_o_condiciones_de_uso`
- `tenant_visibility`
- `estado`

## Regla de modelado
El usuario normal interactúa sobre acciones de negocio.
El sistema resuelve internamente contra sistemas base.

## `tenant_visibility`
No se modela como enum simple.

Se modela como objeto de capacidades separadas:
- `visible`
- `usable`
- `approvable`
- `assignable`
- `administrable`

## Estados recomendados
- `active`
- `disabled`
- `retired`

## Qué sigue abierto aquí
- capas exactas del catálogo
- lifecycle completo de items del catálogo
- relación exacta entre catálogo global, catálogo tenant y catálogo efectivo
