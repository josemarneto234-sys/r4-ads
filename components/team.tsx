const team = [
  {
    initials: "DG",
    role: "Designer",
    title: "Designer",
    description:
      "Especialista em identidade visual, criativos de alta conversão e construção de marcas que geram reconhecimento e vendas.",
  },
  {
    initials: "CR",
    role: "Designer",
    title: "Designer",
    description:
      "Direção criativa, desenvolvimento de materiais estratégicos e criação visual de alto impacto para marcas e campanhas.",
  },
  {
    initials: "GT",
    role: "Tráfego Pago",
    title: "Gestor de Tráfego",
    description:
      "Especialista em campanhas pagas, otimização contínua de anúncios e geração de resultados mensuráveis.",
  },
  {
    initials: "VM",
    role: "Videomaker",
    title: "Videomaker",
    description:
      "Captação, edição e produção de vídeos profissionais para marcas, conteúdo e campanhas de alta performance.",
  },
]

export function Team() {
  return (
    <section id="equipe" className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:py-28">
      <p className="text-sm font-medium text-primary">Quem faz acontecer</p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        A equipe por trás <span className="text-primary">dos resultados.</span>
      </h2>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <article
            key={member.initials}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <span className="flex size-14 items-center justify-center rounded-xl bg-primary/10 font-mono text-lg font-bold text-primary">
              {member.initials}
            </span>
            <p className="mt-5 text-xs font-medium text-primary">{member.role}</p>
            <h3 className="mt-1 text-lg font-semibold">{member.title}</h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              {member.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
