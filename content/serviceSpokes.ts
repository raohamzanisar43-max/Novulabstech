import { FaqItem } from '../types';

/**
 * 22 service spoke pages.
 * ---------------------------------------------------------------------------
 * WHERE "22" COMES FROM
 *
 * The homepage lists 22 service cards (content/siteData.ts, `services`). Until
 * now every one of those cards linked straight to /contact with no page in
 * between explaining what the service actually involves; a visitor had to
 * commit to a conversation before reading a single sentence about the work.
 *
 * WHY THESE AREN'T 22 INDEPENDENT PAGES
 *
 * Several of the 22 cards are not separate business lines. "Mastercard /
 * Visa", "Payment Gateways" and "Financial Software" are all facets of the one
 * fintech practice that content/servicePages.ts already covers in depth at
 * /services/fintech-software-development. Writing 22 full pages that each
 * restate "we build fintech software" from a slightly different angle would
 * be keyword cannibalisation: several pages competing for the same search
 * intent, diluting all of them rather than ranking any one clearly.
 *
 * So this file is the spoke layer of a hub-and-spoke structure. Each of the 7
 * pages in servicePages.ts stays exactly as it is (the pillar: broad,
 * long-form, owns the category-level search intent). Each entry below is a
 * spoke: a narrower, more specific capability nested under one pillar via
 * `parentSlug`, targeting a distinct enough search intent that it earns its
 * own page without duplicating the pillar's content. A few examples of the
 * narrowing:
 *
 *   - "Enterprise Software" (the card) becomes "Legacy System Modernisation"
 *     (the page); the pillar already owns the broad ERP/CRM/SaaS story;
 *     modernising an existing system is a distinct enough problem, mentioned
 *     but never expanded on in the pillar's own summary, to deserve its own
 *     page.
 *   - "Healthcare Software" becomes "EHR & Clinical Systems Development" —
 *     distinct from "Medical Billing", which gets its own page because
 *     revenue-cycle work is a genuinely different buyer and problem than
 *     clinical software.
 *   - "AML Systems" and "CFT Compliance" become three narrower pages —
 *     sanctions/PEP screening, transaction monitoring, and goAML/FMU
 *     reporting — because those are three different subsystems with three
 *     different technical concerns, not one topic said three ways.
 *
 * Every spoke still traces back to one of the original 22 cards. None of this
 * invents a new service; it gives each real capability a search intent
 * specific enough to actually rank for, and routes internal link equity from
 * the spoke up to the pillar and sideways to its siblings.
 *
 * CONTENT RULES — same as every other content file in this codebase:
 *   - No invented pricing, timelines, team size, client names or project
 *     counts. Where a buyer would ask for a number, the FAQ explains what
 *     determines it instead of making one up.
 *   - No technology or standard is named here unless it already appears in
 *     content/servicePages.ts `stack` for the parent pillar, or in
 *     lib/seo.ts `knowsAbout`. This file does not claim new expertise.
 *   - `relatedCaseStudies` and `relatedPosts` only reference content that
 *     actually exists in content/caseStudies.ts and content/blogPosts.ts, and
 *     only where the connection is real, not padding.
 */

export interface ServiceSpokeFaq extends FaqItem {}

export interface ServiceSpoke {
  slug: string;
  /** Slug of the parent pillar in content/servicePages.ts. */
  parentSlug: string;
  /** Short label for cards, nav and breadcrumbs. */
  navLabel: string;
  /** H1. Names the specific capability, not the parent category. */
  h1: string;
  /** <title> without the brand suffix; layout appends " | NovuLabs". */
  seoTitle: string;
  /** Meta description, 140–165 characters. */
  description: string;
  /** One sentence, used on hub and pillar "related" cards. */
  summary: string;
  /** Bootstrap icon class, reused from the matching homepage card. */
  icon: string;
  /** Intro paragraph(s), before any heading. */
  intro: string[];
  /**
   * "You probably need this if..." — the symptoms a buyer recognises in their
   * own organisation, rendered high on the page before any explanation.
   *
   * These pages previously opened by teaching the topic, which is the wrong
   * order for a commercial page: a reader arrives with a symptom, not with a
   * curiosity about architecture. Naming the symptom first lets them self-
   * identify in about five seconds, and everything below then reads as the
   * answer to a question they have already asked themselves.
   */
  symptoms: string[];
  /** "What We Offer", rendered as H3 subsections. */
  offerings: { title: string; body: string }[];
  /** "How We Help": the business problems this solves, as paragraphs. */
  howWeHelp: string[];
  /** "Our Approach": method, as paragraphs. */
  approach: string[];
  /**
   * Optional long-form body, rendered as H2 sections after "Our Approach".
   *
   * Most spokes do not need this: the fixed offerings/howWeHelp/approach
   * fields carry a focused page, which is the right length for a narrow
   * capability. A spoke targeting a broad head term where the search intent
   * genuinely spans several sub-decisions (which build route, which CMS, who
   * does the work) needs room to answer each one under its own heading
   * instead of compressing them into a single paragraph.
   */
  sections?: { heading: string; body: string[] }[];
  /** Subset of the parent pillar's real stack. */
  technologies: string[];
  /** Subset of content/siteData.ts `industries` titles that genuinely apply. */
  industries: string[];
  faqs: ServiceSpokeFaq[];
  /** Sibling spoke slugs worth cross-linking. */
  relatedSpokes: string[];
  /** Slugs from content/caseStudies.ts. */
  relatedCaseStudies: string[];
  /** Slugs from content/blogPosts.ts. */
  relatedPosts: string[];
}

export const serviceSpokes: ServiceSpoke[] = [
  // ===========================================================================
  // PILLAR: web-development
  // ===========================================================================
  {
    slug: 'website-development',
    parentSlug: 'web-development',
    navLabel: 'Website Development',
    h1: 'Website Development Services',
    seoTitle: 'Website Development Services: Design to Launch',
    description:
      'Website development in Islamabad across every build route: Figma, WordPress, Shopify, AI-assisted and fully custom 3D sites. Fast, secure and easy to update.',
    summary: 'Fast, secure and efficient websites built on the route that fits the job \u2014 design-led, WordPress, Shopify, AI-assisted or fully custom.',
    icon: 'bi-globe',
    symptoms: [
      'Your site takes more than four seconds to load on a phone and you have stopped checking',
      'Every content change needs a developer, so the site is months out of date',
      'It was built by an agency that has since stopped answering email',
      'You rank for your own company name and almost nothing else',
      'You have a Figma file everybody approved and no working site to show for it',
      'Something was generated with an AI builder in a weekend and now nobody can safely change it',
    ],
    intro: [
      'NovuLabs builds some of the fastest, most secure and most efficient websites in Islamabad. NovuLabs is the biggest software house in Islamabad, with several highly experienced web developers such as [Shamroz Ali Zaidi](/team/shamroz-ali-zaidi), a professional website and software developer with more than ten years of experience. He is one of the best web developers in Islamabad and has helped more than twenty businesses build their websites; he helped [Dental Forte](https://www.dentalforte.pk/) build the great-looking, SEO-optimised site they have today.',
      'You should look forward to working with NovuLabs, as it is one of the best software and website development agencies in Islamabad, and the questions worth asking any supplier are set out in our guide to choosing a [software house in Islamabad](/software-house-in-islamabad). If your site has already been built, reach out to NovuLabs and check whether it has any of the following limitations:',
      'This page covers public, content-led website development. Portals, admin consoles and authenticated web applications are a different engineering problem, covered on our [enterprise web platform development](/services/web-development) page.',
    ],
    offerings: [
      { title: 'Design in Figma, built to match', body: 'We use Figma to design great 3D-looking, immersive websites, using tools inside Figma such as FigJam. First we design the flat layout \u2014 menus, text and buttons \u2014 and plan where the 3D objects will sit on the screen. Then we use Figma plugins such as Spline or Vectary to import, stretch and light actual 3D shapes right inside our canvas. Finally we map out the interactive animations, showing exactly how a 3D model should spin or move when a user scrolls or clicks, which gives the developers a precise visual guide for coding the final product.' },
      { title: 'WordPress builds and rescues', body: 'We build beautiful WordPress websites using custom themes and block patterns, for teams whose priority is publishing daily without a developer, plus recovery work on sites buried under plugins nobody remembers installing. We also offer complete maintenance, security and refunds on all of our WordPress websites, which makes us the most trustworthy and responsible agency in Islamabad.' },
      { title: 'Shopify and commerce', body: 'Theme development, custom sections, app and payment integration, and the product-data structure that decides whether your collection pages can ever rank. To keep these pages secure we use tools such as Supabase and GitHub, so data stays safe and every change is tracked. The systems sitting behind a store are covered in more depth under [API development and integration](/services/api-development-integration).' },
      { title: 'AI-assisted delivery', body: 'Claude, ChatGPT and builders like Lovable, used where they measurably shorten the boring middle of a build, under human review, with the generated code held to the same standard as the hand-written code around it. We do not simply ship AI slop; we build websites that win customers on how they look, planned properly by our team, with AI used as a tool rather than as the designer.' },
      { title: 'Fully custom front-ends', body: 'Server-rendered Next.js and React builds for sites whose requirements \u2014 scale, integrations, performance budgets, 3D \u2014 outgrow what a template can carry.' },
      { title: 'Technical SEO and migration', body: 'Semantic markup, heading structure, clean URLs, sitemap, canonical tags and redirect mapping handled at framework level during the build, not bolted on with a plugin after traffic drops.' },
    ],
    howWeHelp: [
      'Most people who come to us want a website redesign and are quietly terrified of one. That fear is reasonable. A redesign that changes your URLs without a redirect map can wipe out rankings you spent years earning, and the drop shows up a fortnight after everyone has finished congratulating each other. So we plan a redesign around what already works: the pages bringing you traffic stay, their addresses are preserved or properly redirected, and the new design goes on top of that rather than straight over it.',
      'If the real complaint is that your website is slow, that is often the entire job and it does not need a redesign at all. A slow site is usually the same short list every time: oversized images, third-party scripts loading ahead of your own content, and a theme doing work nobody asked for. We measure page speed on a real mid-range phone rather than a developer\u2019s laptop, fix the handful of things that actually move the number, and make the site properly mobile-friendly so it behaves on the screen most of your visitors are holding.',
      'A lot of businesses are stuck for a duller reason: nobody in the building can update the site. If publishing matters more to you than engineering, WordPress website development with a real custom theme solves it \u2014 your own team adds pages, posts and prices without raising a support ticket. Where a site is already on WordPress and buried under plugins, we strip it back to what it actually needs and take on the website maintenance, so there is somebody responsible when something breaks.',
      'For ecommerce website development we start with the unglamorous half: product data, collections, variants, and a page structure Google can index. A Shopify store that looks beautiful and cannot be found is an expensive catalogue. We work on both ends, plus the path to checkout, because the two numbers that decide whether the build paid for itself are how many people find you and how many reach payment.',
      'Some sites get plenty of visitors and almost no enquiries. That is rarely a design problem. It is usually one page that does not say what you do, a contact form asking for six things when it needs two, or landing pages built for a campaign that never made the next step clear. We find where people leave, rewrite the pages carrying the decision, and stop hiding the thing you want them to do.',
      'If this is your first business website, we will deliberately keep it small. Five or six pages built properly and structured to grow beats a thirty-page site of thin pages you will never find time to maintain. The blog, the store and the 3D showpiece can come later, when there is a reason for them.',
      'And if your last developer has simply stopped replying, that is a normal reason to [get in touch](/contact) and we hear it often. We take over existing sites: get the hosting, domain and repository access moved into your name, document what is actually running, and tell you honestly whether it is cheaper to keep the site or rebuild it.',
    ],
    approach: [
      'We start from the pages that carry commercial weight \u2014 home, services, contact \u2014 and the information architecture connecting them, before anyone opens a design tool. A fast site with a confusing structure still loses visitors.',
      'Server-side rendering by default. Client-side JavaScript is added where a real interaction needs it, not as a framework default, because the content has to exist in the raw HTML response for a crawler that never runs your scripts.',
      'Every build route is decided against the same three questions: who edits this after launch, how often, and what breaks if they get it wrong. The answers, not a stack preference, pick the tooling.',
    ],
    sections: [
      {
        heading: 'Every build route, and when each one is the right call',
        body: [
          'There is no single correct way to build a website, and most disappointing projects come from picking the route before understanding the job. A sixty-page content site run by a two-person marketing team and a five-page product launch with a 3D configurator are not the same problem, and a firm that only builds one way will quietly turn your problem into the one it prefers.',
          'What follows is the honest version of each route: what it is genuinely good at, and the cost it hands you later. Read the one that sounds like your situation, then ignore the rest.',
        ],
      },
      {
        heading: 'Figma first, when design is the thing being bought',
        body: [
          'Figma is where a website gets argued about cheaply. Changing a layout there costs minutes; changing it after build costs a sprint. For anything design-led \u2014 a brand site, a launch page, a site whose whole job is to feel more credible than the competition \u2014 the design phase is the leverage, and skipping it to "start building and see how it looks" is the most expensive shortcut in this business.',
          'The part that decides whether a Figma file survives contact with code is how it is built, not how it looks. A file that is 40 flat screens will be interpreted, approximated, and drift within a month. A file built as a system \u2014 defined type scale, spacing tokens, real component variants, hover and focus and error and empty states, laid out at the breakpoints that matter \u2014 translates almost mechanically into components and stays true after launch.',
          'We work either way: you bring a file and we build to it faithfully, or we design it with you first. If you bring one, expect a short honest audit before the estimate \u2014 which screens are underspecified, where the responsive behaviour is undecided, which interaction is going to cost three times what it appears to. That conversation is cheaper before the quote than after it, and our [case studies](/portfolio) show how the finished builds turned out.',
        ],
      },
      {
        heading: 'WordPress, when publishing beats engineering',
        body: [
          'WordPress still runs a large share of the web for one unglamorous reason: non-technical teams can publish on it without asking anyone. If your site lives or dies on how fast a marketing person can get a post, a landing page or a changed price live, that matters more than any architectural argument against it.',
          'Built properly, that means a custom theme, block patterns your editors can assemble without breaking the layout, and a small deliberate set of plugins. Built the usual way, it means a purchased theme carrying features you will never use, a page builder generating markup no crawler enjoys, and thirty plugins each loading their own stylesheet \u2014 which is how a "simple" site ends up taking six seconds to render a paragraph of text.',
          'Most WordPress work we do is rescue rather than greenfield: auditing what each plugin is actually for, removing what nothing depends on, replacing a page builder with real templates, and getting the site back to a speed where visitors stay. Where the content model is the real problem \u2014 pages that should be structured data being maintained as freehand text \u2014 we say so, because no amount of caching fixes that.',
        ],
      },
      {
        heading: 'Shopify and commerce builds',
        body: [
          'On a store, the website is the operations layer. Theme work, custom sections, checkout behaviour, app and payment integrations, and the shape of your product data all feed into two numbers that decide whether the build paid for itself: how many visitors reach checkout, and how many arrive from search in the first place.',
          'The second number is where most stores are quietly losing. Collection pages with no unique content cannot rank; product titles written for an internal spreadsheet cannot rank; variant structures that create four near-identical URLs for one product compete with themselves. Those are content-model decisions made during the build, and they are painful to reverse once a catalogue is live and indexed \u2014 which is exactly why we argue about them early, before the theme is skinned.',
          'Apps get the same scrutiny as plugins. Every one is third-party JavaScript on your critical path, and a review widget that adds a second to every product page load is not free marketing.',
        ],
      },
      {
        heading: 'AI-assisted builds: Claude, ChatGPT, Lovable and the rest',
        body: [
          'We use AI tooling daily and will say plainly where it helps and where it does not. It is genuinely good at the boring middle of a build: scaffolding repetitive components, converting a settled design into first-pass markup, writing the migration script, drafting test cases, translating content, and explaining an unfamiliar codebase faster than reading it. On that work it removes days, and refusing to use it is just billing you for typing.',
          'Builders like Lovable are the fastest way to get from an idea to something clickable. For validating a concept, pitching internally, or putting a real page in front of real users this week, that speed is the whole point and nothing else competes with it.',
          'What these tools do not yet do reliably is own the decisions that cost money later: data modelling, access control, performance budgets, accessibility semantics, and anything whose failure mode is silent. Generated code tends to look confident and correct, which is precisely why it needs reviewing rather than trusting. Our rule is simple \u2014 AI can write it, a human is accountable for it, and it passes the same review, accessibility and performance checks as everything else in the repository.',
          'If you have already built something with an AI builder and hit the wall where each new change breaks two old things, that is a normal place to arrive and a normal place to hand over. Usually the design and the content are worth keeping, and what needs rebuilding is the structure underneath them.',
        ],
      },
      {
        heading: 'Fully custom builds, and the sites that need them',
        body: [
          'A custom front-end earns its cost when the requirements stop fitting a template: real traffic volume, a performance budget you have to meet rather than hope for, several systems to integrate, a design system shared across multiple properties, or interaction that no theme supports. Below that threshold, custom is often vanity, and we will tell you when we think you are about to buy it. Where the product is a subscription rather than a site, [custom SaaS development](/services/custom-saas-development) is the closer fit.',
          'Our default is server-rendered Next.js with React and TypeScript, styled with Tailwind, on Node. The reason is less about fashion than about what reads the page. GPTBot, ClaudeBot, PerplexityBot and CCBot largely do not execute JavaScript, so a client-rendered site hands them an empty shell and becomes invisible to every major AI assistant no matter how strong the writing is. "Is the content in the raw HTML response?" is a release check here, not an assumption.',
        ],
      },
      {
        heading: '3D, WebGL and motion: who actually builds these',
        body: [
          'A genuinely beautiful 3D website is not a front-end task with a library bolted on. It is three specialists working to one performance budget, and projects fail when a business hires one of the three and hopes the rest is configuration.',
          'The 3D artist models, textures and lights the scene, and decides what the thing is supposed to feel like. The WebGL or Three.js engineer gets that scene running at a stable frame rate on a mid-range phone \u2014 draw calls, texture budgets, level of detail, loading strategy \u2014 which is where most of the real engineering lives. The motion designer owns choreography and timing: what moves, when, how it responds to scroll or cursor, and when it deliberately does nothing. A fourth role quietly decides whether the site ships: someone accountable for the non-3D fallback, because a heavy scene that ignores a slow device or a reduced-motion preference is an accessibility failure and a bounce, not a showcase.',
          'On our side that named individual is [Shamroz Ali Zaidi](/team/shamroz-ali-zaidi), who leads the build on this work. We put one accountable name on it rather than selling you \"our team\".',
          'If a supplier will not tell you which named individual is responsible for frame rate on a 3D build, that is worth more than any showreel.',
        ],
      },
      {
        heading: 'Speed, accessibility and the crawlers that now read your site',
        body: [
          'Three requirements get treated as polish and are actually structural, which is why adding them late costs a multiple of designing them in.',
          'Speed is mostly a short, unexciting list: bound your image dimensions, keep third-party scripts off the critical path, defer the JavaScript nothing on first paint needs, and set an actual largest-contentful-paint budget somebody owns. It gets measured on representative devices and connections, because everything is fast on a developer laptop on office fibre.',
          'Accessibility is a property of the component library, not a checklist at the end. Semantic structure, keyboard operability, visible focus, adequate contrast and honest form errors are decisions made once in a button and a field, and inherited by every page afterwards. Retrofitting them later means reopening every component you already shipped.',
          'Crawlability now has two audiences. Search engines still want clean structure, one clear H1 per page, descriptive titles, self-referencing canonical tags and a sitemap that matches reality. AI assistants want the same thing plus content that exists without JavaScript, because increasingly your answer reaches a buyer as a citation inside an assistant rather than as a blue link.',
        ],
      },
      {
        heading: 'Migration without losing what the old site earned',
        body: [
          'The fastest way to lose money on a new website is to launch a better one onto a worse set of URLs. If a page has spent years accumulating links and rankings, a redesign that quietly changes its address throws that away, and the traffic loss shows up two weeks later when the launch is already being celebrated.',
          'So a migration starts with an inventory: which URLs hold real value, which redirect where, which should be consolidated because three pages have been competing for one search intent, and which should return a clean 410 because they should never have existed. Then sitemap, canonical tags and internal links are verified against that plan before launch, and search performance is watched closely for the first weeks after \u2014 the window where a mistake is still cheap to fix.',
        ],
      },
      {
        heading: 'What you own when we are finished',
        body: [
          'Repository, hosting account, domain, CMS and analytics are yours and in your name from the start, not held on your behalf. You should be able to hire someone else next year without asking our permission for access, and if that sounds like a low bar, it is one a surprising number of agencies fail.',
          'Handover is a component library your team can extend, documentation for the parts that are not obvious, and a content model designed so routine work \u2014 a new page, a changed price, a campaign landing page \u2014 does not need an engineering ticket. The measure of a finished website build is not the launch screenshot; it is how cheap the tenth change is. More of the questions buyers ask before signing are answered in our [FAQ](/faq), or you can [talk to an architect directly](/contact).',
        ],
      },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'WordPress', 'Shopify', 'Figma'],
    industries: ['Banking & Fintech', 'Healthcare & MedTech', 'Manufacturing & Logistics'],
    faqs: [
      { q: 'How is this different from your web platform development service?', a: 'This page covers public, content-led websites: marketing sites, brand sites, corporate sites and stores, which are read far more than they are used. The web platform service covers portals, admin consoles and applications with authentication and workflow behind them. Many organisations need both, and we build them on the same stack so they share a component library rather than drifting into two different-looking products.' },
      { q: 'Should we use WordPress, Shopify, an AI builder or a custom build?', a: 'It depends on who edits the site after launch and how often. Daily publishing by a non-technical team points to WordPress. Selling physical products points to Shopify. Validating an idea fast points to an AI builder like Lovable. Real traffic, hard performance budgets, several integrations or 3D work point to a custom Next.js build. We recommend a route after hearing the actual constraints, and we will say when a custom build would be money you do not need to spend.' },
      { q: 'Do you use AI to build websites?', a: 'Yes, deliberately and under review. AI tooling is genuinely faster at scaffolding components, converting a settled design into first-pass markup, writing migrations and drafting tests. It is not left to own data modelling, access control, accessibility semantics or performance decisions, and every line it produces passes the same review as hand-written code. A human is accountable for what ships.' },
      { q: 'Can you finish or fix a site someone built with an AI builder?', a: 'Usually, yes, and it is a common starting point. The design and content are normally worth keeping; what needs rebuilding is the structure underneath, so the next change takes ten minutes instead of breaking two other things. We audit first and tell you honestly whether rescuing or restarting is cheaper.' },
      { q: 'Can you build a 3D or animated website?', a: 'Yes, with the caveat that it needs a 3D artist, a WebGL engineer and a motion designer working to one performance budget, plus someone accountable for the non-3D fallback. A heavy scene that ignores a mid-range phone or a reduced-motion preference is a bounce, not a showcase. Shamroz Ali Zaidi leads that work and is named on your proposal.' },
      { q: 'Can you work with our existing brand and Figma file?', a: 'Yes. Most rebuilds keep the existing brand and reuse existing copy where it still works. If you bring a Figma file we audit it first and tell you which screens are underspecified or where the responsive behaviour is undecided, because that conversation is much cheaper before the quote than after the build.' },
      { q: 'Will our content team be able to update the site without a developer?', a: 'Yes, and it is a requirement we design for rather than a nice-to-have. The content model is built so routine updates \u2014 a new page, a changed price, a campaign landing page \u2014 do not need an engineering ticket.' },
      { q: 'Do you handle the SEO migration if we are moving from an existing site?', a: 'Yes. Redirect mapping, preserving the indexed URLs that carry real value, consolidating pages that have been competing for one search intent, and verifying the new sitemap and canonical tags are part of the migration plan rather than an afterthought. We also watch search performance for the first weeks after launch, while a mistake is still cheap to fix.' },
      { q: 'How long does a website build take?', a: 'It is driven by scope and by how fast decisions and content arrive, which is usually the real constraint rather than engineering. A five-page site built to an approved design moves quickly; a sixty-page migration with a new content model does not. We scope in phases so the commercially important pages go live first instead of everything waiting on the slowest section.' },
    ],
    relatedSpokes: ['api-development-integration', 'custom-saas-development'],
    relatedCaseStudies: [],
    relatedPosts: [],
  },

  // ===========================================================================
  // PILLAR: enterprise-software-development
  // ===========================================================================
  {
    slug: 'legacy-system-modernization',
    parentSlug: 'enterprise-software-development',
    navLabel: 'Legacy System Modernization',
    h1: 'Legacy System Modernization',
    seoTitle: 'Legacy System Modernization Services',
    description:
      'Modernizing legacy enterprise systems: migrating aging platforms, replacing unsupported stacks, and untangling business logic without stopping the business.',
    summary: 'Replacing or re-platforming an aging system that the business depends on but nobody wants to touch anymore.',
    icon: 'bi-cpu-fill',
    symptoms: [
      'One person understands the system and they are talking about retiring',
      'The vendor stopped supporting your version and upgrades are no longer offered',
      'A change that should take two days takes three weeks and nobody can say why',
      'You are paying maintenance on something you are afraid to touch',
    ],
    intro: [
      'Most organisations do not decide to modernise a system because it stopped working. They decide because the vendor stopped supporting it, the one engineer who understood it left, or every new feature now takes three times as long as it should. The system still runs; the risk is that it keeps running exactly until the day it cannot be fixed.',
      'This work sits underneath our broader enterprise software practice, specifically for organisations replacing or re-platforming something that already exists rather than building from a blank page.',
    ],
    offerings: [
      { title: 'System and data audit', body: 'Mapping what the current system actually does, including the undocumented business logic and workarounds that accumulate over a decade, before deciding what to keep.' },
      { title: 'Incremental migration paths', body: 'Running the old and new systems side by side where the business cannot tolerate downtime, with a defined cutover instead of a single high-risk switch.' },
      { title: 'Data migration and reconciliation', body: 'Moving historical data with validation that the new system’s records reconcile against the old, not just that the migration script completed.' },
      { title: 'Integration continuity', body: 'Keeping every system that depends on the one being replaced working throughout the migration, not just on the day it goes live.' },
    ],
    howWeHelp: [
      'The risk in legacy modernisation is rarely the new system. It is everything built around the old one over the years: reports that read a database directly, a batch job nobody remembers the purpose of, an integration held together by a script on someone’s laptop. We spend real time finding those before writing new code.',
      'A second recurring problem is that "modernise" gets treated as "rebuild everything." Often the better answer is replacing the parts that are genuinely failing and leaving what still works alone, which is cheaper and lower risk than a full rewrite.',
    ],
    approach: [
      'We audit before we propose. A modernisation plan written before anyone has read the existing system’s actual behaviour is a guess, and the client usually already has one of those from a previous vendor.',
      'Where possible, we run new and old in parallel against the same data, so the comparison is a fact rather than an assumption at cutover.',
    ],
    technologies: ['.NET', 'Java', 'React', 'Node.js', 'PostgreSQL', 'Azure', 'AWS', 'Kubernetes'],
    industries: ['Banking & Fintech', 'Manufacturing & Logistics', 'Government & Public Sector'],
    faqs: [
      { q: 'How do you decide what to rebuild versus what to leave alone?', a: 'By what is actually failing: unsupported dependencies, a vendor that no longer exists, or a bottleneck that blocks new work. A system that is inconvenient but stable is a lower priority than one that is an active operational risk.' },
      { q: 'Can this be done without stopping the business that depends on the old system?', a: 'In most cases yes, through a phased cutover where old and new run in parallel for a defined period. Whether zero-downtime migration is realistic depends on how tightly the current system is coupled to everything around it, which is part of the audit.' },
      { q: 'What happens to our historical data?', a: 'It migrates with reconciliation, meaning we verify the new system’s records match the old ones for a sample and for edge cases, not only that the transfer script ran without an error.' },
      { q: 'How long does a legacy migration usually take?', a: 'It depends far more on how well the current system is documented and how many other systems integrate with it than on the size of the new build. We scope this after the audit rather than before it.' },
    ],
    relatedSpokes: ['erp-software-development', 'custom-saas-development', 'api-development-integration'],
    relatedCaseStudies: ['omnierp-manufacturing-suite'],
    relatedPosts: ['why-custom-saas-outperforms-off-the-shelf-erp'],
  },
  {
    slug: 'erp-software-development',
    parentSlug: 'enterprise-software-development',
    navLabel: 'ERP Systems',
    h1: 'ERP Software Development',
    seoTitle: 'ERP Software Development Services',
    description:
      'Custom ERP development covering finance, HR, procurement and supply chain in one system, built around how your organisation actually operates, not a template.',
    summary: 'ERP built around your actual processes, for organisations where an off-the-shelf module list stops fitting.',
    icon: 'bi-diagram-3-fill',
    symptoms: [
      'Finance, procurement and the warehouse each keep their own spreadsheet',
      'Month-end close involves reconciling three exports by hand',
      'Your process is genuinely unusual and every ERP demo requires a workaround',
      'Nobody in the business can get a current number without asking someone',
    ],
    intro: [
      'Off-the-shelf ERP works well for organisations whose processes look like the software vendor’s template. It works less well for a manufacturer with a specific production workflow, or an organisation whose finance and procurement processes exist for a genuine regulatory or operational reason that the standard module cannot express.',
      'We build ERP systems around the process, not the other way round, integrating finance, HR, procurement and supply chain data into one authoritative system rather than reconciling spreadsheets between departments.',
    ],
    offerings: [
      { title: 'Process-first design', body: 'Modelling the actual approval chains, cost centres and stock movements your organisation uses, instead of mapping your process onto a generic module set.' },
      { title: 'Finance and procurement integration', body: 'Purchase orders, invoicing, budgeting and cost tracking that share one ledger, so finance is not reconciling three exports at month end.' },
      { title: 'Supply chain and inventory', body: 'Stock levels, warehouse movement and supplier data kept current across every location that touches inventory.' },
      { title: 'Reporting built for decisions', body: 'Dashboards scoped to what a specific role actually needs to act on, not a data dump labelled "reports".' },
    ],
    howWeHelp: [
      'The recurring problem we see is departments that have each built their own workaround: a finance spreadsheet, a separate procurement tool, a warehouse system that does not talk to either. None of them is wrong individually, but nobody has a single, current view of the business.',
      'A custom ERP is not always the right answer to that problem. Where a mature product genuinely covers the requirement, we say so before proposing a build. Custom ERP earns its cost when the process itself is the competitive advantage, not when it is a commodity workflow with a specific product already built for it.',
    ],
    approach: [
      'We map the current process with the people who actually run it, not just the department head who describes how it is supposed to work.',
      'Modules ship in an order that delivers value early, usually finance and procurement first since they touch the most departments, rather than building the whole system before anyone can use any of it.',
    ],
    technologies: ['.NET', 'Java', 'PostgreSQL', 'SQL Server', 'Azure', 'AWS'],
    industries: ['Manufacturing & Logistics', 'Government & Public Sector', 'Banking & Fintech'],
    faqs: [
      { q: 'When does custom ERP make sense instead of an established product like SAP or Odoo?', a: 'When your process is genuinely different from what the standard modules assume, not when it is merely inconvenient to change your process to fit them. If the honest answer is that your workflow could adapt to a mature product, that is usually the cheaper and lower-risk path, and we will say so.' },
      { q: 'Can a new ERP integrate with systems we are keeping, like an existing accounting platform?', a: 'Yes, that is typically part of the scope rather than an exception. Most ERP rollouts replace some systems and integrate with others; deciding which is which is part of the initial process mapping.' },
      { q: 'How do you handle data migration from spreadsheets or an old ERP?', a: 'With validation against the source, checking that totals, historical records and edge cases reconcile, not just that a bulk import completed without an error message.' },
      { q: 'Do you roll out every module at once or in phases?', a: 'Phases, generally. Rolling out finance and procurement first tends to deliver value earliest and lets the team validate the system on real data before the harder integrations, like supply chain, go live.' },
    ],
    relatedSpokes: ['crm-software-development', 'legacy-system-modernization', 'custom-saas-development'],
    relatedCaseStudies: ['omnierp-manufacturing-suite'],
    relatedPosts: ['why-custom-saas-outperforms-off-the-shelf-erp'],
  },
  {
    slug: 'crm-software-development',
    parentSlug: 'enterprise-software-development',
    navLabel: 'CRM Systems',
    h1: 'CRM Software Development',
    seoTitle: 'Custom CRM Software Development',
    description:
      'Custom CRM development for processes off-the-shelf CRM cannot express: lead scoring, pipeline logic and omnichannel data in a single record.',
    summary: 'A CRM built around your sales and relationship process, when a general-purpose CRM makes you adapt to it instead.',
    icon: 'bi-people-fill',
    symptoms: [
      'Your reps keep the real pipeline in a spreadsheet next to the CRM',
      'Reporting numbers do not match what the sales team believes is true',
      'You have customised the platform so heavily that upgrades now break things',
      'Customer history lives in four tools and none of them agree',
    ],
    intro: [
      'General-purpose CRM platforms are built to fit as many sales processes as possible, which means every organisation ends up customising pipeline stages, fields and automations until the underlying platform is barely visible. At a certain point, the customisation itself becomes the maintenance burden.',
      'A custom CRM makes sense once your relationship data, lead scoring logic, or pipeline structure has outgrown what the platform’s configuration options can express without workarounds.',
    ],
    offerings: [
      { title: 'Pipeline and process modelling', body: 'Sales or relationship stages that match how deals or cases move through your organisation, including the branches and exceptions a generic pipeline flattens.' },
      { title: 'Lead scoring and prioritisation', body: 'Scoring logic built around signals that are genuinely predictive for your business, not a default weighting borrowed from an unrelated industry.' },
      { title: 'Omnichannel record unification', body: 'Email, calls, meetings and support interactions attached to one customer record instead of scattered across the tools each team happens to use.' },
      { title: 'Analytics and forecasting', body: 'Pipeline and conversion reporting built on your actual stage definitions, so the numbers mean what leadership thinks they mean.' },
    ],
    howWeHelp: [
      'The most common trigger for a custom CRM is a sales or account management process that a platform’s configuration cannot represent without a workaround the team routes around within a quarter. Once reps are keeping a "real" pipeline in a spreadsheet alongside the CRM, the CRM has stopped doing its job.',
      'We also build CRM systems for organisations whose relationship data has to integrate tightly with an internal system, like a core banking platform or a case management tool, where a general CRM’s integration options are too shallow.',
    ],
    approach: [
      'We start with how deals or relationships move through your organisation today, including the exceptions and manual overrides, before designing the pipeline logic.',
      'Where the data already lives in another system you are keeping, we integrate rather than duplicate, so the CRM is not a second, slightly different copy of the truth.',
    ],
    technologies: ['.NET', 'Java', 'React', 'Node.js', 'PostgreSQL'],
    industries: ['Banking & Fintech', 'Healthcare & MedTech', 'E-Commerce & Retail'],
    faqs: [
      { q: 'Why build a CRM instead of customising Salesforce or HubSpot?', a: 'Configuration on an established platform is usually the right first move and the lower-cost one. Custom development becomes worthwhile when the customisation has hit a ceiling: the platform’s data model, automation limits or integration depth cannot express what your process actually needs.' },
      { q: 'Can a custom CRM integrate with our existing marketing or support tools?', a: 'Yes, and for most builds that integration is a core requirement rather than an add-on, since a CRM that does not connect to email, calendars and support is only half the record.' },
      { q: 'How do you handle lead scoring if we do not have a defined model yet?', a: 'We work from the signals your team already treats as meaningful, like deal size, engagement history or account industry, and build a scoring model you can adjust as you gather more outcome data rather than shipping a black box.' },
      { q: 'What happens to our existing CRM data during a migration?', a: 'It migrates with field-level mapping and reconciliation against the source system, so historical deal history and contact records carry over rather than starting from zero.' },
    ],
    relatedSpokes: ['erp-software-development', 'custom-saas-development'],
    relatedCaseStudies: ['novucrm-intelligence-suite'],
    relatedPosts: [],
  },
  {
    slug: 'government-portal-development',
    parentSlug: 'enterprise-software-development',
    navLabel: 'Government Portals',
    h1: 'Government Portal Development',
    seoTitle: 'Government Portal Development Services',
    description:
      'Government-grade portal development: identity verification, tax filing and digital signatures built to the audit standard public-sector contracts require.',
    summary: 'Public-sector portals built for the security, availability and audit trail a government contract requires.',
    icon: 'bi-buildings-fill',
    symptoms: [
      'A procurement security review is coming and the documentation does not exist',
      'Citizens abandon the process halfway and you cannot see where',
      'Identity verification works in testing and fails for real applicants',
      'The system cannot show who accessed a record, or when',
    ],
    intro: [
      'A government portal is judged differently than a commercial one. Availability, security and auditability are contractual requirements rather than quality goals, and the system has to hold up under a security review from people who will never use it day to day, not just a user acceptance test.',
      'We build national identity, tax filing, and citizen-service portals with that review in mind from the architecture stage, including the identity and digital-signature infrastructure they depend on.',
    ],
    offerings: [
      { title: 'National identity integration', body: 'CNIC and biometric verification flows built for real failure modes: partial matches, timeouts and what a citizen sees when verification fails, not just the success path.' },
      { title: 'Digital signatures and e-seals', body: 'PKI-based signing for documents and filings that need to be legally attributable, with the key management that a government audit will ask about.' },
      { title: 'Tax and revenue filing', body: 'Filing portals that integrate directly with the relevant revenue authority’s systems rather than exporting data for manual submission.' },
      { title: 'Citizen service workflows', body: 'Application, approval and status-tracking flows designed for a wide range of technical literacy and connectivity, not just for a power user.' },
    ],
    howWeHelp: [
      'Government procurement usually asks for evidence up front: security architecture, data-handling documentation, and audit trails, before the first line of code is written for the public-facing part of the system. We treat that documentation as part of the deliverable, not paperwork produced after the fact to pass review.',
      'The technical risk in these systems is rarely the visible portal. It is the identity verification and signature infrastructure underneath it, where a wrong assumption about network reliability or a citizen’s documentation shows up as a support burden at scale.',
    ],
    approach: [
      'Security and data-handling architecture are designed against the review the system will actually face, not against a generic checklist, which means understanding the specific procurement’s requirements before writing code.',
      'We design the failure paths (a biometric mismatch, a network timeout, an expired document) as carefully as the success path, because in a citizen-facing government system those failures are common, not edge cases.',
    ],
    technologies: ['.NET', 'Java', 'PostgreSQL', 'Azure', 'AWS', 'Kubernetes'],
    industries: ['Government & Public Sector'],
    faqs: [
      { q: 'What identity verification do you support for government portals?', a: 'CNIC and biometric verification against national identity infrastructure, including handling partial matches and verification failures gracefully rather than only building the happy path.' },
      { q: 'How do you handle the security review process for government contracts?', a: 'By producing the security and data-handling documentation the review will ask for as part of the build, not retrofitted afterwards, and by designing the architecture against the specific procurement’s requirements from the outset.' },
      { q: 'Can this integrate with an existing government system we cannot modify?', a: 'Usually yes, through the APIs or file interfaces that system already exposes. Where a legacy government system has a limited integration surface, we design around that constraint rather than assuming it can change.' },
      { q: 'What happens when a citizen’s biometric or document verification fails?', a: 'That path gets designed as carefully as the successful one: a clear explanation of what failed, a fallback verification route where the process allows one, and a support path that does not require a citizen to already understand the system.' },
    ],
    relatedSpokes: ['api-development-integration', 'erp-software-development'],
    relatedCaseStudies: ['natid-verification-portal', 'taxlink-revenue-portal'],
    relatedPosts: ['nadra-ekyc-cnic-verification-integration-guide'],
  },
  {
    slug: 'api-development-integration',
    parentSlug: 'enterprise-software-development',
    navLabel: 'API Development',
    h1: 'API Development and Integration',
    seoTitle: 'API Development & Integration Services',
    description:
      'RESTful and GraphQL API development for enterprise systems, plus integration work connecting existing platforms that were never designed to talk to each other.',
    summary: 'APIs and integrations that connect the systems your organisation already runs, built with the security a shared endpoint needs.',
    icon: 'bi-plug-fill',
    symptoms: [
      'Two systems hold the same customer and disagree about the details',
      'Every new integration is a bespoke project rather than a configuration',
      'A partner has asked for API access and you have nothing to give them',
      'Data moves between systems by scheduled export and someone watching it',
    ],
    intro: [
      'Most enterprise problems that look like "we need a new system" are integration problems: two platforms that hold overlapping data and never agreed on which one is authoritative. Building an API is the easy part; deciding what the API represents, and securing it properly, is where the real work is.',
      'We design and build APIs for new systems and integration layers connecting existing ones, whether that means a public developer-facing API or an internal service boundary nobody outside the organisation will ever see.',
    ],
    offerings: [
      { title: 'API design', body: 'RESTful and GraphQL APIs designed around the resources and operations a consumer actually needs, with versioning that lets the underlying system change without breaking every integration.' },
      { title: 'Authentication and access control', body: 'Rate limiting, scoped access tokens and audit logging appropriate to what the API exposes, from a public developer portal to an internal-only service.' },
      { title: 'Legacy system integration', body: 'Building an API layer in front of a system that was never designed to expose one, so it can participate in newer architecture without a rewrite.' },
      { title: 'Documentation and developer experience', body: 'Documentation that a third-party or internal developer can integrate against without a support ticket for every question.' },
    ],
    howWeHelp: [
      'A recurring pattern: two systems both hold customer or transaction data, both are considered "the source of truth" by different teams, and nobody has designed which one actually owns which field. An integration project that skips that question ships a synchronisation bug instead of a solution.',
      'We also build API layers specifically so a legacy system can be modernised incrementally, rather than needing to be replaced all at once before anything new can be built on top of it.',
    ],
    approach: [
      'We define data ownership before writing integration code: which system is authoritative for which field, and what happens when two systems disagree.',
      'API contracts are versioned from the first release, so a breaking change in one system does not silently break every consumer of its API.',
    ],
    technologies: ['Node.js', 'Java', '.NET', 'PostgreSQL', 'Kafka'],
    industries: ['Banking & Fintech', 'Healthcare & MedTech', 'Manufacturing & Logistics'],
    faqs: [
      { q: 'Do you build public developer-facing APIs or only internal ones?', a: 'Both. The security, versioning and documentation requirements differ significantly between a public API third parties will integrate against and an internal service boundary, and we scope for the actual audience rather than treating every API the same way.' },
      { q: 'Can you build an API in front of a system we cannot modify?', a: 'Yes, that is a common request, particularly for legacy systems that were never designed with an API in mind. The integration layer sits in front of the existing system rather than requiring changes to it.' },
      { q: 'How do you decide which system owns which data when two platforms overlap?', a: 'By mapping the actual data flow with the teams that use each system, then defining ownership explicitly rather than assuming it. This is usually the first and most important step in any integration project, before any code is written.' },
      { q: 'What happens when we need to change the API later without breaking existing integrations?', a: 'Versioning is built in from the first release specifically so this is possible. A new version can ship alongside the old one, giving existing integrations time to migrate rather than breaking on deployment.' },
    ],
    relatedSpokes: ['legacy-system-modernization', 'financial-messaging-schema-integration', 'website-development'],
    relatedCaseStudies: [],
    relatedPosts: [],
  },

  // ===========================================================================
  // PILLAR: fintech-software-development
  // ===========================================================================
  {
    slug: 'core-banking-software-development',
    parentSlug: 'fintech-software-development',
    navLabel: 'Financial Software',
    h1: 'Core Banking Software Development',
    seoTitle: 'Core Banking Software Development',
    description:
      'Core banking development and modernisation: accounts, ledgers and lending engineered alongside your existing core, not as a full replacement.',
    summary: 'Core banking and lending platform engineering, usually alongside an existing core rather than replacing it outright.',
    icon: 'bi-bank',
    symptoms: [
      'Your core cannot give you a real-time view of a transaction',
      'Launching a product means a change request to a vendor and a long queue',
      'Reconciliation between the ledger and the rail is a manual morning job',
      'You need a capability the core was never designed to support',
    ],
    intro: [
      'Most institutions do not replace their core banking system outright; the risk and cost of a full replacement is rarely justified when the actual need is a specific capability the existing core cannot support. Our core banking work usually means building alongside an incumbent core, at the transaction event and customer record level.',
      'This covers account management, ledger systems, digital wallets and lending platforms, whether that is a new capability layered on an existing core or a modernised replacement for one part of it.',
    ],
    offerings: [
      { title: 'Account and ledger systems', body: 'Double-entry ledger design and account management built for audit correctness, since a banking ledger has to be provably right, not just functionally correct.' },
      { title: 'Digital wallets and lending platforms', body: 'Wallet balance and transaction management, and lending origination and servicing systems, built to integrate with an existing core rather than assume a greenfield environment.' },
      { title: 'Core-adjacent integration', body: 'A transaction event stream your core can emit into, where the core itself cannot be modified, so new capability does not require touching the system of record.' },
      { title: 'Regulatory reporting hooks', body: 'Ledger and transaction data structured so it can feed AML, tax and prudential reporting without a separate reconciliation step.' },
    ],
    howWeHelp: [
      'The central question in almost every core banking engagement is whether the existing core can emit an immutable transaction event stream. Where it can, we integrate at that level and build new capability without touching the core. Where it cannot, that gap becomes the first thing we build, because everything downstream depends on it.',
      'We do not default to "replace the core." A full core replacement is a multi-year, high-risk undertaking that is justified far less often than vendors selling core replacements suggest, and we say so when a narrower, integration-based approach solves the actual problem.',
    ],
    approach: [
      'We assess the existing core’s integration surface before proposing an architecture: what it can emit, what it can accept, and where the gaps are.',
      'New ledger or account logic is designed to reconcile against the core’s own records continuously, not just at go-live, since a ledger discrepancy discovered months later is far more expensive to trace.',
    ],
    technologies: ['Node.js', 'Java', 'Go', 'PostgreSQL', 'Kafka', 'ISO 8583', 'ISO 20022'],
    industries: ['Banking & Fintech'],
    faqs: [
      { q: 'Do you replace our existing core banking system or work alongside it?', a: 'Alongside it in most cases. Full core replacement is a significant undertaking that is only justified when the existing core genuinely cannot support what the institution needs, and we assess that honestly rather than defaulting to a replacement.' },
      { q: 'What if our current core cannot emit a real-time transaction feed?', a: 'That becomes the first thing we build: an event stream or polling layer that gives new systems a reliable view of transactions without modifying the core itself.' },
      { q: 'How do you ensure a new ledger reconciles with our existing books?', a: 'Through continuous reconciliation against the core’s own records instead of a one-time validation at launch, so any discrepancy surfaces immediately instead of months later.' },
      { q: 'Can this support both digital wallets and traditional lending products?', a: 'Yes, both are built on the same underlying account and ledger architecture, which is more efficient than treating them as unrelated systems.' },
    ],
    relatedSpokes: ['payment-gateway-development', 'mastercard-visa-integration', 'transaction-monitoring-software-development'],
    relatedCaseStudies: ['corebanking-aml-suite', 'finsync-digital-wallet'],
    relatedPosts: ['raast-integration-guide-instant-payments-pakistan'],
  },
  {
    slug: 'payment-gateway-development',
    parentSlug: 'fintech-software-development',
    navLabel: 'Payment Gateways',
    h1: 'Payment Gateway Development',
    seoTitle: 'PCI-DSS Payment Gateway Development',
    description:
      'Payment gateway development engineered to PCI-DSS: card processing, local rail connectivity and settlement reconciliation for licensed institutions.',
    summary: 'Payment gateway and switching infrastructure engineered to PCI-DSS, connecting card networks and local payment rails.',
    icon: 'bi-credit-card-2-front',
    symptoms: [
      'Failed payments leave the ledger and the network disagreeing',
      'You are scoped for PCI-DSS and the assessment is looming',
      'A processor outage takes your payments down with no fallback',
      'Settlement discrepancies are found days later, by a person',
    ],
    intro: [
      'A payment gateway sits at the point where a transaction can fail expensively and publicly, so the engineering discipline around it is different from most software: every state has to be recoverable, every failure mode has to be handled explicitly, and the system has to be built to PCI-DSS requirements from the start rather than audited into compliance afterwards.',
      'We build payment gateways and switching infrastructure that connect card networks and local payment rails, for licensed institutions and EMIs that need infrastructure they control instead of a black-box processor.',
    ],
    offerings: [
      { title: 'Card processing and switching', body: 'Transaction routing and switching built on ISO 8583 and ISO 20022 messaging, handling authorisation, capture and reversal with the state machine correctness a payment flow requires.' },
      { title: 'Local rail connectivity', body: 'Integration with RAAST and 1LINK for institutions operating in Pakistan, or the equivalent local instant-payment infrastructure elsewhere.' },
      { title: 'Settlement and reconciliation', body: 'Reconciliation logic that catches a mismatch between what was authorised, what settled, and what the ledger records, since that gap is where payment systems quietly lose money.' },
      { title: 'PCI-DSS-aligned architecture', body: 'Tokenisation, scoped access and audit logging designed to the requirements a PCI-DSS assessment will test, engineered in rather than retrofitted before an audit.' },
    ],
    howWeHelp: [
      'The failure mode we design against most carefully is the partial transaction: authorisation succeeds, capture fails, and the system is left in a state where money has moved but the ledger disagrees about how much or to whom. Most payment outages we are called in to fix trace back to a state this was never designed for.',
      'We also build for reconciliation from day one rather than adding it once a discrepancy is discovered. A gateway that cannot prove its own numbers match the network’s is not something a bank can put its name behind.',
    ],
    approach: [
      'Every transaction state, authorised, captured, reversed, failed, timed out, is modelled explicitly before implementation, because the states nobody designs for are the ones that cause incidents.',
      'PCI-DSS scope is defined early: which components touch card data, and how to minimise that surface, since a smaller scope is both more secure and cheaper to audit.',
    ],
    technologies: ['Node.js', 'Java', 'Go', 'PostgreSQL', 'Kafka', 'ISO 8583', 'ISO 20022', 'RAAST', '1LINK', 'PCI-DSS'],
    industries: ['Banking & Fintech', 'E-Commerce & Retail'],
    faqs: [
      { q: 'Does NovuLabs hold PCI-DSS certification?', a: 'No, and that distinction matters: PCI-DSS certification is held by the institution operating the payment environment, not by the development vendor building it. We engineer to PCI-DSS requirements; the certification itself belongs to whoever runs the certified environment.' },
      { q: 'Can you integrate with RAAST or 1LINK for a Pakistani institution?', a: 'Yes, that connectivity is a core part of this work for institutions operating locally, alongside card network integration for organisations that also need Mastercard or Visa connectivity.' },
      { q: 'How do you handle a transaction that fails partway through processing?', a: 'By modelling every intermediate state explicitly before implementation, so a failure at any point has a defined, recoverable outcome rather than leaving the ledger and the network settlement disagreeing about what happened.' },
      { q: 'What happens during reconciliation if our ledger and the network settlement do not match?', a: 'The reconciliation process is built to surface that discrepancy immediately with enough detail to investigate it, rather than requiring someone to notice a shortfall days later during a manual review.' },
    ],
    relatedSpokes: ['mastercard-visa-integration', 'core-banking-software-development'],
    relatedCaseStudies: ['tranzaxis-payment-gateway', 'finsync-digital-wallet'],
    relatedPosts: ['raast-integration-guide-instant-payments-pakistan'],
  },
  {
    slug: 'mastercard-visa-integration',
    parentSlug: 'fintech-software-development',
    navLabel: 'Mastercard / Visa Integration',
    h1: 'Mastercard and Visa Integration',
    seoTitle: 'Mastercard & Visa Integration Services',
    description:
      'Card scheme integration for issuing and acquiring, including MDES and VTS tokenization, taken through scheme certification with the operating institution.',
    summary: 'Card scheme issuing and acquiring integration, including tokenization, taken through certification with the institution that operates it.',
    icon: 'bi-patch-check-fill',
    symptoms: [
      'Scheme certification has failed once already and the feedback is opaque',
      'You need tokenisation for a wallet and MDES or VTS is unfamiliar ground',
      'Issuing and acquiring are being quoted as one project by someone who has done neither',
      'Your processor\'s roadmap does not include what you need this year',
    ],
    intro: [
      'Integrating with Mastercard and Visa is not a single API call; it is a certification process the scheme runs against the institution operating the platform, covering issuing, acquiring, and tokenisation depending on what the institution offers. We build the technical integration and support the institution through that certification process.',
      'This work is scheme-specific and detail-heavy: message formats, tokenisation flows and the specific test cases each network requires before granting production access.',
    ],
    offerings: [
      { title: 'Issuing integration', body: 'Card issuing flows including provisioning, authorisation and lifecycle management for institutions issuing Mastercard or Visa cards.' },
      { title: 'Acquiring integration', body: 'Merchant acquiring connectivity for institutions processing card payments on the acceptance side.' },
      { title: 'Tokenisation: MDES and VTS', body: 'Mastercard Digital Enablement Service and Visa Token Service integration for tokenised card credentials in digital wallets and card-on-file scenarios.' },
      { title: 'Certification support', body: 'Preparing the technical documentation and test evidence the scheme requires, and supporting the institution through its own certification process.' },
    ],
    howWeHelp: [
      'Scheme certification fails most often on detail: a message field formatted slightly wrong, a test case the integration was not built to handle, a tokenisation flow that works for the common path but not the specific edge case the scheme tests for. We build against the scheme’s actual specification and test cases, not a simplified interpretation of them.',
      'We are precise about who holds what here. Scheme certification is issued to the institution operating the platform, not to us as the development vendor. Our role is building the integration correctly and supporting the institution’s own certification process, and we do not represent that differently.',
    ],
    approach: [
      'We work from the scheme’s current technical specification rather than a prior integration, since Mastercard and Visa update requirements and a stale reference is a common source of certification failures.',
      'Test cases are run against the scheme’s own certification suite before submission, so issues surface internally rather than during the formal certification cycle.',
    ],
    technologies: ['Node.js', 'Java', 'Go', 'PostgreSQL', 'Kafka', 'ISO 8583', 'PCI-DSS'],
    industries: ['Banking & Fintech'],
    faqs: [
      { q: 'Is NovuLabs Mastercard or Visa certified?', a: 'No, and this is precise rather than a technicality: scheme certification is issued to the institution operating the platform, not to the firm that built it. We engineer the integration and support the institution through its own certification with the scheme.' },
      { q: 'What is the difference between MDES and VTS?', a: 'MDES is Mastercard’s tokenisation service and VTS is Visa’s equivalent. Both replace a stored card number with a token for digital wallet and card-on-file use, and which one (or both) you need depends on which schemes your cards are issued on.' },
      { q: 'How long does scheme certification typically take?', a: 'It depends on the scheme, the specific certification track, and how many rounds of test-case failures occur before the submission passes. We do not quote a fixed timeline because it is genuinely outside our control; our part is building the integration to minimise avoidable failures.' },
      { q: 'Do you support both issuing and acquiring, or just one?', a: 'Both, depending on what the institution offers. Issuing and acquiring are different integration paths with different requirements, and we scope for whichever, or both, applies to your business.' },
    ],
    relatedSpokes: ['payment-gateway-development', 'core-banking-software-development'],
    relatedCaseStudies: ['tranzaxis-payment-gateway', 'finsync-digital-wallet'],
    relatedPosts: [],
  },

  // ===========================================================================
  // PILLAR: aml-cft-compliance-software
  // ===========================================================================
  {
    slug: 'aml-case-management-risk-scoring',
    parentSlug: 'aml-cft-compliance-software',
    navLabel: 'AML Case Management',
    h1: 'AML Case Management and Risk Scoring',
    seoTitle: 'AML Case Management Software',
    description:
      'AML case management and risk scoring: the analyst workflow, investigation tooling and audit trail behind an alert, not only the detection engine.',
    summary: 'The analyst-facing side of AML: case workflow, risk scoring and the audit trail an examiner reviews months later.',
    icon: 'bi-shield-lock-fill',
    symptoms: [
      'Case status is tracked in a spreadsheet outside the monitoring system',
      'Analysts cannot show why a case was closed six months later',
      'Risk scoring rules need an engineering ticket to change',
      'An examination found gaps in your decision records',
    ],
    intro: [
      'An alert is not a decision. Between a transaction monitoring system flagging something and a filed STR or a cleared case, there is a workflow: an analyst investigates, a risk score gets applied or adjusted, a decision gets made, and all of it has to be reconstructable by an examiner who was not there when it happened.',
      'This is that layer: risk scoring, case assignment, investigation tooling and the audit trail, separate from the detection engine covered on the transaction monitoring page and the alerting logic itself.',
    ],
    offerings: [
      { title: 'Risk scoring engine', body: 'Customer and transaction risk scoring based on factors your compliance team defines, adjustable as risk typologies change without a code deployment.' },
      { title: 'Case management workflow', body: 'Alert assignment, investigation notes, escalation paths and disposition, built around how your compliance team actually works instead of a generic ticketing system relabelled for AML.' },
      { title: 'Audit trail and evidence packs', body: 'Every decision, the data behind it, the analyst who made it, and the reasoning, retained in a form an examiner can review without reconstructing it after the fact.' },
      { title: 'Regulatory reporting handoff', body: 'Cases that result in an STR or CTR flow directly into the goAML reporting pipeline (see the dedicated page) rather than requiring re-entry.' },
    ],
    howWeHelp: [
      'The problem we see most often is a monitoring system that generates alerts well but has no real workflow behind it: a spreadsheet tracking case status, disposition reasoning kept in someone’s notes, no consistent record of why a case was cleared. That works until an examination, and then it is the single biggest source of findings.',
      'Case management also has to survive staff turnover. If the reasoning behind a decision only exists in one analyst’s memory, the institution has a gap the moment that analyst leaves, regardless of how good the original decision was.',
    ],
    approach: [
      'We design the case record so it stands on its own for an examiner: the alert, the data reviewed, the decision, and the reasoning, without requiring anyone to explain it verbally.',
      'Risk scoring logic is kept configurable by the compliance team, not locked inside code that requires an engineering change for every typology update.',
    ],
    technologies: ['Python', 'Java', 'PostgreSQL', 'Kafka'],
    industries: ['Banking & Fintech'],
    faqs: [
      { q: 'How is this different from your transaction monitoring service?', a: 'Transaction monitoring is the detection engine that generates alerts from transaction patterns. This is what happens after an alert exists: assigning it, investigating it, scoring risk, and recording the decision. Most institutions need both, and they integrate directly.' },
      { q: 'Can compliance staff adjust risk scoring without engineering involvement?', a: 'Yes, that is a deliberate design goal. Risk typologies change faster than most institutions can get an engineering change deployed, so scoring rules are built to be configurable by the compliance team.' },
      { q: 'What does the audit trail capture?', a: 'The alert, the data the analyst reviewed, the decision made, the reasoning recorded, and who made it, retained in a form that reconstructs the full picture for an examiner without requiring anyone to explain it after the fact.' },
      { q: 'Does this integrate with our existing transaction monitoring system?', a: 'In most cases yes, through the alert data the monitoring system already generates. Where we also build the monitoring engine, the two are designed together; where we are adding case management to an existing monitoring system, we integrate against its alert output.' },
    ],
    relatedSpokes: ['transaction-monitoring-software-development', 'sanctions-pep-screening-software', 'goaml-fmu-reporting-integration'],
    relatedCaseStudies: ['corebanking-aml-suite'],
    relatedPosts: ['navigating-aml-cft-regulations-pakistan-2026'],
  },
  {
    slug: 'sanctions-pep-screening-software',
    parentSlug: 'aml-cft-compliance-software',
    navLabel: 'Sanctions & PEP Screening',
    h1: 'Sanctions and PEP Screening Software',
    seoTitle: 'Sanctions & PEP Screening Software',
    description:
      'Sanctions and PEP screening software for onboarding and ongoing monitoring: name matching against OFAC and NACTA lists, tuned to reduce false positives.',
    summary: 'Name-matching and screening against sanctions and PEP lists, tuned so analysts are not drowning in false positives.',
    icon: 'bi-flag-fill',
    symptoms: [
      'Analysts clear ten false positives for every real match',
      'Screening happens at onboarding and never again after that',
      'A list update silently broke matching and nobody noticed for weeks',
      'Name transliteration is producing misses you only find by accident',
    ],
    intro: [
      'Screening a customer against a sanctions or politically-exposed-persons list sounds like a lookup. In practice it is a fuzzy-matching problem: names transliterate differently across languages, dates of birth are sometimes missing, and a screening engine tuned too loosely buries analysts in false positives while one tuned too tight misses genuine matches.',
      'We build screening systems for onboarding and ongoing monitoring against OFAC, NACTA and equivalent sanctions and PEP data sources, tuned for your actual customer base instead of a generic default.',
    ],
    offerings: [
      { title: 'Name matching and fuzzy logic', body: 'Matching algorithms tuned for the transliteration and formatting variance in your actual customer data, not a naive exact-match or an untuned fuzzy match that floods analysts.' },
      { title: 'Onboarding and ongoing screening', body: 'Screening at customer onboarding and on a recurring basis against updated lists, since a customer who was clean at onboarding is not guaranteed to stay that way.' },
      { title: 'List management', body: 'Ingesting and updating sanctions and PEP list data from your chosen data provider, with the screening engine checked against known test cases after every update.' },
      { title: 'False positive tuning', body: 'Continuous tuning based on real dispositions, so the screening engine gets more accurate as your analysts confirm or reject matches, not static from launch.' },
    ],
    howWeHelp: [
      'The operational cost most institutions underestimate is analyst time spent clearing false positives. A screening engine that is technically working but poorly tuned can generate ten false alerts for every genuine one, which either burns out the compliance team or, worse, trains them to clear alerts without reading them properly.',
      'We treat tuning as ongoing work, not a one-time calibration. As your customer base and the sanctions lists themselves change, the matching thresholds that worked at launch drift, and we build the tooling to monitor and adjust that over time.',
    ],
    approach: [
      'We tune matching thresholds against your actual customer data’s naming conventions, not a generic benchmark, since transliteration patterns vary significantly by region and language.',
      'Every list update runs against a set of known test cases before going live, so a data provider’s format change does not silently break matching.',
    ],
    technologies: ['Python', 'Java', 'PostgreSQL', 'OFAC', 'NACTA'],
    industries: ['Banking & Fintech'],
    faqs: [
      { q: 'What sanctions and PEP lists do you screen against?', a: 'OFAC and NACTA are the two most common for institutions operating in or transacting with Pakistan and the US; the specific list set depends on your regulatory obligations and correspondent banking relationships, and we integrate the data sources your compliance programme requires.' },
      { q: 'How do you reduce false positives without missing genuine matches?', a: 'By tuning the matching algorithm against your actual customer data and continuously adjusting based on real analyst dispositions, rather than shipping a fixed threshold and leaving it untouched.' },
      { q: 'Do you screen at onboarding only, or ongoing as well?', a: 'Both, in most implementations. Onboarding screening alone misses customers who become sanctioned or politically exposed after the relationship starts, so ongoing rescreening against updated lists is standard.' },
      { q: 'Can this integrate with our case management system?', a: 'Yes, a screening match should flow into case management as a case an analyst can investigate and disposition, rather than sitting in a separate system the compliance team has to check manually.' },
    ],
    relatedSpokes: ['transaction-monitoring-software-development', 'aml-case-management-risk-scoring'],
    relatedCaseStudies: ['corebanking-aml-suite'],
    relatedPosts: ['navigating-aml-cft-regulations-pakistan-2026'],
  },
  {
    slug: 'transaction-monitoring-software-development',
    parentSlug: 'aml-cft-compliance-software',
    navLabel: 'Transaction Monitoring',
    h1: 'Transaction Monitoring Software Development',
    seoTitle: 'Transaction Monitoring Software Development',
    description:
      'Real-time transaction monitoring systems combining deterministic rules with model-assisted prioritization, designed so every alert has an explainable reason.',
    summary: 'Real-time monitoring built on rules an examiner can follow, with machine learning prioritizing the analyst queue rather than deciding it.',
    icon: 'bi-activity',
    symptoms: [
      'Alert volume exceeds what your team can honestly review',
      'Rules were set years ago and nobody remembers the reasoning',
      'You cannot reproduce why an alert fired last quarter',
      'A model scores transactions and nobody can explain a single score',
    ],
    intro: [
      'Transaction monitoring is the detection layer of an AML programme: watching transaction patterns in real time or near real time and generating alerts when something matches a defined typology. The engineering challenge is scale (monitoring millions of transactions) combined with precision (not burying analysts in noise).',
      'We build monitoring engines around deterministic rules, since every alert needs an explainable reason for an examiner, with machine learning used to prioritise the analyst queue rather than replacing the rules that generate alerts.',
    ],
    offerings: [
      { title: 'Rule engine design', body: 'Deterministic detection rules built around your institution’s actual risk typologies, structured so a rule’s logic can be explained to an examiner in plain language.' },
      { title: 'Real-time and batch monitoring', body: 'Streaming detection for time-sensitive typologies and batch analysis for patterns that only become visible over a longer window, depending on what each typology requires.' },
      { title: 'ML-assisted prioritisation', body: 'A model that ranks the alert queue by likely relevance, improving analyst throughput without making an unexplainable model output the reason a case was opened or closed.' },
      { title: 'Threshold tuning and backtesting', body: 'Rules tested against historical transaction data before going live, so a new rule’s alert volume and accuracy are known quantities, not a surprise in production.' },
    ],
    howWeHelp: [
      'The tension in every transaction monitoring build is between catching genuine suspicious activity and generating so many alerts that analysts cannot meaningfully review them. We resolve that with rules first, since a rule’s logic is auditable, and machine learning applied to prioritisation, since that keeps a human-explainable reason behind every alert of record.',
      'Scale is the other real engineering problem: monitoring transactions in real time across a large institution is a streaming data problem as much as a compliance one, and the architecture has to handle both correctly.',
    ],
    approach: [
      'New rules are backtested against historical data before deployment, so we know their alert volume and rough accuracy before analysts see a single live alert from them.',
      'Machine learning sits on top of the rule engine as a prioritisation layer, never as the sole reason an alert exists, so every case an examiner reviews has a rule they can trace.',
    ],
    technologies: ['Python', 'Java', 'PostgreSQL', 'Kafka', 'goAML XML'],
    industries: ['Banking & Fintech'],
    faqs: [
      { q: 'Do you use machine learning for transaction monitoring?', a: 'Alongside deterministic rules, not instead of them. Rules produce the alerts of record because every decision needs an explainable reason for an examiner. A model can prioritise the analyst queue, which improves throughput without making an unexplainable artefact load-bearing for compliance.' },
      { q: 'How do you test a new detection rule before it goes live?', a: 'By backtesting it against historical transaction data first, so the alert volume and rough accuracy are known before analysts see a live alert. A rule that generates an unmanageable volume gets tuned before deployment, not discovered after.' },
      { q: 'Can this handle real-time monitoring at scale?', a: 'Yes, the architecture is built as a streaming system for typologies that need real-time detection, with batch processing for patterns that only emerge over a longer window. Which approach applies depends on the specific typology.' },
      { q: 'How does this connect to case management and reporting?', a: 'An alert generated here flows into the case management and risk scoring layer for investigation, and a case that results in a filing goes to the goAML reporting pipeline. All three are designed to connect rather than requiring manual handoff.' },
    ],
    relatedSpokes: ['aml-case-management-risk-scoring', 'sanctions-pep-screening-software', 'goaml-fmu-reporting-integration'],
    relatedCaseStudies: ['corebanking-aml-suite'],
    relatedPosts: ['navigating-aml-cft-regulations-pakistan-2026'],
  },
  {
    slug: 'financial-messaging-schema-integration',
    parentSlug: 'aml-cft-compliance-software',
    navLabel: 'XML Schema Integration',
    h1: 'Financial Messaging Schema Integration',
    seoTitle: 'Financial Messaging Schema Integration',
    description:
      'ISO 20022, SWIFT and goAML XML schema integration for regulatory reporting and financial messaging: validated internally before anything reaches a regulator.',
    summary: 'ISO 20022, SWIFT and goAML XML integration, validated against the schema before anything is submitted to a regulator or network.',
    icon: 'bi-filetype-xml',
    symptoms: [
      'Submissions are being rejected and the error messages are unhelpful',
      'A schema version changed and you found out from the rejections',
      'Validation happens after submission rather than before it',
      'Message mapping lives in one engineer\'s head',
    ],
    intro: [
      'Financial and regulatory messaging runs on strict schemas: ISO 20022 for payments messaging, SWIFT XML for correspondent banking, goAML XML for AML reporting to Pakistan’s Financial Monitoring Unit. Getting the schema wrong does not fail gracefully; it means a rejected submission, a bounced payment, or a compliance filing that has to be corrected and resubmitted.',
      'We build the integration layer that generates, validates and submits these messages, checking conformance against the schema in your own environment before anything reaches the regulator or the network.',
    ],
    offerings: [
      { title: 'goAML XML generation and validation', body: 'STR and CTR submissions generated as goAML-conformant XML and validated against the schema internally before filing, so rejections are caught before submission, not after.' },
      { title: 'ISO 20022 and SWIFT messaging', body: 'Payment and correspondent banking message generation and parsing built to the current schema version, for institutions integrating with SWIFT or ISO 20022-based payment rails.' },
      { title: 'HL7 FHIR for healthcare messaging', body: 'Where a client’s integration needs extend into healthcare interoperability, the same schema-validation discipline applies to HL7 FHIR messaging.' },
      { title: 'Schema versioning and change management', body: 'Monitoring for schema updates from the relevant authority and updating the integration before an outdated schema causes rejected submissions.' },
    ],
    howWeHelp: [
      'Most schema rejection issues we are called in to fix trace back to a subtle mismatch: a field format that changed in a schema update nobody tracked, an edge case the original integration never tested, or a validation step that was skipped to save time and now costs far more in rejected filings.',
      'We validate internally against the schema before anything is submitted externally, which sounds obvious but is the step most integrations under time pressure skip. The cost of catching a rejection internally is minutes; the cost of catching it after submission to FMU or a payment network is a compliance or operational incident.',
    ],
    approach: [
      'We build a validation step into your environment that checks conformance before submission, so schema errors are caught internally rather than discovered as rejections.',
      'Schema updates are monitored proactively rather than discovered when a submission starts failing, since regulatory and network schemas do change.',
    ],
    technologies: ['Python', 'Java', 'goAML XML', 'ISO 20022'],
    industries: ['Banking & Fintech', 'Healthcare & MedTech'],
    faqs: [
      { q: 'Do you integrate directly with the FMU goAML portal?', a: 'Yes. We generate goAML-conformant XML for STR and CTR submissions and validate it against the schema in your own environment before anything reaches FMU, so schema rejections are caught internally rather than after filing.' },
      { q: 'What happens if the goAML or ISO 20022 schema changes?', a: 'We monitor for schema updates from the relevant authority and update the integration proactively, so a schema change does not surface as a batch of rejected submissions before anyone notices.' },
      { q: 'Can you validate messages before they are submitted, or only build the generation logic?', a: 'Validation is built in as a required step before submission, not an optional extra. The integration checks conformance against the current schema internally, which is the whole point of building this layer rather than submitting blind.' },
      { q: 'Does this work for SWIFT and ISO 20022 as well as goAML?', a: 'Yes, the underlying discipline (schema-accurate generation, internal validation before submission, proactive update monitoring) applies across goAML, ISO 20022, SWIFT XML and HL7 FHIR, depending on which messaging standard your integration needs.' },
    ],
    relatedSpokes: ['goaml-fmu-reporting-integration', 'transaction-monitoring-software-development', 'api-development-integration'],
    relatedCaseStudies: ['corebanking-aml-suite'],
    relatedPosts: ['goaml-xml-integration-str-ctr-reporting-pakistan'],
  },
  {
    slug: 'goaml-fmu-reporting-integration',
    parentSlug: 'aml-cft-compliance-software',
    navLabel: 'FMU Pakistan Reporting',
    h1: 'goAML and FMU Regulatory Reporting Integration',
    seoTitle: 'goAML & FMU Reporting Integration',
    description:
      'goAML integration and FMU Pakistan regulatory reporting: STR and CTR filing pipelines built for the Anti-Money Laundering Act 2010 and SBP requirements.',
    summary: 'STR and CTR filing pipelines built directly for goAML and Pakistan’s Financial Monitoring Unit reporting obligations.',
    icon: 'bi-bank2',
    symptoms: [
      'Filings are re-typed into the goAML portal by hand',
      'You cannot connect a filed report back to the case that produced it',
      'STR narratives are assembled from scattered analyst notes at filing time',
      'An FMU rejection took days to diagnose',
    ],
    intro: [
      'Institutions regulated under Pakistan’s Anti-Money Laundering Act 2010 report suspicious and currency transactions to the Financial Monitoring Unit through the goAML system. That reporting obligation touches case management, schema-accurate XML generation, and the submission workflow itself, and a gap in any part of that chain becomes a compliance finding.',
      'This page covers the FMU reporting pipeline specifically: taking a case decision through to a correctly filed STR or CTR. The XML schema work behind it is covered on the messaging integration page linked below.',
    ],
    offerings: [
      { title: 'STR and CTR filing pipeline', body: 'A pipeline from case disposition to goAML submission, so a decision to file does not require manual re-entry into a separate portal.' },
      { title: 'FMU and SBP compliance alignment', body: 'Reporting logic built against the specific obligations of the Anti-Money Laundering Act 2010 and SBP’s regulatory framework, not a generic AML reporting template.' },
      { title: 'Filing audit trail', body: 'A record of every filing, what triggered it, who approved it, and its submission status, retained for examination.' },
      { title: 'Narrative quality support', body: 'Structured case data that supports writing a filing narrative with the detail an examiner expects, instead of a generic template narrative.' },
    ],
    howWeHelp: [
      'The gap we most often find in existing reporting processes is the manual step between a compliance decision and the actual goAML filing: someone re-entering case data into the portal by hand, with no system-level record connecting the two. That is both an operational burden and an audit weakness, since it is hard to prove the filing accurately reflects the case.',
      'We build the pipeline so a filing decision flows through to goAML with the case data intact, and the filing itself is retained alongside the case record it came from, so an examiner can trace the full chain.',
    ],
    approach: [
      'We map your current reporting workflow, including the manual steps, before automating any of it, so we automate the actual obligation rather than a simplified version of it.',
      'Filing generation reuses the schema validation from the messaging integration work, so a filing that reaches FMU has already been checked against the goAML schema internally.',
    ],
    technologies: ['Python', 'Java', 'PostgreSQL', 'goAML XML', 'FMU', 'SBP'],
    industries: ['Banking & Fintech'],
    faqs: [
      { q: 'Do you handle both STR and CTR filings?', a: 'Yes, both suspicious transaction reports and currency transaction reports are covered, built against the specific thresholds and requirements SBP and the Anti-Money Laundering Act 2010 set for each.' },
      { q: 'Can this connect directly to our case management system?', a: 'Yes, that connection is the point: a filing decision made in case management should flow through to goAML submission without manual re-entry, with the audit trail connecting the two.' },
      { q: 'What regulatory framework does this align to?', a: 'Primarily the SBP AML/CFT/CPF regulatory framework and FMU reporting obligations under the Anti-Money Laundering Act 2010, aligned to the FATF Recommendations. Correspondent banking relationships sometimes bring additional sanctions obligations, which we also build to where relevant.' },
      { q: 'How do you support writing the filing narrative itself?', a: 'By structuring the underlying case data so the detail an examiner expects (what was observed, why it was flagged, what was reviewed) is already organised, rather than requiring an analyst to reconstruct it from scattered notes at filing time.' },
    ],
    relatedSpokes: ['financial-messaging-schema-integration', 'aml-case-management-risk-scoring'],
    relatedCaseStudies: ['corebanking-aml-suite'],
    relatedPosts: ['goaml-xml-integration-str-ctr-reporting-pakistan', 'navigating-aml-cft-regulations-pakistan-2026'],
  },

  // ===========================================================================
  // PILLAR: healthcare-software-development
  // ===========================================================================
  {
    slug: 'ehr-clinical-software-development',
    parentSlug: 'healthcare-software-development',
    navLabel: 'Healthcare Software',
    h1: 'EHR and Clinical Systems Development',
    seoTitle: 'EHR & Clinical Software Development',
    description:
      'Electronic health record and clinical systems development built to HL7 FHIR interoperability and the HIPAA Security Rule, including telemedicine integration.',
    summary: 'Electronic health record and clinical software built for real HL7 FHIR interoperability, not a translation layer bolted on at the end.',
    icon: 'bi-heart-pulse-fill',
    symptoms: [
      'A lab or referring provider wants to exchange data and it is a project every time',
      'Clinicians share logins because the real workflow is too slow',
      'Patient data is structured as free text and cannot be analysed',
      'A HIPAA review is scheduled and audit logging is incomplete',
    ],
    intro: [
      'An EHR is only as useful as its ability to exchange data with the rest of a patient’s care: labs, pharmacy, referring providers, and eventually other hospital systems. Building interoperability as a genuine architectural principle rather than a translation layer added at the end determines whether that data exchange is fast or painful for years afterward.',
      'We build EHR and clinical systems, including telemedicine integration, to the HIPAA Security Rule and to HL7 FHIR interoperability, distinct from the revenue-cycle and billing work covered on the medical billing page.',
    ],
    offerings: [
      { title: 'Electronic health records', body: 'Patient record systems built around clinical workflow, structured so the data model supports HL7 FHIR exchange natively rather than requiring a mapping layer bolted on afterward.' },
      { title: 'Telemedicine platforms', body: 'Video consultation and virtual care workflows integrated with the patient record, built on WebRTC for real-time video without a third-party platform dependency.' },
      { title: 'HL7 FHIR and HL7 v2 integration', body: 'Interoperability with labs, pharmacy systems, and other providers using the HL7 standards deployed across most healthcare infrastructure today.' },
      { title: 'Clinical terminology support', body: 'LOINC and SNOMED CT coding where clinical data needs to be structured for interoperability and analytics, not stored as free text.' },
    ],
    howWeHelp: [
      'The interoperability problem shows up later than most clinical software decisions: a system built without FHIR in mind works fine in isolation, then costs significantly more to integrate the first time a lab or referring provider needs to exchange data with it. We design the data model for that exchange from the start.',
      'We also build telemedicine as an integrated part of the clinical record rather than a separate video product bolted alongside it, so a consultation is documented in the same patient history as an in-person visit.',
    ],
    approach: [
      'HL7 FHIR resource modelling happens at the data architecture stage, not as a mapping exercise after the schema is already fixed.',
      'We build to the HIPAA Security Rule’s actual technical safeguards, not a generic security checklist, since healthcare data has specific access-control and audit requirements the rule defines.',
    ],
    technologies: ['.NET Core', 'HL7 FHIR', 'HL7 v2', 'Angular', 'React', 'PostgreSQL', 'WebRTC', 'LOINC', 'SNOMED CT'],
    industries: ['Healthcare & MedTech'],
    faqs: [
      { q: 'Is NovuLabs HIPAA certified?', a: 'HIPAA has no certification regime at all; organisations attest to compliance rather than being certified by a registrar. We build to the HIPAA Security Rule’s technical safeguards, and we are precise about that being an engineering standard we follow, not a certificate we hold.' },
      { q: 'Do you build telemedicine as a separate product or integrated with the EHR?', a: 'Integrated, by default. A telemedicine consultation is a clinical encounter and belongs in the same patient record as any other visit, rather than living in a separate video platform disconnected from the chart.' },
      { q: 'What HL7 standards do you support?', a: 'Both HL7 FHIR, the current interoperability standard, and HL7 v2, which remains widely deployed across existing healthcare infrastructure. Most integration work in practice has to support both, since the systems on the other end of an exchange are not all on FHIR yet.' },
      { q: 'Can this integrate with a hospital’s existing lab or pharmacy systems?', a: 'That is the specific problem FHIR and HL7 v2 integration solve, and it is designed in from the start rather than added once the first integration request arrives.' },
    ],
    relatedSpokes: ['medical-billing-software-development'],
    relatedCaseStudies: ['medicore-ehr-platform', 'carepulse-telemedicine-app'],
    relatedPosts: ['scaling-healthcare-software-hipaa-hl7-fhir'],
  },
  {
    slug: 'medical-billing-software-development',
    parentSlug: 'healthcare-software-development',
    navLabel: 'Medical Billing',
    h1: 'Medical Billing Software Development',
    seoTitle: 'Medical Billing Software Development',
    description:
      'Medical billing and revenue cycle software with ICD-10/CPT coding, claim management and payer integration, built alongside or separate from a clinical EHR.',
    summary: 'Revenue-cycle software: ICD-10/CPT coding, claim management and payer integration, distinct from the clinical record itself.',
    icon: 'bi-clipboard2-pulse-fill',
    symptoms: [
      'Denials are found weeks later and the reason is unclear',
      'Coding errors are caught by the payer rather than by your system',
      'Each payer needs a different manual process',
      'Days in accounts receivable is climbing and nobody can attribute it',
    ],
    intro: [
      'Medical billing is a different problem from clinical documentation, even though the two are closely related and often need to share data. Billing software has its own domain: coding accuracy, claim submission, payer-specific rules, and denial management, and it is worth engineering as its own system rather than an afterthought bolted onto an EHR.',
      'We build billing and revenue-cycle systems with ICD-10 and CPT coding, claim management and payer integration, either alongside a clinical system we are also building or integrated with an EHR the provider already runs.',
    ],
    offerings: [
      { title: 'Coding and claim generation', body: 'ICD-10 and CPT coding support built into the claim generation workflow, reducing the manual coding errors that cause the majority of claim denials.' },
      { title: 'Payer integration', body: 'Claim submission and eligibility verification integrated with the specific payers a provider works with, since payer rules and formats vary and a generic integration handles none of them well.' },
      { title: 'Denial management', body: 'Tracking and workflow for denied claims, since recovering revenue from a denial requires a process, not just a resubmission button.' },
      { title: 'Reporting for revenue-cycle visibility', body: 'Reporting scoped to what a billing team and practice management actually need to act on: days in accounts receivable, denial rates by payer, and collection performance.' },
    ],
    howWeHelp: [
      'The recurring pattern behind billing software problems is claim denials from coding errors or payer-rule mismatches that could have been caught before submission. Building coding validation and payer-specific rule checks into the claim generation step, rather than discovering the error after a denial, is most of the value here.',
      'We also design for the reality that a provider often needs billing to integrate with an EHR built by a different vendor, sometimes years earlier. That integration work is usually the actual scope, not the billing logic itself.',
    ],
    approach: [
      'Claim validation happens before submission, checking coding accuracy and payer-specific rules, so denials are prevented rather than managed after the fact.',
      'Where billing needs to integrate with an existing EHR, we build against that system’s actual data export capability rather than assuming an ideal integration surface.',
    ],
    technologies: ['.NET Core', 'React', 'PostgreSQL'],
    industries: ['Healthcare & MedTech'],
    faqs: [
      { q: 'Can this integrate with our existing EHR from a different vendor?', a: 'In most cases yes, through whatever data export or API the existing EHR supports. The integration surface varies significantly by vendor, so we scope this specifically after reviewing what your current system can actually expose.' },
      { q: 'How do you reduce claim denials from coding errors?', a: 'By validating ICD-10 and CPT coding and payer-specific submission rules before the claim is submitted, catching the errors that would otherwise come back as a denial weeks later.' },
      { q: 'Do you handle claims for multiple payers with different requirements?', a: 'Yes, payer-specific submission rules and formats are built into the integration for each payer a practice actually works with, rather than a one-size-fits-all submission format that fails silently for some payers.' },
      { q: 'Is this HIPAA-aligned given it handles patient billing data?', a: 'Yes, the same HIPAA Security Rule technical safeguards that apply to clinical data apply here, since billing data includes protected health information.' },
    ],
    relatedSpokes: ['ehr-clinical-software-development'],
    relatedCaseStudies: ['medicore-ehr-platform'],
    relatedPosts: ['scaling-healthcare-software-hipaa-hl7-fhir'],
  },

  // ===========================================================================
  // PILLAR: mobile-app-development
  // ===========================================================================
  {
    slug: 'ios-app-development',
    parentSlug: 'mobile-app-development',
    navLabel: 'iOS Development',
    h1: 'Native iOS App Development',
    seoTitle: 'Native iOS App Development Services',
    description:
      'Native iOS app development in Swift and SwiftUI, for apps that need platform-specific performance, App Store approval discipline, and deep iOS API access.',
    summary: 'Native Swift and SwiftUI development for apps that need the platform’s full capability, not a cross-platform approximation of it.',
    icon: 'bi-apple',
    symptoms: [
      'App Store review has rejected you and the reason is not obvious',
      'You need a platform API that your cross-platform framework does not expose',
      'Performance or battery behaviour is failing on real devices',
      'Biometric and secure storage requirements are beyond a wrapper',
    ],
    intro: [
      'Native iOS development makes sense when an app depends on platform-specific capability a cross-platform framework cannot expose well: deep hardware integration, the newest iOS APIs on release day, or performance requirements where a compiled cross-platform layer introduces measurable overhead.',
      'We build in Swift and SwiftUI, with the App Store approval process, Apple’s review guidelines and platform conventions treated as part of the build, not an afterthought at submission time.',
    ],
    offerings: [
      { title: 'Swift and SwiftUI development', body: 'Native apps built with current Apple frameworks, giving full access to platform capability and the performance characteristics of a compiled native app.' },
      { title: 'App Store submission readiness', body: 'Building against Apple’s current review guidelines throughout development, so submission is a formality instead of a round of rejections and rework.' },
      { title: 'Platform-specific integration', body: 'Deep integration with iOS-specific capability such as biometric authentication, push notifications and background processing, built the way the platform expects rather than through a compatibility layer.' },
      { title: 'Performance engineering', body: 'Profiling and optimisation for the specific performance and battery characteristics iOS users and Apple’s review process both expect.' },
    ],
    howWeHelp: [
      'App Store rejections are a common, avoidable cost. Most of them trace back to guideline violations that were knowable during development, not surprises. We build against the current guidelines from the start rather than treating submission as the first point they get checked.',
      'For apps handling sensitive data (financial transactions, health records), native development also gives more direct control over how the platform’s security features (Keychain, biometric authentication, secure enclave) are used, which matters more than it does for a lower-stakes consumer app.',
    ],
    approach: [
      'We track Apple’s current App Store review guidelines throughout the build, not just at submission, since a guideline violation discovered late can mean rework close to launch.',
      'Platform-specific features are implemented the way iOS expects them to work, following Apple’s human interface guidelines, rather than adapting a cross-platform pattern to fit.',
    ],
    technologies: ['Swift', 'Firebase', 'WebRTC'],
    industries: ['Banking & Fintech', 'Healthcare & MedTech'],
    faqs: [
      { q: 'When should we build native iOS instead of cross-platform?', a: 'When the app genuinely needs platform-specific capability, the newest iOS APIs immediately on release, or performance headroom a cross-platform layer would cost. If neither applies, cross-platform is usually the more efficient choice, and we will say so.' },
      { q: 'How do you avoid App Store rejections?', a: 'By building against Apple’s current review guidelines throughout development rather than only checking them at submission, so the app is compliant by the time it is ready to submit, not after a rejection reveals a problem.' },
      { q: 'Do you handle biometric authentication and secure data storage?', a: 'Yes, using iOS’s native security capabilities like Keychain and biometric authentication as the platform intends, which is particularly relevant for financial and healthcare apps handling sensitive data.' },
      { q: 'Can a native iOS app share a backend with an Android or web app?', a: 'Yes, the backend and API layer are typically shared across platforms regardless of whether the client apps are native or cross-platform. Native development affects the client only, not the server architecture.' },
    ],
    relatedSpokes: ['android-app-development', 'api-development-integration'],
    relatedCaseStudies: ['finsync-digital-wallet'],
    relatedPosts: [],
  },
  {
    slug: 'android-app-development',
    parentSlug: 'mobile-app-development',
    navLabel: 'Android Development',
    h1: 'Native Android App Development',
    seoTitle: 'Native Android App Development Services',
    description:
      'Native Android app development in Kotlin for a diverse device ecosystem, including enterprise Google Play deployment and platform-specific integration.',
    summary: 'Kotlin-first native development built for the range of devices and OS versions an Android product has to run on.',
    icon: 'bi-android2',
    symptoms: [
      'It works on a flagship and fails on the mid-range devices your users own',
      'Background sync and notifications behave differently per manufacturer',
      'You need managed distribution rather than the public Play Store',
      'A device fleet in the field is running versions you cannot control',
    ],
    intro: [
      'Android’s device diversity is the real engineering challenge native Android development solves: a product built for a flagship phone on the latest OS version behaves differently on a mid-range device three OS versions behind, and both are real users. That diversity is also why native development sometimes pays off over cross-platform, when an app needs to run well across genuinely varied hardware.',
      'We build Kotlin-first native Android apps, including enterprise deployment through Google Play, with device and OS-version diversity treated as a design constraint from the start.',
    ],
    offerings: [
      { title: 'Kotlin-first native development', body: 'Native apps built in Kotlin, giving full access to current Android APIs and the performance profile of a compiled native application.' },
      { title: 'Device and OS-version testing', body: 'Testing across the range of devices and Android versions your actual user base runs, not just the newest flagship device on the newest OS.' },
      { title: 'Enterprise Play Store deployment', body: 'Managed deployment for enterprise and internal-distribution apps, including the specific requirements of Google Play’s enterprise and managed-device programmes.' },
      { title: 'Platform-specific integration', body: 'Deep integration with Android-specific capability, including background processing and notification behaviour that varies meaningfully across manufacturer OS customisations.' },
    ],
    howWeHelp: [
      'The most common Android production issue is a feature that worked in testing on a flagship device and behaves differently, or fails, on a mid-range device running a manufacturer’s customised OS build. Android’s fragmentation is real and it shows up specifically in background processing, notifications and battery-optimisation behaviour that varies by manufacturer.',
      'For enterprise or field-operations apps specifically, we also design for devices that are older or lower-spec than a typical consumer flagship, since that is often the actual hardware fleet an organisation is deploying to.',
    ],
    approach: [
      'We test against the actual device and OS-version range your users have, not just the newest available hardware, since that is where fragmentation-related bugs actually surface.',
      'Background processing and notification logic is built and tested against the manufacturer-specific OS behaviour (particularly aggressive battery optimisation on some Android skins) that causes the most Android-specific production issues.',
    ],
    technologies: ['Kotlin', 'Firebase', 'WebRTC'],
    industries: ['Banking & Fintech', 'Manufacturing & Logistics', 'Healthcare & MedTech'],
    faqs: [
      { q: 'How do you handle Android device fragmentation?', a: 'By testing against the actual range of devices and OS versions your user base runs rather than only the newest flagship hardware, since manufacturer-specific OS customisations, particularly around battery optimisation, are where most fragmentation bugs surface.' },
      { q: 'Do you support enterprise deployment outside the public Play Store?', a: 'Yes, including managed deployment through Google Play’s enterprise programmes for apps distributed internally rather than to the public.' },
      { q: 'When does native Android make more sense than cross-platform?', a: 'When device diversity or platform-specific behaviour (background processing, deep hardware integration, manufacturer-specific OS quirks) genuinely needs to be handled at the native level. For most business apps without that constraint, cross-platform is the more efficient choice.' },
      { q: 'Can this integrate with the same backend as an iOS or web app?', a: 'Yes, the backend and API layer are shared across platforms regardless of client technology. Choosing native Android affects the client application only.' },
    ],
    relatedSpokes: ['ios-app-development', 'api-development-integration'],
    relatedCaseStudies: [],
    relatedPosts: [],
  },

  // ===========================================================================
  // PILLAR: cloud-ai-automation
  // ===========================================================================
  {
    slug: 'cloud-migration-services',
    parentSlug: 'cloud-ai-automation',
    navLabel: 'Cloud Solutions',
    h1: 'Cloud Migration and Infrastructure Services',
    seoTitle: 'Cloud Migration Services',
    description:
      'Cloud migration and infrastructure engineering on AWS, Azure and GCP: architecture, migration planning and managed Kubernetes infrastructure for enterprises.',
    summary: 'Cloud migration and infrastructure architecture on AWS, Azure or GCP, planned around your actual data residency and uptime constraints.',
    icon: 'bi-cloud-fill',
    symptoms: [
      'Your cloud bill grew after migration instead of shrinking',
      'Infrastructure was configured by hand and nobody can reproduce it',
      'A regulator has asked where the data physically sits and the answer is vague',
      'You migrated the servers and kept every on-premise assumption',
    ],
    intro: [
      'Cloud migration is rarely just "move the servers." It usually means re-architecting for how a cloud platform actually wants to run software: managed services instead of self-hosted equivalents, infrastructure defined as code instead of manually configured, and a cost model that behaves very differently from a fixed-cost data centre if the architecture is not designed for it.',
      'We plan and execute cloud migrations on AWS, Azure and GCP, and build the Kubernetes platform infrastructure underneath applications that need it, distinct from the applied AI and automation work covered on the AI development page.',
    ],
    offerings: [
      { title: 'Migration planning and execution', body: 'A migration plan that accounts for data residency requirements, downtime tolerance and dependency order, not just a lift-and-shift of existing servers.' },
      { title: 'Kubernetes platform engineering', body: 'Container orchestration infrastructure built for the specific reliability and scaling requirements of your workload, using Terraform for infrastructure as code.' },
      { title: 'Multi-cloud and hybrid architecture', body: 'Architecture for organisations with genuine data residency or vendor-diversification requirements, rather than defaulting to a single provider.' },
      { title: 'Observability and monitoring', body: 'Monitoring and alerting via Prometheus and Grafana built in from the start, since a cloud migration without observability just moves an existing blind spot to a new environment.' },
    ],
    howWeHelp: [
      'The migration risk we spend the most time on is data residency and compliance, particularly for regulated institutions where certain data cannot leave a specific jurisdiction. That constraint shapes the entire architecture, not just where the servers physically sit.',
      'Cost is the other common surprise. Cloud infrastructure that mirrors an on-premise architecture too literally often costs more than expected, because cloud pricing rewards a different design pattern (managed services, autoscaling, and workload-appropriate instance types) than a straight lift-and-shift assumes.',
    ],
    approach: [
      'Migration planning starts with data residency, compliance and downtime constraints, since those determine what "migrated" has to mean for your organisation before any infrastructure work begins.',
      'Infrastructure is defined as code from the start using Terraform, so the environment is reproducible and auditable rather than manually configured and undocumented.',
    ],
    technologies: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Docker', 'Prometheus', 'Grafana'],
    industries: ['Banking & Fintech', 'Healthcare & MedTech', 'Manufacturing & Logistics'],
    faqs: [
      { q: 'Can you migrate infrastructure with strict data residency requirements?', a: 'Yes, that constraint is treated as a primary design input rather than an afterthought. For regulated institutions where data cannot leave a specific jurisdiction, the architecture is planned around that requirement from the start, including which cloud regions and services are viable.' },
      { q: 'Which cloud provider do you recommend: AWS, Azure or GCP?', a: 'It depends on your existing infrastructure, compliance requirements and what your team already knows. We do not default to one provider; the choice follows from your actual constraints, and multi-cloud or hybrid architecture is sometimes the right answer.' },
      { q: 'How do you avoid unexpected cloud costs after migration?', a: 'By architecting for how the cloud provider’s pricing actually works (managed services, autoscaling, right-sized instances) rather than mirroring an on-premise setup, which is the most common cause of a migration costing more than projected.' },
      { q: 'Do you set up monitoring and alerting as part of a migration?', a: 'Yes, observability is built in during the migration itself, not added afterward. A migrated environment without monitoring just relocates an existing blind spot rather than resolving it.' },
    ],
    relatedSpokes: ['ai-development-services', 'legacy-system-modernization'],
    relatedCaseStudies: [],
    relatedPosts: [],
  },
  {
    slug: 'ai-development-services',
    parentSlug: 'cloud-ai-automation',
    navLabel: 'AI Automation',
    h1: 'AI Development and Automation Services',
    seoTitle: 'AI Development Services',
    description:
      'Applied AI development: machine learning pipelines, NLP and document processing, and predictive analytics, scoped to problems where a model output is auditable.',
    summary: 'Applied ML, NLP and document processing built for problems where the model’s output needs to be explainable, not a generic AI feature bolted on.',
    icon: 'bi-robot',
    symptoms: [
      'Someone has asked for AI and nobody has defined the problem',
      'Staff spend hours on document work that follows a stable pattern',
      'A model is in production and no one can explain an individual output',
      'You need prioritisation, not automation, and the vendors keep offering automation',
    ],
    intro: [
      'Applied AI work in regulated or high-stakes environments has a specific constraint most generic AI development does not: a model’s output often has to be explainable, or at minimum bounded, because someone downstream (an examiner, a clinician, an auditor) needs to understand why the system made a recommendation.',
      'We build machine learning pipelines, NLP and document processing, and predictive analytics with that constraint designed in, distinct from the infrastructure and cloud platform work covered on the cloud migration page.',
    ],
    offerings: [
      { title: 'Document processing and NLP', body: 'Extraction and classification pipelines for unstructured documents, built to flag low-confidence results for human review rather than presenting every output as equally certain.' },
      { title: 'Predictive analytics', body: 'Forecasting and pattern-detection models trained on your actual data, with a validation process that measures real accuracy before the model influences a decision.' },
      { title: 'Model-assisted prioritisation', body: 'Machine learning applied to ranking or prioritising a queue, our approach on the AML transaction monitoring work is a direct example, rather than replacing a decision that needs to remain explainable.' },
      { title: 'ML pipeline infrastructure', body: 'Training, deployment and monitoring infrastructure for models that need to be retrained as data patterns shift, not a one-time model handed off with no maintenance path.' },
    ],
    howWeHelp: [
      'The mistake we see most often in applied AI projects is deploying a model as the decision-maker in a process where the decision needs to be explainable to a third party. We design for where a model adds real value (prioritisation, flagging, pattern detection at scale) without making it the unexplainable final word in a process an examiner or auditor will review.',
      'We are also direct about where AI is not the right tool. A significant share of "we need AI" requests we receive describe a problem that deterministic logic solves more reliably and more cheaply, and we say so rather than building a model because it was requested.',
    ],
    approach: [
      'We define what the model needs to be accountable for before choosing an approach: does a human need to be able to explain a specific output, or is the model only ranking or flagging for human review.',
      'Models are validated against your actual data with a defined accuracy measurement, not shipped on the assumption that a demo’s performance will hold in production.',
    ],
    technologies: ['Python', 'Kafka', 'AWS', 'Azure'],
    industries: ['Banking & Fintech', 'Healthcare & MedTech', 'Manufacturing & Logistics'],
    faqs: [
      { q: 'Where does AI actually fit in a regulated environment like banking or healthcare?', a: 'Primarily in prioritisation, flagging and pattern detection at scale, rather than as the final decision-maker in a process that needs to be explainable to a regulator or auditor. Our AML transaction monitoring work is a direct example: a model ranks the alert queue, but the alerts themselves come from explainable rules.' },
      { q: 'Will you tell us if machine learning is not the right approach for our problem?', a: 'Yes, and we do this before proposing a build, not after. A meaningful share of AI requests we receive describe a problem that deterministic logic handles more reliably and at lower cost, and recommending a model against that would just add unnecessary complexity.' },
      { q: 'How do you validate that a model is actually accurate before it goes into production?', a: 'Against your real data, with a defined accuracy measurement agreed before training, rather than relying on how well a demo performed on a curated sample.' },
      { q: 'Do you build and maintain the infrastructure to retrain models over time?', a: 'Yes, where a model needs ongoing retraining as underlying data patterns shift, we build the pipeline for that rather than delivering a model that degrades silently with no maintenance path.' },
    ],
    relatedSpokes: ['cloud-migration-services', 'transaction-monitoring-software-development'],
    relatedCaseStudies: [],
    relatedPosts: [],
  },
];

export function getServiceSpoke(slug: string): ServiceSpoke | undefined {
  return serviceSpokes.find((s) => s.slug === slug);
}

/** Every spoke nested under one pillar, in the order that pillar's own spokes
 *  should render (hub page, pillar "related" blocks). */
export function getSpokesForPillar(parentSlug: string): ServiceSpoke[] {
  return serviceSpokes.filter((s) => s.parentSlug === parentSlug);
}
