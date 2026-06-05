import { Nav } from '../src/components/blocks/Nav'
import { Hero } from '../src/components/blocks/Hero'
import { Marquee } from '../src/components/blocks/Marquee'
import { QuoteBand } from '../src/components/blocks/QuoteBand'
import { Problem } from '../src/components/blocks/Problem'
import { Pipeline } from '../src/components/blocks/Pipeline'
import { Products } from '../src/components/blocks/Products'
import { Process } from '../src/components/blocks/Process'
import { WhyUs } from '../src/components/blocks/WhyUs'
import { Audience } from '../src/components/blocks/Audience'
import { FinalCta } from '../src/components/blocks/FinalCta'
import { Footer } from '../src/components/blocks/Footer'
import { Fab } from '../src/components/blocks/Fab'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <QuoteBand />
        <Problem />
        <Pipeline />
        <Products />
        <Process />
        <WhyUs />
        <Audience />
        <FinalCta />
      </main>
      <Footer />
      <Fab />
    </>
  )
}
