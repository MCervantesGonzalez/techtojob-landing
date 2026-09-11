"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NeoButton } from "@/components/ui/NeoButton";
import messages from "@/messages/es.json";

/**
 * Sticky top navigation bar with desktop links, mobile hamburger menu, and Discord CTA.
 *
 * @remarks
 * - **Desktop** (md+): Horizontal nav links + teal CTA button aligned right.
 * - **Mobile** (<md): Hamburger icon toggles a slide-down menu with links + full-width CTA.
 * - All section anchor links (`#como-funciona`, `#para-quien`, `#torneos`, `#novedades`)
 *   use native `<a href>` for smooth scrolling (powered by `scroll-behavior: smooth` in globals.css).
 * - The CTA button uses `scrollIntoView({ behavior: "smooth" })` to scroll to the footer.
 * - Mobile menu auto-closes on link click via `setMenuOpen(false)`.
 *
 * @accessibility
 * - Hamburger button has dynamic `aria-label` toggling between "Abrir menú" / "Cerrar menú".
 * - Uses Lucide `Menu` / `X` icons for clear open/close visual state.
 * - Sticky positioning with `z-50` ensures nav stays above all page content.
 *
 * @example
 * ```tsx
 * // Rendered globally in layout.tsx — no props needed.
 * <Header />
 * ```
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = messages.header;

  const navLinks = [
    { label: t.nav.howItWorks, href: "#como-funciona" },
    { label: t.nav.forWhom, href: "#para-quien" },
    { label: t.nav.tournaments, href: "#torneos" },
    { label: t.nav.news, href: "#novedades" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-dark text-brand-white border-b-2 border-brand-teal">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center">
          <Image
            src="/logos/svg/LogoNav.svg"
            alt="TechToJob"
            width={180}
            height={27}
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-brand-white/80 hover:text-brand-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <NeoButton
            variant="teal"
            className="text-sm px-5 py-2.5"
            onClick={() => {
              document
                .getElementById("footer")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.cta}
          </NeoButton>
        </div>

        <button
          className="cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t.menuClose : t.menuOpen}
        >
          {menuOpen ? (
            <X size={28} className="text-brand-white" />
          ) : (
            <Menu size={28} className="text-brand-white" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t-2 border-brand-white/10 px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wide text-brand-white/80 hover:text-brand-teal transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <NeoButton
            variant="teal"
            className="w-full text-xs"
            onClick={() => {
              setMenuOpen(false);
              document
                .getElementById("footer")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t.cta}
          </NeoButton>
        </div>
      )}
    </header>
  );
}
