import { ArrowRight, Megaphone, Palette, Video, LineChart } from "lucide-react"

const services = [
  {
    num: "01",
    icon: Megaphone,
    title: "Gestão de Tráfego Pago",
    description:
      "Campanhas de alta performance no Meta Ads, Google Ads e TikTok Ads. Estratégia orientada por dados, otimização diária e foco total em ROAS e CPL.",
    tags: ["Meta Ads", "Google Ads", "TikTok Ads", "Geração de leads"],
    featured: true,
  },
  {
    num: "02",
    icon: Palette,
    title: "Design Estratégico",
    description:
      "Identidade visual de alto impacto, criativos desenvolvidos para conversão e materiais que posicionam sua marca com autoridade no mercado.",
    tags: ["Branding", "Criativos para ads", "Social media", "Landing pages"],
  },
  {
    num: "03",
    icon: Video,
    title: "Produção Audiovisual",
    description:
      "Vídeos profissionais para anúncios, conteúdo orgânico e presença digital. Captação, direção e edição com foco em storytelling que converte.",
    tags: ["Vídeos para ads", "Reels", "Institucional", "UGC"],
  },
  {
    num: "04",
    icon: LineChart,
    title: "Estratégia Digital",
    description:
      "Planejamento completo de presença digital: funil de vendas, calendário editorial, posicionamento e crescimento escalável para o seu negócio.",
    tags: ["Funil de vendas", "Conteúdo", "Crescimento"],
  },
]

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">O que entregamos</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Seu arsenal <span className="text-primary">digital completo.</span>
          </h2>
          <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Da estratégia ao criativo, do tráfego ao vídeo. Tudo pensado para converter e escalar.
          </p>
        </div>
        <a
          href="#contato"
          className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          Ver todos os serviços
          <ArrowRight className="size-4" />
        </a>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.num}
            className={`group flex flex-col rounded-2xl border border-border p-7 transition-colors hover:border-primary/50 ${
              service.featured ? "bg-card" : "bg-card/40"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <service.icon className="size-5" />
              </span>
              <span className="font-mono text-sm text-muted-foreground">{service.num}</span>
            </div>

            <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
            <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
