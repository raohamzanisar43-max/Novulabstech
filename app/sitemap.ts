import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { servicePages } from '@/content/servicePages';
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
 *    modules — a new post, service or case study appears automatically.
 *
 * 2. Every URL shared an identical `lastModified` of `new Date()`, i.e. build
 *    time. That tells Google the dates are build artefacts rather than content
 *    signals, and it correctly ignores them. Content with a real modification
 *    date now carries it.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/solutions', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/industries', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/team', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/site-map', priority: 0.3, changeFrequency: 'monthly' as const },
    { path: '/legal', priority: 0.3, changeFrequency: 'yearly' as const },
  ].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: buildDate,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Dedicated service pages — the highest-value commercial URLs on the site.
  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: buildDate,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${SITE_URL}/portfolio/${c.slug}`,
    lastModified: buildDate,
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
    lastModified: buildDate,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  const legalRoutes: MetadataRoute.Sitemap = legalPages.map((p) => ({
    url: `${SITE_URL}/legal/${p.slug}`,
    lastModified: buildDate,
    changeFrequency: 'yearly',
    priority: 0.2,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes, ...blogRoutes, ...authorRoutes, ...legalRoutes];
}
