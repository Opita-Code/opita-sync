# Access plane audit — 2026-03-31

## Alcance de la auditoría

Esta auditoría cubre el segundo dominio:

- grants
- delegations
- approve / revoke
- access admin workspace
- scorecards access-aware

## Resumen

El access plane está **más fuerte de lo que parecía**.

Ya tiene:

- modelo propio;
- storage memory/postgres;
- create/list;
- approval explícita;
- revoke;
- access admin workspace;
- pilot pack;
- runbook;
- piloto corrido;
- scorecards access-aware.

Eso significa que la base del segundo dominio ya existe de verdad.

## Evaluación general

- Estado general: **usable baseline**
- Riesgo principal: **observabilidad todavía menos madura que la del primer dominio**
- Recomendación actual: **ready_for_week_2 si no se encuentran gaps nuevos en Tarea 2/Tarea 4**

---

## Gaps bloqueantes

### Ninguno crítico detectado hoy

No se detectó un blocker estructural que impida seguir con la Semana 2.

No se observaron hoy:

- bypass de approval;
- revoke sin efecto visible;
- contradicción grosera entre workspace y estado canónico;
- rotura del storage o del event trail del access plane.

---

## Gaps molestos

### 1. La scorecard del segundo dominio todavía es menos intuitiva que la del primero

Aunque ya es access-aware, sigue costando más leer el estado del access plane de forma inmediata.

Impacto:

- la señal existe,
- pero no siempre se siente tan clara o “obvia” como en el primer dominio.

### 2. La UX del access admin workspace es correcta, pero todavía bastante compacta

La información está, pero todavía puede sentirse densa para alguien no técnico.

Impacto:

- usable sí,
- elegante o super clara todavía no tanto.

### 3. El piloto del segundo dominio todavía tiene menos evidencia humana consolidada que el primero

El dominio ya fue corrido, pero todavía no tiene el mismo nivel de consolidación narrativa/humana del primer dominio.

Impacto:

- pasa funcionalmente,
- pero todavía no transmite tanta confianza ejecutiva como el primero.

---

## Nice-to-have

### 1. Resumen más orientado a tenant admin en lenguaje no técnico

Hoy ya hay summaries útiles, pero podrían ser más pedagógicos.

### 2. Mejor agrupación visual de grants sensibles vs grants simples

La separación existe, pero podría resaltarse mejor en futuras iteraciones.

### 3. Scenario scorecards más expresivas para el segundo dominio

La infraestructura ya está. Falta hacerla más agradable de leer.

---

## Señales positivas fuertes

### 1. Approval y revoke ya no son adornos

Están realmente integradas al access plane.

### 2. El segundo dominio ya no depende de teoría

Tiene piloto, runbook, scorecards y surface usable.

### 3. El framework soporta bien la expansión

No hubo que romper el corredor para abrir grants/delegations.

---

## Decisión provisional de la Tarea 1

Estado provisional:

- **`ready_for_week_2` tentativo**

Condición:

- confirmar en Tarea 2 que los estados del access plane no tienen inconsistencias escondidas;
- confirmar en Tarea 4 que incident candidates y scorecards no omiten un caso obvio del dominio.

## Recomendación

No abrir features nuevas durante la Semana 1.

Lo correcto es seguir el plan:

1. Tarea 2 — consistencia de estados
2. Tarea 3 — visibilidad de approval-sensitive items
3. Tarea 4 — observabilidad del segundo dominio
4. Tarea 5 — decisión final de readiness
