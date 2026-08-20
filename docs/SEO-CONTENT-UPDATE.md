# SEO content update — three new technical articles

**Branch:** `seo/technical-overhaul`
**Date:** 19 August 2026
**Scope:** content only. No layout, component, styling or configuration changes.

---

## Why this change

The technical SEO work already deployed to novulabs.net closed the indexing,
canonical, schema and information-architecture problems. Verified live on
19 August 2026:

| Check | Live status |
|---|---|
| Blog canonicals | Self-referential (previously all pointed at the homepage) |
| Apex domain | `308` redirect to `www` |
| Structured data | 15+ types on service pages |
| Sitemap URLs | 33 |
| Dead `href="#"` links | 0 |

With the technical foundation fixed, the binding constraint on organic growth
is **content coverage**. The site had three articles serving a keyword space
that spans AML/CFT, payments, identity, healthcare interoperability and
enterprise platforms. Three articles cannot rank across that surface, and they
give the service pages very little internal link support.

This change adds three articles targeting the highest-intent gaps — topics
where NovuLabs has genuine delivery experience, where search competition is
low, and where the query is commercial rather than casual.

## What was added

| Slug | Target topic | Words | Author |
|---|---|---|---|
| `goaml-xml-integration-str-ctr-reporting-pakistan` | goAML integration, STR/CTR reporting | ~1,450 | Ali Zaidi |
| `raast-integration-guide-instant-payments-pakistan` | RAAST integration, ISO 20022, instant payments | ~1,415 | Muneeb Ali Jaffari |
| `nadra-ekyc-cnic-verification-integration-guide` | Digital KYC, CNIC and biometric verification | ~1,500 | Shamroz Ali Zaidi |

Each article follows the conventions already established in
`content/blogPosts.ts`:

- `<h2>` for sections, `<h3>` for sub-points — no heading-level skips
- A `seoTitle` under 49 characters so the rendered `<title>` stays inside
  Google's ~60-character budget after the ` | NovuLabs` suffix
- Descriptive `coverAlt` text for accessibility and image search
- `authorSlug` resolving to a real team member, so the `Person` entity in
  `BlogPosting` schema points at an actual page
- `sources[]` linking to primary sources only (SBP, FMU, NADRA, FATF, UNODC,
  ISO) — regulatory content without primary-source citations reads as
  unverified to quality raters and is rarely cited by AI search
- `relatedServices[]` passing internal link equity to the commercial pages

## Internal linking

The three existing articles were updated to link to the new ones, so the blog
is a connected cluster rather than six isolated pages. Every new article links
to at least two others and to two service pages.

New internal links into commercial pages:

- `/services/aml-cft-compliance-software` — 2 additional inbound links
- `/services/fintech-software-development` — 3 additional inbound links
- `/services/enterprise-software-development` — 1 additional inbound link

## Editorial position taken

The articles are written to be useful to an engineer scoping the work, not to
be keyword vehicles. Specifically, they avoid claiming regulatory specifics
that were not verifiable at the time of writing — no circular numbers, no
dated thresholds, no invented figures. Where a fact depends on the reader's
participation model or on documentation only available to registered
entities, the article says so and points at the primary source instead of
guessing.

**This is deliberate and should be preserved on edit.** Regulatory content
that states specifics confidently and gets them wrong is worse than content
that scopes the problem honestly — for credibility with the buyer, and for
Google's treatment of YMYL-adjacent material.

## Verification

```
npx tsc --noEmit     # clean
npx next build       # 41 routes, no type errors
```

Confirmed on the built output, not the source:

- All 3 new routes return `200`
- Canonicals are self-referential
- `BlogPosting`, `Person`, `BreadcrumbList` schema present on each
- Titles render at 49–56 characters
- Sitemap grew from 33 to 36 URLs
- All 6 posts listed on `/blog`

## Still outstanding — needs owner input

Unchanged from `docs/CLIENT-ACTIONS.md`. These are the items no amount of
content work can substitute for:

1. Real photographs of the CEO, CTO and COO
2. Confirm the founding year (`lib/seo.ts` → `ORG.foundingDate`)
3. Publish a phone number (`ORG.telephone`, currently `null`)
4. Street address and postal code — `LocalBusiness` schema will not validate
   without them
5. Verify the case study metrics (`content/caseStudies.ts` — every entry is
   currently `metricsVerified: false`)
