const items = [
  "Tráfego Pago",
  "Design Estratégico",
  "Meta Ads",
  "Google Ads",
  "TikTok Ads",
  "Produção Audiovisual",
  "Branding",
  "Funil de Vendas",
  "Gestão de Campanhas",
  "Criativos de Alto Impacto",
  "ROAS",
  "CPL",
  "Performance",
]

export function Marquee() {
  return (
    <section className="border-y border-border bg-card py-5">
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4">
          {items.map((item, i) => (
            <MarqueeItem key={`a-${i}`} label={item} />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 animate-marquee items-center gap-4 pr-4"
        >
          {items.map((item, i) => (
            <MarqueeItem key={`b-${i}`} label={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MarqueeItem({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-4 whitespace-nowrap text-sm font-medium text-muted-foreground">
      {label}
      <span className="text-primary">✦</span>
    </span>
  )
}
