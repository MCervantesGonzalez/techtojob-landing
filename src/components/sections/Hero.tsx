import { NeoButton } from "@/components/ui/NeoButton";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function Hero() {
  return (
    <section className="relative bg-brand-dark bg-noise text-brand-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center md:py-36">
        <SectionBadge className="mb-8">Cero CVs al vacío</SectionBadge>

        <h1 className="mb-6 text-4xl font-bold uppercase leading-tight tracking-tight md:text-6xl md:leading-none">
          Haz que tu trabajo
          <br />
          <span className="inline-block bg-brand-teal px-5 py-2 border-2 border-brand-dark text-brand-dark mt-1 -rotate-2 shadow-[4px_4px_0px_0px_#84c0bf]">
            hable por ti
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-brand-white/70 md:text-xl">
          TechToJob es la comunidad donde desarrolladores y empresas se conocen
          antes de que exista una vacante. Construyes, participas y te ven
          trabajar.
        </p>

        <a
          href="https://discord.gg/h9FFgKdkRd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NeoButton variant="teal" className="text-base px-8 py-4">
            Únete a la comunidad
          </NeoButton>
        </a>
      </div>
    </section>
  );
}
