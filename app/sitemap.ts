import { MetadataRoute } from 'next';
import { SITE_URL, canonical } from '@/lib/seo';
import { servicePages } from '@/content/servicePages';
import { serviceSpokes } from '@/content/serviceSpokes';
import { caseStudies } from '@/content/caseStudies';
import { blogPosts } from '@/content/blogPosts';
import { legalPages } from '@/content/legalPages';
import { teamMembers } from '@/content/siteData';

/**
 * XML sitemap, served at /sitemap.xml.
 *
 * Two things were wrong with the previous version and are fixed here.
 *
 * 1. Blog slugs were hardcoded in a second list, so the sitemap and the content
 *    could silently drift apart. Everything is now derived from the content
 *    modules: a new post, service or case study appears automatically.
 *
 * 2. Every URL shared an identical `lastModified` of `new Date()`, i.e. build
 *    time. That tells Google the dates are build artefacts rather than content
 *    signals, and it correctly ignores them. Content with a real modification
 *    date now carries it.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    // Local landing page for the 'software house in Islamabad' cluster.
    // Priority matches /services, not the 0.7 the informational pages carry:
    // it is a commercial head-term page, and the only URL on the site that
    // targets the local query directly.
    { path: '/software-house-in-islamabad', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/software-development-in-pakistan', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/solutions', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/industries', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/team', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/testimonials', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/site-map', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/legal', priority: 0.3, changeFrequency: 'yearly' as const },
  ].map((r) => ({
    // canonical() rather than string concatenation: the homepage entry was
    // emitting `https://www.novulabs.net` while its own rel=canonical says
    // `https://www.novulabs.net/`. A sitemap URL that does not match the page's
    // declared canonical is a (mild) mixed signal, and it costs nothing to fix.
    // Root is emitted WITHOUT the trailing slash. canonical('/') returns
    // `.../` for the schema graph, but the homepage's own rel=canonical
    // renders as `https://www.novulabs.net` because Next.js normalises the
    // slash away and will not be overridden. A sitemap URL that disagrees with
    // the page's declared canonical is a mixed signal, so the sitemap follows
    // the page here rather than the other way round.
    url: r.path === '' ? SITE_URL : canonical(r.path),
    // No lastModified on the static routes, deliberately.
    //
    // Every one of them previously carried `buildDate`, which told Google that
    // all 13 pages changed the moment the site was deployed, including on a
    // deploy that touched none of them. Google's guidance is explicit that it
    // ignores lastmod when the value is not consistently accurate, and an
    // always-now timestamp is the textbook example. Omitting it is better than
    // publishing one that is wrong: the crawler falls back to its own
    // heuristics instead of learning to distrust the whole file.
    //
    // The routes that DO have a real modification date, the blog posts, still
    // carry theirs below, and those are now the only lastmod values in the
    // sitemap, which is what makes them worth reading.
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Dedicated service pages; the highest-value commercial URLs on the site.
  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // The 22 narrower spoke pages nested under the 7 services above. Priority
  // set below the pillars: each spoke targets a narrower search intent than
  // its parent, and priority is a relative hint to crawlers about where to
  // spend budget first, not a claim about the page's importance to the site.
  const serviceSpokeRoutes: MetadataRoute.Sitemap = serviceSpokes.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${SITE_URL}/portfolio/${c.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Real per-post modification dates, so lastmod carries actual signal.
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.modifiedISO),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Author profiles. Bylines used to point at /team#slug, a fragment Google
  // does not treat as a distinct entity, so no author had an indexable page on
  // which to build topical authority.
  const authorRoutes: MetadataRoute.Sitemap = teamMembers.map((m) => ({
    url: `${SITE_URL}/team/${m.slug}`,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  const legalRoutes: MetadataRoute.Sitemap = legalPages.map((p) => ({
    url: `${SITE_URL}/legal/${p.slug}`,
    changeFrequency: 'yearly',
    priority: 0.2,
  }));

  return [...staticRoutes, ...serviceRoutes, ...serviceSpokeRoutes, ...caseStudyRoutes, ...blogRoutes, ...authorRoutes, ...legalRoutes];
}
