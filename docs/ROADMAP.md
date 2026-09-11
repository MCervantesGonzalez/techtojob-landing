# Roadmap — Landing Page TechToJob

## Phase 1: MVP & Neobrutalist Foundations ✅

- [x] Layout design and core setup utilizing high-contrast borders, solid block shadows, and bold typography
- [x] Design system: `#2f3436` dark, `#84c0bf` teal, `#ffffff` white; Sora font; sharp corners
- [x] Textures: `.bg-halftone` dot-matrix for light sections, `.bg-noise` SVG overlay for dark sections
- [x] Core UI primitives: `NeoButton`, `NeoCard`, `SectionBadge`, `ScrollToTop`
- [x] Responsive sticky Header with mobile hamburger menu
- [x] Hero section with bold headline, teal highlight box, and Discord CTA
- [x] TickerBanner marquee with Discord channel keywords
- [x] "How It Works" 3-step workflow section with icon cards
- [x] Footer with logo, navigation columns, and social SVG icon buttons

## Phase 2: Interactivity & Community Modules ✅

- [x] Target Audience segmentation (`AudienceSplit`) — Devs vs Companies with dedicated CTAs
- [x] Dynamic `News` module with 3 category cards (Torneos, Empleo, Comunidad)
- [x] `Tournaments` section with 3 feature cards and neobrutalist header box
- [x] `Networking` section with 5 Discord channel cards and channel icons
- [x] `Testimonials` section with 4 user quote cards and LinkedIn links
- [x] Interactive `FAQ` accordion with 7 Q&A items (client-side toggle)
- [x] `Newsletter` subscription form with email input and submit button
- [x] `CtaClose` final call-to-action with Discord join button
- [x] A-B-A-B dark/halftone section rhythm maintained across all sections

## Phase 3: Code Architecture, i18n & Refactoring 🔄

- [x] Codebase standardization in English across variables, props, and file structures
- [x] Externalization of all UI texts into `src/messages/es.json` for i18n readiness
- [x] 94+ Spanish strings organized under structured keys per section
- [x] All 14 component files refactored to import from `es.json` — zero hardcoded text in JSX
- [x] Micro-interaction polish: dynamic A-B-A-B title rotation on hover across all section headers
- [x] Unified neobrutalist card shadows with hover lift transitions
- [x] Smooth page scrolling with `scroll-behavior: smooth` and navbar offset padding
- [x] Social icon buttons with consistent teal hover states
- [ ] Comprehensive component-level JSDoc/TSDoc inline documentation for code reviewer clarity

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Font:** Sora (`next/font/google`)
- **Icons:** Lucide React, custom SVG social icons
- **Component Structure:**
  - `src/components/ui/` — Primitives (`NeoButton`, `NeoCard`, `SectionBadge`, `ScrollToTop`)
  - `src/components/layout/` — Structural (`Header`, `Footer`, `SocialIcons`)
  - `src/components/sections/` — Page sections (12 components)
  - `src/messages/es.json` — Centralized Spanish text strings

## Commit Convention

[Conventional Commits](https://www.conventionalcommits.org) — `feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:`
