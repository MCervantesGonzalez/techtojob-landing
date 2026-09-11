import Image from "next/image";

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
    <footer id="footer" className="bg-brand-white border-t-4 border-brand-dark px-6 py-12 relative z-10 sm:px-12 text-brand-dark">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" className="mb-4 inline-block">
              <Image
                src="/logos/svg/LogoFooter.svg"
                alt="TechToJob"
                width={140}
                height={21}
              />
            </a>
            <p className="text-sm text-brand-dark/70">
              Comunidad de desarrolladores y empresas tech en español.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-dark">
              Talento
            </h3>
            <ul className="flex flex-col gap-2">
              {talentLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-dark/70 hover:text-brand-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-dark">
              Empresas
            </h3>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-dark/70 hover:text-brand-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-6 text-sm font-bold uppercase tracking-wide text-brand-dark">
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
                    className="text-sm text-brand-dark/70 hover:text-brand-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-dark">
              Síguenos
            </h3>
            <ul className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-brand-dark bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-dark hover:bg-brand-teal hover:shadow-[2px_2px_0px_0px_#2f3436] transition-all duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-brand-dark/20 pt-8 text-center text-xs text-brand-dark/60">
          &copy; 2026 TechToJob. Hecho por la comunidad.
        </div>
      </div>
    </footer>
  );
}
