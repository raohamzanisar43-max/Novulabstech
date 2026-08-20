# SEO overhaul — `seo/technical-overhaul`

Branch cut from `main`. Everything below is implemented and the production build
passes (`npx next build`, 38 routes, no type errors).

Verification run against the prerendered HTML in `.next/server/app`, not against
source — every claim here was checked in the actual output.

---

## Verified results

| Check | Before | After |
|---|---|---|
| Indexable routes | 12 | 33 |
| Blog posts canonicalising to the homepage | 3 of 3 | 0 |
| Titles over the 60-char SERP budget | 7 | 0 |
| Duplicate `\| NovuLabs \| NovuLabs` suffixes | 7 pages | 0 |
| Duplicate titles across the site | — | 0 |
| Dead `href="#"` links | 4 × every page | 0 |
| Broken internal links | — | 0 |
| Heading-level skips (H2→H5 etc.) | 4 pages | 0 |
| Pages with more than one H1 | 0 | 0 |
| `<img>` without an `alt` attribute | unknown | 0 of 129 |
| Structured data types emitted | 0 detected | 11 types |
| Remote Unsplash images on hero critical path | 8 | 0 |
| Render-blocking third-party requests | 2 CSS + 2 JS | 0 |
| Sitemap URLs | 12 | 33 |
| Words rendered without JavaScript (AML service page) | n/a | 1,230 |

---

## 1. Indexing — the critical fix

**Root cause found.** `app/layout.tsx` declared `alternates: { canonical: '/' }`.
Next.js metadata is inherited, so every descendant route that did not set its own
canonical picked up the homepage's. `app/blog/[slug]/page.tsx` never set one —
so all three posts told Google to consolidate into the homepage while
`sitemap.xml` simultaneously asked for them to be indexed.

- Removed the layout-level canonical, with a comment explaining why it must not
  come back.
- Every route now sets a self-referencing canonical explicitly.
- `lib/seo.ts` `canonical()` is the single builder for every URL in the codebase,
  so a canonical, an OG `url`, a sitemap entry and a schema `@id` for the same
  page cannot disagree again.

Verified: 33 of 33 indexable routes emit a correct self-canonical. `/_not-found`
correctly emits none and carries `noindex, follow`.

## 2. Titles and meta descriptions

- Root template kept as `%s | NovuLabs`; the brand was stripped from every
  page-level title string. Longest rendered title is now 60 chars (was 101).
- Blog posts gained a length-budgeted `seoTitle` separate from the display `title`.
- Homepage uses `title.absolute` since the brand is already its first word.
- All nine top-level descriptions rewritten to 144–151 chars, unique, front-loaded.
- `assertTitleBudget()` in `lib/seo.ts` warns in development if a title will
  exceed the budget or already contains the brand.

## 3. Structured data — from zero to a connected graph

`components/seo/JsonLd.tsx` renders server-side (no client boundary), because
GPTBot, ClaudeBot, PerplexityBot and CCBot largely do not execute JavaScript.
Builders live in `lib/schema.ts`, all derived from one `ORG` constant.

Emitted: `ProfessionalService`, `WebSite`, `WebPage` / `AboutPage` /
`ContactPage` / `CollectionPage`, `Service`, `SoftwareApplication` (×4),
`FAQPage`, `BreadcrumbList`, `BlogPosting`, `Person` (×3), `Article`, `ItemList`.

Nodes are linked by `@id` so the graph resolves to one organisation. Three rules
enforced in code:

- **No placeholder values are ever emitted.** A missing `telephone` is neutral;
  a fake one poisons the entity and every citation built on it. `clean()` strips
  nulls before output.
- **No `Review` / `AggregateRating`.** There are no real reviews. Emitting them
  is a manual-action risk, not a shortcut.
- **`FAQPage` only where the same Q&A is visible.** Marking up hidden content is
  a structured-data policy violation.

## 4. Breadcrumbs

`components/ui/Breadcrumbs.tsx` emits the visible trail and the
`BreadcrumbList` JSON-LD from the same array, so they cannot disagree — a
mismatch is a common cause of Google silently dropping breadcrumb SERP display.
Wired into all eight hero components and every dynamic route. The duplicate
`BreadcrumbList` blocks previously hand-written into `/about`, `/services`,
`/industries` and `/portfolio` page schemas were removed.

## 5. Keyword cannibalisation — the largest structural change

`/services` carried 22 services on one URL with only `#` fragments. A fragment is
not a document: ~1,200 words had to represent 22 commercial intents, roughly 55
words each. That loses to any competitor with a dedicated page, mechanically,
regardless of authority.

Split into seven intent-matched pages (`content/servicePages.ts`,
`app/services/[slug]/page.tsx`), each 900–1,300 words with unique H1, title,
description, capability list, FAQ block and `Service` + `FAQPage` schema:

`/services/aml-cft-compliance-software` · `/fintech-software-development` ·
`/healthcare-software-development` · `/enterprise-software-development` ·
`/mobile-app-development` · `/cloud-ai-automation` · `/web-development`

`/services` survives as a hub linking to all seven. Navbar and footer fragment
links repointed. 301s added for the path forms of the old anchors.

## 6. Case study pages

`/portfolio` was ten ~30-word cards on one URL, every card linking only to
`/contact`. Nine detail pages built at `/portfolio/[slug]`, each with problem,
constraints, approach, outcome, metrics and `Article` schema.

**Attribution changed.** Precise metrics attached to invented product names
("TranzAxis Payment Gateway") made the anonymity look worse, not better — a
reader could not distinguish NDA-protected fact from invention. Now: client by
verifiable category ("a Tier-1 commercial bank in Pakistan, name withheld under
NDA"), product name labelled explicitly as an internal codename, and every
metric carries a provenance note until `metricsVerified` is flipped.

## 7. Blog

- **Headings fixed.** Article subheadings were `<h3>` while the only `<h2>` was
  the sales CTA — telling search engines and LLM chunkers that the pitch was the
  primary section. Subheadings are now `<h2>`; the CTA is no longer a heading
  anywhere on the site (7 CTA blocks demoted).
- **Depth.** Rewritten from 350–650 words to 1,400–1,900, in the practitioner
  voice the existing copy already had.
- **Citations.** The AML article named SBP, FMU, FATF, NACTA and OFAC and linked
  to none. All three posts now carry a Primary Sources section.
- **E-E-A-T.** Bylines link to `/team#slug`, which now carries `Person` schema.
  Author bio boxes added. `article:published_time` / `modified_time` / `author` /
  `section` emitted.
- **Dead ends removed.** Related posts and contextual service links added — the
  only outbound path from any post was previously the CTA to `/contact`.

## 8. Legal pages, sitemap, 404, llms.txt

- Privacy Policy, Terms of Service and Cookie Policy published at `/legal/*`,
  written to describe how the site actually behaves rather than from a template.
  This closes a compliance exposure, not just an SEO one: a firm claiming HIPAA
  and PCI-DSS work with no published privacy policy will not clear bank vendor
  due diligence, and missing legal pages are an explicit negative in Google's
  Search Quality Rater Guidelines for YMYL sites.
- Human sitemap at `/site-map` (the `/sitemap` segment is owned by
  `sitemap.xml`). Gives every page a second crawlable internal link.
- `app/not-found.tsx` with recovery links. The 404 already returned a correct
  status — it just gave a lost visitor and a crawler nowhere to go.
- `public/llms.txt` published.

## 9. Internal linking and orphans

- `/industries` added to the primary navigation. It has ~1,200 words targeting
  real commercial intents and was reachable only from one footer column.
- Seven `/services#anchor` footer links and six navbar dropdown links repointed
  at real URLs — the footer looked like it linked to seven places and linked to one.
- Four dead `href="#"` footer links replaced. Zero remain sitewide.
- Homepage de-cannibalised: `"22 Enterprise-Grade Services"` and `"Built for
  Critical Industries"` were byte-identical to `/services`' and `/industries`'
  H1s, so Google would rank the homepage instead of the purpose-built page and
  both would underperform. Both rewritten; `"Selected Projects"` reframed.
- LinkedIn URL cleaned of its `?viewAsMember=true` admin-preview parameter.
- `Info@novulabs.net` → `info@novulabs.net` in 8 places.

## 10. Core Web Vitals, images, mobile

- Eight hero backgrounds were remote Unsplash `<img>` tags — a third-party DNS
  lookup and TLS handshake on the LCP critical path with no dimension control.
  Replaced with self-hosted, generated backgrounds (~19KB each) via `next/image`
  with `fill`, `priority` and `sizes`.
- Per-page OG images generated for all 7 service pages, 9 case studies and 3
  posts, replacing the single shared `og-image.png`.
- All grid images moved to `next/image` with explicit intrinsic dimensions,
  removing them as a layout-shift source. Descriptive alt text throughout —
  0 of 129 `<img>` tags lack an alt attribute.
- FAQ accordions converted from JS state to native `<details>`/`<summary>`:
  answer text is now in the raw HTML on first byte (required for FAQ rich
  results and non-JS AI crawlers), the fixed 200px max-height that clipped long
  answers is gone, and keyboard/screen-reader behaviour is native.
- **Bootstrap and Bootstrap Icons CSS moved from `cdn.jsdelivr.net` into the
  bundle; Bootstrap JS and AOS self-hosted from `/vendor`.** Two render-blocking
  third-party stylesheets sat on the critical path of every page, each costing a
  DNS lookup and TLS handshake before first paint and disclosing every visitor's
  IP and user agent to that CDN. Everything is now same-origin, hashed and
  long-cached. Zero references to jsdelivr remain in any rendered page.
- Long-form article typography added. Bootstrap's reboot was stripping list
  markers inside article bodies, so semantic `<ul>`/`<ol>` content rendered as
  unmarked prose — the visual structure no longer contradicts the markup.
- Viewport meta confirmed present and correct (`width=device-width,
  initial-scale=1`). No stray `noindex`. `max-image-preview:large` and
  `max-snippet:-1` already set and retained.

## 11. Redirects and headers (`next.config.ts`)

- Apex → www 301. The canonical already pointed at www, but a canonical is a
  hint and a 301 is an instruction. **Verify with `curl -I https://novulabs.net/`
  after deploy** — a `200` there means a full duplicate site on the apex domain.
- `/case-studies` → `/portfolio` (previously 404, and `/portfolio`'s own title
  says "Case Studies", so it gets probed).
- `/privacy`, `/privacy-policy`, `/terms`, `/cookies` → the new `/legal/*` pages.
- HSTS added (`max-age=63072000; includeSubDomains; preload`).
- Immutable cache headers for generated image directories.

## 12. Claim accuracy (E-E-A-T)

Corrected, because unverifiable claims in a YMYL vertical cost more than they
earn and an experienced buyer spots them:

- **"HIPAA certified"** → removed. HIPAA has no certification regime; HHS
  accredits no one. A hospital CIO reads that claim as inexperience.
- **"PCI-DSS certified"** → "engineered to PCI-DSS requirements". The certificate
  is issued to the entity operating the cardholder data environment after QSA
  assessment, not to its development vendor. Stated explicitly on the fintech
  service page and in the contact FAQ.
- **"HL7 FHIR-certified"** → "HL7 FHIR-conformant". Also not a certification.
- **"the deepest AML/CFT compliance expertise in the region"** → replaced with
  the specific capability list. Specificity is more persuasive than an
  unfalsifiable superlative, and it is defensible.
- **"Trusted by 200+ enterprise clients"**, **"200+ organizations"** → removed.
  Nothing on the site evidences either.
- **"Since 2015"** → removed from the `/about` title and Twitter description.
  See the founding-year item in `CLIENT-ACTIONS.md`.
- **Stock photography of strangers under the real names of the CEO, CTO and
  COO** → replaced with neutral branded monograms. See `CLIENT-ACTIONS.md` —
  this is the highest-ROI remaining item on the site.

---

## Not done, and why

- **Keyword volume and difficulty data.** The Ahrefs, Semrush and DataForSEO
  integrations available to this session all returned plan or quota errors. No
  volume, KD or traffic numbers appear anywhere in this branch — inventing them
  would have been worse than omitting them. The target-URL mapping in
  `KEYWORD-PLAN.md` is strategic-priority-ranked and explicitly labelled as
  unmeasured.
- **Backlinks.** Not a code change. `BACKLINK-PLAN.md` covers it.
- **Decorative Unsplash backgrounds in `globals.css`.** ~30 CSS background URLs
  remain. They are below the fold and not on the LCP path, so they were left
  rather than risk visual regressions across the whole site in one branch.
  Worth a follow-up.
- **Real photographs, phone number, street address, ISO 27001 certificate
  number, testimonials, Google Business Profile, Clutch profile.** All require
  facts only the client has. Every one is listed in `CLIENT-ACTIONS.md` with the
  exact file and line to change.
