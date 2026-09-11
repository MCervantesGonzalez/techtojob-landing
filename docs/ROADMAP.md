# Roadmap — Landing Page TechToJob (Torneo #2)

Deadline de entrega: **miércoles 23, 23:59** (revisión 24, ganador 25).
Participante: solo. Stack elegido: **Next.js + TypeScript + Tailwind CSS** (recomendado en las bases, se integra directo al proyecto final).

Cada fase termina con un commit (o varios) y, cuando aplica, una entrada en `/docs`. Nada de "un commit gigante al final": el criterio "Código y estructura" (15%) también premia que se note el proceso.

---

## Fase 0 — Setup y planeación (hoy)

- [ ] Crear repo público en GitHub (`techtojob-landing` o similar) con licencia y `.gitignore`
- [ ] `create-next-app` con TypeScript + Tailwind + App Router
- [ ] Instalar y configurar fuente Sora (`next/font/google`)
- [ ] Cargar paleta y tokens de diseño en `tailwind.config` (ver `docs/design-tokens.md`, se genera en Fase 2)
- [ ] Crear estructura de carpetas (`/app`, `/components`, `/content`, `/docs`)
- [ ] Escribir `AGENTS.md` con las reglas para OpenCode (ya entregado, ver archivo aparte)
- [ ] Configurar MCP/herramientas de OpenCode (filesystem del repo, GitHub, y si se puede, un MCP de Lighthouse/accesibilidad)
- [ ] Investigación de competencia — hecha, ver `docs/competitor-research.md`
- [ ] Wireframe de baja fidelidad de las 10 secciones (puede ser texto/ASCII o Figma si tienes tiempo)
- [ ] Convención de commits: [Conventional Commits](https://www.conventionalcommits.org) (`feat:`, `fix:`, `docs:`, `style:`, `chore:`)
- [ ] Convención de ramas: `feature/hero`, `feature/newsletter`, etc. (o commits directos a `main` si trabajas solo y prefieres velocidad — decisión tuya, pero sé consistente)

**Entregable de la fase:** repo inicializado, corre `npm run dev`, README con la intención del proyecto.

## Fase 1 — Contenido y copy (25% de la nota, no se delega a la ligera)

- [ ] Redactar copy de las 11 secciones siguiendo `brief-techtojob.md` (tono tuteo, frases cortas, sin palabras de folleto)
- [ ] Revisar que cada sección cumpla el "tiene que quedar claro" de su apartado en el brief
- [ ] Definir el `<h1>` único y el mensaje principal del Hero
- [ ] Guardar el copy final en `/content/copy.md` o directamente en los componentes
- [ ] Autochequeo: ¿suena a portal de empleo genérico en algún punto? Si sí, reescribir esa parte

## Fase 2 — Sistema de diseño

- [ ] Documentar tokens: colores (#2f3436, #84c0bf, #ffffff + grises intermedios), tipografía Sora (3 pesos), espaciados
- [ ] Definir componentes base: botón primario/secundario, card, nav, input de formulario
- [ ] Resolver el aviso de contraste (verde `#84c0bf` sobre blanco no sirve para texto pequeño → solo fondos/botones/detalles)
- [ ] Elegir banco de imágenes (Unsplash/Pexels/unDraw) e iconos (Lucide/Heroicons/Phosphor) y anotar fuente para el README

## Fase 3 — Desarrollo por secciones (commits atómicos, 1 sección = 1 commit o PR)

Orden sugerido (Hero y Footer fijos, el resto es flexible). Layout A-B-A-B:

1. Layout base + Header/Nav + Hero (Dark)
2. Cómo funciona (Halftone)
3. Ofrécete como talento / Publica como empresa — AudienceSplit (Dark)
4. Torneos (Halftone)
5. Networking (Dark)
6. **Testimonios** (Halftone) — 4-5 cards: foto de avatar, nombre del miembro, frase/testimonio, enlace LinkedIn (placeholder hasta tener miembros reales de la comunidad Discord)
7. Noticias — 3 entradas de ejemplo (Dark)
8. Newsletter — formulario con label + validación (Halftone)
9. Cierre (Dark)
10. Footer (White)

Cada sección: componente propio, HTML semántico (`section`, `article`, `header`, `nav`, etc.), responsive desde el inicio (no dejar el responsive para el final).

## Fase 4 — SEO y metadata

- [ ] `lang="es"`, `<title>` 50–60 caracteres, `description` 150–160
- [ ] Metadata API de Next con `title.template` y `metadataBase`
- [ ] Open Graph + Twitter Card completos, imagen 1200×630 (probar en opengraph.xyz)
- [ ] JSON-LD tipo `Organization`
- [ ] `next/image`, WebP/AVIF, `width`/`height`, `loading="lazy"` (excepto hero)
- [ ] Alt descriptivo real en todas las imágenes
- [ ] Enlaces con texto descriptivo, URLs con nombre (anclas tipo `#ofertas`, no `#page2`)

## Fase 5 — Accesibilidad y performance

- [ ] Contraste AA en todo texto
- [ ] Navegación con teclado (focus visible)
- [ ] Labels en todos los inputs del formulario de newsletter
- [ ] Optimización de imágenes, sin PNG pesados

## Fase 6 — QA

- [ ] Probar en móvil real (no solo devtools)
- [ ] Lighthouse en modo móvil — objetivo SEO 100, accesibilidad/performance >90
- [ ] Captura de Lighthouse

## Fase 7 — Deploy

- [ ] Deploy en Vercel
- [ ] Revisar dominio/URL final, variables de entorno si las hay
- [ ] Capturas de escritorio y móvil

## Fase 8 — Entrega

- [ ] README final: qué es, cómo correrlo, fuentes de imágenes, declarar uso de IA (código/copy asistido con OpenCode/Claude)
- [ ] Publicar en el canal de entregas del Discord antes del miércoles 23, 23:59
- [ ] Adjuntar: link al repo, link al deploy, capturas desktop/móvil, captura Lighthouse

---

## Modelo de trabajo día a día

1. Eliges el "sector" (una sección o una tarea de la lista de arriba)
2. Se lo delegas a OpenCode con contexto puntual (referencia a `AGENTS.md` + la tarea concreta, no "hazme la web")
3. Revisas el resultado tú (code review humano, siempre — es lo que vas a defender en la entrega)
4. Ajustas, documentas en el commit qué se hizo y por qué
5. Commit → siguiente sector

Esto te da: entregables pequeños revisables, historial de commits que demuestra proceso (pesa en el criterio de código), y evita que un solo prompt gigante te deje con código que no puedes explicar.

# Neo-Brutalist Redesign Roadmap

- [ ] Task 1: Update `src/app/globals.css` with Tailwind v4 theme shadows and `.bg-halftone` utility.
- [ ] Task 2: Apply neobrutalist style to `<Hero />` and `<Header />` (borders, hard shadows, uppercase badges).
- [ ] Task 3: Apply neobrutalist style to `<HowItWorks />` and `<AudienceSplit />` cards.
- [ ] Task 4: Apply neobrutalist style to `<Tournaments />`, `<News />`, and `<CtaClose />`.
- [ ] Task 5: Run visual audit and accessibility check across all sections.
