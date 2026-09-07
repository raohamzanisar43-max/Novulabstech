import { FaqItem } from '../types';
import { faqs as homeFaqs, contactFaqs } from './siteData';
import {
  aboutFaqs,
  solutionsFaqs,
  industriesFaqs,
  portfolioFaqs,
  teamFaqs,
  blogFaqs,
} from './pageFaqs';
import { servicePages } from './servicePages';

/**
 * /faq; the hub.
 * ---------------------------------------------------------------------------
 * The site already answers ~60 questions, but they were scattered across ten
 * pages with no single address. Someone searching "does NovuLabs do X" had no
 * document to land on, and neither did an answer engine.
 *
 * ARCHITECTURE: hub and spoke, deliberately not a copy-paste aggregate.
 *
 * `hubFaqs` below are NEW questions, answered nowhere else on the site. They
 * are the broad orientation questions a buyer asks before they know which
 * service page they need, and this page owns them: it is the only page that
 * emits FAQPage schema for them.
 *
 * `faqDirectory` does NOT restate the answers that live on other pages. It
 * lists their questions as links into the section that owns each one. Copying
 * ~60 answers here would put every Q&A on the site at two URLs and two
 * FAQPage nodes, which splits the signal rather than concentrating it; the
 * page competes with the very pages it is supposed to feed. A directory gives
 * the reader one place to scan, gives every spoke page an inbound contextual
 * link, and leaves each answer with exactly one canonical home.
 *
 * WRITING RULE: answer-first, same as content/pageFaqs.ts. The first sentence
 * is the answer; everything after it qualifies.
 *
 * HONESTY RULE — no pricing beyond what /contact already publishes, no
 * timelines, no team size, no client names, no certification claims.
 */

export const hubFaqs: FaqItem[] = [
  {
    q: 'What does NovuLabs specialise in?',
    a: 'Software for systems a regulator can audit: AML/CFT compliance and transaction monitoring for SBP-regulated financial institutions, HIPAA and HL7 FHIR healthcare platforms, PCI-DSS payment infrastructure, and government integrations. The common constraint across all of them is that the system has to be able to evidence what it did and why, months after the fact, to someone who was not there.',
    link: { href: '/services', label: 'See the seven practice areas' },
  },
  {
    q: 'Is NovuLabs a software house in Islamabad?',
    a: 'Yes. NovuLabs is headquartered in Islamabad, Pakistan, and the engineering team works from one place rather than being assembled from contractors per project. The regulatory environment we know in the most depth is Pakistan’s: the State Bank’s AML/CFT framework, the Financial Monitoring Unit’s reporting obligations, and the national identity infrastructure that financial onboarding depends on.',
    link: { href: '/software-house-in-islamabad', label: 'More on how we work as a software house here' },
  },
  {
    q: 'Does NovuLabs build custom enterprise software, or sell products?',
    a: 'Both, and the choice is made per engagement rather than sold in advance. Four platforms (NovuShield, NovuPay, NovuERP and NovuCRM) cover compliance, payments, operations and the customer record, and each can be deployed into infrastructure you control. Where an off-the-shelf product fits your requirement, we will say so; recommending a custom build against a product that fits sells you maintenance liability at a premium.',
    link: { href: '/solutions', label: 'The four platforms we already maintain' },
  },
  {
    q: 'Which industries does NovuLabs serve?',
    a: 'Banking and fintech, healthcare, and government, with manufacturing and e-commerce work alongside them. These are not separate practices so much as one practice applied to three regulators: the architecture that satisfies an AML examiner and the architecture that satisfies a HIPAA audit are far more alike than the industry labels suggest.',
    link: { href: '/industries', label: 'What each sector regulator expects' },
  },
  {
    q: 'Can NovuLabs work with our existing engineering team?',
    a: 'Yes, through staff augmentation, co-development, or full delivery. Our engineers adapt to your stack, your sprint ceremonies and your review process rather than importing ours. Which model fits is usually a question about where your bottleneck actually is: a team short on capacity and a team short on a specific domain need different things.',
    link: { href: '/about', label: 'How an engagement actually runs' },
  },
  {
    q: 'What technologies does NovuLabs work in?',
    a: 'Predominantly Java, Python, TypeScript/Node and React on PostgreSQL, with Kafka for event streams, on AWS, Azure or on-premise infrastructure depending on where the data is allowed to sit. Standards matter more than languages in this work: goAML XML, HL7 FHIR, ISO 8583, PCI-DSS and OAuth2/OIDC shape the design far more than the runtime does.',
    link: { href: '/services/cloud-ai-automation', label: 'Cloud, AI and automation engineering' },
  },
  {
    q: 'Does NovuLabs provide support after launch?',
    a: 'Yes, under tiered SLAs running from business-hours support to 24/7 cover with a guaranteed response window, and enterprise clients get a named account manager. Support on a regulated platform is not only incident response: regulatory schemas and reporting formats change, and a system that files to a regulator needs someone tracking those changes on its behalf.',
    link: { href: '/about', label: 'What we commit to after delivery' },
  },
  {
    q: 'How does an engagement with NovuLabs start?',
    a: 'With a 45-minute discovery call taken by an architect who would be accountable for the technical outcome, not by a salesperson. There is no pre-sales layer here and no commitment attached to the call. A meaningful share of these calls end in a scoping correction rather than a proposal, which is usually the more valuable outcome.',
    link: { href: '/contact', label: 'Book a technical call' },
  },
  {
    q: 'Does NovuLabs work with clients outside Pakistan?',
    a: 'Yes, across the Gulf, the UK and North America. The regulatory depth is deepest in Pakistan, but the engineering discipline transfers directly: HIPAA safeguards, FHIR interoperability and PCI-DSS payment work all follow the same pattern of designing for audit from the first sprint rather than retrofitting it before a review.',
    link: { href: '/software-house-in-islamabad', label: 'How remote engagements are run' },
  },
  {
    // This used to restate the About page's own FAQ almost word for word
    // ("Is NovuLabs ISO 27001 or HIPAA certified?"), which is exactly what
    // this file's header comment says hubFaqs should never do; that
    // question already has one canonical home in content/pageFaqs.ts
    // (aboutFaqs), and the directory below already links to it. Replaced
    // with a genuinely new orientation question this hub does not answer
    // anywhere else: which of the 22 dedicated service pages fits a given
    // project.
    q: 'How do I know which NovuLabs service is right for my project?',
    a: 'Start from the problem, not the service list. The seven practice areas on the services page cover the broad categories; the specific pages nested under each one describe a narrower capability, and most of them link sideways to the two or three siblings a related project would also touch. If it is still not obvious after reading one, that is what the discovery call is for: describing the problem to an architect is a faster way to find the right scope than guessing from a page title.',
    link: { href: '/services', label: 'Compare the practice areas' },
  },
];

/** One category in the directory. `href` is the section that owns the answers. */
export interface FaqDirectoryGroup {
  title: string;
  /** Why a reader would open this group: one line, not a keyword string. */
  blurb: string;
  href: string;
  items: FaqItem[];
}

/**
 * Derived from the live FAQ sets, never hand-copied. A question added to any
 * source set appears here automatically, so the directory cannot go stale or
 * list a question the destination page no longer answers.
 */
/**
 * Careers and internships.
 *
 * These exist because the questions are asked constantly in this market and
 * the site answered none of them. They are informational, not recruitment
 * copy: NovuLabs does not currently advertise an internship programme, and the
 * answers say so rather than implying that applications are open. Nothing here
 * describes eligibility, stipends, intake dates or roles, because none of that
 * exists to describe.
 *
 * If a programme does open, this is the block to replace, and it should be
 * replaced with a real /careers page rather than expanded here.
 */
export const careerFaqs: FaqItem[] = [
  {
    q: 'Does NovuLabs offer software development internships?',
    a: 'Not at the moment. We do not run an advertised internship programme, and there is no open application process, so any list that shows NovuLabs among companies currently taking interns is out of date. If that changes it will appear on this site first. In the meantime you are welcome to send a short note and a link to your code through the contact page; we read them, but please treat a reply as unlikely rather than expected, because there is no intake to route it into.',
    link: { href: '/contact', label: 'Contact page' },
  },
  {
    q: 'Which software houses in Islamabad offer internships?',
    a: 'Availability changes every few months, so the reliable sources are the ones companies update themselves: their own careers pages, their LinkedIn company pages, and your university\'s placement office, which usually hears about intakes before they are advertised publicly. Aggregated "top software houses for internships" listicles are the least reliable source, because they are rarely revised after publication and often list companies that stopped taking interns years earlier. Roles commonly advertised in this city include frontend, backend, full-stack, mobile, QA, UI/UX, DevOps and data internships.',
    link: { href: '/blog', label: 'See the kind of engineering we write about' },
  },
  {
    q: 'What should a student actually look for in a software internship?',
    a: 'Whether you will touch the real workflow, not the size of the company. The internships worth taking put you in the actual repository with a branch, a pull request and someone senior reviewing your code, and let you see how work reaches production: version control, code review, testing, deployment and the conversations where scope gets decided. The ones worth avoiding park you on an isolated practice project nobody will ever run. Two questions separate them quickly: will my work be merged into something real, and who reviews it?',
    link: { href: '/portfolio', label: 'How a real engagement is structured' },
  },
  {
    q: 'What skills should I have before applying for a software internship in Islamabad?',
    a: 'Enough to build and finish something small on your own. For most development internships that means one language you are comfortable in, HTML, CSS and JavaScript, basic SQL and a relational data model, Git beyond commit and push, and enough understanding of HTTP and APIs to know what is happening when a request fails. For mobile roles, one of Flutter, React Native, Swift or Kotlin. What actually distinguishes applications is evidence: a public repository with readable commits and a project that runs is worth more than a longer list of technologies on a CV, because it is the only part a reviewer can verify.',
    link: { href: '/blog', label: 'Technical articles by our engineers' },
  },
  {
    q: 'Can fresh graduates get software development jobs in Islamabad?',
    a: 'Yes, and junior roles are advertised regularly across the city\'s software companies. The candidates who convert fastest tend to have narrowed rather than broadened: depth in one stack, a project someone other than an examiner has used, and the ability to explain a technical decision they made and what they would do differently. Contributing to an open-source project or shipping something small and real is usually a better use of the months after graduation than collecting further certificates.',
    link: { href: '/team', label: 'Who is on the engineering team' },
  },
  {
    q: 'Which software houses in Islamabad are good for freshers?',
    a: 'The ones that put juniors on the real codebase with a senior reviewing the work, which is not something you can tell from a careers page. Two signals are visible from outside: whether the company writes publicly about its engineering, because a team that explains its decisions in public tends to explain them internally too, and whether junior roles are advertised with a defined scope rather than as general "software engineer" listings. In interviews, ask who reviews your pull requests and how long it takes a new joiner to ship something to production. Vague answers to either usually mean juniors are kept away from the real system.',
    link: { href: '/blog', label: 'The engineering standards we write about' },
  },
];

/**
 * The local software market.
 *
 * Orientation questions asked by buyers and students who do not yet know what
 * they are looking for. Deliberately not a ranking, and deliberately not a
 * list of other companies: this site is not in a position to verify which
 * multinationals currently staff an Islamabad office, and publishing an
 * unverified list of third parties is the kind of claim that is wrong within a
 * year and reflects on us rather than on them.
 */
export const marketFaqs: FaqItem[] = [
  {
    q: 'What is the difference between a software house and an IT company?',
    a: 'The terms overlap and are often used interchangeably in Pakistan, but they usually describe different centres of gravity. A software house designs and builds software: requirements, architecture, engineering, testing and long-term maintenance of a system somebody commissioned. An IT company more often covers infrastructure and operations, which can include networks, hardware, managed services, support desks and licensing alongside development. Neither label tells you whether a company is any good at your particular problem. What tells you is whether they have built something with the same constraints as the thing you need.',
    link: { href: '/services', label: 'What we build, and what we do not' },
  },
  {
    q: 'Is a multinational technology company a better choice than a local software house?',
    a: 'Not inherently, and the honest answer is that they fail in different ways. A multinational brings process, scale and continuity, and you may find your project is small enough to sit low in its priority order. A local firm gives you shorter decision chains and direct access to the people writing the code, and carries more key-person risk if that team is small. For work touching Pakistani regulators, proximity matters more than size: the State Bank\'s AML/CFT framework, FMU reporting and the national identity infrastructure are learned by building against them, not from documentation. Judge the specific team you would get, not the category the company belongs to.',
    link: { href: '/about', label: 'How this team is structured' },
  },
  {
    q: 'What services do software houses in Islamabad typically offer?',
    a: 'Most cover custom software, web and mobile development, and increasingly cloud and AI work; the differences show up in depth rather than in the list. A firm that has genuinely delivered payment or clinical systems can describe what a scheme certification or a HIPAA review demanded of the architecture, and one that has not will describe the same services in general terms. Ask for the specifics of a comparable build and the difference becomes obvious in about ten minutes. Our own practice areas, and the sector constraints behind them, are linked below this section.',
    link: { href: '/services', label: 'Our practice areas in depth' },
  },
  {
    q: 'Why is Islamabad considered a technology hub in Pakistan?',
    a: 'Three things concentrate here. The regulators and federal institutions that software in finance, health and government has to integrate with, which means the engineers who have built against them are here too. A steady supply of computer science and software engineering graduates from universities across Islamabad and Rawalpindi. And a timezone that overlaps most of a working day with the Gulf, most of a morning with the UK and Europe, and reaches the US east coast before lunch there. There is a fuller account of this on our Islamabad page, linked below.',
    link: { href: '/software-house-in-islamabad', label: 'Why we build here' },
  },
  {
    q: 'Where can I find a reliable list of software houses in Islamabad and Rawalpindi?',
    a: 'Company directories, LinkedIn, the Pakistan Software Export Board register and university placement offices are all reasonable starting points, and every one of them goes stale. Companies merge, relocate, change focus and stop hiring without updating their entries, so treat any list as a set of leads to verify rather than as current fact. Before contacting a firm, check that its own website is live and recently updated, that the services it lists match what you need, and that the contact details on the directory and the site agree.',
    link: { href: '/portfolio', label: 'Judge us on the work instead' },
  },
];

export const faqDirectory: FaqDirectoryGroup[] = [
  {
    title: 'Working with us',
    blurb: 'How engagements start, who you deal with, and what we will tell you not to build.',
    href: '/about#faq',
    items: aboutFaqs,
  },
  {
    title: 'Scope, contracts and NDAs',
    blurb: 'Minimum project size, contract models, and what is protected before the first technical call.',
    href: '/contact#contact-faq',
    items: contactFaqs,
  },
  {
    title: 'Platforms and deployment',
    blurb: 'Choosing between NovuShield, NovuPay, NovuERP and NovuCRM, and where each can be hosted.',
    href: '/solutions#faq',
    items: solutionsFaqs,
  },
  {
    title: 'Regulated industries',
    blurb: 'What AML/CFT, HIPAA and government integration demand of a system.',
    href: '/industries#faq',
    items: industriesFaqs,
  },
  {
    title: 'Case studies and references',
    blurb: 'Why clients are unnamed, what the figures mean, and how to get a reference.',
    href: '/portfolio#faq',
    items: portfolioFaqs,
  },
  {
    title: 'The team',
    blurb: 'Who does the work, whether any of it is subcontracted, and talking to an engineer first.',
    href: '/team#faq',
    items: teamFaqs,
  },
  {
    title: 'Our published research',
    blurb: 'Who writes the technical articles, how regulatory claims are sourced, and how current they are.',
    href: '/blog#faq',
    items: blogFaqs,
  },
  {
    title: 'Getting started',
    blurb: 'The short answers on industries, support, compliance and working alongside your team.',
    href: '/#faq',
    items: homeFaqs,
  },
  // One group per service page, so every commercial URL gets an inbound link
  // from the hub rather than only the seven top-level sections above.
  ...servicePages.map((s) => ({
    title: s.navLabel,
    blurb: s.summary.split('. ')[0].replace(/\.$/, '') + '.',
    href: `/services/${s.slug}#faq`,
    items: s.faqs as FaqItem[],
  })),
];

/** Total questions the site answers: rendered on the page, so it must be real. */
export const totalAnsweredQuestions =
  hubFaqs.length + faqDirectory.reduce((n, g) => n + g.items.length, 0);
