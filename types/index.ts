export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
  color: string;
  /** Slug of the dedicated page in content/serviceSpokes.ts this card links to.
   *  Every card here is one of the 22 services NovuLabs lists on the homepage,
   *  and each now has its own indexable page rather than linking straight to
   *  /contact with no detail in between. */
  slug: string;
  /**
   * Optional absolute path that overrides the default `/services/{slug}` link.
   *
   * Almost every card links to its spoke under /services. The exception is a
   * card whose best destination is a root-level landing page — geo pages like
   * /mobile-app-development-in-islamabad live outside the services tree on
   * purpose, so that a city page does not compete with the pillar it belongs
   * to. `slug` stays required and must still name a real page, because other
   * code reads it; this only changes where the card points.
   */
  href?: string;
  /** Category heading this card sits under in the homepage services grid.
   *  The 22 services are grouped rather than listed flat, so a visitor scanning
   *  for "mobile app development" finds three related cards together instead of
   *  three cards scattered through a grid of twenty-two. */
  group: string;
}

export interface WhyUsItem {
  num: string;
  icon: string;
  title: string;
  desc: string;
  color: string;
}

export interface IndustryItem {
  icon: string;
  title: string;
  desc: string;
  color: string;
  /** Slug of this sector's own page under /industries. Every industry card
   *  links to its own page rather than all ten pointing at the /industries
   *  hub, which told a crawler nothing about any individual sector. */
  slug: string;
  /** Anchor text for the card's link, naming the destination. "Explore
   *  Healthcare" is a usable anchor; ten identical "Explore this" links are
   *  not, and an on-page audit flags them first. */
  cta: string;
}

export interface TestimonialCard {
  service: string;
  quote: string;
  /** Real name and company, or role and sector under NDA. Optional because
   *  these are published unattributed; never fill it with an invented person. */
  role?: string;
  stars: number;
  /** True until a real, attributable client has said these words. Drives the
   *  visible sample notice on the section, exactly as content/testimonials.ts
   *  does for /testimonials. Never set false without a real quote behind it. */
  placeholder: boolean;
}

export interface TechStackItem {
  icon: string;
  name: string;
}

export interface PortfolioItem {
  img: string;
  tags: string;
  title: string;
  desc: string;
  tech: string[];
}

export interface FaqItem {
  q: string;
  a: string;
  /**
   * Optional "read more" target rendered under the answer.
   *
   * Presentational only. faqSchema() builds Question/acceptedAnswer from `q`
   * and `a` alone, so the structured-data answer stays clean prose rather than
   * carrying markup, which is what answer engines quote verbatim. The link
   * gives each Q&A a route onward to the page that treats the subject in full.
   */
  link?: { href: string; label: string };
}

export interface TeamMember {
  name: string;
  role: string;
  img: string;
  bio: string;
}

export interface BlogPost {
  slug: string;
  /** Full H1 / display title. May exceed the SERP budget. */
  title: string;
  /**
   * Title used in <title>, kept under 49 chars so that with the " | NovuLabs"
   * suffix the rendered title stays inside Google's ~60-char budget. Falls back
   * to `title` when omitted.
   */
  seoTitle?: string;
  description: string;
  content: string;
  coverImage: string;
  /** Descriptive alt text for the cover image (accessibility + image search). */
  coverAlt: string;
  category: string;
  /** Human-readable display date. */
  date: string;
  /** ISO 8601 — required by BlogPosting schema and article:published_time. */
  publishedISO: string;
  /** ISO 8601 — drives sitemap lastmod and article:modified_time. */
  modifiedISO: string;
  author: string;
  /** Team-page anchor slug so bylines resolve to a real Person entity. */
  authorSlug: string;
  readTime: string;
  tags: string[];
  /** Slugs of related posts, rendered as in-content links so posts are not
   *  crawl dead-ends. */
  related?: string[];
  /** Service pages this article should pass internal link equity to. */
  relatedServices?: { label: string; href: string }[];
  /** Primary-source citations. Regulatory content without them reads as
   *  unverified to quality raters and to LLM retrieval pipelines. */
  sources?: { label: string; href: string }[];
  /** Optional per-post Q&A, rendered visibly and as FAQPage schema. Posts
   *  without it render nothing, so this is additive per article. */
  faqs?: FaqItem[];
}

export interface TeamMemberProfile {
  slug: string;
  name: string;
  role: string;
  img: string;
  /** Descriptive alt text — never the filename. */
  imgAlt: string;
  /** Short card bio. */
  bio: string;
  /** Longer bio used for author boxes and Person schema. */
  longBio: string;
  skills: string[];
  /** Verifiable credentials. Leave empty rather than inventing any. */
  credentials: string[];
  knowsAbout: string[];
  linkedin?: string;
}

export interface InquiryFormData {
  full_name: string;
  work_email: string;
  service_needed: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface IndustryPage {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  /** What we build for this sector. Four entries, each a real capability with
   *  its own page or portfolio work behind it. */
  builds: { title: string; desc: string }[];
  /** What makes the sector hard. This is the section a buyer reads to decide
   *  whether the supplier has done their kind of work before, so it names
   *  obligations and failure modes rather than benefits. */
  constraints: string[];
  /** Services from content/siteData.ts most relevant to this sector; each
   *  links to that service's own page. */
  services: { slug: string; label: string }[];
}
