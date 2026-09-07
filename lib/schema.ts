/**
 * Schema.org / JSON-LD builders.
 * ---------------------------------------------------------------------------
 * Everything is derived from lib/seo.ts so the entity NovuLabs presents to
 * Google and to AI assistants is defined exactly once.
 *
 * Design rules applied here:
 *  - Never emit a property whose value is a placeholder. A missing `telephone`
 *    is neutral; a fake one poisons the entity and every citation built on it.
 *  - Never emit Review/AggregateRating without real, verifiable reviews; that
 *    is a manual-action risk, not a shortcut.
 *  - @id everywhere, so the graph resolves to one organisation rather than a
 *    dozen unlinked copies of the same company.
 */

import { ORG, SITE_NAME, SITE_URL, canonical, absoluteUrl } from './seo';

/** Stable node identifiers, these make the JSON-LD a connected graph. */
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Strips null/undefined so placeholder fields never reach the output. */
function clean<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== null && v !== undefined && v !== '')
  ) as T;
}

function postalAddress() {
  return clean({
    '@type': 'PostalAddress',
    streetAddress: ORG.address.streetAddress,
    addressLocality: ORG.address.addressLocality,
    addressRegion: ORG.address.addressRegion,
    postalCode: ORG.address.postalCode,
    addressCountry: ORG.address.addressCountry,
  });
}

// ---------------------------------------------------------------------------
// Sitewide entity graph (rendered once, in the root layout)
// ---------------------------------------------------------------------------

export function organizationSchema() {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: ORG.name,
    alternateName: SITE_NAME,
    url: ORG.url,
    logo: { '@type': 'ImageObject', url: ORG.logo, caption: `${SITE_NAME} logo` },
    image: ORG.logo,
    description:
      'NovuLabs is an enterprise software house in Islamabad, Pakistan specialising in AML/CFT compliance systems for SBP-regulated financial institutions, HIPAA and HL7 FHIR healthcare platforms, PCI-DSS payment infrastructure, and government integrations.',
    slogan: 'Architect-led engineering for regulated industries.',
    foundingDate: ORG.foundingDate,
    email: ORG.email,
    telephone: ORG.telephone,
    address: postalAddress(),
    // Opening hours make the entity eligible for the "Hours" treatment in
    // local results and give an answer engine something concrete to state when
    // asked whether the business is open. Emitted from the same constant the
    // contact page renders, so the two cannot disagree.
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ORG.openingHours.days,
        opens: ORG.openingHours.opens,
        closes: ORG.openingHours.closes,
      },
    ],
    sameAs: [...ORG.sameAs],
    areaServed: ORG.areaServed.map((code) => ({ '@type': 'Country', identifier: code })),
    knowsAbout: [...ORG.knowsAbout],
    knowsLanguage: ['en', 'ur'],
    contactPoint: [
      clean({
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: ORG.email,
        telephone: ORG.telephone,
        areaServed: [...ORG.areaServed],
        availableLanguage: ['English', 'Urdu'],
      }),
    ],
  });
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

// ---------------------------------------------------------------------------
// Page-level builders
// ---------------------------------------------------------------------------

export interface FaqEntry {
  q: string;
  a: string;
}

/** FAQPage — only ever call this on a page where the same Q&A is visible to
 *  users. Marking up hidden content is a structured-data policy violation. */
export function faqSchema(entries: FaqEntry[], pagePath: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonical(pagePath)}#faq`,
    mainEntity: entries.map((e) => ({
      '@type': 'Question',
      name: e.q,
      acceptedAnswer: { '@type': 'Answer', text: e.a },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: string[];
  offers?: string[];
}) {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical(opts.path)}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: canonical(opts.path),
    provider: { '@id': ORG_ID },
    areaServed: (opts.areaServed ?? [...ORG.areaServed]).map((c) => ({
      '@type': 'Country',
      identifier: c,
    })),
    ...(opts.offers?.length
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${opts.name} — capabilities`,
            itemListElement: opts.offers.map((o) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: o },
            })),
          },
        }
      : {}),
  });
}

/**
 * Service node scoped to a city rather than a list of countries.
 *
 * `serviceSchema` above maps `areaServed` to Country nodes, which is right for
 * the practice-area pages: those describe work delivered to five markets. It is
 * wrong for a local landing page, where the whole point of the entity is that
 * it is bounded to one city inside one administrative region. A City node with
 * `containedInPlace` gives Google and answer engines the geographic hierarchy
 * explicitly instead of asking them to infer "Islamabad" from prose.
 *
 * Deliberately a Service and not a second LocalBusiness. There is exactly one
 * NovuLabs, already declared as a ProfessionalService in the root layout, and
 * emitting a second business entity for a marketing page is how sites end up
 * with a duplicate, competing entity in the knowledge graph. This node links
 * back to that one organisation by @id.
 */
export function localServiceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  city: string;
  region: string;
  country: string;
  offers?: string[];
}) {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical(opts.path)}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: canonical(opts.path),
    provider: { '@id': ORG_ID },
    areaServed: {
      '@type': 'City',
      name: opts.city,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: opts.region,
        containedInPlace: { '@type': 'Country', name: opts.country },
      },
    },
    ...(opts.offers?.length
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${opts.name} — capabilities`,
            itemListElement: opts.offers.map((o) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: o },
            })),
          },
        }
      : {}),
  });
}

export function softwareApplicationSchema(opts: {
  name: string;
  description: string;
  path: string;
  category: string;
  features: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${canonical(opts.path)}#software`,
    name: opts.name,
    description: opts.description,
    url: canonical(opts.path),
    applicationCategory: opts.category,
    operatingSystem: 'Web-based, cloud or on-premise deployment',
    featureList: opts.features,
    publisher: { '@id': ORG_ID },
    // No `offers` block: pricing is quote-based and not published. Emitting a
    // price of 0 to satisfy a validator would be a misrepresentation.
  };
}

export function personSchema(opts: {
  name: string;
  jobTitle: string;
  path: string;
  description: string;
  knowsAbout?: string[];
  image?: string;
  sameAs?: string[];
}) {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${canonical(opts.path)}`,
    name: opts.name,
    jobTitle: opts.jobTitle,
    description: opts.description,
    url: canonical(opts.path),
    worksFor: { '@id': ORG_ID },
    ...(opts.knowsAbout?.length ? { knowsAbout: opts.knowsAbout } : {}),
    ...(opts.image ? { image: absoluteUrl(opts.image) } : {}),
    ...(opts.sameAs?.length ? { sameAs: opts.sameAs } : {}),
  });
}

export function blogPostingSchema(opts: {
  title: string;
  description: string;
  slug: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorPath: string;
  section: string;
  keywords: string[];
  wordCount?: number;
}) {
  const url = canonical(`/blog/${opts.slug}`);
  return clean({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: opts.title.slice(0, 110),
    description: opts.description,
    url,
    image: [absoluteUrl(opts.image)],
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: {
      '@type': 'Person',
      name: opts.authorName,
      url: canonical(opts.authorPath),
    },
    publisher: { '@id': ORG_ID },
    articleSection: opts.section,
    keywords: opts.keywords.join(', '),
    inLanguage: 'en',
    isAccessibleForFree: true,
    ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
  });
}

/** Case study pages. Uses Article rather than Review/CaseStudy so nothing
 *  claims third-party verification that does not exist. */
export function caseStudySchema(opts: {
  title: string;
  description: string;
  slug: string;
  image: string;
  industry: string;
  keywords: string[];
}) {
  const url = canonical(`/portfolio/${opts.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#casestudy`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: opts.title.slice(0, 110),
    description: opts.description,
    url,
    image: [absoluteUrl(opts.image)],
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    articleSection: opts.industry,
    keywords: opts.keywords.join(', '),
    inLanguage: 'en',
  };
}

/** Generic WebPage node — gives every URL an entity Google and LLMs can anchor
 *  to, and links it back to the organisation graph. */
export function webPageSchema(opts: {
  name: string;
  description: string;
  path: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  /**
   * Named entities the page genuinely discusses, as schema.org Organization
   * nodes. This is a semantic-SEO signal rather than a decorative one: it tells
   * a retrieval system which real-world institutions the document is about,
   * which is what lets it be surfaced for a question about those bodies rather
   * than only for the words on the page.
   *
   * Only pass entities the page actually treats. Padding this with every
   * regulator we can name is the schema equivalent of keyword stuffing, and it
   * degrades the signal for the ones that are real.
   */
  mentions?: { name: string; url?: string }[];
  /** Set true to declare authorship and publication by the organisation.
   *  Honest for editorial pages the company wrote as a company; blog posts
   *  attribute to a named Person instead, via blogPostingSchema. */
  byOrganisation?: boolean;
}) {
  return clean({
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'WebPage',
    '@id': `${canonical(opts.path)}#webpage`,
    url: canonical(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en',
    ...(opts.byOrganisation
      ? {
          author: { '@id': ORG_ID },
          publisher: { '@id': ORG_ID },
        }
      : {}),
    ...(opts.mentions?.length
      ? {
          mentions: opts.mentions.map((m) =>
            clean({ '@type': 'Organization', name: m.name, url: m.url ?? null })
          ),
        }
      : {}),
  });
}

/**
 * SiteNavigationElement: the primary navigation, declared as structured data.
 *
 * This is one of the few remaining signals Google uses when deciding which
 * sitelinks to render under a brand-name result. It does not guarantee sitelinks
 * (nothing does), but it removes the ambiguity of Google having to infer the
 * site's primary sections from link position alone.
 *
 * Deliberately limited to the real top-level sections, in navigation order.
 * Padding this list with every URL on the site is counterproductive; it
 * flattens the hierarchy the markup is supposed to express.
 */
export function siteNavigationSchema() {
  const items: { name: string; path: string }[] = [
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Case Studies', path: '/portfolio' },
    { name: 'Team', path: '/team' },
    { name: 'Insights', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${canonical('/')}#site-navigation`,
    name: 'Primary navigation',
    itemListElement: items.map((item, i) => ({
      '@type': 'SiteNavigationElement',
      position: i + 1,
      name: item.name,
      url: canonical(item.path),
    })),
  };
}
