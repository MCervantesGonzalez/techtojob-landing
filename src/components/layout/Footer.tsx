import Image from "next/image";
import {
  DiscordIcon,
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  TikTokIcon,
} from "./SocialIcons";

const socialLinks = [
  { label: "Discord", href: "https://discord.gg/h9FFgKdkRd", Icon: DiscordIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/techtojob/", Icon: LinkedInIcon },
  { label: "X", href: "https://x.com/techtojob", Icon: XIcon },
  { label: "Instagram", href: "https://www.instagram.com/techtojob", Icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@techtojob", Icon: TikTokIcon },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-brand-white border-t-4 border-brand-dark px-6 py-10 relative z-10 sm:px-12 text-brand-dark">
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <a href="/" className="mb-3 inline-block">
            <Image
              src="/logos/svg/LogoFooter.svg"
              alt="TechToJob"
              width={140}
              height={21}
            />
          </a>
          <p className="text-xs text-brand-dark/60 text-center md:text-left">
            Comunidad de desarrolladores y empresas tech en español.
          </p>
        </div>

        <ul className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center border-2 border-brand-dark bg-white rounded-lg p-2 transition-all hover:bg-brand-dark hover:text-brand-white hover:shadow-[2px_2px_0px_0px_#2f3436]"
              >
                <link.Icon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-brand-dark/60 text-center md:text-right">
          &copy; 2026 TechToJob. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
