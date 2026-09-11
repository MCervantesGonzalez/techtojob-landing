"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NeoButton } from "@/components/ui/NeoButton";

const links = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Para quién", href: "#para-quien" },
  { label: "Torneos", href: "#torneos" },
  { label: "Novedades", href: "#novedades" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          {links.map((link) => (
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
            Únete al Discord
          </NeoButton>
        </div>

        <button
          className="cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
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
            {links.map((link) => (
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
            Únete al Discord
          </NeoButton>
        </div>
      )}
    </header>
  );
}
