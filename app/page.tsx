import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { Pricing } from "@/components/pricing"
import { CtaFooter } from "@/components/cta-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Team />
        <Pricing />
        <CtaFooter />
      </main>
    </div>
  )
}
