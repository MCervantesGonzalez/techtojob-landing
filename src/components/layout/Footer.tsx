const talentLinks = [
  { label: "Ofrécete como talento", href: "#para-quien" },
  { label: "Torneos abiertos", href: "#torneos" },
  { label: "Canales de networking", href: "#como-funciona" },
];

const companyLinks = [
  { label: "Publica tu oferta", href: "#para-quien" },
  { label: "Accede a perfiles", href: "#para-quien" },
];

const communityLinks = [
  { label: "Discord", href: "https://discord.gg/h9FFgKdkRd" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Testimonios", href: "#" },
];

const socialLinks = [
  { label: "Discord", href: "https://discord.gg/h9FFgKdkRd" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/techtojob/" },
  { label: "X", href: "https://x.com/techtojob" },
  { label: "Instagram", href: "https://www.instagram.com/techtojob" },
  { label: "TikTok", href: "https://www.tiktok.com/@techtojob" },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-brand-dark bg-noise border-t-2 border-brand-teal text-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a
              href="/"
              className="mb-4 inline-block text-xl font-bold tracking-tight uppercase"
            >
              Tech<span className="text-brand-teal">ToJob</span>
            </a>
            <p className="text-sm text-brand-white/60">
              La comunidad donde desarrolladores y empresas se conocen antes de
              que exista una vacante.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-teal">
              Talento
            </h3>
            <ul className="flex flex-col gap-2">
              {talentLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-white/70 hover:text-brand-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-teal">
              Empresas
            </h3>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-white/70 hover:text-brand-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-6 text-sm font-bold uppercase tracking-wide text-brand-teal">
              Comunidad
            </h3>
            <ul className="flex flex-col gap-2">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-brand-white/70 hover:text-brand-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-teal">
              Síguenos
            </h3>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-white/70 hover:text-brand-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t-2 border-brand-white/10 pt-6 text-center text-xs text-brand-white/40">
          &copy; {new Date().getFullYear()} TechToJob. Hecho por la comunidad.
        </div>
      </div>
    </footer>
  );
}
