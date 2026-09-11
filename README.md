# TechToJob — Landing Page (Torneo #2)

> Comunidad de desarrolladores y empresas tech en español. Construye, participa y te conocen antes de que haya una vacante.

---

## Acerca de TechToJob

TechToJob no es un portal de empleo. Es una comunidad donde los desarrolladores construyen, participan en torneos y muestran su trabajo directamente a las empresas. Las oportunidades surgen de la participación real, no de formularios ni CVs genéricos.

Esta landing page es la puerta de entrada a la comunidad, diseñada con un estilo **neobrutalista** de alto contraste que refleja la personalidad directa y anti-corporativa del proyecto.

---

## Sistema de Diseño

| Elemento | Especificación |
|----------|---------------|
| **Paleta de colores** | Oscuro `#2f3436`, Teal `#84c0bf`, Blanco `#ffffff` |
| **Tipografía** | Sora (Google Fonts) — pesos 400, 600, 700 |
| **Geometría** | Esquinas rectas, sin bordes redondeados suaves |
| **Sombras** | Offset sólido de alto contraste (`shadow-[4px_4px_0px_0px_#2f3436]`) |
| **Texturas** | `.bg-halftone` (patrón de puntos para secciones claras), `.bg-noise` (ruido SVG para secciones oscuras) |
| **Interacciones** | Hover tilt A-B-A-B alterno, lift proporcional, expansión de sombra |
| **Layout** | Ritmo visual A-B-A-B: oscuro ↔ halftone alternado |

---

## Arquitectura y Stack Tecnológico

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **Next.js** | 16 (App Router) | Framework principal, rendering estático |
| **React** | 19 | Componentes de UI |
| **TypeScript** | — | Type safety en todo el codebase |
| **Tailwind CSS** | v4 | Utility-first styling con tema personalizado |
| **Lucide React** | — | Iconos en secciones de features y canales |
| **i18n** | — | Textos externalizados en `src/messages/es.json` |

---

## Estructura de Carpetas

```
src/
├── app/
│   ├── globals.css          # Tokens de tema, texturas, animación marquee
│   ├── layout.tsx           # Layout raíz con fuente Sora y ScrollToTop
│   └── page.tsx             # Ensamblaje de todas las secciones
├── components/
│   ├── ui/                  # Primitivos reutilizables
│   │   ├── NeoButton.tsx    # Botón neobrutalista (primary/secondary/teal)
│   │   ├── NeoCard.tsx      # Tarjeta contenedor (light/dark)
│   │   ├── SectionBadge.tsx # Badge pill para títulos de sección
│   │   └── ScrollToTop.tsx  # Botón flotante scroll-to-top
│   ├── layout/              # Estructura global
│   │   ├── Header.tsx       # Nav sticky con menú móvil hamburger
│   │   ├── Footer.tsx       # Footer horizontal con logo + redes sociales
│   │   └── SocialIcons.tsx  # Componentes SVG de redes sociales
│   └── sections/            # Secciones de la landing
│       ├── Hero.tsx         # Fold principal con CTA a Discord
│       ├── TickerBanner.tsx # Banner marquee con keywords de la comunidad
│       ├── HowItWorks.tsx   # Flujo de 3 pasos
│       ├── AudienceSplit.tsx# Segmentación: Developers vs Companies
│       ├── Tournaments.tsx  # Showcase de torneos activos
│       ├── News.tsx         # Novedades de la comunidad
│       ├── Networking.tsx   # Canales de Discord
│       ├── Testimonials.tsx # Testimonios de miembros
│       ├── Newsletter.tsx   # Formulario de suscripción
│       ├── FAQ.tsx          # Preguntas frecuentes (acordeón)
│       └── CtaClose.tsx     # CTA final de conversión
└── messages/
    └── es.json              # Todos los textos de UI (i18n ready)
```

---

## Primeros Pasos

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build de producción
npm run build

# Previsualizar build de producción
npm run start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Roadmap

### Fase 1: MVP & Fundamentos Neobrutalistas ✅

- Sistema de diseño: paleta, tipografía, texturas, sombras offset
- Componentes UI: `NeoButton`, `NeoCard`, `SectionBadge`, `ScrollToTop`
- Header sticky con nav responsive y menú hamburger
- Hero con headline, highlight box teal, y CTA a Discord
- TickerBanner con animación marquee infinita
- Sección "Cómo funciona" con grid de 3 pasos
- Footer con logo, navegación, y botones de redes sociales

### Fase 2: Interactividad y Módulos Comunitarios ✅

- `AudienceSplit`: segmentación Developers vs Companies
- `News`: 3 categorías (Torneos, Empleo, Comunidad)
- `Tournaments`: showcase de features del sistema de torneos
- `Networking`: 5 canales de Discord con iconos
- `Testimonials`: 4 testimonios con avatar de iniciales
- `FAQ`: acordeón interactivo con 7 preguntas
- `Newsletter`: formulario de suscripción por email
- `CtaClose`: CTA final de conversión a Discord

### Fase 3: Arquitectura, i18n y Refactorización 🔄

- Codebase estandarizado en inglés (variables, props, nombres de archivos)
- Externalización de 94+ strings a `src/messages/es.json`
- Micro-interacciones: hover tilt A-B-A-B, lift de tarjetas, scroll suave
- Documentación TSDoc completa en componentes UI, layout y secciones

---

## Convención de Commits

Este proyecto sigue [Conventional Commits](https://www.conventionalcommits.org):

- `feat:` — Nueva funcionalidad
- `fix:` — Corrección de bug
- `style:` — Cambios de estilo/CSS
- `refactor:` — Refactorización sin cambio de funcionalidad
- `docs:` — Documentación
- `chore:` — Tareas de mantenimiento

---

## Licencia

Proyecto desarrollado para el Torneo #2 de TechToJob.
