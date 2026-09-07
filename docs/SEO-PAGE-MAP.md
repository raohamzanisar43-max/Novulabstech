# SEO page map

Generated from the built HTML in `.next/server/app`, not from source — every
value below is what a crawler actually receives. Regenerate after any metadata
change; the numbers in the summary are asserted by
`python scripts/verify-seo-claims.py`.

## Summary

| Check | Result |
| --- | --- |
| Routes prerendered | 42 |
| Indexable routes | 41 |
| `noindex` routes | `/_not-found` only (correct) |
| Sitemap URLs | 41 — exactly the indexable set |
| Duplicate titles | 0 |
| Duplicate meta descriptions | 0 |
| Titles over 60 chars (rendered, incl. ` | NovuLabs`) | 0 |
| Meta descriptions outside 120–165 chars | 0 (excluding `/_not-found`) |
| Canonical ≠ route | 0 |
| `og:url` ≠ canonical | 0 |
| Pages with 0 or >1 `<h1>` | 0 |
| Heading-level skips | 0 |
| `<img>` without `alt` | 0 of 181 |
| Broken internal links | 0 (41/41 pages reachable by crawl from `/`) |
| Dead `#fragment` targets | 0 |

## Indexability

Every route below is indexable, canonical to itself, present in `sitemap.xml`,
and reachable by internal links from the homepage. The single exception is
`/_not-found`, which is `noindex` by design and is deliberately absent from the
sitemap and from every internal link.

| Page | H1 | SEO Title | Meta Description | Canonical | Index? | Page schema (beyond sitewide Org+WebSite+Nav) |
| --- | --- | --- | --- | --- | --- | --- |
| `/_not-found` | That page does not exist | Page not found | NovuLabs | That page does not exist. Here is where to find what you were probably looking for. |  | no | — |
| `/about` | Building the Future ofEnterprise Technology | About Us — Enterprise Software House, Islamabad | NovuLabs | Who we are: an architect-led enterprise software house in Islamabad serving regulated finance, healthcare and government. No pre-sales agents, ever. | https://www.novulabs.net/about | yes | AboutPage+BreadcrumbList+FAQPage |
| `/blog` | Technical Insights | Insights: AML, Fintech & Healthcare IT | NovuLabs | Technical guides on goAML integration, STR/CTR reporting, FMU and SBP requirements, HL7 FHIR interoperability and enterprise architecture decisions. | https://www.novulabs.net/blog | yes | CollectionPage+Blog+BreadcrumbList+FAQPage |
| `/blog/goaml-xml-integration-str-ctr-reporting-pakistan` | Building a goAML Integration: STR and CTR Reporting That Passes Validation | goAML Integration: STR & CTR Reporting Guide | NovuLabs | An engineering guide to goAML XML submission for Pakistani institutions: schema modelling, the rejection causes we see most, and validating before you file. | https://www.novulabs.net/blog/goaml-xml-integration-str-ctr-reporting-pakistan | yes | WebPage+BlogPosting+BreadcrumbList |
| `/blog/nadra-ekyc-cnic-verification-integration-guide` | Digital KYC in Pakistan: Designing CNIC and Biometric Verification That Holds Up | NADRA e-KYC & CNIC Verification: Build Guide | NovuLabs | Designing identity verification around CNIC and biometric checks for Pakistani financial and government platforms: consent, fallbacks and audit evidence. | https://www.novulabs.net/blog/nadra-ekyc-cnic-verification-integration-guide | yes | WebPage+BlogPosting+BreadcrumbList |
| `/blog/navigating-aml-cft-regulations-pakistan-2026` | Navigating AML/CFT Regulations in Pakistan: An Engineering Guide for Fintechs | AML/CFT Compliance in Pakistan: Fintech Guide | NovuLabs | How SBP and FMU requirements translate into actual system architecture: screening, transaction monitoring, and goAML-conformant STR/CTR reporting. | https://www.novulabs.net/blog/navigating-aml-cft-regulations-pakistan-2026 | yes | WebPage+BlogPosting+BreadcrumbList |
| `/blog/raast-integration-guide-instant-payments-pakistan` | Integrating RAAST: What Building on Pakistan's Instant Payment Rail Actually Involves | RAAST Integration Guide for Pakistani Fintechs | NovuLabs | An engineering view of RAAST integration: ISO 20022 messaging, alias resolution, idempotency and reconciliation, and the failure modes that matter most. | https://www.novulabs.net/blog/raast-integration-guide-instant-payments-pakistan | yes | WebPage+BlogPosting+BreadcrumbList |
| `/blog/scaling-healthcare-software-hipaa-hl7-fhir` | Scaling Healthcare Platforms: HIPAA and HL7 FHIR Without the Rewrite | HIPAA & HL7 FHIR: Scaling Healthcare Platforms | NovuLabs | Engineering EHR and telemedicine systems that satisfy the HIPAA Security Rule while staying genuinely interoperable through HL7 FHIR resources. | https://www.novulabs.net/blog/scaling-healthcare-software-hipaa-hl7-fhir | yes | WebPage+BlogPosting+BreadcrumbList |
| `/blog/why-custom-saas-outperforms-off-the-shelf-erp` | Custom Platform or Off-the-Shelf ERP? An Honest Decision Framework | Custom Platform vs Off-the-Shelf ERP: A Framework | NovuLabs | When building beats buying, when it does not, and the total-cost model that makes the difference visible before you have committed the budget. | https://www.novulabs.net/blog/why-custom-saas-outperforms-off-the-shelf-erp | yes | WebPage+BlogPosting+BreadcrumbList |
| `/contact` | Book a Free Consultation | Contact — Book a Free Technical Call | NovuLabs | Book a free 45-minute technical call with a senior architect. No demos, no sales scripts — bring your architecture and get an honest read on it. | https://www.novulabs.net/contact | yes | ContactPage+BreadcrumbList+FAQPage |
| `/faq` | Frequently asked questions | Frequently Asked Questions About NovuLabs | NovuLabs | What NovuLabs builds, the industries and regulators we work under, the technologies we use, post-launch support, and how an engagement with our team starts. | https://www.novulabs.net/faq | yes | WebPage+FAQPage+BreadcrumbList |
| `/index` | Enterprise Software House in Islamabad | Software House in Islamabad | NovuLabs | Enterprise software house in Islamabad building AML/CFT compliance systems, HIPAA healthcare platforms and PCI-DSS payments. Talk to an architect, not a rep. | https://www.novulabs.net | yes | WebPage+FAQPage |
| `/industries` | Built for Critical Industries | Industries: Banking, Healthcare & Government | NovuLabs | Domain depth in banking (AML/CFT, RAAST), healthcare (HIPAA, HL7 FHIR, EHR) and government (NADRA, FBR). Regulated-sector engineering, not generalists. | https://www.novulabs.net/industries | yes | WebPage+BreadcrumbList+FAQPage |
| `/legal` | Legal & policies | Legal & Policies | NovuLabs | Privacy policy, terms of service and cookie policy for NovuLabs — written to describe what this site actually does, not from a template. | https://www.novulabs.net/legal | yes | CollectionPage+BreadcrumbList |
| `/legal/cookie-policy` | Cookie Policy | Cookie Policy | NovuLabs | What novulabs.net stores in your browser and why: which cookies are strictly necessary, what is not used, and how to clear them. Actual behaviour, not a template. | https://www.novulabs.net/legal/cookie-policy | yes | WebPage+BreadcrumbList |
| `/legal/privacy-policy` | Privacy Policy | Privacy Policy | NovuLabs | How NovuLabs collects, uses and retains personal data from this website and from client engagements, and the rights available to you. | https://www.novulabs.net/legal/privacy-policy | yes | WebPage+BreadcrumbList |
| `/legal/terms-of-service` | Terms of Service | Terms of Service | NovuLabs | The terms governing use of novulabs.net, including intellectual property, acceptable use, and the limits of what this website constitutes. | https://www.novulabs.net/legal/terms-of-service | yes | WebPage+BreadcrumbList |
| `/portfolio` | Enterprise Software Case Studies | Case Studies — Enterprise Software Projects | NovuLabs | Detailed engineering case studies: goAML-integrated AML suites, HIPAA EHR rollouts, Mastercard/Visa payment switches and national identity portals. | https://www.novulabs.net/portfolio | yes | CollectionPage+BreadcrumbList+FAQPage |
| `/portfolio/carepulse-telemedicine-app` | Telemedicine Platform Built for Low-Bandwidth Consultations | Case Study: Low-Bandwidth Telemedicine Platform | NovuLabs | A HIPAA-aligned telemedicine app with clinical-grade video that degrades gracefully, e-prescribing, and remote vitals capture. | https://www.novulabs.net/portfolio/carepulse-telemedicine-app | yes | WebPage+Article+BreadcrumbList |
| `/portfolio/corebanking-aml-suite` | goAML-Integrated AML Monitoring for a Tier-1 Bank | Case Study: goAML AML Suite for a Tier-1 Bank | NovuLabs | How we rebuilt screening, transaction monitoring and FMU goAML reporting around an immutable event stream at a Tier-1 Pakistani bank. | https://www.novulabs.net/portfolio/corebanking-aml-suite | yes | WebPage+Article+BreadcrumbList |
| `/portfolio/finsync-digital-wallet` | RAAST-Enabled Digital Wallet Built for Unreliable Networks | Case Study: RAAST Digital Wallet Engineering | NovuLabs | A consumer wallet integrating RAAST instant payments, with offline conflict resolution and settlement finality modelled correctly from the start. | https://www.novulabs.net/portfolio/finsync-digital-wallet | yes | WebPage+Article+BreadcrumbList |
| `/portfolio/medicore-ehr-platform` | HIPAA EHR Platform Rolled Out Across a Hospital Network | Case Study: HIPAA EHR Across a Hospital Network | NovuLabs | An electronic health record platform built around an append-only PHI access log and an HL7 FHIR translation layer for multi-site interoperability. | https://www.novulabs.net/portfolio/medicore-ehr-platform | yes | WebPage+Article+BreadcrumbList |
| `/portfolio/natid-verification-portal` | National Identity Verification Portal with NADRA Integration | Case Study: NADRA Identity Verification Portal | NovuLabs | A citizen identity verification portal integrating CNIC and NADRA APIs with biometric authentication and PKI digital signatures. | https://www.novulabs.net/portfolio/natid-verification-portal | yes | WebPage+Article+BreadcrumbList |
| `/portfolio/novucrm-intelligence-suite` | CRM With ML Lead Scoring Kept Off the Decision Path | Case Study: CRM With ML Lead Prioritisation | NovuLabs | An AI-assisted CRM where the model prioritises the queue and the humans still make the decisions — with the reasoning surfaced rather than hidden. | https://www.novulabs.net/portfolio/novucrm-intelligence-suite | yes | WebPage+Article+BreadcrumbList |
| `/portfolio/omnierp-manufacturing-suite` | Manufacturing ERP Where Scheduling Was the Competitive Edge | Case Study: Multi-Country Manufacturing ERP | NovuLabs | A composite architecture: packaged finance and HR kept close to vanilla, with custom production scheduling built where the client's advantage actually lived. | https://www.novulabs.net/portfolio/omnierp-manufacturing-suite | yes | WebPage+Article+BreadcrumbList |
| `/portfolio/taxlink-revenue-portal` | Federal Tax Filing Portal Built on FBR API Integration | Case Study: Tax Filing Portal on FBR APIs | NovuLabs | A tax filing portal integrating FBR APIs with e-signature workflows, automated assessment and compliance dashboards, built to survive filing-deadline load. | https://www.novulabs.net/portfolio/taxlink-revenue-portal | yes | WebPage+Article+BreadcrumbList |
| `/portfolio/tranzaxis-payment-gateway` | Card Payment Switch Engineered for Scheme Certification | Case Study: Card Payment Switch at Scale | NovuLabs | Building an authorisation switch to Mastercard and Visa certification requirements, with idempotent handling and continuous reconciliation. | https://www.novulabs.net/portfolio/tranzaxis-payment-gateway | yes | WebPage+Article+BreadcrumbList |
| `/services` | Enterprise Software Development Services | Enterprise Software Development Services | NovuLabs | Seven enterprise engineering services: AML/CFT compliance, fintech, healthcare IT, enterprise systems, mobile, cloud & AI, and web. Pick your track. | https://www.novulabs.net/services | yes | CollectionPage+Service+BreadcrumbList |
| `/services/aml-cft-compliance-software` | AML/CFT Compliance Software Development | AML/CFT Compliance Software Development | NovuLabs | We build screening, transaction monitoring and goAML-conformant STR/CTR reporting for SBP-regulated institutions in Pakistan. Architect-led, audit-ready. | https://www.novulabs.net/services/aml-cft-compliance-software | yes | WebPage+Service+FAQPage+BreadcrumbList |
| `/services/cloud-ai-automation` | Cloud, AI & Automation Engineering | Cloud, AI & Automation Engineering | NovuLabs | Cloud migration, Kubernetes platform engineering and applied AI for regulated workloads — including honest advice on where AI should not sit. | https://www.novulabs.net/services/cloud-ai-automation | yes | WebPage+Service+FAQPage+BreadcrumbList |
| `/services/enterprise-software-development` | Custom Enterprise Software Development | Custom Enterprise Software Development | NovuLabs | ERP, CRM and multi-tenant SaaS platforms built around the workflows that differentiate you — and honest advice about the ones you should buy instead. | https://www.novulabs.net/services/enterprise-software-development | yes | WebPage+Service+FAQPage+BreadcrumbList |
| `/services/fintech-software-development` | Fintech & Payments Software Development | Fintech & Payments Software Development | NovuLabs | Core banking, card switching, RAAST and 1LINK connectivity, and payment infrastructure engineered to PCI-DSS requirements by senior architects. | https://www.novulabs.net/services/fintech-software-development | yes | WebPage+Service+FAQPage+BreadcrumbList |
| `/services/healthcare-software-development` | HIPAA-Compliant Healthcare Software Development | HIPAA Healthcare Software Development | NovuLabs | EHR, telemedicine and clinical integration platforms built to the HIPAA Security Rule with genuine HL7 FHIR interoperability — not just a FHIR endpoint. | https://www.novulabs.net/services/healthcare-software-development | yes | WebPage+Service+FAQPage+BreadcrumbList |
| `/services/mobile-app-development` | Enterprise Mobile App Development | Enterprise Mobile App Development | NovuLabs | Native and cross-platform mobile apps for regulated environments — wallets, telemedicine and field operations — with offline behaviour designed, not assumed. | https://www.novulabs.net/services/mobile-app-development | yes | WebPage+Service+FAQPage+BreadcrumbList |
| `/services/web-development` | Enterprise Web Platform Development | Enterprise Web Platform Development | NovuLabs | Server-rendered web platforms, admin consoles and customer portals built for accessibility, Core Web Vitals and the crawlers that now read your site. | https://www.novulabs.net/services/web-development | yes | WebPage+Service+FAQPage+BreadcrumbList |
| `/site-map` | Sitemap | Sitemap | NovuLabs | Every page on novulabs.net in one place: services, platforms, case studies, technical articles, testimonials, company pages, FAQs and policies. | https://www.novulabs.net/site-map | yes | CollectionPage+BreadcrumbList |
| `/solutions` | Proven Enterprise Solutions | Enterprise Platforms: ERP, CRM, Pay & AML | NovuLabs | Four production platforms: NovuShield AML/CFT screening, NovuPay payment switching, NovuERP operations and NovuCRM. Deployed at regulated institutions. | https://www.novulabs.net/solutions | yes | CollectionPage+SoftwareApplication+BreadcrumbList+FAQPage |
| `/team` | The Engineers Behind theInfrastructure | Engineering & Compliance Team | NovuLabs | The architects and compliance engineers who do the work, with the credentials to check. Every person listed is an active practitioner, not a sales rep. | https://www.novulabs.net/team | yes | BreadcrumbList+Person+FAQPage |
| `/team/ali-zaidi` | Ali Zaidi | Ali Zaidi — Chief Operating Officer | NovuLabs | Ali runs delivery operations and the compliance practice at NovuLabs, including AML/CFT engagements with SBP-regulated institutions. | https://www.novulabs.net/team/ali-zaidi | yes | WebPage+Person+BreadcrumbList |
| `/team/muneeb-ali-jaffari` | Muneeb Ali Jaffari | Muneeb Ali Jaffari — CEO & Founder | NovuLabs | Muneeb founded NovuLabs and leads its enterprise engagements, including the initial architecture conversation on most new work. | https://www.novulabs.net/team/muneeb-ali-jaffari | yes | WebPage+Person+BreadcrumbList |
| `/team/shamroz-ali-zaidi` | Shamroz Ali Zaidi | Shamroz Ali Zaidi — Chief Technology Officer | NovuLabs | Shamroz leads platform architecture at NovuLabs, covering multi-tenant SaaS design, cloud and Kubernetes platform engineering, and the security posture of | https://www.novulabs.net/team/shamroz-ali-zaidi | yes | WebPage+Person+BreadcrumbList |
| `/testimonials` | Client testimonials & reviews | Client Testimonials & Reviews | NovuLabs | What clients say about working with NovuLabs: engineering judgement, audit-ready delivery and long-term support across banking, healthcare and government. | https://www.novulabs.net/testimonials | yes | WebPage+BreadcrumbList |

## Notes on schema

`ProfessionalService`, `WebSite` and the `SiteNavigationElement` `ItemList` are
emitted once per page from the root layout and are omitted from the table above
to keep it readable. The column lists only page-specific nodes.

`/testimonials` deliberately carries **no** `Review` or `AggregateRating` node.
See the comment block at the top of `app/testimonials/page.tsx` for why — in
short, the testimonials are currently placeholders, and even once real, reviews
a business collects and publishes about itself do not qualify for Google's
review rich results.
