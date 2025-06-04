# TopNetworks Inc. - Página de Aterrizaje Oficial

<img src="https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/lighthouse-score.png" align="right" alt="AstroWind Lighthouse Score" width="100" height="358">

**TopNetworks Inc.** es una empresa de tecnología de vanguardia que se especializa en la **optimización de la publicidad digital a través de redes programáticas**. Este repositorio contiene el código fuente de nuestra página de aterrizaje oficial, construida con **[Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)** utilizando la plantilla **Astrowind**.

Nuestro sitio está diseñado para ser una plataforma "mobile-first", con un enfoque inicial en el dinámico sector financiero, y se dirige a una audiencia de habla hispana.

- ✅ **Optimizado para Producción** con excelentes puntuaciones en **PageSpeed Insights**.
- ✅ Integración con **Tailwind CSS** soportando **Modo Oscuro** y **_RTL_**.
- ✅ **Blog rápido y amigable para SEO** con **feed RSS automático**, soporte **MDX**, **Categorías y Etiquetas**, **Compartir en Redes Sociales**, etc.
- ✅ **Optimización de Imágenes** (utilizando **Astro Assets** y **Unpic**).
- ✅ Generación de **mapa del sitio del proyecto** basado en las rutas.
- ✅ **Etiquetas Open Graph** para compartir en redes sociales.
- ✅ **Analíticas** integradas (ej. Google Analytics).

<br>

![TopNetworks Screenshot](https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/screenshot-astrowind-1.0.png)
_Nota: La imagen de arriba es una captura de pantalla genérica de la plantilla Astrowind. El diseño real de TopNetworks puede variar._

[![TopNetworks Inc.](https://custom-icon-badges.demolab.com/badge/desarrollado%20por%20-TopNetworks%20Inc.-556bf2?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VG9wTmV0d29ya3M8L3RpdGxlPjxwYXRoIGQ9Ik0xMiAwQzUuMzcyIDAgMCA1LjM3MyAwIDEyczUuMzcyIDEyIDEyIDEyIDEyLTUuMzcyIDEyLTEyUzE4LjYyNyAwIDEyIDB6bTAgMjEuODhjLTUuNDU2IDAtOS44OC00LjQyNC05Ljg4LTkuODg0UzYuNTQ0IDIuMTIgMTIgMi4xMnM5Ljg4IDQuNDI0IDkuODggOS44ODQtNC40MjQgOS44OC05Ljg4IDkuODh6TTQgMTJoMWMwLTQuNDExIDMuNTg5LTggOC04czggMy41ODkgOCA4YzAgNC40MTEtMy41ODkgOC04IDhWMTJINGMtLjU1MiAwLTEgLjQ0OC0xIDBzLjQ0OCAxIDEgMWgxLjA4YzEuMDk0LS4wMzMgMi4xNjQtLjM0IDMuMDk0LS44NzNsLTEuNDQtMS40NEExLjUgMS41IDAgMCAxIDQgMTJ6bTE0LjQ4NS0xLjQ4NWwtMS40MTQgMS40MTRjMS4zMS45NzMgMi45MDQgMS41NzEgNC42MTkgMS41NzFoLjAxYy4xNTIgMCAuMjk4LS4wMzQuNDM0LS4wOTVBOS45MzUgOS45MzUgMCAwIDAgMjAuNTYgMTJoLTEuMDgxYy0xLjA5NS4wMzQtMi4xNjUuMzQtMy4wOTUuODc0eiIvPjwvc3ZnPg==&logoColor=white&labelColor=101827)](https://topnetworks.co) <!-- Reemplazar con el logo y URL real -->
[![License](https://img.shields.io/github/license/juanjaragavi/topnetworks?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/juanjaragavi/topnetworks/blob/main/LICENSE.md)
[![Maintained](https://img.shields.io/badge/mantenido%3F-s%C3%AD-brightgreen.svg?style=flat-square)](https://github.com/juanjaragavi/topnetworks)
[![Contributions Welcome](https://img.shields.io/badge/contribuciones-bienvenidas-brightgreen.svg?style=flat-square)](https://github.com/juanjaragavi/topnetworks#contributing)
[![Stars](https://img.shields.io/github/stars/juanjaragavi/topnetworks.svg?style=social&label=stars&maxAge=86400&color=ff69b4)](https://github.com/juanjaragavi/topnetworks)
[![Forks](https://img.shields.io/github/forks/juanjaragavi/topnetworks.svg?style=social&label=forks&maxAge=86400&color=ff69b4)](https://github.com/juanjaragavi/topnetworks)

<br>

<details open>
<summary>Tabla de Contenidos</summary>

- [Demo](#demo)
- [Primeros Pasos](#primeros-pasos)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Comandos](#comandos)
  - [Configuración](#configuración)
  - [Despliegue](#despliegue)
- [Documentación del Proyecto](#documentación-del-proyecto)
- [Contribuciones](#contribuciones)
- [Agradecimientos](#agradecimientos)
- [Licencia](#licencia)

</details>

<br>

## Demo

📌 El sitio oficial de TopNetworks Inc. estará disponible en [topnetworks.co](https://topnetworks.co) (URL provisional).
El repositorio del proyecto se encuentra en [GitHub](https://github.com/juanjaragavi/topnetworks.git).

<br>

## Primeros Pasos

Este proyecto utiliza [Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/) y está basado en la plantilla Astrowind. Está enfocado en la simplicidad, buenas prácticas y alto rendimiento.

Se utiliza muy poco JavaScript vanilla, solo para proporcionar funcionalidades básicas, de modo que cada desarrollador decida qué framework (React, Vue, Svelte, Solid JS...) usar y cómo abordar sus objetivos.

### Estructura del Proyecto

Dentro del proyecto TopNetworks, encontrarás la siguiente estructura de carpetas y archivos (heredada de Astrowind):

```
/
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── content/
│   │   ├── post/
│   │   │   ├── post-slug-1.md
│   │   │   ├── post-slug-2.mdx
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.yaml
│   └── navigation.js
├── package.json
├── astro.config.ts
└── ...
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

Los activos estáticos, como imágenes, se pueden colocar en el directorio `public/` si no requieren transformación, o en `src/assets/` si se importan directamente.

> 🧑‍🚀 Para desarrolladores de TopNetworks: Consultar `src/lib/documents/DOCUMENTATION.md` para detalles específicos del proyecto. Actualizar `src/config.yaml` y los contenidos según sea necesario.

<br>

### Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando             | Acción                                               |
| :------------------ | :--------------------------------------------------- |
| `npm install`       | Instala las dependencias                             |
| `npm run dev`       | Inicia el servidor de desarrollo local en `localhost:4321` |
| `npm run build`     | Construye el sitio de producción en `./dist/`        |
| `npm run preview`   | Previsualiza la construcción localmente, antes de desplegar |
| `npm run check`     | Verifica errores en el proyecto                      |
| `npm run fix`       | Ejecuta Eslint y formatea el código con Prettier     |
| `npm run astro ...` | Ejecuta comandos CLI como `astro add`, `astro preview` |

<br>

### Configuración

Archivo de configuración básico: `./src/config.yaml`

Asegúrate de que la configuración en `src/config.yaml` refleje los detalles del sitio de TopNetworks, como el nombre del sitio, URL base, metadatos SEO, idioma (español), etc.

```yaml
site:
  name: 'TopNetworks Inc.'
  site: 'https://topnetworks.co' # URL Provisional
  base: '/'
  trailingSlash: false

  googleSiteVerificationId: false # Configurar si es necesario

# Metadatos SEO por defecto
metadata:
  title:
    default: 'TopNetworks Inc. - Soluciones Financieras y Educación'
    template: '%s — TopNetworks Inc.'
  description: 'TopNetworks optimiza la publicidad digital y ofrece contenido financiero de valor para la comunidad de habla hispana.'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'TopNetworks Inc.'
    images:
      - url: '~/assets/images/default.png' # Reemplazar con una imagen representativa de TopNetworks
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@TopNetworksES' # Reemplazar con el handle real si existe
    site: '@TopNetworksES'   # Reemplazar con el handle real si existe
    cardType: summary_large_image

i18n:
  language: es # Configurado para español
  textDirection: ltr

apps:
  blog:
    isEnabled: true # Habilitar si TopNetworks tendrá un blog
    postsPerPage: 6

    post:
      isEnabled: true
      permalink: '/blog/%slug%'
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog'
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'categoria' # Ajustado a español
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'etiqueta' # Ajustado a español
      robots:
        index: false

    isRelatedPostsEnabled: true
    relatedPostsCount: 4

analytics:
  vendors:
    googleAnalytics:
      id: null # Configurar con el ID de Google Analytics de TopNetworks

ui:
  theme: 'system'
```

<br>

#### Personalizar Diseño

Para personalizar familias de fuentes, colores o más elementos, consulta los siguientes archivos:

- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`
- `src/lib/documents/Pitch-Inversionistas-Top-Networks-2024.pdf` (para la paleta de colores y directrices de diseño).

### Despliegue

#### Despliegue a producción (manual)

Puedes crear una compilación de producción optimizada con:

```shell
npm run build
```

Ahora, tu sitio web está listo para ser desplegado. Todos los archivos generados se encuentran en la carpeta `dist`, la cual puedes desplegar en cualquier servicio de hosting de tu preferencia.

#### Despliegue a Netlify o Vercel

Puedes clonar este repositorio (`https://github.com/juanjaragavi/topnetworks.git`) en tu propia cuenta de GitHub y desplegarlo en servicios como Netlify o Vercel.

<br>

## Documentación del Proyecto

Para una guía detallada sobre la arquitectura, directrices de desarrollo, y contexto del negocio de TopNetworks, por favor consulta:

- **`src/lib/documents/DOCUMENTATION.md`**

## Contribuciones

Si tienes ideas, sugerencias o encuentras errores, no dudes en abrir una discusión, un issue o crear un pull request en el repositorio [juanjaragavi/topnetworks](https://github.com/juanjaragavi/topnetworks).

## Agradecimientos

Este proyecto es desarrollado por **TopNetworks Inc.** y está basado en la plantilla **AstroWind** creada por [onWidget](https://onwidget.com) y mantenida por una comunidad de [colaboradores](https://github.com/onwidget/astrowind/graphs/contributors).

## Licencia

El código específico de TopNetworks Inc. está bajo la licencia definida por la empresa. La plantilla Astrowind está licenciada bajo MIT — consulta el archivo [LICENSE](./LICENSE.md) para más detalles sobre la licencia de la plantilla.
