---
title: '8 años en innovación pública: lecciones que aplico en tech'
description: 'Lo que aprendí trabajando en municipalidades sobre gestión de proyectos, stakeholders y ejecución que me sirve en tecnología'
pubDate: 'Jan 05 2025'
heroImage: '../../assets/blog-placeholder-5.jpg'
---

Cuando la gente me pregunta **"¿Qué te dio tu experiencia en gobierno?"**, muchos asumen que "nada relevante para tecnología".

**Se equivocan**.

Trabajé 8 años en innovación pública (Municipalidades de San Isidro y Miraflores, 2016-2024). Aprendí lecciones que **ningún bootcamp me hubiera enseñado**.

Estas son las más valiosas.

## 1. Gestión de stakeholders > Código perfecto

### En gobierno aprendí:

Un proyecto exitoso no es el que tiene el mejor código. Es el que **cumple las expectativas de todos los stakeholders**.

En el Centro de Innovación gestionaba:
- **Gerente**: Quería métricas para reportar al alcalde
- **Vecinos**: Querían talleres útiles y accesibles
- **Expositores**: Querían buena logística y visibilidad
- **Alcaldía**: Quería impacto político visible

**Todos tenían razones válidas, pero objetivos diferentes**.

### En tech aplico:

Cuando gestiono un proyecto de Moodle:
- **Cliente**: Quiere que funcione sin caídas
- **Estudiantes**: Quieren plataforma rápida y fácil
- **Instructores**: Quieren herramientas de seguimiento
- **IT**: Quiere mantenimiento mínimo

**Mi trabajo**: hacer que todos estén (razonablemente) satisfechos.

**Lección**: La tecnología es solo una herramienta. El éxito se mide en **valor entregado a personas**.

## 2. Documentación clara salva vidas (y presupuestos)

### En gobierno aprendí:

Los proyectos en municipalidades cambian de manos constantemente:
- Rotación de personal
- Cambios de gestión
- Nuevos consultores

Si no documentas bien, **cada persona reinventa la rueda**.

Mis documentos más valiosos:
- **Manuales de procedimientos** (paso a paso con screenshots)
- **Listas de contactos** (proveedores, expositores, aliados)
- **Templates** (presupuestos, informes, comunicados)
- **Lecciones aprendidas** (qué funcionó, qué no)

### En tech aplico:

Cuando configuro un servidor Moodle, documento:
- **Pasos de instalación** (comandos exactos)
- **Configuraciones críticas** (qué archivo, qué línea)
- **Troubleshooting** (problemas comunes y soluciones)
- **Backups** (dónde están, cómo restaurar)

**Por qué**: Si me voy mañana, **alguien más puede continuar**.

**Lección**: La documentación no es "nice to have". Es **parte del deliverable**.

## 3. Los plazos imposibles son negociables (con argumentos)

### En gobierno aprendí:

El típico pedido:
> "Necesitamos un webinar con 5 expositores internacionales para el jueves. Hoy es martes."

**Opción A** (mala): Decir "imposible" y quedar mal.

**Opción B** (buena): Negociar con datos.

Mi respuesta:
> "Un webinar de calidad con expositores internacionales requiere:
> - Coordinación de agendas: 2-3 días
> - Pruebas técnicas: 1 día
> - Difusión: mínimo 5 días para que la gente se entere
>
> Opciones:
> 1. Hacer el evento el jueves con 2 expositores locales (factible)
> 2. Mover el evento a la próxima semana con 5 expositores (ideal)
> 3. Hacer un evento simple el jueves + uno grande en 2 semanas"

### En tech aplico:

Cuando me piden "migrar Moodle a nuevo servidor este fin de semana":

Mi respuesta:
> "Una migración segura requiere:
> - Backup completo: 2 horas
> - Instalación en nuevo servidor: 4 horas
> - Migración de datos: 3 horas
> - Pruebas exhaustivas: 4 horas
> - Rollback plan: preparado
>
> Total: 13+ horas. Este fin de semana es riesgoso.
>
> Opciones:
> 1. Hacer la migración en 2 fines de semana (backup este fin, migración el siguiente)
> 2. Hacerlo este fin con soporte 24/7 listo (costo extra)
> 3. Esperar al período de baja actividad (recomendado)"

**Lección**: Los plazos no se negocian con emociones. Se negocian con **datos y opciones**.

## 4. El plan B es obligatorio

### En gobierno aprendí:

**Murphy's Law** en gobierno es ley divina: si algo puede salir mal, **saldrá mal en el peor momento**.

Ejemplos reales:
- Expositora internacional canceló 2 horas antes del webinar → Tuvimos plan B con expositora local
- Plataforma Zoom se cayó en medio del evento → Backup en YouTube Live
- Proyector no funcionó en evento presencial → Backup con proyector portátil

### En tech aplico:

**Siempre tengo plan B**:

#### Ejemplo 1: Backups
- **Plan A**: Backup automatizado diario
- **Plan B**: Backup manual semanal
- **Plan C**: Copia en servidor externo mensual

#### Ejemplo 2: Deployment
- **Plan A**: Deploy en producción
- **Plan B**: Rollback con snapshot
- **Plan C**: Servidor de staging como backup temporal

#### Ejemplo 3: Plataforma caída
- **Plan A**: Moodle en servidor principal
- **Plan B**: Página de mantenimiento con información
- **Plan C**: Comunicación por email a todos los estudiantes

**Lección**: El plan B no es pesimismo. Es **profesionalismo**.

## 5. La comunicación simple > jerga técnica

### En gobierno aprendí:

Trabajaba con:
- Alcaldes (políticos)
- Gerentes (administradores)
- Vecinos (público general)

Nadie entendía (ni le importaba) la jerga técnica.

**Mal**:
> "Implementamos una arquitectura de microservicios con API REST para optimizar la escalabilidad horizontal de la plataforma."

**Bien**:
> "Ahora la plataforma puede atender a más personas al mismo tiempo sin ponerse lenta."

### En tech aplico:

Cuando reporto a clientes:

**Mal**:
> "Optimizamos 15 queries N+1 y agregamos índices compuestos en las tablas de relaciones many-to-many."

**Bien**:
> "Hicimos mejoras técnicas que redujeron el tiempo de carga de páginas en 60%."

**Lección**: La mayoría de tus stakeholders **no son técnicos**. Habla su idioma.

## 6. El éxito es colectivo, el fracaso es individual

### En gobierno aprendí:

Cuando un evento salía bien:
- El alcalde se llevaba el crédito político
- El gerente reportaba el éxito
- Los vecinos disfrutaban

Cuando salía mal:
- "El coordinador no supo organizar"

**Así funciona el mundo**.

### En tech aplico:

Cuando un proyecto sale bien:
- El cliente presume su nueva plataforma
- Los usuarios están felices
- El equipo de IT reporta el éxito

Cuando sale mal:
- "El consultor no supo configurar"

**No me amargo**. Lo acepto y me protejo:

1. **Documento todo** (para demostrar que seguí el proceso)
2. **Comunico temprano los riesgos** (para no sorprender)
3. **Tengo plan B** (para minimizar daño)

**Lección**: Protege tu reputación profesional siendo **impecable en tu proceso**, no esperando crédito.

## 7. La "innovación" es 10% idea, 90% ejecución

### En gobierno aprendí:

Todos tenían "ideas innovadoras":
- "Hagamos un hackathon!"
- "Creemos una app para la municipalidad!"
- "Organicemos un concurso de startups!"

Pero ejecutar era **otra historia**:
- ¿Presupuesto?
- ¿Permisos legales?
- ¿Logística?
- ¿Coordinación con 5 áreas diferentes?

**La idea es fácil. La ejecución es trabajo**.

### En tech aplico:

Muchos dicen "quiero hacer una plataforma de cursos online".

Pero ejecutar implica:
- Infraestructura (servidor, dominio, SSL)
- Desarrollo (frontend + backend + database)
- Contenido (crear cursos de calidad)
- Marketing (conseguir estudiantes)
- Soporte (atender problemas)

**La idea es barata. El valor está en hacerla realidad**.

**Lección**: Valórate por tu **capacidad de ejecución**, no solo por ideas.

## Conclusión: El gobierno me hizo mejor profesional tech

Trabajar en innovación pública me enseñó:

1. ✅ Gestión de stakeholders
2. ✅ Documentación rigurosa
3. ✅ Negociación con datos
4. ✅ Planes de contingencia
5. ✅ Comunicación clara
6. ✅ Proteger mi reputación profesional
7. ✅ Ejecutar, no solo idear

**Ningún bootcamp me hubiera enseñado esto**.

Si vienes de un área "no técnica" y te sientes inseguro en tech: **tu experiencia previa es valiosa**.

No la descartes. **Intégrala**.

---

**¿Vienes de un área no técnica?** Cuéntame qué habilidades transferiste. Escríbeme en [LinkedIn](https://www.linkedin.com/in/oscarroman1/).
