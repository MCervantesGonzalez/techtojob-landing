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
        <a href="/" className="text-xl font-bold tracking-tight uppercase">
          Tech<span className="text-brand-teal">ToJob</span>
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

        <a
          href="https://discord.gg/h9FFgKdkRd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NeoButton variant="teal" className="text-xs px-4 py-2">
            Únete al Discord
          </NeoButton>
        </a>
      </div>
    </header>
  );
}
