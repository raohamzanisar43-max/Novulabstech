# Client actions required before deploy

Everything in this branch that could be fixed in code has been fixed. The items
below need facts only NovuLabs has. They are ordered by return on effort.

Each one names the exact file to change. Every placeholder in the codebase is
marked `TODO(client)` — `grep -rn "TODO(client)" .` will find all of them.

---

## 1. Three real photographs — one afternoon, highest ROI on the site

**File:** `content/siteData.ts` (`teamMembers`), replace files in `public/team/`

The site previously used Unsplash stock photographs of strangers under the real
names of the CEO, CTO and COO. For a vendor asking a bank to trust it with
transaction monitoring, that is the most damaging credibility error present, and
it is a Search Quality Rater Guidelines negative on top of the commercial cost.

They have been replaced with neutral branded monograms, which is honest but
inert. Replace with real photographs: square, ≥512px, self-hosted JPEG or WebP,
same filenames. Nothing else needs to change.

## 2. Verify the apex-domain redirect — 30 seconds

Run after deploy:

```
curl -I https://novulabs.net/
```

You must see `HTTP/1.1 301` and `Location: https://www.novulabs.net/`. A `200`
means the entire site is duplicated on the apex domain. A redirect rule was added
in `next.config.ts`; if your CDN or host already handles it, that rule is
harmless and redundant — but confirm rather than assume.

## 3. Reconcile the founding year

**File:** `lib/seo.ts` → `ORG.foundingDate`

`/about` claimed "Since 2015" while the footer says 2026, all three blog posts
are dated 2026, and the Facebook page ID falls in the range Meta issued around
late 2024. Nothing corroborates 2015.

The unverified claim has been removed from titles and descriptions.
`ORG.foundingDate` still reads `'2015'` — set it to the true year. If the real
year is 2024, say 2024 and lean on the founders' prior individual experience.
A false founding date, once noticed by a due-diligence buyer, discredits
everything else on the site.

## 4. Publish a phone number

**Files:** `lib/seo.ts` → `ORG.telephone`, and
`components/sections/contact/ContactFormSection.tsx` (marked `TODO(client)`)

There is currently no phone number anywhere on the site. For a vendor selling
six-figure compliance systems to banks and government agencies, that is a trust
failure independent of SEO, and Google Business Profile verification wants it.

Use an Islamabad **landline** in international format (`+92-51-XXXXXXX`), not a
mobile — a landline materially strengthens both GBP verification and enterprise
credibility. It is deliberately not rendered until a real one exists; the schema
builder strips the field rather than emitting a placeholder.

## 5. Add a street address and postal code

**File:** `lib/seo.ts` → `ORG.address`

`LocalBusiness` / `ProfessionalService` schema will not validate on a city-only
address. `streetAddress` and `postalCode` are both `null` and are stripped from
output until filled.

## 6. Resolve the certification claims

**Files:** `content/servicePages.ts`, `content/siteData.ts` (`contactFaqs`)

Language has been corrected to what is defensible:

- "HIPAA certified" → removed entirely. No certification regime exists; HHS
  accredits no one. Do not reinstate it.
- "PCI-DSS certified" → "engineered to PCI-DSS requirements". The certificate is
  issued to the entity operating the cardholder data environment after QSA
  assessment, not to its development vendor.
- "HL7 FHIR-certified" → "HL7 FHIR-conformant".

**ISO 27001 is genuinely certifiable.** If NovuLabs holds it, publish the
certificate number, the registrar and the scope statement — that is a real,
verifiable authority anchor. If not, the current language is already correct.

## 7. Confirm or delete the case study metrics

**File:** `content/caseStudies.ts` — every entry carries `metricsVerified: false`

Figures like "$2.4B annual transactions", "40+ hospitals" and "1M+ active users"
are carried over from the previous portfolio cards. While the flag is `false`,
each case study renders a provenance note.

Check each figure against delivery records. Flip the flag to `true`, or delete
the figure. An unverifiable quantified claim in a YMYL vertical is worse than no
claim.

## 8. Verify the Twitter handle

**File:** `app/layout.tsx` — `twitter.site` / `twitter.creator`

`@NovuLabsTech` is referenced but appears nowhere in the site's own social
links. If the account is not live and controlled by NovuLabs, delete both lines.

## 9. Confirm the analytics position

**File:** `content/legalPages.ts` → cookie policy, marked `[Client to confirm]`

The cookie policy describes actual behaviour. Name whatever analytics tool is in
use, its retention and whether IPs are anonymised — or state that none is in
use, which is a genuine privacy advantage worth saying out loud.

## 10. Have counsel review the legal pages

`content/legalPages.ts` contains engineering-grade drafts written to describe how
the site actually operates. They are accurate; they are not legal advice and have
not been reviewed by a lawyer. There is one further placeholder in the privacy
policy: hosting regions for the international transfers section.

---

## After deploy

1. **Search Console.** Submit `/blog/navigating-aml-cft-regulations-pakistan-2026`,
   `/blog/scaling-healthcare-software-hipaa-hl7-fhir` and
   `/blog/why-custom-saas-outperforms-off-the-shelf-erp` for re-indexing. These
   were being actively de-indexed by the canonical bug; they will not recover on
   their own schedule.
2. **Resubmit the sitemap.** It went from 12 URLs to 33.
3. **Rich Results Test.** Run `search.google.com/test/rich-results` on the
   homepage (FAQPage), `/services/aml-cft-compliance-software` (Service +
   FAQPage + BreadcrumbList) and one blog post (BlogPosting + BreadcrumbList).
4. **PageSpeed Insights** on `/`, `/services` and `/team`, on mobile. Hero
   images are now self-hosted; measure the actual effect rather than assuming it.
5. **Claim Google Business Profile** — primary category "Software Company". It is
   the strongest available `sameAs` corroborator for the entity work in this branch.
