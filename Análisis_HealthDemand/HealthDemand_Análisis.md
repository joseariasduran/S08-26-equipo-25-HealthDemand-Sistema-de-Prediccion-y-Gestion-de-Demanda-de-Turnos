# HealthDemand
## Análisis de Demanda Médica — Diagnóstico histórico de turnos
### Período analizado: sep 2025 – ago 2026 · 50,000 turnos · 6 especialidades · 3 sedes

---

### Resumen ejecutivo

**Indicadores clave del período sep 2025 – ago 2026**

- Total de registros válidos: (calculado en el análisis)
- Días de espera promedio global: (calculado en el análisis)



![Tasa de pacientes](https://drive.google.com/uc?id=1RPCV79htCEstGkbzzr_bxeg2jQhMFlGz)

---

### Volumen de demanda — tendencia mensual

![Volumen de Demanda vs Tendencia Mensual](https://drive.google.com/uc?id=1rGm7a1nfISfIBnseC5_9D4OvC1bbUitF)

La demanda mensual es relativamente estable en el rango de 3,764 a 4,313 turnos/mes una vez consolidada la operación (excluyendo jul-25 y jul-26 por ser meses incompletos), con una variación de aproximadamente 14% entre el mes de mayor y menor demanda. Sin embargo, sí existe una tendencia creciente (pendiente = +54.47 turnos/mes), por lo que la planificación de capacidad debería considerar un crecimiento gradual y no una dotación totalmente fija.

---

### Estado de los turnos y distribución por sede

![Distribución por sede](https://drive.google.com/uc?id=1nFlUu88a70E1F-uAbbBaZZn_Jkvq4xVN)

![Distribución por sede y estado](https://drive.google.com/uc?id=1ScQfplRKS2i7v1LtKaCBhkc7Dj6kj8rZ)

![Distribución por especialidad y estado](https://drive.google.com/uc?id=1QY_5qVT7AMke8RTDqVGCIiA8Plex9WMs)

El ausentismo es el verdadero problema, no la cancelación. La cancelación (6%) puede ser legítima (paciente reprograma). El ausentismo (24%) es la fuga real de capacidad.

La estabilidad entre sedes sugiere un problema sistémico, no local. Si las 3 sedes tienen el mismo ~30% de no atención, el problema no es de gestión de una sede específica, sino de políticas generales (recordatorios, confirmación de turnos, sobreagendamiento, etc.).

Oportunidad cuantificable: Si se reduce el ausentismo del 24% al 15% (nivel típico en salud), se recuperarían ~1,500 turnos por sede al año, equivalentes a ~9% más capacidad efectiva sin contratar más personal.

Recomendación adicional: dado que el ausentismo es la palanca principal y que Psiquiatría concentra el mayor problema, las acciones de reducción de ausentismo deberían priorizarse en esa especialidad, mientras que la planificación de capacidad por sede puede mantenerse relativamente uniforme.

---

#### Carga de trabajo por profesional

![Evolución del Promedio de Días de Espera (por semana de solicitud)](https://drive.google.com/uc?id=1rBUnjMiEDWovFGxE8PAGpFiXMw21s0nj)

![Top 10 Profesionales con Mayor Espera Promedio](https://drive.google.com/uc?id=1P_XdhCT4EMmrnNRP57tt044Q54QBlkN1)

**Resumen ejecutivo de días de espera:**

| Métrica | Días de espera |
|---|---|
| Promedio global | (calculado) |
| Mediana | (calculado) |
| Mínimo | (calculado) |
| Máximo | (calculado) |
| P25 | (calculado) |
| P75 | (calculado) |
| P90 | (calculado) |

La espera es homogénea entre especialidades (22.2–22.7 días) y entre los profesionales con mayor espera (22.7–23.1 días), lo que sugiere que el cuello de botella no es una especialidad ni un profesional puntual, sino un problema estructural de capacidad total. El ausentismo, en cambio, sí varía fuertemente por especialidad: Psiquiatría ronda el 35%, más del doble que Oncología (~15%). Por lo tanto, las acciones de reducción de ausentismo deberían priorizarse en Psiquiatría, mientras que la planificación de capacidad debe abordarse a nivel sistémico. (Para confirmar si hay profesionales individuales con ausentismo crítico, se requiere una gráfica adicional de ausentismo por profesional.)

---

### Insights

1. **Demanda estable, con ligera tendencia creciente**
   La demanda mensual es relativamente estable (~4,000 turnos/mes) y sin estacionalidad marcada. Sin embargo, sí existe una tendencia creciente (pendiente ≈ +54 turnos/mes), por lo que la planificación debe considerar crecimiento gradual. La franja de la tarde concentra el 41.9% de la demanda, lo que sí exige refuerzos horarios específicos.

2. **Psiquiatría concentra el riesgo de ausentismo**
   34.8% de ausentismo, más del doble que Oncología (14.7%) y muy por encima del promedio general (24.0%). Es la palanca de mayor impacto para recuperar capacidad de agenda.

3. **La espera es estructural, no puntual**
   El tiempo de espera (22.2–22.7 días) es casi idéntico entre especialidades, sedes y profesionales. El problema no es un cuello de botella localizado, sino un desajuste sistémico entre demanda y capacidad de agenda. La caída reciente de la espera sugiere que la operación puede responder cuando se ajusta, por lo que parte del problema es de gestión, no solo de capacidad instalada.

---

### Anomalías y riesgos detectados

🔴 **ALTA — Ausentismo anómalo en Psiquiatría**
34.8% vs 24.0% promedio general — el valor más alto y el único que se aleja claramente del resto de especialidades. Requiere intervención prioritaria.

🟡 **MEDIA — Concentración de ausentismo en pocos profesionales**
Los profesionales MED-12, MED-42 y MED-27 superan el 25.5% de ausentismo, ligeramente por encima del promedio (24.0%). Se recomienda validar con una gráfica de ausentismo por profesional para confirmar si la concentración es significativa o si la diferencia es marginal.

⚪ **BAJA — Sin desbalance relevante en sede ni cancelaciones**
Volumen por sede (16,550–16,740) y tasa de cancelación (5.7%–6.4%) se mantienen homogéneos. No requieren intervención inmediata. (El análisis por día de la semana requiere gráfica adicional para confirmarse.)

---

### Siguientes pasos

1. **Reforzar confirmación de turnos en Psiquiatría**
   Recordatorios y confirmación previa podrían acercar su ausentismo (34.8%) al promedio (24.0%), liberando cientos de turnos al año. Prioridad alta.

2. **Auditar los profesionales con ausentismo >25%**
   MED-12, MED-42 y MED-27 como primeros casos a revisar (agenda, franja horaria, tipo de paciente). Validar primero con una gráfica de ausentismo por profesional para confirmar que la concentración es significativa.

3. **Reforzar dotación en la franja de la tarde**
   Concentra 41.9% de la demanda diaria de forma constante — es la franja con mayor riesgo de saturación. Acción operativa inmediata.

4. **Usar 22.4 días de espera como línea base**
   Punto de referencia único y comparable para medir el impacto de futuras mejoras de capacidad. No confundir con SLA objetivo: el SLA debería fijarse por debajo del promedio actual (por ejemplo, P50 = 22 días o P25 = 11 días).

5. **Usar estos patrones como insumo del módulo predictivo**
   Demanda con tendencia creciente (+54 turnos/mes) + ausentismo concentrado en Psiquiatría + espera homogénea (~22 días) son la base para el modelo de proyección de HealthDemand.