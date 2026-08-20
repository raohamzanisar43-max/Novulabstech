# Keyword target map

## Data disclosure — read first

**No search volume, keyword difficulty, CPC or traffic figures appear in this
document.** The Ahrefs, Semrush and DataForSEO integrations available when this
branch was built all returned plan or quota errors:

- Ahrefs Keywords Explorer — `Insufficient plan`
- DataForSEO Labs / Google Ads volume — `HTTP 403`
- Semrush Keyword Analytics — insufficient API units

Fabricating plausible-looking numbers would be worse than having none, so there
are none. **Ordering below is strategic priority, not volume.** Pull real data
before committing budget — Search Console is free and, for a site this size, will
tell you more about actual opportunity than a third-party estimate anyway.

Every URL referenced now exists. Nothing here requires a page to be built first.

---

## Cluster 1 — AML/CFT compliance (the defensible moat)

This is the sharpest positioning on the site: a real commercial category, real
budget, a shallow competitive field, and vocabulary almost nobody else can use
credibly. Everything else is secondary.

| Target term | Target URL | Status |
|---|---|---|
| AML compliance software Pakistan | `/services/aml-cft-compliance-software` | live |
| CFT compliance solutions for banks | `/services/aml-cft-compliance-software` | live |
| FATF compliance software | `/services/aml-cft-compliance-software` | live |
| transaction monitoring system development | `/services/aml-cft-compliance-software` | live |
| SBP AML/CFT regulations for fintechs | `/blog/navigating-aml-cft-regulations-pakistan-2026` | live, expanded |
| goAML integration services | `/blog/goaml-integration-technical-guide` | **to write** |
| STR CTR automated reporting software | `/blog/str-ctr-reporting-automation-pakistan` | **to write** |
| PEP / sanctions screening software | `/blog/pep-sanctions-screening-implementation` | **to write** |
| FMU Pakistan reporting requirements | `/blog/fmu-pakistan-reporting-requirements` | **to write** |
| goAML XML schema fields | flagship guide — see BACKLINK-PLAN | **to write** |

The AML article already covers goAML rejection causes and the three
expensive-to-reverse architecture decisions at a depth a content mill cannot
reach. The four articles above are the natural next expansion, and each has an
existing internal link waiting for it.

## Cluster 2 — Fintech and payments

| Target term | Target URL | Status |
|---|---|---|
| fintech software development Pakistan | `/services/fintech-software-development` | live |
| payment gateway development Mastercard Visa | `/services/fintech-software-development` | live |
| PCI-DSS compliant payment development | `/services/fintech-software-development` | live |
| core banking system development | `/blog/core-banking-modernization-guide` | **to write** |
| RAAST integration services | `/blog/raast-integration-technical-guide` | **to write** |
| digital wallet app development | `/portfolio/finsync-digital-wallet` | live |
| payment switch development | `/portfolio/tranzaxis-payment-gateway` | live |

## Cluster 3 — Healthcare IT

| Target term | Target URL | Status |
|---|---|---|
| HIPAA compliant software development | `/services/healthcare-software-development` | live |
| HL7 FHIR integration services | `/services/healthcare-software-development` | live |
| EHR / EMR system development | `/portfolio/medicore-ehr-platform` | live |
| telemedicine app development | `/portfolio/carepulse-telemedicine-app` | live |
| HIPAA Security Rule audit logging | `/blog/scaling-healthcare-software-hipaa-hl7-fhir` | live, expanded |
| hospital management system development | `/blog/hospital-management-system-architecture` | **to write** |

Note the deliberate angle: the healthcare service page opens by explaining that
HIPAA certification does not exist. That is a genuine differentiator in a market
where most competitors claim it, and it targets a query real buyers type.

## Cluster 4 — Enterprise platforms

| Target term | Target URL | Status |
|---|---|---|
| custom enterprise software development | `/services/enterprise-software-development` | live |
| custom ERP development | `/services/enterprise-software-development` | live |
| custom CRM development | `/services/enterprise-software-development` | live |
| custom SaaS vs off-the-shelf ERP | `/blog/why-custom-saas-outperforms-off-the-shelf-erp` | live, expanded |
| multi-tenant SaaS architecture | `/blog/multi-tenant-saas-architecture-guide` | **to write** |
| legacy system modernization services | `/blog/legacy-modernization-playbook` | **to write** |

## Cluster 5 — Government and public sector

| Target term | Target URL | Status |
|---|---|---|
| NADRA CNIC API integration | `/portfolio/natid-verification-portal` | live |
| FBR API integration services | `/portfolio/taxlink-revenue-portal` | live |
| government software development Pakistan | `/industries` | live, now in main nav |
| e-government portal development | `/industries/government` | **to split out** |

## Cluster 6 — Brand and local

| Target term | Target URL |
|---|---|
| NovuLabs / Novu Labs | `/` |
| software house in Islamabad | `/about` |
| enterprise software company Pakistan | `/about` |
| software development company Islamabad | `/contact` |

Local depends on the Google Business Profile, street address and phone number in
`CLIENT-ACTIONS.md`. Nobody searches "software house near me" for a goAML
integration, but "software house in Islamabad" is a real commercial query in the
home market, and GBP is a strong `sameAs` corroborator for the entity work.

## Cluster 7 — Cloud, AI and mobile

| Target term | Target URL |
|---|---|
| cloud migration services Pakistan | `/services/cloud-ai-automation` |
| Kubernetes microservices consulting | `/services/cloud-ai-automation` |
| AI automation for enterprise | `/services/cloud-ai-automation` |
| cross-platform mobile app development | `/services/mobile-app-development` |
| enterprise web application development | `/services/web-development` |

---

## Intent matching — how each page type is built

| Query intent | Page type | What it must do |
|---|---|---|
| Commercial ("X development services") | Service page | Capability list, constraints, FAQ, case study links, one CTA |
| Investigational ("how does X work") | Blog article | Depth, primary-source citations, named author, links to the service page |
| Comparative ("build vs buy") | Blog article | Both sides argued honestly, framework not pitch |
| Evidential ("X case study") | Case study | Problem, constraints, approach, outcome, provenance-marked metrics |
| Navigational ("NovuLabs") | Homepage | Brand, positioning, routes to everything else |

Each cluster has exactly one hub, and no two URLs target the same primary term —
which is what removes the cannibalisation the old single `/services` URL created.

## Measuring this

Track by cluster, not by vanity keyword. Set up Search Console and Bing Webmaster
Tools, then add one KPI most agencies skip: **AI visibility**. Periodically query
ChatGPT, Perplexity and Gemini with *"AML compliance software vendors Pakistan"*,
*"goAML integration partner"* and *"HIPAA software development Pakistan"*, and log
whether NovuLabs is named. Given the entity work in this branch and a niche this
narrow, that is where movement should appear first — well before competitive
organic rankings shift.
