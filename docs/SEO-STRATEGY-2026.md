# SEO strategy 2026 — router structure and page jobs

Companion to `SEO-PAGE-MAP.md` (what exists today), `KEYWORD-PLAN.md` (target
terms) and `BACKLINK-PLAN.md`. This document answers a different question:
**what search journey are we trying to own, and does every route have a job?**

## Data disclosure

Same as `KEYWORD-PLAN.md`: no volume, difficulty or traffic figures appear here,
because the Ahrefs / Semrush / DataForSEO integrations return plan and quota
errors. Every ordering below is strategic priority, not measured volume. Pull
Search Console data before committing budget to any phase past Phase 1.

---

## 1. The audit: where the current structure leaks

The site is technically clean. The leaks are structural — intent collapsed onto
too few URLs, and revenue-adjacent intents with no URL at all.

| # | Finding | Evidence | Cost |
|---|---|---|---|
| L1 | Four products share one URL | `/solutions` renders `ErpSection`, `CrmSection`, `PaySection`, `AmlSection` in sequence | Four product-level commercial intents compete for one canonical, one title, one H1. Nothing ranks for "NovuShield" or "AML screening platform" specifically. |
| L2 | Three verticals share one URL | `/industries` renders `FintechDeepDive`, `HealthcareDeepDive`, `GovernmentDeepDive` | "government software development Pakistan" and "healthcare IT company Pakistan" are different buyers with different budgets pointed at the same page. `KEYWORD-PLAN.md` already flags `/industries/government` as "to split out". |
| L3 | No pricing-shaped page | No `/pricing`, no engagement-model page | The framework's step ① names pricing pages as money pages. Buyers searching "software development cost Pakistan" or "AML system implementation cost" land nowhere, and the question gets asked on a sales call instead of being pre-qualified. |
| L4 | No comparison surface | Comparison intent lives only inside `/blog/why-custom-saas-outperforms-off-the-shelf-erp` | When a SERP shows comparisons, we have one blog post and no page built as a comparison. |
| L5 | No tools | Nothing under `/tools`; `public/` has no interactive asset | Step ④ — the single highest-leverage thing this site is missing. See §4. |
| L6 | Supporting content thin against money pages | 6 articles live; `KEYWORD-PLAN.md` lists 10 more as "to write", each with an internal link already waiting | Pillars have depth; the clusters around them do not. |
| L7 | `/testimonials` carries no schema and placeholder content | Documented in `app/testimonials/page.tsx` | Correct decision today, blocked on real reviews. Client action, not an engineering one. |

### What is deliberately NOT changing

`/services/[slug]` serves both the 8 pillars and the 21 spokes from one flat
segment. That looks wrong on a whiteboard and is right in practice: the
hierarchy is already expressed in breadcrumbs and internal links, and nesting
spokes under `/services/<pillar>/<spoke>` would rewrite 21 URLs to buy nothing a
crawler cannot already infer. **Do not restructure these.** Equity churn with no
ranking upside is the most common self-inflicted SEO wound.

---

## 2. Every page has a job

Before any new route is built, it gets a row in this table. A route that cannot
fill every column does not get built.

| Column | Meaning |
|---|---|
| **Job** | The one thing this page exists to do |
| **Intent** | Commercial / investigational / comparative / evidential / navigational |
| **Primary term** | Exactly one. No two routes may share it |
| **Money page** | Which revenue page this route feeds (money pages point at themselves) |
| **Primary CTA** | One. Book a call, download, or use the tool — not all three |
| **Conversion event** | What we count when it works |

Applied to the page types the site already has:

| Page type | Job | Intent | Primary CTA | Conversion event |
|---|---|---|---|---|
| Product page (`/solutions/*`) | Convert a buyer who knows what they need | Commercial | Book a call | Consultation booked |
| Industry page (`/industries/*`) | Convert a buyer who identifies by sector | Commercial | Book a call | Consultation booked |
| Service pillar (`/services/*`) | Own the category term, route to spokes | Commercial | Book a call | Consultation booked |
| Service spoke | Own a narrow capability term, pass equity up | Commercial | Book a call | Consultation booked |
| Pricing / engagement | Pre-qualify and remove the cost objection | Commercial | Book a call | Qualified enquiry |
| Case study | Prove the claim the money page makes | Evidential | Read the matching service page | Money-page visit |
| Article | Answer the question, hand off to one money page | Investigational | One contextual money-page link | Money-page visit |
| Comparison | Argue both sides honestly, be the trusted source | Comparative | Book a call | Consultation booked |
| Tool | Earn the link and the return visit | Investigational | Use it, then book a call | Tool completion + link acquired |

---

## 3. Target router structure

Next.js App Router. `+` marks new routes; everything unmarked exists today.

```
app/
├── page.tsx                                  /                    brand + routing
├── solutions/
│   ├── page.tsx                              /solutions           hub (rewritten as index)
│   └── [slug]/page.tsx                    +  /solutions/*         4 PRODUCT MONEY PAGES
│         novushield-aml-screening
│         novupay-payment-switch
│         novuerp-operations
│         novucrm-intelligence
├── industries/
│   ├── page.tsx                              /industries          hub (rewritten as index)
│   └── [slug]/page.tsx                    +  /industries/*        3 VERTICAL MONEY PAGES
│         banking-financial-services
│         healthcare
│         government-public-sector
├── services/
│   ├── page.tsx                              /services            hub
│   └── [slug]/page.tsx                       /services/*          8 pillars + 21 spokes — UNCHANGED
├── pricing/page.tsx                       +  /pricing             engagement models — see §5 constraint
├── compare/
│   ├── page.tsx                           +  /compare             index
│   └── [slug]/page.tsx                    +  /compare/*           comparison money pages
├── tools/
│   ├── page.tsx                           +  /tools               index
│   └── [slug]/page.tsx                    +  /tools/*             link magnets — see §4
├── portfolio/[slug]/page.tsx                 /portfolio/*         9 case studies
├── blog/[slug]/page.tsx                      /blog/*              6 live, 10 planned
├── software-house-in-islamabad/page.tsx      /...                 local head term
├── about | team | testimonials | faq | contact | legal | site-map
└── sitemap.ts · robots.ts
```

New content files, matching the existing `content/*.ts` convention:

```
content/
├── solutionPages.ts     +   4 product entries (name, h1, problem, capabilities,
│                            proofCaseStudies, faqs, relatedServices)
├── industryPages.ts     +   3 vertical entries (regulators, systems, buyers,
│                            proofCaseStudies, faqs, relatedServices)
├── comparisonPages.ts   +   comparison entries (sideA, sideB, decisionCriteria)
└── engagementModels.ts  +   pricing-page content — no invented numbers
```

Route count moves from 63 to roughly 78 — **and every one of the additions is
either a money page or a link magnet.** No route is added because a keyword
existed.

### Why these splits, specifically

**`/solutions/[slug]`** — `AmlSection` and `PaySection` describe two different
products bought by two different departments under two different regulators.
Split, `novushield-aml-screening` can own "AML screening platform" while
`/services/aml-cft-compliance-software` owns "AML compliance software
development". The product and the build service are different purchases, and
today they share a body of text. Keep `/solutions` as a genuine index with a
paragraph and a link per product; move the four `*Section` components into their
children so the hub stops competing with them.

**`/industries/[slug]`** — vertical pages are where a regulated buyer
self-identifies. `/industries/banking-financial-services` can carry SBP, FMU,
RAAST, 1LINK and PCI-DSS vocabulary at a density the generalist `/industries`
page cannot without reading like keyword soup. Each vertical page links down to
its services, sideways to its case studies, and out to its cluster articles.

**`/compare/[slug]`** — build only where the SERP actually shows comparisons.
Check first, then build. Candidates in priority order:
`custom-aml-platform-vs-vendor-software`, `in-house-team-vs-software-house`,
`build-vs-buy-core-banking`. The existing build-vs-buy article stays where it is
and links across; do not duplicate it.

---

## 4. The tools layer — the biggest single gap

Step ④ of the framework: AI made average content cheap, so original value is the
differentiator. This site's original value is domain access almost nobody else in
the market has. Three tools follow directly from content already written:

| Tool | Route | Built from | Feeds |
|---|---|---|---|
| **goAML XML pre-submission validator** | `/tools/goaml-xml-validator` | The rejection causes already documented in `/blog/goaml-xml-integration-str-ctr-reporting-pakistan` | `/services/goaml-fmu-reporting-integration` |
| **AML/CFT readiness self-assessment** | `/tools/aml-cft-readiness-assessment` | SBP/FMU requirements in the AML pillar | `/solutions/novushield-aml-screening` |
| **HIPAA Security Rule gap checklist** | `/tools/hipaa-security-rule-checklist` | `/blog/scaling-healthcare-software-hipaa-hl7-fhir` | `/services/healthcare-software-development` |

The validator is the flagship. A compliance officer whose STR filing was rejected
at 11pm has an acute, recurring, unsolved problem, and there is no free tool for
it. That is the asset `BACKLINK-PLAN.md` is looking for — it earns links from
compliance communities without an outreach campaign, and it puts the buyer inside
our funnel at the exact moment of pain.

**Engineering constraint:** run validation client-side, and say so on the page.
Nobody uploads a suspicious-transaction report to an agency's server. This is a
trust requirement, not a preference.

---

## 5. Constraints to respect

Non-negotiable in this codebase, and each one is also correct SEO:

1. **No invented numbers.** `/pricing` must not carry fabricated ranges. Build it
   as *what determines cost* — scope, regulator, integration count, data
   migration, support model — with a worked structure and no figures until the
   client supplies real ones. This is also the honest answer, and it matches the
   voice the rest of the site already uses.
2. **No new expertise claims.** New pages may only name technologies already in
   `content/servicePages.ts` `stack` or `lib/seo.ts` `knowsAbout`.
3. **No new local pages without real presence.** Lahore and Karachi pages are
   only worth building if there is an address or a genuine service-area claim to
   make. `/software-house-in-islamabad` works because it is true.
4. **Reviews stay unschema'd** until they are real and third-party. Already
   documented in `app/testimonials/page.tsx`.

---

## 6. Internal linking rules (step ⑤)

Make this mechanical so it survives new contributors.

| From | Must link to | Count |
|---|---|---|
| Article | One money page, in the first screen, in body prose | exactly 1 |
| Article | Its cluster pillar and 1–2 sibling articles | 2–3 |
| Case study | Its service page, its industry page, its product page | 3 |
| Service spoke | Its pillar (up), 2 sibling spokes (across) | 3 |
| Service pillar | 3 spokes, 2 case studies, 2 articles | 7 |
| Industry page | Its services, its case studies, its cluster articles | 5–8 |
| Product page | Its service page, 2 case studies, `/pricing`, `/contact` | 5 |
| Tool | Its money page, in the result state | 1 |
| Money page | Never links out to an article above the fold | 0 |

That last row is the one people break. Money pages receive equity; they do not
spend it above the fold sending a ready buyer off to read.

Enforce it: extend `scripts/verify-seo-claims.py` with a link-rule assertion so
the check fails when an article ships with zero money-page links. A rule nothing
checks is a rule that decays.

---

## 7. Cluster map — one money page, one body of support

Each cluster is one money page plus the content that feeds it. Articles marked
"to write" are already in `KEYWORD-PLAN.md` with internal links waiting.

### Cluster A — AML/CFT (the moat; everything else is secondary)

```
MONEY:      /solutions/novushield-aml-screening            + new
            /services/aml-cft-compliance-software            live
            /industries/banking-financial-services         + new
SPOKES:     sanctions-pep-screening-software                 live
            transaction-monitoring-software-development      live
            goaml-fmu-reporting-integration                  live
            aml-case-management-risk-scoring                 live
PROOF:      /portfolio/corebanking-aml-suite                 live
TOOLS:      /tools/goaml-xml-validator                     + new
            /tools/aml-cft-readiness-assessment            + new
SUPPORT:    goaml-xml-integration-str-ctr-reporting          live
            navigating-aml-cft-regulations-pakistan-2026     live
            str-ctr-reporting-automation-pakistan            to write
            pep-sanctions-screening-implementation           to write
            fmu-pakistan-reporting-requirements              to write
```

This cluster is closest to complete. Finish it before starting any other.

### Cluster B — Fintech and payments

```
MONEY:      /solutions/novupay-payment-switch              + new
            /services/fintech-software-development           live
SPOKES:     core-banking-software-development · payment-gateway-development
            mastercard-visa-integration · financial-messaging-schema-integration
PROOF:      /portfolio/tranzaxis-payment-gateway · /portfolio/finsync-digital-wallet
SUPPORT:    raast-integration-guide-instant-payments         live
            core-banking-modernization-guide                 to write
COMPARE:    /compare/build-vs-buy-core-banking             + new
```

### Cluster C — Healthcare IT

```
MONEY:      /industries/healthcare                        + new
            /services/healthcare-software-development        live
SPOKES:     ehr-clinical-software-development · medical-billing-software-development
PROOF:      /portfolio/medicore-ehr-platform · /portfolio/carepulse-telemedicine-app
TOOL:       /tools/hipaa-security-rule-checklist           + new
SUPPORT:    scaling-healthcare-software-hipaa-hl7-fhir       live
            hospital-management-system-architecture          to write
```

### Cluster D — Government and public sector

```
MONEY:      /industries/government-public-sector           + new
SPOKES:     government-portal-development · api-development-integration
PROOF:      /portfolio/natid-verification-portal · /portfolio/taxlink-revenue-portal
SUPPORT:    nadra-ekyc-cnic-verification-integration-guide   live
```

### Cluster E — Enterprise platforms

```
MONEY:      /solutions/novuerp-operations                  + new
            /solutions/novucrm-intelligence                + new
            /services/enterprise-software-development        live
            /services/custom-saas-development                live
SPOKES:     erp-software-development · crm-software-development
            legacy-system-modernization
PROOF:      /portfolio/omnierp-manufacturing-suite
            /portfolio/novucrm-intelligence-suite
SUPPORT:    why-custom-saas-outperforms-off-the-shelf-erp    live
            multi-tenant-saas-architecture-guide             to write
            legacy-modernization-playbook                    to write
COMPARE:    /compare/in-house-team-vs-software-house       + new
```

---

## 8. Sequencing

Ordered by distance to revenue, not by ease.

**Phase 1 — split the collapsed money pages.**
`content/solutionPages.ts` + `app/solutions/[slug]`, `content/industryPages.ts` +
`app/industries/[slug]`. Rewrite the two hubs as indexes. Update `sitemap.ts`,
`app/site-map/page.tsx`, the nav, and every `relatedCaseStudies` link pointing at
`/solutions` or `/industries` so it points at the specific child. Regenerate
`SEO-PAGE-MAP.md`. **7 new money pages, and almost no prose invented from
nothing — the copy already exists inside the section components.** Highest ratio
of revenue surface to effort on this list.

**Phase 2 — finish Cluster A.**
The three unwritten AML articles, then `/tools/goaml-xml-validator`. This is the
only cluster where we can plausibly be the best result on the internet.

**Phase 3 — pricing and comparison.**
`/pricing` once the client answers the engagement-model questions in
`CLIENT-ACTIONS.md`. `/compare/*` only after checking each SERP for actual
comparison intent.

**Phase 4 — remaining clusters and the other two tools.**

Do not start Phase 2 before Phase 1 lands. Articles written before their money
page exists have nowhere to send a reader.

---

## 9. Measurement

Track clusters, not keywords. Per cluster, monthly:

1. Money-page impressions and clicks (Search Console, page-filtered).
2. Article → money-page click-through, via the internal-link rule in §6. If this
   is near zero, the article ranks and does nothing — the exact failure this
   strategy exists to prevent.
3. Consultation bookings attributed to the cluster's entry page.
4. **AI visibility.** Query ChatGPT, Perplexity, Gemini and Claude with
   "AML compliance software vendors Pakistan", "goAML integration partner" and
   "HIPAA software development Pakistan", and log whether NovuLabs is named.
   Given the entity work already done and how narrow the niche is, movement
   should show here first — well before competitive organic rankings shift.
5. Links earned by each tool. If the validator earns none in 90 days, the problem
   is distribution, not the tool.

The question to bring to a review is not "how many articles did we publish."
It is "which search journey do we own more of than we did last quarter."
