import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Básico",
    price: "R$490",
    period: "por mês",
    features: [
      "Gestão de 1 campanha",
      "Até 5 criativos/mês",
      "Relatório mensal",
      "Suporte via WhatsApp",
    ],
  },
  {
    name: "Crescimento",
    price: "R$890",
    period: "por mês",
    features: [
      "Gestão de até 2 campanhas",
      "Até 12 criativos/mês",
      "Design estratégico básico",
      "Relatório quinzenal",
      "Suporte prioritário",
    ],
  },
  {
    name: "Autoridade",
    price: "R$1.490",
    period: "por mês",
    features: [
      "Gestão de até 4 campanhas",
      "Até 25 criativos/mês",
      "Design estratégico completo",
      "1 vídeo profissional/mês",
      "Relatório semanal",
      "Reunião mensal",
    ],
  },
  {
    name: "Completo",
    price: "R$1.990",
    period: "por mês",
    featured: true,
    badge: "Mais escolhido",
    features: [
      "Campanhas ilimitadas",
      "Criativos ilimitados",
      "Design + Branding completo",
      "Produção audiovisual mensal",
      "Estratégia digital completa",
      "Relatório semanal detalhado",
      "Gestor exclusivo dedicado",
    ],
  },
]

export function Pricing() {
  return (
    <section id="planos" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:py-28">
        <p className="text-sm font-medium text-primary">Planos e preços</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Investimento para <span className="text-primary">cada fase do negócio.</span>
        </h2>
        <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          Escolha o plano que faz sentido agora. Escale quando o resultado aparecer.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.featured
                  ? "border-primary bg-primary/5 shadow-2xl shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="mt-6"
                variant={plan.featured ? "default" : "outline"}
                nativeButton={false}
                render={
                  <a href="#contato">
                    {plan.featured ? "Quero o Plano Completo" : "Contratar"}
                  </a>
                }
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
