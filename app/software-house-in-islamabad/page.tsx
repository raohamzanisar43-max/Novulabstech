import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { servicePages } from '@/content/servicePages';
import { ISLAMABAD_INTRO, ISLAMABAD_SECTIONS, ISLAMABAD_FAQS } from '@/content/localIslamabad';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Button from '@/components/ui/Button';
import PageFaq from '@/components/sections/shared/PageFaq';
import JsonLd from '@/components/seo/JsonLd';
import { webPageSchema, localServiceSchema } from '@/lib/schema';
import { canonical, ORG } from '@/lib/seo';

const PATH = '/software-house-in-islamabad';

/**
 * Local landing page for the "software house in Islamabad" query cluster.
 *
 * Deliberately NOT canonicalised to the homepage. The two pages answer
 * different questions: the homepage answers "what is NovuLabs", this one
 * answers "what is a software house in Islamabad and how do I pick one". The
 * overlap is the company name, which is not duplicate content.
 *
 * KEYWORD TARGET: "best software agency in Islamabad" and its close variants
 * ("best software development agency / company / house in Islamabad").
 *
 * The phrase is carried in the H1, in a dedicated H2, and across the FAQ block,
 * because that is where this page's search intent actually sits: somebody
 * typing "best software agency in Islamabad" is trying to choose a supplier,
 * and the seven evaluation questions in the body are the most useful answer we
 * can give them.
 *
 * The framing matters. The H1 reads "How to Choose the Best Software Agency in
 * Islamabad", not "We Are the Best Software Agency in Islamabad". The first
 * carries the exact phrase and matches what the page delivers. The second is a
 * bare superlative about ourselves, which no buyer believes, which contradicts
 * the body's own argument that the right agency depends on what you are
 * building, and which in most markets is a comparative advertising claim that
 * needs substantiation this site does not publish. The keyword coverage is the
 * same either way; only the credibility differs.
 *
 * "Agency", "company" and "software house" are all used deliberately. They are
 * the same thing to a buyer in this market and people search all three.
 */
export const metadata: Metadata = {
  // 47 chars + " | NovuLabs" = 58 rendered, inside the SERP budget, with the
  // head term at the front where it carries the most weight.
  title: 'Best Software Agency in Islamabad: How to Choose',
  // 158 chars.
  description:
    'Choosing the best software agency in Islamabad: seven questions to ask before you sign, what drives cost and timelines, and where NovuLabs fits. Based in I-10.',
  keywords: [
    'best software agency in Islamabad',
    'best software development agency in Islamabad',
    'best software house in Islamabad',
    'best software company in Islamabad',
    'software agency in Islamabad',
    'software house in Islamabad',
    'software development company in Islamabad',
    'top software companies in Islamabad',
    'custom software development Islamabad',
    'IT company in Islamabad',
    'mobile app development Islamabad',
    'enterprise software development Pakistan',
    'fintech software house Islamabad',
    'software house I-10 Islamabad',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: 'website',
    url: canonical(PATH),
    title: 'Best Software Agency in Islamabad: How to Choose | NovuLabs',
    description:
      'How to choose the best software agency in Islamabad: the questions to ask, what drives cost, and how NovuLabs works. Custom software built in I-10.',
    images: [
      {
        url: '/og/enterprise-software-development.jpg',
        width: 1200,
        height: 630,
        alt: 'NovuLabs, a software agency in Islamabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Agency in Islamabad: How to Choose | NovuLabs',
    description:
      'Seven questions to ask before you pick a software agency in Islamabad, and what actually separates one from another.',
    images: ['/og/enterprise-software-development.jpg'],
  },
};

export default function SoftwareHouseIslamabadPage() {
  const telHref = `tel:${ORG.telephone.replace(/\s+/g, '')}`;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: 'Best Software Agency in Islamabad: How to Choose',
            description:
              'How to choose the best software agency in Islamabad, and how NovuLabs builds custom software for banks, healthcare providers, government departments and enterprises.',
            path: PATH,
            byOrganisation: true,
            mentions: [
              { name: 'State Bank of Pakistan', url: 'https://www.sbp.org.pk/' },
              { name: 'Financial Monitoring Unit', url: 'https://www.fmu.gov.pk/' },
              { name: 'Securities and Exchange Commission of Pakistan', url: 'https://www.secp.gov.pk/' },
              { name: 'National Database and Registration Authority', url: 'https://www.nadra.gov.pk/' },
            ],
          }),
          localServiceSchema({
            name: 'Custom software development in Islamabad',
            description:
              'Design, engineering and maintenance of custom software for regulated organisations, delivered from Islamabad, Pakistan.',
            path: PATH,
            serviceType: 'Custom software development',
            city: 'Islamabad',
            region: 'Islamabad Capital Territory',
            country: 'Pakistan',
            offers: [
              'Custom software development',
              'Enterprise software development',
              'Mobile app development',
              'Web development',
              'AML/CFT compliance software',
              'Fintech and payment systems',
              'Healthcare software and EHR',
              'ERP and CRM development',
              'Cloud migration and AI automation',
              'API development and integration',
            ],
          }),
        ]}
      />

      {/* Hero */}
      <section className="phero">
        <div className="container phero-inner">
          <Breadcrumbs items={[{ name: 'Software Agency in Islamabad' }]} className="mb-3" />
          <span className="stag">Islamabad, Pakistan</span>
          <h1 className="hero-title mt-3">How to Choose the Best Software Agency in Islamabad</h1>
          <p className="hero-sub">
            The questions worth asking before you sign, what actually separates one software agency
            from another, and where NovuLabs fits. We build custom software for organisations a
            regulator can audit, from I-10, Islamabad.
          </p>
        </div>
      </section>
      <div className="divider"></div>

      {/* Body */}
      <section className="sec bg-w">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article
                className="blog-post-content"
                style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--tx2)' }}
              >
                {ISLAMABAD_INTRO.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}

                {ISLAMABAD_SECTIONS.map((section) => (
                  <React.Fragment key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.body.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}

                    {/* The practice-area links sit immediately after "What we
                        build" rather than in a generic block at the foot of the
                        page, so each link is adjacent to the prose that gives
                        it context. That is what makes the anchor text mean
                        something to a crawler rather than being a bare list. */}
                    {section.heading === 'What we build' && (
                      <ul>
                        {servicePages.map((s) => (
                          <li key={s.slug}>
                            <Link href={`/services/${s.slug}`}>{s.navLabel}</Link>: {s.summary}
                          </li>
                        ))}
                      </ul>
                    )}
                  </React.Fragment>
                ))}

                <p>
                  Islamabad is one part of a national picture, and the constraints that shape
                  software work here apply across the country. We set out the regulators involved,
                  which sectors have real engineering depth, how teams are formed and what an
                  overseas buyer should settle before signing on{' '}
                  <Link href="/software-development-in-pakistan">
                    software development in Pakistan
                  </Link>
                  .
                </p>

                <h2>Where we are, and how to reach us</h2>
                <p>
                  Our office is in {ORG.address.streetAddress}, {ORG.address.addressLocality},{' '}
                  {ORG.address.addressRegion}, Pakistan. Office hours are{' '}
                  {ORG.openingHours.days[0]} to{' '}
                  {ORG.openingHours.days[ORG.openingHours.days.length - 1]},{' '}
                  {ORG.openingHours.opens} to {ORG.openingHours.closes} Pakistan Standard Time.
                  Call <a href={telHref}>{ORG.telephone}</a> or email{' '}
                  <a href={`mailto:${ORG.email}`}>{ORG.email}</a>. If you would rather start with a
                  scheduled technical call than a cold one,{' '}
                  <Link href="/contact">book it here</Link>.
                </p>
                <p>
                  You can check the work before speaking to anyone. The{' '}
                  <Link href="/portfolio">case studies</Link> describe how each system was
                  architected and what constrained it. The{' '}
                  <Link href="/industries">industries pages</Link> cover the regulatory environment
                  in banking, healthcare and government, and the{' '}
                  <Link href="/team">engineering team</Link> lists who would be doing the work.
                  The <Link href="/blog">technical articles</Link> are written by those same
                  people. <Link href="/about">About NovuLabs</Link> explains how a project runs
                  here, and <Link href="/solutions">our platforms</Link> covers what we have
                  already built and can configure instead of writing from scratch.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <PageFaq
        items={ISLAMABAD_FAQS}
        path={PATH}
        heading="Choosing a software agency in Islamabad:"
        headingAccent="common questions"
        intro="Answers to what buyers in Islamabad ask us most often, including the one about who is best."
      />

      {/* CTA. Not an <h2>: it is a conversion element, not a section of the
          document, and the same reasoning applies here as on the service pages. */}
      <section id="cta-banner">
        <div className="container">
          <div className="cta-inner" data-reveal="up">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="stag">Start a project</span>
                <p className="stitle mt-3 mb-0">
                  Talk to an architect in <span className="gtxt">Islamabad</span>
                </p>
                <p className="ssub mt-4 mb-0">
                  A free 45-minute technical call with a senior engineer, in person in Islamabad or
                  remotely. Bring the problem, not a specification. You will get an honest read on
                  scope, risk and whether we are the right team for it.
                </p>
              </div>
              <div className="col-lg-5 text-lg-end">
                <div className="cta-card text-start">
                  <div className="cta-card-label">Book a free technical consultation</div>
                  <Button href="/contact" variant="grad" className="w-100 justify-content-center mb-3">
                    <i className="bi bi-calendar-check me-1"></i>Book a technical call
                  </Button>
                  <Button href={telHref} variant="glass" className="w-100 justify-content-center">
                    <i className="bi bi-telephone me-1"></i>{ORG.telephone}
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
