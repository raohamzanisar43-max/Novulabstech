import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import {
  APP_ISLAMABAD_INTRO,
  APP_ISLAMABAD_SECTIONS,
  APP_ISLAMABAD_FAQS,
} from '@/content/localAppIslamabad';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Button from '@/components/ui/Button';
import PageFaq from '@/components/sections/shared/PageFaq';
import JsonLd from '@/components/seo/JsonLd';
import { webPageSchema, localServiceSchema } from '@/lib/schema';
import { canonical, ORG } from '@/lib/seo';
import { withLinks } from '@/lib/richText';

const PATH = '/mobile-app-development-in-islamabad';

/**
 * Local landing page for the "mobile app development in Islamabad" cluster.
 *
 * WHY IT IS AT THE ROOT AND NOT UNDER /services
 *
 * Geo intent on this site is handled outside the /services hub-and-spoke tree,
 * alongside /software-house-in-islamabad and /software-development-in-pakistan.
 * A city page inside /services would compete with the pillar it belongs to
 * (/services/mobile-app-development), which is the cannibalisation the spoke
 * structure exists to avoid.
 *
 * WHAT THE SERP RESEARCH CHANGED (collected 12 Sep 2026, gl=pk)
 *
 * "mobile app development in islamabad" returns a LOCAL MAP PACK, with review
 * counts and opening hours on each Places result. No on-page work wins that
 * block — the Google Business Profile does. So this page's job is the organic
 * result underneath it, and its local signals are written to be verifiable
 * rather than decorative: real street address in prose, real phone, real hours,
 * localServiceSchema bounding the entity to Islamabad inside ICT.
 *
 * The sibling term "app development in islamabad" DOES return an AI Overview,
 * and the companies it cited were rendered as "name + Islamabad sector +
 * specialisation". That is the citation shape, so all three appear in
 * server-rendered prose in the opening paragraphs.
 *
 * TITLE FRAMING
 *
 * "Mobile App Development in Islamabad" carries the head term exactly, with no
 * superlative. Competitors on this SERP use "Award Winning", "Most Certified"
 * and "VERIFIED RESULT" against unverifiable numbers. Not matching them is the
 * differentiation, and the keyword coverage is identical either way.
 */
export const metadata: Metadata = {
  // 35 chars + " | NovuLabs" = 46 rendered, head term at the front.
  title: 'Mobile App Development in Islamabad',
  // 157 chars.
  description:
    'Mobile app development in Islamabad: native Android and iOS, Flutter and React Native, with the backend behind it. Custom app development from I-10, since 2015.',
  keywords: [
    'mobile app development in Islamabad',
    'mobile app development company in Islamabad',
    'app development in Islamabad',
    'app development company in Islamabad',
    'app developer Islamabad',
    'mobile app developers Islamabad',
    'android app development Islamabad',
    'ios app development Islamabad',
    'flutter app development Islamabad',
    'react native app development Islamabad',
    'custom mobile app development Islamabad',
    'software house in Islamabad',
    'software development company Islamabad',
    'app development cost in Pakistan',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: 'website',
    url: canonical(PATH),
    title: 'Mobile App Development in Islamabad | NovuLabs',
    description:
      'Native Android and iOS, Flutter and React Native app development in Islamabad, with the backend, integrations and store submission handled. Based in I-10.',
    images: [
      {
        url: '/og/mobile-app-development.jpg',
        width: 1200,
        height: 630,
        alt: 'NovuLabs, mobile app development in Islamabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development in Islamabad | NovuLabs',
    description:
      'What an app costs in Pakistan, how to choose native or cross-platform, and who would build it. Mobile app development from I-10, Islamabad.',
    images: ['/og/mobile-app-development.jpg'],
  },
};

export default function MobileAppDevelopmentIslamabadPage() {
  const telHref = `tel:${ORG.telephone.replace(/\s+/g, '')}`;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: 'Mobile App Development in Islamabad',
            description:
              'Mobile app development in Islamabad: native Android and iOS, cross-platform Flutter and React Native, the backend behind the app, local payment and identity integrations, and store submission.',
            path: PATH,
            byOrganisation: true,
            // Entities this page genuinely discusses, not padding. Each is
            // named in the body copy.
            mentions: [
              { name: 'State Bank of Pakistan', url: 'https://www.sbp.org.pk/' },
              { name: 'Financial Monitoring Unit', url: 'https://www.fmu.gov.pk/' },
              {
                name: 'National Database and Registration Authority',
                url: 'https://www.nadra.gov.pk/',
              },
            ],
            // The declared internal cluster. Every path here is also a visible
            // link in the markup below or in the body copy.
            relatedLink: [
              '/services/mobile-app-development',
              '/services/android-app-development',
              '/services/ios-app-development',
              '/services/api-development-integration',
              '/software-house-in-islamabad',
              '/portfolio/carepulse-telemedicine-app',
            ],
            reserveActionPath: '/contact',
          }),
          localServiceSchema({
            name: 'Mobile app development in Islamabad',
            description:
              'Design, engineering, store submission and maintenance of native and cross-platform mobile applications, delivered from Islamabad, Pakistan.',
            path: PATH,
            serviceType: 'Mobile application development',
            city: 'Islamabad',
            region: 'Islamabad Capital Territory',
            country: 'Pakistan',
            offers: [
              'Android app development',
              'iOS app development',
              'Cross-platform app development with Flutter',
              'Cross-platform app development with React Native',
              'Custom mobile app development',
              'Mobile backend and API development',
              'App Store and Google Play submission',
              'App maintenance and support',
            ],
          }),
        ]}
      />

      {/* Hero */}
      <section className="phero">
        <div className="container phero-inner">
          <Breadcrumbs items={[{ name: 'Mobile App Development in Islamabad' }]} className="mb-3" />
          <span className="stag">Islamabad, Pakistan</span>
          <h1 className="hero-title mt-3">Mobile App Development in Islamabad</h1>
          <p className="hero-sub">
            Native Android and iOS, Flutter and React Native, and the backend behind the app. Built
            in I-10, Islamabad, for organisations where the app is part of a regulated system.
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
                {APP_ISLAMABAD_INTRO.map((para, i) => (
                  <p key={i}>{withLinks(para)}</p>
                ))}

                {APP_ISLAMABAD_SECTIONS.map((section) => (
                  <React.Fragment key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.body.map((para, i) => (
                      <p key={i}>{withLinks(para)}</p>
                    ))}
                  </React.Fragment>
                ))}

                <h2>How to reach us</h2>
                <p>
                  Our office is at {ORG.address.streetAddress}, {ORG.address.addressLocality},{' '}
                  {ORG.address.addressRegion}, Pakistan. Office hours are{' '}
                  {ORG.openingHours.days[0]} to{' '}
                  {ORG.openingHours.days[ORG.openingHours.days.length - 1]},{' '}
                  {ORG.openingHours.opens} to {ORG.openingHours.closes} Pakistan Standard Time. Call{' '}
                  <a href={telHref}>{ORG.telephone}</a>, email{' '}
                  <a href={`mailto:${ORG.email}`}>{ORG.email}</a>, or{' '}
                  <Link href="/contact">book a technical call</Link> if you would rather have a
                  scheduled conversation with an engineer than a sales one.
                </p>
                <p>
                  Mobile is one practice area. The{' '}
                  <Link href="/services/mobile-app-development">
                    enterprise mobile app development
                  </Link>{' '}
                  pillar covers the engineering in more depth, and{' '}
                  <Link href="/services">all our services</Link> sets out where app work connects to{' '}
                  <Link href="/services/web-development">web platforms</Link>,{' '}
                  <Link href="/services/fintech-software-development">
                    fintech and payment systems
                  </Link>{' '}
                  and{' '}
                  <Link href="/services/healthcare-software-development">healthcare software</Link>.
                  For the national picture rather than the city one, see{' '}
                  <Link href="/software-development-in-pakistan">
                    software development in Pakistan
                  </Link>
                  .
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <PageFaq
        items={APP_ISLAMABAD_FAQS}
        path={PATH}
        heading="Mobile app development in Islamabad:"
        headingAccent="common questions"
        intro="Cost, timelines, platform choice, ownership and maintenance — the questions buyers in Islamabad actually ask before they commission an app."
      />

      {/* CTA. Not an <h2>: it is a conversion element, not a section of the
          document, matching the pattern on every other landing page here. */}
      <section id="cta-banner">
        <div className="container">
          <div className="cta-inner" data-reveal="up">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <h3 className="mb-3">
                  Talk to an engineer about your <span className="gtxt">app</span>
                </h3>
                <p className="mb-0" style={{ color: 'var(--tx2)' }}>
                  Bring the problem rather than a specification. You will get a straight answer on
                  platform choice, what drives the cost, and whether the work needs a team this size
                  at all.
                </p>
              </div>
              <div className="col-lg-5 text-lg-end">
                <Button href="/contact" variant="grad">
                  Book a technical call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
