# Backlink acquisition plan

Not a code change, so nothing here is implemented in this branch. It is the
honest version: what will actually earn links for a firm in this position, and
what to refuse.

## Starting position

No backlink data was available when this was written — the Ahrefs, Semrush and
DataForSEO integrations all returned plan or quota errors, so there is no Domain
Rating, referring-domain count or traffic figure anywhere in this document.

What can be observed on-page: no client logos, no press mentions, no partner
badges, no GitHub presence, no third-party review profiles, no downloadable
assets, three blog posts. That is consistent with a young or recently relaunched
site with minimal earned authority. **Confirm with a real backlink tool before
committing budget** — this is inference, not measurement.

Low authority is exactly why the on-page work in this branch matters so much:
when you cannot win on authority you must win on relevance precision, and the
old architecture forfeited relevance precision.

## What to refuse

Stated first, because in this market it will be offered constantly.

Do not buy links, do not use guest-post networks, do not pay for directory
bundles, do not exchange links reciprocally at scale, and do not commission
"1,000 backlinks" packages. For a vendor selling compliance software to
regulated financial institutions, the downside is not only a Google penalty —
it is a due-diligence finding. A bank's procurement team that discovers its AML
vendor buys links has learned something about how that vendor treats rules.

---

## Tier 1 — verifiable credentials (start here)

These are the cheapest wins and they double as `sameAs` entity anchors for the
schema now shipping on every page. Each one is independently verifiable, which
is the property that makes it worth having.

| Asset | Why it matters |
|---|---|
| **Google Business Profile** | Strongest single `sameAs` corroborator. Needs the address and phone from `CLIENT-ACTIONS.md`. |
| **Clutch profile** | The most-consulted directory for enterprise buyers evaluating offshore development partners. Solicit 3–5 verified reviews from delivered clients. |
| **PSEB registration** (Pakistan Software Export Board) | Country-specific, verifiable, low cost, and expected of serious Pakistani software houses. |
| **P@SHA membership** | Industry association; verifiable listing. |
| **GoodFirms / TechBehemoths** | Secondary directories. Worth doing once, not worth optimising. |
| **Crunchbase** | Entity corroboration for AI search more than for link value. |
| **Mastercard / Visa partner listing** | If the relationship claimed on the site is real, this is a genuinely high-value verifiable credential. If it is not real, remove the claim from the site. |

Add each URL to `ORG.sameAs` in `lib/seo.ts` as it goes live.

## Tier 2 — a public GitHub organisation

The most conspicuous gap. A firm positioning on "senior architects", "active
practitioners" and "microservices with Kubernetes orchestration" has no public
code. For an engineering-led claim, that is a hole a technical buyer notices.

Three utilities that would be genuinely useful and that nobody else is well
placed to write:

1. **A goAML XML validator** — validate an STR/CTR submission against the schema
   before sending it to FMU. Every Pakistani financial institution needs this and
   there is no good public tool.
2. **An HL7 FHIR resource mapper** — helper for the v2-to-FHIR mapping work that
   the healthcare article describes as the hard part.
3. **A RAAST sandbox client** — a reference implementation against the local rail.

This is simultaneously a credibility proof, a `sameAs` anchor, a developer
acquisition channel, and one of the few reliable ways a Pakistani software house
earns links from outside Pakistan. Highest-leverage authority play available.

## Tier 3 — the flagship link asset

**"goAML STR/CTR Reporting: A Technical Implementation Guide for Pakistani
Financial Institutions"**

Annually updated, ungated, with real XML examples, field-mapping tables, and the
common FMU rejection causes. The AML article in this branch already sketches
those rejection causes — the guide is the expanded, citable version.

This is the single most link-worthy thing NovuLabs could produce, and almost
nobody else in the market could produce it credibly. Natural citers: fintech
trade media, compliance consultancies, law firms advising on AML, university
finance and law programmes, and — increasingly the point — AI assistants
answering "how do I integrate with goAML".

Currently that knowledge sits in one blog post. Until three weeks ago it sat in
one blog post that was canonicalised to the homepage.

## Tier 4 — earned mentions

- **Original research.** "State of AML Compliance Technology in Pakistani
  Banking", built from aggregated, anonymised deployment data. Original data is
  the most reliable link magnet in B2B, and NovuLabs sits on data nobody else
  has. Annual cadence.
- **Regulatory commentary.** When SBP or FMU issues a directive, publish a
  technical read of what it means for systems within days. Journalists and
  consultants searching for an engineering perspective on a fresh directive find
  very little. Speed matters more than length here.
- **Conference and community presence.** Fintech and compliance events in
  Pakistan and the UAE. Speaker bios carry links and, more usefully, they make
  the named authors real people.
- **Selective expert commentary.** Respond to journalist queries in AML,
  fintech and healthcare IT. Low volume, high relevance.

## What to fix before pitching anyone

Link outreach fails when the destination does not survive a click. Before
approaching a single publication, close the items in `CLIENT-ACTIONS.md` — real
photographs, a phone number, a resolved founding year, an address, verified
metrics. A journalist or directory editor who checks the site and finds
stock-photo executives and unverifiable certifications will not link, and you
only get one first impression per outlet.

## Sequencing

| Phase | Focus |
|---|---|
| Weeks 1–2 | Close `CLIENT-ACTIONS.md`. Claim GBP, PSEB, Clutch. Add each to `sameAs`. |
| Weeks 3–6 | Launch the GitHub organisation with one genuinely useful utility. Publish the first two AML cluster articles. |
| Months 2–3 | Ship the goAML implementation guide. Begin regulatory commentary cadence. |
| Months 4–6 | Original research report. Conference submissions. Second and third GitHub utilities. |

## Measuring

Referring **domains**, not backlinks — one link from a compliance consultancy is
worth more than four hundred from a directory network. Track: new referring
domains per month, referring domains to the goAML guide specifically, GitHub
stars and forks as a leading indicator, and AI citation rate for the three
queries listed at the end of `KEYWORD-PLAN.md`.
