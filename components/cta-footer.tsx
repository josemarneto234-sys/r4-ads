import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaFooter() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-primary/5 px-6 py-16 text-center md:px-12 md:py-20">
        <p className="text-sm font-medium text-primary">Próximo passo</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Pronto para o <span className="text-primary">próximo nível?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Vamos construir uma estratégia que gera visibilidade, autoridade e crescimento real para o seu
          negócio.
        </p>
        <Button
          size="lg"
          className="mt-8"
          nativeButton={false}
          render={
            <a href="#contato">
              Falar com a R4 Ads
              <ArrowRight className="size-4" />
            </a>
          }
        />
      </div>

      <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-mono text-xs font-bold text-primary-foreground">
            R4
          </span>
          <span className="font-semibold">R4 Ads</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} R4 Ads. Tráfego · Design · Vídeo.
        </p>
      </footer>
    </section>
  )
}
