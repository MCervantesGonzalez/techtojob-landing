"use client";

import Image from "next/image";
import { NeoButton } from "@/components/ui/NeoButton";

const links = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Para quién", href: "#para-quien" },
  { label: "Torneos", href: "#torneos" },
  { label: "Novedades", href: "#novedades" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark text-brand-white border-b-2 border-brand-teal">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center">
          <Image
            src="/logos/svg/LogoNav.svg"
            alt="TechToJob"
            width={120}
            height={18}
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

        <button
          onClick={() => {
            document
              .getElementById("footer")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="cursor-pointer"
        >
          <NeoButton variant="teal" className="text-xs px-4 py-2">
            Únete al Discord
          </NeoButton>
        </button>
      </div>
    </header>
  );
}
