const keywords = [
  "#DESARROLLO",
  "TORNEOS EN VIVO",
  "CERO BOTS DE RRHH",
  "CÓDIGO QUE HABLA",
  "PROYECTOS REALES",
  "#INFRA-Y-DEVOPS",
  "#DATOS-E-IA",
  "#PORTFOLIOS",
  "#OFERTAS-TRABAJO",
  "SIN PERFILES FALSOS",
];

export function TickerBanner() {
  const items = [...keywords, ...keywords];

  return (
    <div className="overflow-hidden border-y-2 border-brand-dark bg-brand-teal py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 text-sm font-bold uppercase tracking-widest text-brand-dark"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
