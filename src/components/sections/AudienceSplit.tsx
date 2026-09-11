import { User, Building2 } from "lucide-react";
import { NeoButton } from "@/components/ui/NeoButton";
import { NeoCard } from "@/components/ui/NeoCard";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function AudienceSplit() {
  return (
    <section id="para-quien" className="bg-brand-dark bg-noise text-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <SectionBadge>Para quién</SectionBadge>
          <h2 className="mt-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Dos formas de entrar
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-white/70">
            No importa si buscas trabajo o si buscas gente. Aquí empieza igual:
            entrando a la comunidad.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <NeoCard variant="dark" className="flex flex-col justify-between">
            <div>
              <User
                className="mb-4 text-brand-teal"
                size={40}
                strokeWidth={2}
              />
              <h3 className="mb-2 text-xl font-bold uppercase tracking-wide">
                Ofrécete como talento
              </h3>
              <p className="mb-6 text-brand-white/70">
                Publica tu perfil con tu stack, tu nivel y qué buscas. Las
                empresas de la comunidad lo consultan cuando necesitan a alguien.
                Te escriben directamente. Sin filtros automáticos que descarten tu
                CV antes de que lo lea una persona. No hace falta ser senior. No
                cuesta dinero.
              </p>
            </div>
            <a
              href="https://discord.gg/h9FFgKdkRd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NeoButton variant="teal" className="w-full sm:w-auto">
                Publica tu perfil
              </NeoButton>
            </a>
          </NeoCard>

          <NeoCard variant="dark" className="flex flex-col justify-between">
            <div>
              <Building2
                className="mb-4 text-brand-teal"
                size={40}
                strokeWidth={2}
              />
              <h3 className="mb-2 text-xl font-bold uppercase tracking-wide">
                Publica como empresa
              </h3>
              <p className="mb-6 text-brand-white/70">
                Publica lo que buscas y accede a perfiles reales. Aquí ves a la
                gente trabajar antes de contratarla, no solo su CV. Menos criba y
                más contexto real. Sin intermediarios.
              </p>
            </div>
            <a
              href="https://discord.gg/h9FFgKdkRd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NeoButton variant="teal" className="w-full sm:w-auto">
                Publica tu oferta
              </NeoButton>
            </a>
          </NeoCard>
        </div>
      </div>
    </section>
  );
}
