import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { servicePages, getServicePage } from '@/content/servicePages';
import { blogPosts } from '@/content/blogPosts';
import { caseStudies } from '@/content/caseStudies';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import Button from '@/components/ui/Button';
import FaqAccordion from '@/components/ui/FaqAccordion';
import { faqSchema, serviceSchema, webPageSchema } from '@/lib/schema';
import { canonical } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServicePage(slug);
  if (!svc) return { title: 'Service not found' };

  const url = canonical(`/services/${svc.slug}`);
  const og = `/og/${svc.slug}.jpg`;

  return {
    title: svc.seoTitle,
    description: svc.description,
    keywords: svc.keywords,
    // Self-referencing canonical — set explicitly on every route so nothing is
    // ever inherited from a parent segment again.
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: svc.h1,
      description: svc.description,
      images: [{ url: og, width: 1200, height: 630, alt: svc.h1 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: svc.h1,
      description: svc.description,
      images: [og],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const svc = getServicePage(slug);
  if (!svc) notFound();

  const path = `/services/${svc.slug}`;
  const relatedCases = svc.relatedCaseStudies
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter(Boolean);
  const relatedArticles = svc.relatedPosts
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean);
  const siblingServices = svc.relatedServices
    .map((s) => getServicePage(s))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: svc.h1, description: svc.description, path }),
          serviceSchema({
            name: svc.h1,
            description: svc.description,
            path,
            serviceType: svc.serviceType,
            offers: svc.includes,
          }),
          faqSchema(svc.faqs, path),
        ]}
      />

      {/* Hero */}
      <section className="phero">
        <div className="phero-bg" data-parallax="38">
          <Image
            src="/hero/services.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="phero-ov"></div>
        <div className="phero-grid" data-parallax="14"></div>
        <div className="container phero-inner">
          <Breadcrumbs
            className="mb-4"
            items={[{ name: 'Services', href: '/services' }, { name: svc.navLabel }]}
          />
          <span className="stag">Service</span>
          <h1 className="hero-title mt-3">{svc.h1}</h1>
          <p className="hero-sub">{svc.summary}</p>
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
                {svc.sections.map((section) => (
                  <React.Fragment key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.body.map((para, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                  </React.Fragment>
                ))}

                <h2>What is included</h2>
                <ul>
                  {svc.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h2>Technologies and standards</h2>
                <div className="d-flex gap-2 flex-wrap mb-4">
                  {svc.stack.map((t) => (
                    <span className="tbadge" key={t} style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {relatedCases.length > 0 && (
                  <>
                    <h2>Related case studies</h2>
                    <ul>
                      {relatedCases.map((c) => (
                        <li key={c!.slug}>
                          <Link href={`/portfolio/${c!.slug}`}>{c!.title}</Link> — {c!.summary}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {relatedArticles.length > 0 && (
                  <>
                    <h2>Further reading</h2>
                    <ul>
                      {relatedArticles.map((p) => (
                        <li key={p!.slug}>
                          <Link href={`/blog/${p!.slug}`}>{p!.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — visible on the page, which is what makes the FAQPage schema above
          legitimate. Marking up hidden content is a policy violation. */}
      <section className="sec bg-g">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7" data-aos="fade-up">
              <span className="stag">Questions</span>
              <h2 className="stitle mt-3">
                {svc.navLabel} <span className="gtxt">FAQs</span>
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <FaqAccordion items={svc.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Sibling services — keeps the service cluster internally linked so link
          equity circulates instead of terminating on each leaf. */}
      {siblingServices.length > 0 && (
        <section className="sec bg-w">
          <div className="container">
            <div className="row justify-content-center text-center mb-4">
              <div className="col-lg-7">
                <h2 className="stitle">
                  Related <span className="gtxt">services</span>
                </h2>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              {siblingServices.map((s) => (
                <div className="col-md-6 col-lg-4" key={s!.slug}>
                  <div className="gcard">
                    <div className="gcard-body">
                      <div className="sico i-t">
                        <i className={`bi ${s!.icon}`}></i>
                      </div>
                      <div className="ctitle">{s!.navLabel}</div>
                      <p className="ctext">{s!.summary}</p>
                      <Link href={`/services/${s!.slug}`} className="carr">
                        <i className="bi bi-arrow-right-circle"></i>Read more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-md-6 col-lg-4">
                <div className="gcard">
                  <div className="gcard-body">
                    <div className="sico i-y">
                      <i className="bi bi-grid-3x3-gap"></i>
                    </div>
                    <div className="ctitle">All services</div>
                    <p className="ctext">
                      See every engineering track we run, from AML/CFT compliance to cloud platform work.
                    </p>
                    <Link href="/services" className="carr">
                      <i className="bi bi-arrow-right-circle"></i>Services hub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA — deliberately not an <h2>. It is a conversion element, not a
          section of the document, and marking it as a heading previously made
          it the highest-weighted heading on every article page. */}
      <section id="cta-banner">
        <div className="container">
          <div className="cta-inner" data-aos="fade-up">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="stag">Consult our team</span>
                <p className="stitle mt-3 mb-0">
                  Talk to an architect about <span className="gtxt">{svc.navLabel.toLowerCase()}</span>
                </p>
                <p className="ssub mt-4 mb-0">
                  A free 45-minute technical call with a senior engineer who has built this before. No
                  demos, no sales scripts — bring your architecture and get an honest read on it.
                </p>
              </div>
              <div className="col-lg-5 text-lg-end">
                <div className="cta-card text-start">
                  <div className="cta-card-label">Schedule a free technical review</div>
                  <Button href="/contact" variant="grad" className="w-100 justify-content-center mb-3">
                    <i className="bi bi-calendar-check me-1"></i>Book a technical call
                  </Button>
                  <Button href="/portfolio" variant="glass" className="w-100 justify-content-center">
                    <i className="bi bi-folder2-open me-1"></i>See case studies
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
