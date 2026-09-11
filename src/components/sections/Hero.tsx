import { NeoButton } from "@/components/ui/NeoButton";
import { SectionBadge } from "@/components/ui/SectionBadge";
import messages from "@/messages/es.json";

export function Hero() {
  const t = messages.hero;

  return (
    <section className="relative bg-brand-dark bg-noise text-brand-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center md:py-36">
        <SectionBadge className="mb-8">{t.badge}</SectionBadge>

        <h1 className="mb-6 text-4xl font-bold uppercase leading-tight tracking-tight md:text-6xl md:leading-none">
          {t.headlineLine1}
          <br />
          <span className="inline-block bg-brand-teal px-5 py-2 text-brand-dark mt-1 -rotate-2">
            {t.headlineHighlight}
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-brand-white/70 md:text-xl">
          {t.description}
        </p>

        <a
          href="https://discord.gg/h9FFgKdkRd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NeoButton variant="teal" className="text-base px-8 py-4">
            {t.cta}
          </NeoButton>
        </a>
      </div>
    </section>
  );
}
