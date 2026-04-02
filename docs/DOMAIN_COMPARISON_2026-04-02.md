# Domain comparison — 2026-04-02

## Objetivo

Comparar el **primer dominio** y el **segundo dominio** de Opita Sync para entender qué tan cerca está el segundo del nivel de madurez del primero.

## Dominios comparados

### Dominio 1

- `tenant configuration governance`

### Dominio 2

- `tenant access and delegation governance`

---

## Comparación ejecutiva

| Área | Dominio 1 | Dominio 2 | Lectura |
|---|---:|---:|---|
| Claridad conceptual | 90 | 85 | ambos están claros; el primero lleva más tiempo madurando |
| Cobertura funcional | 85 | 78 | el segundo ya cubre grants/delegations/approval/revoke, pero sigue un poco detrás |
| UX operativa | 78 | 70 | el segundo mejoró mucho con access admin workspace, pero aún es menos claro |
| Observabilidad | 80 | 72 | el primero está más redondo; el segundo ya mejoró con scorecards access-aware |
| Validación por piloto | 80 | 70 | el primero está mejor revalidado; el segundo ya tiene rerun con buena señal |
| Riesgo residual | medio | medio-alto | el segundo todavía tiene más deuda de polish/medición |

---

## Qué ya iguala el segundo dominio

### 1. Governance explícita

El segundo dominio ya tiene:

- approval explícita;
- revoke auditada;
- surface usable;
- scorecards e incident candidates.

Eso significa que **ya salió de la etapa teórica**.

### 2. Capacidad de pilotearse

El segundo dominio ya tiene:

- pilot plan;
- runbook;
- primer piloto;
- rerun de Semana 2.

O sea: ya es una vertical real, no una hipótesis.

### 3. Integración con el framework

No quedó como “feature suelta”.

Se integra con:

- approvals;
- event log;
- scorecards;
- workspace;
- tenant bootstrap/contexto.

---

## Dónde el primer dominio sigue siendo claramente más fuerte

### 1. Confianza operativa

El primer dominio pasó por:

- piloto inicial;
- segunda vuelta;
- post-piloto;
- revalidación formal.

El segundo dominio ya avanzó mucho, pero todavía no tiene ese nivel de cierre ejecutivo.

### 2. Señal de observabilidad más madura

El primer dominio está mejor conectado a:

- preview;
- execution;
- inspection;
- recovery;
- métricas del corredor clásico.

El segundo dominio ya mejoró bastante, pero todavía necesita más refinamiento temporal y de lectura ejecutiva.

### 3. Sensación de producto

En el primer dominio, la combinación de:

- tenant bootstrap
- preview legible
- operator workspace
- tenant admin workspace

ya da una sensación más completa.

El segundo dominio todavía se siente un poco más “correcto” que “fluido”.

---

## Conclusión comparativa

### Estado del dominio 1

- **maduro y validado**

### Estado del dominio 2

- **válido y prometedor, pero todavía en consolidación**

## Juicio honesto

El segundo dominio ya está **lo suficientemente fuerte para merecer inversión continua**.

Todavía no está exactamente al nivel del primero, pero ya no hay duda seria sobre si vale la pena sostenerlo.

## Recomendación

La decisión correcta ahora es:

- seguir consolidando el segundo dominio;
- no abrir una tercera vertical todavía;
- usar al primer dominio como referencia de calidad, no como excusa para frenar el segundo.

## Resumen ejecutivo

> El primer dominio ya es una vertical validada.
> 
> El segundo dominio ya es una vertical real en consolidación.
> 
> La prioridad correcta es llevar el segundo a la altura del primero antes de expandir más el producto.
