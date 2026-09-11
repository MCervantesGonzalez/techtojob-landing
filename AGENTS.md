# OpenCode Execution Rules — TechToJob Landing Page

You are the lead developer building the "TechToJob" radical neobrutalist landing page. Strictly adhere to these guidelines during all implementation steps.

## Design System & Branding Rules

- **Color Palette**:
  - Dark Background: `#2f3436` (`--color-brand-dark`)
  - Accent / Teal: `#84c0bf` (`--color-brand-teal`)
  - White: `#ffffff` (`--color-brand-white`)
- **Typography**: `Sora` (from `next/font/google`).
- **Geometry**: Rectangular elements with sharp corners. NO rounded pills or soft organic shapes except for explicit badges (`rounded-xl` maximum).
- **Shadows**: Rigid high-contrast offset shadows (`shadow-[4px_4px_0px_0px_#2f3436]`).
- **Textures**:
  - `.bg-halftone`: Radial gradient dot-matrix background pattern for light sections.
  - `.bg-noise`: SVG turbulence noise overlay at `opacity: 25%` with `mix-blend-mode: overlay` for dark sections.
- **Dark Mode**: DO NOT implement light/dark mode toggles. The landing uses a fixed high-contrast rhythm (A-B-A-B dark/halftone alternating sections).

## Tech Stack & Architecture

- Next.js 16 (App Router), Tailwind CSS v4, TypeScript.
- **Component Directory Structure**:
  - `src/components/ui/`: Primitive reusable UI blocks (`NeoButton.tsx`, `NeoCard.tsx`, `SectionBadge.tsx`).
  - `src/components/layout/`: Global structural layouts (`Header.tsx`, `Footer.tsx`).
  - `src/components/sections/`: Landing page sections (`Hero.tsx`, `HowItWorks.tsx`, `AudienceSplit.tsx`, `Tournaments.tsx`, `Networking.tsx`, `Testimonials.tsx`, `Newsletter.tsx`, `CtaClose.tsx`, `TickerBanner.tsx`).

## Tone & Messaging Constraints

- Tone must be imperative, anti-corporate, direct, and developer-centric.
- Use explicit Discord channel naming where relevant (`#DESARROLLO`, `#INFRA-Y-DEVOPS`, `#DATOS-E-IA`, `#PORTFOLIOS`, `#OFERTAS-TRABAJO`).
- CTAs must use active imperative verbs (e.g., `ÚNETE AL DISCORD`, `ÚNETE A LA COMUNIDAD`).

## Workflow Instruction

- Execute one task/section at a time.
- After completing a task, write a clear Git commit message in English in the style: `feat: ...` or `style: ...`.

## Documentation Reference

- Refer to `docs/brief-techtojob.md` for project background, exact tone definitions, and Discord architecture details.
- Refer to `docs/ROADMAP.md` for tracking implementation tasks step by step.
