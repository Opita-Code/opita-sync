# SaaS e aislamiento

## Decisión central
Modelo tenant-first con memoria multi-scope y distintos niveles de aislamiento dentro del scope central del producto.

## Niveles de memoria
### Tenant
- policies
- conectores
- catálogo de acciones
- memoria compartida de negocio
- taxonomías
- reglas
- analítica agregada
- configuración de aislamiento

### Equipo/área
- contexto compartido del dominio
- workflows del área
- KPIs
- aprobadores
- restricciones funcionales
- memoria común

### Usuario
- preferencias
- delegaciones
- historial útil
- estilo operativo
- decisiones recurrentes
- perfil de autonomía permitido

### Sesión/caso
- contrato activo
- plan activo
- evidencia temporal
- tools usadas
- resultados intermedios
- aprobaciones del caso
- trazas de ejecución

## Niveles de aislamiento a soportar
- aislamiento lógico por tenant
- aislamiento reforzado por tenant
- aislamiento dedicado cuando el cliente o caso lo requiera

## Ambientes
El producto tendrá ambientes separados desde el inicio:
- dev
- staging
- prod
