import { Nav } from './components/blocks/Nav'
import { Hero } from './components/blocks/Hero'
import { Marquee } from './components/blocks/Marquee'
import { QuoteBand } from './components/blocks/QuoteBand'
import { Problem } from './components/blocks/Problem'
import { Pipeline } from './components/blocks/Pipeline'
import { Products } from './components/blocks/Products'
import { Process } from './components/blocks/Process'
import { WhyUs } from './components/blocks/WhyUs'
import { Audience } from './components/blocks/Audience'
import { FinalCta } from './components/blocks/FinalCta'
import { Footer } from './components/blocks/Footer'
import { Fab } from './components/blocks/Fab'

/** OVERMOON single-page landing, composed from design.md building blocks. */
export default function App() {
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
