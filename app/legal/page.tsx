import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { legalPages } from '@/content/legalPages';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema';
import { canonical } from '@/lib/seo';

export const metadata: Metadata = {
  // Was 'Legal & Policies' at 27 rendered chars, which wastes most of the
  // SERP allowance and describes nothing. Names the three documents instead.
  title: 'Privacy, Terms & Cookie Policy',
  description:
    'Privacy policy, terms of service and cookie policy for NovuLabs: written to describe what this site actually does, not from a template.',
  alternates: { canonical: canonical('/legal') },
  // Without an explicit openGraph block this route inherits the root layout's
  // og:url, which points at the homepage, so the page told crawlers and every
  // social scraper it *was* the homepage while its canonical said otherwise.
  openGraph: {
    type: 'website',
    title: 'Privacy, Terms & Cookie Policy | NovuLabs',
    description:
      'Privacy policy, terms of service and cookie policy for NovuLabs, written to describe what this site does.',
    url: canonical('/legal'),
    images: [
      {
        url: '/og/enterprise-software-development.jpg',
        width: 1200,
        height: 630,
        alt: 'NovuLabs legal policies',
      },
    ],
  },
};

export default function LegalIndexPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: 'Legal & Policies',
          description: 'Privacy, terms and cookie policies for NovuLabs.',
          path: '/legal',
          type: 'CollectionPage',
        })}
      />
      <section className="phero" style={{ minHeight: 'auto', paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="phero-ov"></div>
        <div className="phero-grid"></div>
        <div className="container phero-inner">
          <Breadcrumbs className="mb-4" items={[{ name: 'Legal' }]} />
          <h1 className="hero-title mt-3" style={{ fontSize: '2.4rem' }}>
            Legal &amp; policies
          </h1>
          <p className="hero-sub">
            Written to describe how this site and this company actually operate. If anything here does
            not match what you observe, tell us and we will correct it.
          </p>
        </div>
      </section>
      <div className="divider"></div>

      <section className="sec bg-w">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              {/* This page previously carried no <h2> at all and 257 words,
                  which reads as a stub to both a visitor and an on-page audit.
                  The three policies below are the substance; this section says
                  what they cover and what a buyer's procurement or compliance
                  team is usually looking for when they arrive here. */}
              <h2 className="stitle mb-3">What these documents cover</h2>
              <p className="ssub mb-3">
                Three documents, each written for this specific site and company rather than
                adapted from a template. The privacy policy sets out what data novulabs.net
                collects, why, and how long it is kept. The terms of service govern use of this
                website, and are separate from the contract that governs any engagement. The
                cookie policy lists what is stored in your browser and what is not.
              </p>
              <h2 className="stitle mb-3 mt-5">If you are reviewing us as a supplier</h2>
              <p className="ssub mb-3">
                Procurement and compliance teams usually arrive here looking for four things, and
                it is quicker to say them directly. Intellectual property in work produced for a
                client is assigned to that client under the engagement contract, not under these
                site terms. Source code sits in your repository under your organisation from the
                first commit. Data residency is set per engagement, including deployment inside
                Pakistan where a regulator requires it. And we sign mutual NDAs before any
                substantive technical discussion.
              </p>
              <p className="ssub mb-0">
                None of that is settled by this page, which covers the website only. The
                engagement contract is where it is written down, and we are happy to send the
                relevant clauses before a first call rather than after.{' '}
                <Link href="/contact">Ask for them here</Link>, or read how we work on the{' '}
                <Link href="/about">about page</Link>.
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {legalPages.map((p) => (
              <div className="col-md-6 col-lg-4" key={p.slug}>
                <div className="gcard h-100">
                  <div className="gcard-body">
                    <div className="ctitle">{p.title}</div>
                    <p className="ctext">{p.description}</p>
                    <Link href={`/legal/${p.slug}`} className="carr">
                      <i className="bi bi-arrow-right-circle"></i>
                      Read the {p.title.toLowerCase()}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
