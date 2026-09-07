import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { servicePages } from '@/content/servicePages';
import { PAKISTAN_INTRO, PAKISTAN_SECTIONS, PAKISTAN_FAQS } from '@/content/softwarePakistan';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Button from '@/components/ui/Button';
import PageFaq from '@/components/sections/shared/PageFaq';
import JsonLd from '@/components/seo/JsonLd';
import { webPageSchema, localServiceSchema } from '@/lib/schema';
import { canonical } from '@/lib/seo';

const PATH = '/software-development-in-pakistan';

/**
 * National counterpart to /software-house-in-islamabad.
 *
 * The two are deliberately different documents. The Islamabad page is
 * city-scoped and buyer-facing: where we are, how to evaluate a firm here, what
 * an engagement looks like. This one is national and industry-facing: what the
 * sector builds, which regulators shape it, how teams form, what the cost
 * argument is worth, and what an overseas buyer should settle before signing.
 *
 * Where they touch, this page links out instead of restating, so the local head
 * term stays owned by the page built for it and the two do not compete.
 */
export const metadata: Metadata = {
  // 38 chars + " | NovuLabs" = 49 rendered.
  title: 'Software Development in Pakistan',
  description:
    'How software gets built in Pakistan: the regulators that shape it, what the industry builds well, how teams are formed, and what to settle before you sign.',
  keywords: [
    'software development in Pakistan',
    'software development company in Pakistan',
    'software outsourcing Pakistan',
    'IT companies in Pakistan',
    'software house in Islamabad',
    'best software house in Islamabad',
    'custom software development Pakistan',
    'offshore software development Pakistan',
    'fintech software development Pakistan',
    'hire developers in Pakistan',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: 'website',
    url: canonical(PATH),
    title: 'Software Development in Pakistan | NovuLabs',
    description:
      'The regulators, the sectors, the talent model and the contract terms that decide whether building software in Pakistan works for you.',
    images: [
      {
        url: '/og/enterprise-software-development.jpg',
        width: 1200,
        height: 630,
        alt: 'Software development in Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development in Pakistan | NovuLabs',
    description:
      'What the Pakistani software industry builds, which regulators shape it, and what to settle before signing with a supplier here.',
    images: ['/og/enterprise-software-development.jpg'],
  },
};

export default function SoftwareDevelopmentPakistanPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: 'Software Development in Pakistan',
            description:
              'How software is built in Pakistan: the regulators involved, the sectors with real depth, how teams are formed, and the contract terms that matter to an overseas buyer.',
            path: PATH,
            byOrganisation: true,
            mentions: [
              { name: 'State Bank of Pakistan', url: 'https://www.sbp.org.pk/' },
              { name: 'Financial Monitoring Unit', url: 'https://www.fmu.gov.pk/' },
              { name: 'Securities and Exchange Commission of Pakistan', url: 'https://www.secp.gov.pk/' },
              { name: 'National Database and Registration Authority', url: 'https://www.nadra.gov.pk/' },
              { name: 'Pakistan Telecommunication Authority', url: 'https://www.pta.gov.pk/' },
              { name: 'Pakistan Software Export Board', url: 'https://www.pseb.org.pk/' },
            ],
          }),
          localServiceSchema({
            name: 'Software development in Pakistan',
            description:
              'Custom software engineering for regulated organisations, delivered from Pakistan to clients in Pakistan, the Gulf, the UK and North America.',
            path: PATH,
            serviceType: 'Custom software development',
            city: 'Islamabad',
            region: 'Islamabad Capital Territory',
            country: 'Pakistan',
            offers: [
              'Custom software development',
              'Fintech and payment systems',
              'AML/CFT compliance software',
              'Healthcare software and EHR',
              'Government portal development',
              'Enterprise software development',
              'SaaS product development',
              'Mobile app development',
              'Cloud migration and AI automation',
            ],
          }),
        ]}
      />

      <section className="phero">
        <div className="container phero-inner">
          <Breadcrumbs items={[{ name: 'Software Development in Pakistan' }]} className="mb-3" />
          <span className="stag">Pakistan</span>
          <h1 className="hero-title mt-3">Software Development in Pakistan</h1>
          <p className="hero-sub">
            What the industry builds, which regulators shape it, how teams are formed, and what an
            overseas buyer should settle before signing. Written from inside it.
          </p>
        </div>
      </section>
      <div className="divider"></div>

      <section className="sec bg-w">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article
                className="blog-post-content"
                style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--tx2)' }}
              >
                {PAKISTAN_INTRO.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}

                {PAKISTAN_SECTIONS.map((section) => (
                  <React.Fragment key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.body.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}

                    {/* Practice-area links sit inside the section whose prose
                        gives them context, which is what makes the anchor text
                        mean something rather than being a list at the foot. */}
                    {section.heading === 'What the industry actually builds' && (
                      <ul>
                        {servicePages.map((s) => (
                          <li key={s.slug}>
                            <Link href={`/services/${s.slug}`}>{s.navLabel}</Link>: {s.summary}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.heading === 'Where Islamabad fits' && (
                      <p>
                        There is a fuller account of that on our{' '}
                        <Link href="/software-house-in-islamabad">
                          software house in Islamabad
                        </Link>{' '}
                        page, including how we evaluate suppliers, where the office is, and what an
                        engagement involves. The{' '}
                        <Link href="/industries">industries pages</Link> cover what each sector
                        regulator expects of a system, and the{' '}
                        <Link href="/portfolio">case studies</Link> describe how nine of them were
                        architected.
                      </p>
                    )}
                  </React.Fragment>
                ))}

                <h2>How we work, and what we will tell you</h2>
                <p>
                  We are one firm in this market and not a neutral observer of it, so treat the
                  above as a practitioner&apos;s account and not a survey. What we can offer is
                  specificity: the{' '}
                  <Link href="/blog">technical articles</Link> go into goAML submission, instant
                  payment rails, identity verification and healthcare interoperability in the
                  detail an engineer needs, with primary sources cited, and they are written by the
                  people who did the work, not by a content team.
                </p>
                <p>
                  If you are evaluating suppliers here, the fastest test is a technical
                  conversation. Bring an architecture you are considering and ask an engineer to
                  find the problems in it. Forty-five minutes of that will tell you more than any
                  page like this one. Including this one.{' '}
                  <Link href="/contact">Book the call</Link>, or read{' '}
                  <Link href="/about">how we run a project</Link> first.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <PageFaq
        items={PAKISTAN_FAQS}
        path={PATH}
        heading="Building software"
        headingAccent="in Pakistan"
        intro="The questions overseas buyers and local teams ask most often."
      />

      <section id="cta-banner">
        <div className="container">
          <div className="cta-inner" data-reveal="up">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="stag">Start a conversation</span>
                <p className="stitle mt-3 mb-0">
                  Talk to an engineer who <span className="gtxt">builds here</span>
                </p>
                <p className="ssub mt-4 mb-0">
                  A free 45-minute technical call, taken by someone who would be accountable for the
                  outcome. No demos and no sales script. Bring the problem, not a specification.
                </p>
              </div>
              <div className="col-lg-5 text-lg-end">
                <div className="cta-card text-start">
                  <div className="cta-card-label">Book a free technical consultation</div>
                  <Button href="/contact" variant="grad" className="w-100 justify-content-center mb-3">
                    <i className="bi bi-calendar-check me-1"></i>Book a technical call
                  </Button>
                  <Button
                    href="/software-house-in-islamabad"
                    variant="glass"
                    className="w-100 justify-content-center"
                  >
                    <i className="bi bi-geo-alt me-1"></i>Our Islamabad practice
                  </Button>
                  <p className="cta-card-note">
                    <Link href="/services">All services</Link> ·{' '}
                    <Link href="/portfolio">Case studies</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
