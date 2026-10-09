import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Button from '@/components/ui/Button';
import GlowCard from '@/components/ui/GlowCard';
import { industryPages, getIndustryPage } from '@/content/industryPages';

/**
 * One page per sector, replacing ten homepage cards that all pointed at
 * /industries. Statically generated from content/industryPages.ts, so adding a
 * sector is a data change rather than a new route.
 */
export function generateStaticParams() {
  return industryPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) return {};
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: `/industries/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://www.novulabs.net/industries/${page.slug}`,
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: page.h1,
          description: page.description,
          path: `/industries/${page.slug}`,
        })}
      />

      <section className="sec bg-w z1">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Industries', href: '/industries' },
              { name: page.name },
            ]}
          />
          <div className="row">
            <div className="col-lg-8">
              <span className="stag">Industries we serve</span>
              <h1 className="hero-title mt-3" style={{ fontSize: 'clamp(1.9rem,4vw,2.9rem)' }}>
                {page.h1}
              </h1>
              <p className="ssub mt-4" style={{ maxWidth: '62ch' }}>
                {page.intro}
              </p>
              <div className="hero-btns mt-4">
                <Button href="/contact" variant="grad">
                  <i className="bi bi-calendar-check me-1"></i>Book a free consultation
                </Button>
                <Button href="/industries" variant="glass">
                  <i className="bi bi-grid me-1"></i>All industries
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="sec bg-g z1">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7" data-reveal="up">
              <span className="stag">What we build</span>
              <h2 className="stitle mt-3">
                Software for <span className="gtxt">{page.name.toLowerCase()}</span>
              </h2>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4" data-reveal-group>
            {page.builds.map((b, i) => (
              <div className="col" data-reveal="up" key={i}>
                <GlowCard className="gcard">
                  <div className="gcard-body p-uniform">
                    <div className="ctitle">{b.title}</div>
                    <div className="ctext">{b.desc}</div>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec bg-w z1">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6" data-reveal="right">
              <span className="stag">What makes it hard</span>
              <h2 className="stitle mt-3">
                Constraints in <span className="gtxt">{page.name.toLowerCase()}</span>
              </h2>
              {/* The section a buyer in this sector actually reads. It names
                  obligations and failure modes rather than benefits, because
                  that is the part a supplier who has not done the work cannot
                  write convincingly. */}
              <p className="ssub mt-3">
                These are the conditions the software has to hold up under. If your project
                does not run into any of them, you probably do not need a specialist.
              </p>
            </div>
            <div className="col-lg-6" data-reveal="left">
              <ul className="chk">
                {page.constraints.map((c, i) => (
                  <li key={i}>
                    <span className="chk-ico">
                      <i className="bi bi-check-lg"></i>
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg-g z1">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7" data-reveal="up">
              <span className="stag">Services</span>
              <h2 className="stitle mt-3">
                Most used by <span className="gtxt">{page.name.toLowerCase()} clients</span>
              </h2>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-3" data-reveal-group>
            {page.services.map((s) => (
              <div className="col" data-reveal="up" key={s.slug}>
                <Link href={`/services/${s.slug}`} className="icard" style={{ textDecoration: 'none' }}>
                  <div className="iico i-t">
                    <i className="bi bi-arrow-right-circle"></i>
                  </div>
                  <div>
                    <h3 className="industry-card-title">{s.label}</h3>
                    <p>Read what this service involves before you commission it.</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-5" data-reveal="up">
            <Button href="/contact" variant="grad">
              <i className="bi bi-chat-dots me-1"></i>Consult us about {page.name}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
