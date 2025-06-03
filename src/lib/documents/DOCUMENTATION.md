# TopNetworks Project Documentation

## 1. Introducción

Este documento proporciona una visión general del proyecto TopNetworks, su propósito, tecnologías utilizadas y directrices de desarrollo. TopNetworks Inc. es una empresa de tecnología de vanguardia especializada en la optimización de la publicidad digital a través de redes programáticas, con un enfoque "mobile-first" y una especialización inicial en el sector financiero.

## 2. Visión General del Proyecto

### 2.1. Misión y Servicios

TopNetworks tiene como misión optimizar la experiencia digital de usuarios y anunciantes en diversos nichos de mercado, agregando valor a ambas partes y monetizando su interacción de manera efectiva. Desarrollamos y perfeccionamos continuamente modelos de monetización basados en *performance marketing*.

Nuestros servicios clave incluyen:

- **Generación y Producción de Contenido**: Utilizando modelos SEO, Inbound y nuestro propio Modelo de Optimización TopNetworks (enfocado en "mobile-first").
- **Atracción y Monetización**: Proporcionando información clara, objetiva y comparativa para ayudar a los usuarios a tomar decisiones fundamentadas, y conectándolos con anunciantes relevantes.
- **Tecnología y Operación**: Empleando más de 10 herramientas para la gestión creativa, tareas técnicas, integraciones, control de calidad y flujo de datos.

### 2.2. Audiencia Objetivo

El proyecto se dirige principalmente a una audiencia de **habla hispana** interesada en soluciones financieras y contenido educativo.

### 2.3. Tipo de Proyecto

Este proyecto consiste en la **Página de Aterrizaje (Landing Page)** principal de TopNetworks Inc.

## 3. Stack Tecnológico

- **Framework Principal**: [AstroJS](https://astro.build/)
- **Plantilla Base**: [Astrowind](https://astrowind.vercel.app/)
- **Lenguaje de Contenido**: Español

## 4. Estrategia de Contenido y Características Clave

El contenido es un pilar fundamental de nuestro modelo de negocio. Las estrategias principales son:

- **Modelo SEO**: Producción de contenido optimizado para motores de búsqueda (Google) para lograr alta relevancia y posicionamiento.
- **Modelo Inbound**: Creación de contenidos que guían al usuario a través del embudo de conversión (TOFU, MOFU, BOFU), fomentando el interés y enviando señales positivas a los algoritmos.
- **Modelo de Optimización TopNetworks**: Un modelo de producción propio, "mobile-first", que optimiza la estructura, diseño y diagramación para maximizar el retorno y la monetización en dispositivos móviles. El diseño se adapta diferencialmente para contenidos TOFU/MOFU y BOFU.

## 5. Marcas y Portales

TopNetworks desarrolla y opera una red de portales de contenido especializados:

- **TopFinanzas**:
  - **México**: Implementación exitosa que ha servido como prueba de concepto (más de 200 artículos, 90,000 usuarios únicos/mes, CTR del 28.7%).
  - **USA**: Expansión planificada para el Q4 2024.
  - **UK**: Expansión planificada para el Q1 2025.
- **BudgetBee**:
  - Lema: "Your Hive for Unbiased Financial Buzz".
  - Enfocada en Generación Z y Millennials.
  - Ofrece herramientas como quizzes interactivos de tarjetas de crédito, guías de presupuesto y reseñas imparciales.

## 6. Directrices de Desarrollo y Documentación

- **Idioma del Proyecto**: Español.
- **Repositorio GitHub**: [https://github.com/juanjaragavi/topnetworks.git](https://github.com/juanjaragavi/topnetworks.git)
- **Actualización de Documentación**:
  - Este documento (`src/lib/documents/DOCUMENTATION.md`) debe actualizarse al modificar características relevantes.
  - `README.md` debe mantenerse sincronizado con nuevas capacidades.
  - Mantener entradas en `CHANGELOG.md`.
- **Registros de Decisiones de Arquitectura (ADR)**: Crear ADRs en `src/lib/documents/ADRs.md` para cambios mayores en dependencias, patrones arquitectónicos o nuevos patrones de integración.
- **Estilo de Código y Patrones**:
  - Generar clientes API usando OpenAPI Generator.
  - Preferir composición sobre herencia.
  - Usar el patrón repositorio para acceso a datos.
- **Estándares de Pruebas**:
  - Pruebas unitarias para lógica de negocio.
  - Pruebas de integración para endpoints API.
  - Pruebas E2E para flujos críticos de usuario.

## 7. Contexto Adicional

Para una comprensión más profunda del negocio y los objetivos del proyecto, consultar:

- `.clinerules/2-WHAT-IS-TOPNETWORKS.md`: Contexto esencial sobre TopNetworks.
- `src/lib/documents/Pitch-Inversionistas-Top-Networks-2024.pdf`: Paleta de colores y directrices de diseño.

Este documento sirve como una guía central para el desarrollo del proyecto TopNetworks. Es crucial mantenerlo actualizado a medida que el proyecto evoluciona.
