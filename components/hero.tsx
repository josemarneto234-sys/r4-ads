import { ArrowRight, TrendingUp, MousePointerClick, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

const liveStats = [
  { label: "Impressões hoje", value: "142.8K", delta: "+12%", icon: TrendingUp },
  { label: "Cliques", value: "3.241", delta: "+8%", icon: MousePointerClick },
  { label: "Conversões", value: "87", delta: "+21%", icon: Target },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-16 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-24 lg:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Agência digital — Tráfego · Design · Vídeo
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Mais de <span className="text-primary">R$ 8 milhões</span> investidos em anúncios que viram vendas.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Campanhas de performance, criativos de alto impacto e produção audiovisual para marcas que
            levam o crescimento a sério.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              render={
                <a href="#contato">
                  Solicitar orçamento
                  <ArrowRight className="size-4" />
                </a>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#servicos">Ver serviços</a>}
            />
          </div>

          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="text-3xl font-semibold text-primary">3×</p>
              <p className="text-sm text-muted-foreground">ROAS médio dos clientes</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="text-3xl font-semibold">100+</p>
              <p className="text-sm text-muted-foreground">Projetos entregues</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
                </span>
                <span className="text-sm font-medium">Campanhas ativas</span>
              </div>
              <span className="text-xs text-muted-foreground">Ao vivo</span>
            </div>

            <div className="mt-6 space-y-3">
              {liveStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between rounded-xl border border-border bg-secondary/50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <stat.icon className="size-4" />
                    </span>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold">{stat.value}</span>
                    <span className="text-xs font-medium text-primary">{stat.delta}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-primary px-4 py-3 text-primary-foreground">
              <span className="text-sm font-medium">CPL médio</span>
              <span className="text-base font-bold">R$ 14,20</span>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-xl sm:block">
            <p className="text-xs text-muted-foreground">Pronto para escalar</p>
            <p className="text-sm font-semibold">suas vendas?</p>
          </div>
        </div>
      </div>
    </section>
  )
}
