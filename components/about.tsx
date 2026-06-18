import {
  ArrowRight,
  Pizza,
  Sandwich,
  UtensilsCrossed,
  Shirt,
  Scissors,
  Sparkles,
  Dumbbell,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const niches = [
  { icon: Pizza, title: "Pizzarias", sub: "Delivery & salão" },
  { icon: Sandwich, title: "Lanchonetes", sub: "Fast food local" },
  { icon: UtensilsCrossed, title: "Restaurantes", sub: "Almoço & jantar" },
  { icon: Shirt, title: "Lojas de roupas", sub: "Moda & varejo" },
  { icon: Scissors, title: "Barbearias", sub: "Agendamentos & fidelização" },
  { icon: Sparkles, title: "Estéticas & clínicas", sub: "Beleza & saúde" },
  { icon: Dumbbell, title: "Academias", sub: "Matrículas & retenção" },
  { icon: Plus, title: "Seu negócio", sub: "Vamos conversar", featured: true },
]

const steps = [
  {
    num: "01 — O problema",
    text: "Seu comércio tem ótimos produtos, mas poucos clientes novos. As redes sociais orgânicas sozinhas não pagam o boleto.",
  },
  {
    num: "02 — Nossa solução",
    text: "Gerenciamos campanhas no Meta e Google que colocam seu negócio na frente de quem está pronto para comprar, perto de você.",
  },
  {
    num: "03 — O resultado",
    text: "Mais movimento, mais pedidos, mais clientes recorrentes — com acompanhamento semanal e transparência total.",
  },
]

export function About() {
  return (
    <section id="resultados" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <p className="text-sm font-medium text-primary">Quem somos</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Somos a agência que coloca o comércio local no mapa.
            </h2>

            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                A R4 Ads nasceu com um propósito claro: levar o poder do tráfego pago para quem mais
                precisa — o comércio local.
              </p>
              <p>
                Restaurantes, pizzarias, lanchonetes, lojas de roupas, barbearias, academias, clínicas,
                pet shops — negócios reais, com donos reais, que precisam de clientes novos todo dia.
              </p>
              <p>
                Enquanto as grandes agências focam em grandes contas, a gente foca em você. Entendemos o
                ritmo do negócio local, a pressão do dia a dia e o quanto cada real investido importa.
              </p>
            </div>

            <blockquote className="mt-8 rounded-2xl border-l-2 border-primary bg-secondary/50 p-6 text-pretty text-lg font-medium leading-relaxed">
              {'"Não vendemos promessa de viral. Vendemos resultado consistente para quem precisa faturar todo mês."'}
            </blockquote>

            <Button
              size="lg"
              className="mt-8"
              nativeButton={false}
              render={
                <a href="#contato">
                  Quero crescer com a R4 Ads
                  <ArrowRight className="size-4" />
                </a>
              }
            />
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground">Trabalhamos com</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {niches.map((niche) => (
                <div
                  key={niche.title}
                  className={`flex flex-col gap-2 rounded-xl border p-4 transition-colors ${
                    niche.featured
                      ? "border-primary/50 bg-primary/10"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <span
                    className={`flex size-9 items-center justify-center rounded-lg ${
                      niche.featured ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                    }`}
                  >
                    <niche.icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{niche.title}</p>
                    <p className="text-xs text-muted-foreground">{niche.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-medium text-primary">{step.num}</p>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
