import { FaqItem } from '../types';

/**
 * /mobile-app-development-in-islamabad — content.
 * ---------------------------------------------------------------------------
 * WHY THIS PAGE EXISTS, AND WHY IT IS NOT UNDER /services
 *
 * SERP research (collected 12 Sep 2026, google.com with gl=pk, geo-confirmed
 * Pakistan) found two things that decided this page's shape:
 *
 *  1. "mobile app development in islamabad" returns a LOCAL MAP PACK, not an
 *     AI Overview. The three Places results carried review counts (160, 29,
 *     34), phone numbers and opening hours. On-page content alone does not win
 *     that block — the Google Business Profile does. This page therefore leads
 *     with verifiable local facts (address, hours, phone, who you meet) rather
 *     than with marketing copy, and carries localServiceSchema bounding the
 *     entity to Islamabad inside ICT.
 *
 *  2. "app development in islamabad" DOES return an AI Overview, and the
 *     companies it cited were described as "name + Islamabad sector + stated
 *     specialisation". That is the citation format, so this page states all
 *     three in crawlable server-rendered prose.
 *
 * It sits at the root, alongside /software-house-in-islamabad and
 * /software-development-in-pakistan, because geo intent on this site is handled
 * outside the /services hub-and-spoke tree. Putting a city page inside
 * /services would compete with the pillar it belongs to.
 *
 * CONSOLIDATION
 *
 * This page absorbs the retired /services/cross-platform-app-development
 * spoke. That page ranked for nothing the research could evidence, and its one
 * genuinely useful argument — choose the framework on the constraint, not the
 * fashion — reads better as one section here than as a whole page. The old URL
 * 301s to this one.
 *
 * CONTENT RULES — same as every other content file in this codebase:
 *   - No invented clients, metrics, certifications, awards, project counts or
 *     team size. Every figure here is either a published fact (App Store and
 *     Play Store fees, founding year, address) or absent.
 *   - Case study references point at content/caseStudies.ts entries, all of
 *     which carry metricsVerified: false. So this page describes the
 *     ENGINEERING in those projects, never their numbers.
 *   - No "best", "biggest", "award-winning" or "most trusted". Those are
 *     unverifiable superlatives and, in most markets, comparative advertising
 *     claims needing substantiation the site does not publish. Competitors on
 *     this SERP use all of them; not matching them is the differentiation.
 *   - Technologies named are limited to the mobile pillar's declared `stack`
 *     in content/servicePages.ts: Flutter, React Native, Swift, Kotlin,
 *     WebRTC, Firebase, RAAST.
 */

export interface LocalAppSection {
  heading: string;
  body: string[];
}

export const APP_ISLAMABAD_INTRO: string[] = [
  'NovuLabs is a software house in Islamabad that has been building custom software since 2015, from an office in I-10/4. Mobile app development here means native Android and iOS work in Kotlin and Swift, and cross-platform builds in Flutter and React Native, for organisations where the app is part of a regulated system rather than a standalone product. If you want to see who would actually do the work before you call anyone, every engineer is named on our [team page](/team) and the technical articles on this site are written by those same people.',
  'Most enquiries we get about app development in Islamabad are not really about the app. They are about the thing behind it: an API that has to talk to a core banking system, a patient record that has to stay auditable, a field worker who loses signal for four hours a day. That is the work we are set up for, and it is worth saying plainly where we are not the right choice — a simple brochure app or a one-screen utility does not need this team, and we will tell you so on the first call rather than after a contract.',
];

export const APP_ISLAMABAD_SECTIONS: LocalAppSection[] = [
  {
    heading: 'What a mobile app actually costs in Pakistan',
    body: [
      'This is the most-asked question on every Islamabad app-development search we examined, and it is the one most agency pages skip entirely. We will not publish a price list, because a number without a scope attached is marketing rather than information. What we can do is tell you what moves it.',
      'Four things dominate the estimate. Platform count comes first: one codebase in Flutter or React Native for both stores costs meaningfully less than two native builds in Swift and Kotlin, and the gap widens with every screen. Second is the backend — an app that only reads a public feed is a fraction of one that needs authentication, user accounts, push notifications, payments and an admin panel behind it, and that backend is usually the larger half of the project. Third is integration: connecting to a payment processor, an identity service or an existing enterprise system is where unknowns live, and unknowns are what estimates are actually made of. Fourth is compliance — an app touching financial transactions or patient data carries review, logging and audit work that a retail catalogue app does not.',
      'Two costs are fixed and public, and worth knowing before you budget: the Apple Developer Program is 99 USD a year and a Google Play developer account is a one-off 25 USD. Any quote that omits them, or omits post-launch maintenance, is quoting part of the job. We scope in phases, price each phase against a written specification, and would rather lose an enquiry at the estimate stage than discover the misunderstanding in month three.',
    ],
  },
  {
    heading: 'Android, iOS or cross-platform: deciding on the constraint',
    body: [
      'Framework arguments are usually settled by preference and then justified afterwards. We decide them on constraints, and there are only a handful that matter.',
      'Go cross-platform — Flutter or React Native — when the feature set is the same on both platforms, when you need both stores live at roughly the same time, and when the budget is better spent on a second feature than a second codebase. This is the right answer for most business apps, and it is why cross-platform work makes up a large share of what we build. Our full reasoning is on the [cross-platform and native decision](/services/mobile-app-development) section of the mobile pillar.',
      'Go native — Kotlin for [Android app development](/services/android-app-development), Swift for [iOS app development](/services/ios-app-development) — when the app depends on something the platform owns: deep camera or sensor control, background processing the OS restricts, secure hardware for key storage, CarPlay or Wear OS, or a latency budget tight enough that a bridge layer shows. Native is also the honest answer when a platform team already exists in-house and will maintain the code after handover.',
      'The decision that costs the most to reverse is not the framework. It is the data model. An app built on the assumption that the network is always available cannot be retrofitted to work offline; the sync rules, conflict resolution and local schema have to be designed in from the start. We treat offline behaviour as a product decision made before any code is written, because the alternative is a rewrite.',
    ],
  },
  {
    heading: 'Security, because the device is not yours',
    body: [
      'A mobile app runs on hardware you do not control, on a network you cannot inspect, and it can be decompiled by anyone who downloads it. That reality sets the security floor for everything we ship.',
      'Secrets do not live in the app. API keys, signing credentials and tokens stay server-side, with the app holding only short-lived credentials in the platform keystore or keychain. Certificate pinning goes in where the threat model justifies it. Sensitive local data is encrypted at rest rather than trusted to the sandbox. Biometric and device authentication is used to gate access, not to replace server-side authorisation, because an attacker with a rooted device controls the client entirely — authorisation decisions belong on the server or they are not decisions.',
      'This is not generic hardening advice; it is the same standard we apply on regulated work. NovuLabs builds AML/CFT and transaction-monitoring systems for institutions supervised by the State Bank of Pakistan, reports to the Financial Monitoring Unit, and HIPAA-aligned clinical software — engagements where the security posture is inspected by someone other than the client. The [industries pages](/industries) set out what each of those regulatory environments actually demands.',
    ],
  },
  {
    heading: 'Real work: a telemedicine app built for the network patients have',
    body: [
      'The clearest example of how we approach mobile engineering is a telehealth platform we built for a provider serving patients across Pakistan, described under NDA. The existing product had been specified for broadband. Consultations dropped, and in a clinical context a dropped consultation is not an inconvenience — it is an incomplete encounter with a patient who may not reconnect.',
      'The median user was on a mid-range Android handset on a congested mobile network, so the video stack was rebuilt on WebRTC to degrade deliberately rather than fail: resolution and frame rate give way before the audio channel does, because a consultation can survive losing the picture. Prescribing was moved off free text into structured data so it could reach a pharmacy system and be checked for interactions. Clinical documentation was made retained and auditable, and the build accounted for health-category app store review and the extra documentation that entails.',
      'The full write-up, including what constrained it, is in the [telemedicine case study](/portfolio/carepulse-telemedicine-app). One thing to be straight about: the metrics in our case studies are marked unverified pending confirmation against delivery records, and we would rather label them that way than quote a percentage we cannot evidence. Competing pages on this search carry figures like "40% fewer delivery delays" and "10M+ downloads" with no client named and no verification path. Ask us — or them — how a number was measured.',
    ],
  },
  {
    heading: 'Integrations that decide whether an app works here',
    body: [
      'An app for a Pakistani audience lives or dies on a short list of local integrations, and they are the parts most likely to be underestimated.',
      'Payments come first. We have built payment infrastructure to PCI-DSS requirements and integrated RAAST, the State Bank of Pakistan instant payment system, which is a different engineering problem from adding a card form. Identity verification against NADRA, and FBR integration for anything tax-facing, both carry their own constraints and their own failure modes. On the device side, the assumptions that matter are unglamorous: Android dominates the handset mix, connectivity is intermittent rather than absent, and screens have to stay usable one-handed on a mid-range phone.',
      'Behind all of it sits the backend, and that is where most app projects actually succeed or fail. Authentication, push, offline sync, an admin panel someone non-technical can run, and an API contract that will not need breaking changes in six months. We build those on the same stack as the rest of our platform work, so the app and its backend share a codebase and a deployment rather than being two suppliers blaming each other. [API development and integration](/services/api-development-integration) covers that half in more depth.',
    ],
  },
  {
    heading: 'Getting through App Store and Play Store review',
    body: [
      'Store review is where first-time app owners lose weeks, and it is almost always avoidable. Rejections cluster around a few causes: a privacy policy that does not match what the app actually collects, a data-safety declaration filled in optimistically, account deletion missing where Apple requires it, login-gated functionality with no way for a reviewer to get in, permissions requested without a purpose string, and payments routed outside the store where the guidelines do not allow it.',
      'We handle submission for both stores as part of delivery, including the privacy and data-safety declarations, and we prepare the review notes and demo credentials a reviewer needs. Health, finance and government categories attract additional documentation, which is normal and plannable — provided nobody discovers the requirement the week of launch.',
    ],
  },
  {
    heading: 'After launch: maintenance, and who owns what',
    body: [
      'An app is not a delivery, it is a subscription to keeping something alive. Android and iOS both ship a major version every year that can break assumptions; SDKs get deprecated on someone else’s schedule; a certificate or provisioning profile expires and the app stops installing. Budget for maintenance from the start, because the alternative is discovering the cost when the app is already broken.',
      'On ownership we are unambiguous, and it is worth checking against any supplier you talk to. The repository, the Apple Developer and Google Play accounts, the signing keys, the domain, the backend hosting and the analytics are yours and in your name from the start — not held on your behalf. You should be able to hire a different team next year without asking our permission for access. Signing keys in an agency’s account is the single most common way a business ends up unable to update its own app.',
    ],
  },
  {
    heading: 'Who you would be working with, and where we are',
    body: [
      'Engineering direction on mobile and platform work sits with [Shamroz Ali Zaidi](/team/shamroz-ali-zaidi), our Chief Technology Officer, who owns platform architecture, multi-tenant design and the security posture of regulated workloads. Delivery and the compliance practice are run by [Ali Zaidi](/team/ali-zaidi), including AML/CFT engagements with SBP-regulated institutions. The first technical conversation on most new work is with [Muneeb Ali Jaffari](/team/muneeb-ali-jaffari), who founded the company. You will know which named individuals are on your project before you sign, and if a supplier will not tell you that, it is worth asking why.',
      'We are based at I-10/4, I-10, Islamabad, and clients in Islamabad and Rawalpindi are welcome to meet in person rather than run the whole engagement over email. If you would rather start by reading than talking, the [case studies](/portfolio) describe how each system was architected, the [technical articles](/blog) are written by the engineers, and the guide to choosing a [software house in Islamabad](/software-house-in-islamabad) sets out the questions worth asking any supplier here, including us.',
    ],
  },
];

export const APP_ISLAMABAD_FAQS: FaqItem[] = [
  {
    q: 'How much does it cost to develop a mobile app in Pakistan?',
    a: 'It is driven by four things: how many platforms you ship, how much backend sits behind the app, which external systems it integrates with, and whether it handles regulated data. A single Flutter or React Native codebase for both stores costs meaningfully less than two native builds. Two fixed costs are public and often left out of quotes: the Apple Developer Program is 99 USD a year and a Google Play developer account is a one-off 25 USD. We price each phase against a written specification rather than quoting a headline figure, and we do not publish a price list because a number with no scope attached is not information.',
  },
  {
    q: 'How much does an app developer cost in Islamabad?',
    a: 'Rates in Islamabad span freelancers, small studios and engineering firms, and the spread is wide enough that the number alone tells you very little. The more useful question is what the rate includes: whether backend work, store submission, QA on real devices and post-launch maintenance are inside the quote or billed later. We scope and quote the whole engagement rather than an hourly figure, so the comparison is like-for-like.',
  },
  {
    q: 'How long does it take to build an app?',
    a: 'Scope sets the floor, but the usual constraint is not engineering — it is how fast decisions, content and access to existing systems arrive. A focused app on an approved design moves quickly; one that needs a new backend, third-party integrations and a compliance review does not. We scope in phases so the commercially important part can go live before the rest is finished.',
  },
  {
    q: 'Should I choose Android, iOS or cross-platform development?',
    a: 'Cross-platform with Flutter or React Native is right when the feature set is the same on both platforms and you want both stores live together — that covers most business apps. Go native with Kotlin or Swift when the app depends on something the platform owns: deep sensor or camera control, restricted background processing, secure hardware key storage, wearables, or a latency budget a bridge layer would show. Android-first is often the sensible sequencing for a domestic Pakistani audience given the handset mix.',
  },
  {
    q: 'Should I hire a freelance app developer or a company?',
    a: 'For a small, self-contained app with no integrations and no compliance exposure, a good freelancer is genuinely the better value and we will say so. A company earns its cost when the work needs more than one discipline at once — backend, mobile, QA, security, store submission — or when someone has to still be answering the phone in eighteen months. The risk with a single developer is not skill, it is continuity.',
  },
  {
    q: 'What does app maintenance cost after launch?',
    a: 'It depends on how much the app depends on things you do not control. Annual Android and iOS releases, deprecated SDKs, expiring certificates and provisioning profiles all force work on someone else’s schedule. We would rather agree a maintenance arrangement at the start than have the conversation the first time an OS update breaks something.',
  },
  {
    q: 'Who owns the source code, the store accounts and the signing keys?',
    a: 'You do, in your name, from the start. Repository, Apple Developer and Google Play accounts, signing keys, domain, hosting and analytics are yours and not held on your behalf. Signing keys sitting in an agency account is the most common reason a business finds it cannot update its own app, so it is worth asking any supplier this before you sign.',
  },
  {
    q: 'Can you take over an app another developer built?',
    a: 'Usually, yes, and it is a common starting point. We audit what is actually running first, get the accounts and repository access transferred into your name, document what we find, and then tell you honestly whether the existing codebase is worth keeping or whether a rebuild is cheaper than maintaining it. That answer goes either way and we will give you the one we believe.',
  },
  {
    q: 'Do you build the backend and APIs as well as the app?',
    a: 'Yes, and on most projects that is the larger half of the work: authentication, push notifications, offline sync, an admin panel and a stable API contract. Building both means the app and its backend share one codebase and one deployment rather than two suppliers pointing at each other when something breaks.',
  },
  {
    q: 'Do you work with businesses in Rawalpindi as well as Islamabad?',
    a: 'Yes. Our office is in I-10/4, Islamabad, and clients across Islamabad and Rawalpindi regularly meet us in person. Engagements outside the twin cities run remotely without difficulty; the project management does not change.',
  },
  {
    q: 'Which company is best for app development in Islamabad?',
    a: 'Nobody can answer that for your project, and any firm claiming the title about itself is telling you something about its marketing rather than its engineering. The questions that separate suppliers are concrete: which named individuals will do the work, who owns the signing keys and store accounts, what happens after launch, and can they show how a system was architected rather than just a list of logos. Our guide to choosing a software house in Islamabad sets out the full list, and it is written to be used on us as well.',
  },
];
