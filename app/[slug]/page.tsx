import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Nav } from '../../src/components/blocks/Nav'
import { Footer } from '../../src/components/blocks/Footer'
import { Fab } from '../../src/components/blocks/Fab'
import { FinalCta } from '../../src/components/blocks/FinalCta'
import { Faq } from '../../src/components/blocks/Faq'
import { Section } from '../../src/components/ui/Section'
import { Eyebrow } from '../../src/components/ui/Eyebrow'
import { Reveal } from '../../src/components/ui/Reveal'
import { JsonLd } from '../../src/components/ui/JsonLd'
import { getService, serviceSlugs } from '../../src/data/services'
import { buildServiceJsonLd, buildBreadcrumbJsonLd } from '../../src/lib/jsonld'
import { SITE_URL, SITE_NAME } from '../../src/consts/config'

interface PageParams {
  params: Promise<{ slug: string }>
}

/** Pre-render every service page at build time. */
export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }))
}

/** Per-service SEO metadata: title, description, canonical and ru hreflang. */
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}

  const path = `/${slug}`
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: path,
      languages: { ru: path },
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: path,
      siteName: SITE_NAME,
      locale: 'ru_RU',
      type: 'website',
    },
  }
}

/** Dedicated service landing page rendered from the services data source. */
export default async function ServicePage({ params }: PageParams) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const url = `${SITE_URL}/${slug}`

  return (
    <>
      <JsonLd
        data={[
          buildServiceJsonLd({
            name: service.serviceType,
            serviceType: service.serviceType,
            description: service.metaDescription,
            url,
          }),
          buildBreadcrumbJsonLd(service.serviceType, url),
        ]}
      />
      <Nav />
      <main>
        <Section className="pt-[120px] md:pt-[148px]">
          <Reveal>
            <Eyebrow>{service.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="display mt-6 max-w-[18ch]">{service.h1}</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead mt-7 max-w-[52ch]">{service.lead}</p>
          </Reveal>
          <Reveal delay={160} className="mt-8 flex flex-wrap gap-2">
            {service.capabilities.map((c) => (
              <span
                key={c}
                className="rounded-sharp border border-hairline px-3 py-1.5 text-sm text-ink/70"
              >
                {c}
              </span>
            ))}
          </Reveal>
          <Reveal delay={200} className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary">
              Получить аудит
            </a>
            <a href="/#products" className="btn btn-ghost">
              Все продукты
            </a>
          </Reveal>
        </Section>

        <Section className="!pt-0">
          <div className="grid gap-12 border-t border-hairline pt-14 md:gap-16 md:pt-20">
            {service.sections.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 80}>
                <div className="grid gap-4 md:grid-cols-[0.9fr_1.4fr] md:gap-12">
                  <h2 className="h3">{s.title}</h2>
                  <p className="max-w-[60ch] leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Faq eyebrow="Вопросы и ответы" title="Частые вопросы" items={service.faq} />

        <FinalCta />
      </main>
      <Footer />
      <Fab />
    </>
  )
}
