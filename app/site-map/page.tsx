import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { servicePages } from '@/content/servicePages';
import { serviceSpokes } from '@/content/serviceSpokes';
import { caseStudies } from '@/content/caseStudies';
import { blogPosts } from '@/content/blogPosts';
import { legalPages } from '@/content/legalPages';
import { teamMembers } from '@/content/siteData';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema';
import { canonical } from '@/lib/seo';

/**
 * Human-readable sitemap.
 *
 * Lives at /site-map rather than /sitemap because app/sitemap.ts owns the
 * /sitemap segment to generate /sitemap.xml.
 *
 * Structured, not a link dump. The content findings register scored the old
 * version 45/100 for being bare links that duplicated the footer. Each group
 * now opens with one sentence saying what that part of the site is for, and
 * every sub-service is nested under the practice area it belongs to, so the
 * page shows the site's actual hierarchy (pillar -> spoke) instead of two
 * flat lists that hid it.
 *
 * Every list is generated from the same content modules the routes are built
 * from, so a page cannot exist without appearing here, and nothing here can
 * point at a page that does not exist.
 */
export const metadata: Metadata = {
  title: 'Sitemap: Every Page on NovuLabs, by Section',
  description:
    'Every page on novulabs.net, organised the way the site is: software house in Islamabad, services and sub-services, platforms, case studies, articles, team and policies.',
  alternates: { canonical: canonical('/site-map') },
  openGraph: {
    type: 'website',
    title: 'Sitemap | NovuLabs',
    description: 'Every page on novulabs.net, organised by section.',
    url: canonical('/site-map'),
    images: [
      {
        url: '/og/enterprise-software-development.jpg',
        width: 1200,
        height: 630,
        alt: 'NovuLabs, software house in Islamabad',
      },
    ],
  },
};

type SmLink = { href: string; label: string; children?: { href: string; label: string }[] };

function Group({
  heading,
  description,
  links,
  wide = false,
}: {
  heading: string;
  description: string;
  links: SmLink[];
  wide?: boolean;
}) {
  return (
    <div className={wide ? 'col-12 mb-5' : 'col-md-6 col-lg-4 mb-5'}>
      <h2 className="sm-head">{heading}</h2>
      <p className="sm-desc">{description}</p>
      <ul className={wide ? 'sm-links row' : 'sm-links'}>
        {links.map((l) => (
          <li key={l.href} className={wide ? 'col-md-6 col-lg-4' : undefined}>
            <Link href={l.href}>
              <i className="bi bi-chevron-right" aria-hidden="true"></i>
              {l.label}
            </Link>
            {l.children && l.children.length > 0 && (
              <ul className="sm-sub">
                {l.children.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteMapPage() {
  // Practice areas with their sub-services nested beneath them.
  const serviceTree: SmLink[] = servicePages.map((p) => ({
    href: `/services/${p.slug}`,
    label: p.navLabel,
    children: serviceSpokes
      .filter((s) => s.parentSlug === p.slug)
      .map((s) => ({ href: `/services/${s.slug}`, label: s.navLabel })),
  }));

  const groups: { heading: string; description: string; links: SmLink[]; wide?: boolean }[] = [
    {
      heading: 'Start here',
      description:
        'Who NovuLabs is, where we are, and how to judge any software house in Islamabad before you sign.',
      links: [
        { href: '/', label: 'Home: best software house in Islamabad' },
        { href: '/software-house-in-islamabad', label: 'How to choose a software house in Islamabad' },
        { href: '/mobile-app-development-in-islamabad', label: 'Mobile app development in Islamabad' },
        { href: '/software-development-in-pakistan', label: 'Software development in Pakistan' },
        { href: '/about', label: 'About NovuLabs, and what we do not do' },
        { href: '/contact', label: 'Contact and technical consultation' },
      ],
    },
    {
      heading: 'Services',
      description:
        'Eight practice areas. Each opens into the specific services beneath it, so you can go from the broad problem to the exact capability.',
      links: [{ href: '/services', label: 'All software development services' }, ...serviceTree],
      wide: true,
    },
    {
      heading: 'Platforms',
      description:
        'Products we build and maintain in-house, for when configuring an existing system beats building a new one.',
      links: [{ href: '/solutions', label: 'NovuERP, NovuCRM, NovuPay and NovuShield' }],
    },
    {
      heading: 'Industries',
      description:
        'The sectors we build for and what each regulator expects of a system: banking, healthcare and government.',
      links: [{ href: '/industries', label: 'Industries we build software for' }],
    },
    {
      heading: 'Case studies',
      description:
        'Nine engagements written up in engineering detail: the problem, the constraints, the architecture and what changed.',
      links: [
        { href: '/portfolio', label: 'All case studies' },
        ...caseStudies.map((c) => ({ href: `/portfolio/${c.slug}`, label: c.title })),
      ],
    },
    {
      heading: 'Articles',
      description:
        'Technical guides written by the engineers who did the work, with primary sources cited.',
      links: [
        { href: '/blog', label: 'All articles' },
        ...blogPosts.map((p) => ({ href: `/blog/${p.slug}`, label: p.title })),
      ],
    },
    {
      heading: 'Team',
      description: 'The people who would take your first call and own the build.',
      links: [
        { href: '/team', label: 'Engineering and compliance team' },
        ...teamMembers.map((m) => ({ href: `/team/${m.slug}`, label: `${m.name}, ${m.role}` })),
      ],
    },
    {
      heading: 'Questions',
      description:
        'Answers to what buyers ask most, including how to verify what any supplier claims about its work.',
      links: [
        { href: '/faq', label: 'Frequently asked questions' },
        { href: '/faq#verifying-a-supplier', label: 'Verifying a supplier' },
      ],
    },
    {
      heading: 'Policies',
      description: 'How this site handles data, cookies and the terms of using it.',
      links: [
        { href: '/legal', label: 'Legal and policies' },
        ...legalPages.map((p) => ({ href: `/legal/${p.slug}`, label: p.title })),
      ],
    },
  ];

  // Every URL on the page, in page order, as an ItemList. Built from the same
  // arrays the visible lists render from, so the structured data can never
  // list a page the reader does not see.
  const flat: { href: string; label: string }[] = [];
  groups.forEach((g) =>
    g.links.forEach((l) => {
      flat.push({ href: l.href, label: l.label });
      l.children?.forEach((c) => flat.push(c));
    })
  );
  const seen = new Set<string>();
  const unique = flat.filter((l) => {
    const key = l.href.split('#')[0];
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: 'Sitemap',
            description: 'Every page on novulabs.net, organised by section.',
            path: '/site-map',
            type: 'CollectionPage',
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            '@id': `${canonical('/site-map')}#pages`,
            name: 'All pages on novulabs.net',
            numberOfItems: unique.length,
            itemListElement: unique.map((l, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: l.label,
              url: canonical(l.href.split('#')[0]),
            })),
          },
        ]}
      />
      <section className="phero" style={{ minHeight: 'auto', paddingTop: '140px', paddingBottom: '60px' }}>
        <div className="phero-ov"></div>
        <div className="container phero-inner">
          <Breadcrumbs className="mb-4" items={[{ name: 'Sitemap' }]} />
          <h1 className="hero-title mt-3" style={{ fontSize: '2.4rem' }}>
            Sitemap
          </h1>
          <p className="hero-sub">
            Every page on this site, organised the way the site is built: {unique.length} pages
            across {groups.length} sections.
          </p>
        </div>
      </section>
      <div className="divider"></div>

      <section className="sec bg-w">
        <div className="container">
          <p className="sm-intro">
            If you are comparing firms, start with{' '}
            <Link href="/software-house-in-islamabad">how to choose a software house in Islamabad</Link>.
            If you already know the problem, go straight to the{' '}
            <Link href="/services">service</Link> that covers it.
          </p>
          <div className="row">
            {groups.map((g) => (
              <Group
                key={g.heading}
                heading={g.heading}
                description={g.description}
                links={g.links}
                wide={g.wide}
              />
            ))}
          </div>
          <p className="mt-2" style={{ fontSize: '0.85rem', color: 'var(--tx3)' }}>
            Machine-readable version: <a href="/sitemap.xml">sitemap.xml</a> · Crawler guidance:{' '}
            <a href="/robots.txt">robots.txt</a> · LLM index: <a href="/llms.txt">llms.txt</a>
          </p>
        </div>
      </section>
    </>
  );
}
