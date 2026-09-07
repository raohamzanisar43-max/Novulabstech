import type { FaqItem } from '@/types';

/**
 * Content for /software-development-in-pakistan.
 * ---------------------------------------------------------------------------
 * SCOPE, AND WHY IT DOES NOT CANNIBALISE THE ISLAMABAD PAGE
 *
 * /software-house-in-islamabad is city-scoped and buyer-facing: where we are,
 * how to evaluate a firm here, how an engagement runs. This page is national
 * and industry-facing: what the Pakistani software sector actually builds,
 * which regulators shape it, how teams are formed, what the cost argument is
 * really worth, and what an overseas buyer should settle before signing.
 *
 * The two pages share a company name and almost nothing else. Where they touch
 * (Islamabad as a delivery location) this page links out rather than restating,
 * so the local head term stays owned by the page built for it.
 *
 * FACTUAL DISCIPLINE
 * No headcount, revenue, export figure, company count, ranking, growth rate or
 * client name appears here. Sector-size statistics are the easiest thing to
 * copy from a directory and the hardest to source, and a number this page
 * cannot attribute is worth less than the sentence it would sit in. Every
 * institution named (SBP, SECP, FMU, NADRA, PTA, PSEB) is named for what it
 * regulates, not for any claimed relationship with NovuLabs.
 */

export interface PakistanSection {
  heading: string;
  body: string[];
}

export const PAKISTAN_INTRO: string[] = [
  'Software development in Pakistan is dominated by service work: teams building systems for organisations that are somewhere else. That single fact shapes the industry more than any technology choice does. It is easy to miss from outside. It means most engineers here have worked to a foreign specification, under a contract they did not write, for a client they have never met in person, and it means the firms that last are the ones that got good at the parts of that arrangement which have nothing to do with code.',
  'The market splits roughly three ways. There are large outsourcing firms staffing long-running contracts for overseas clients. There are product companies building their own software, some of them selling internationally. And there are specialist firms working in one domain deeply enough to know its rules. The three are frequently described in the same language and behave nothing alike. That is the first thing worth understanding if you are choosing between them.',
  'NovuLabs sits in the third group. We build for organisations whose software is inspected by somebody other than its users: a regulator, an auditor, a payment scheme or a procurement office. What follows is an account of the sector as we work in it, not a promotional summary of it.',
];

export const PAKISTAN_SECTIONS: PakistanSection[] = [
  {
    heading: 'The regulators that shape what gets built',
    body: [
      'Any software touching money, identity or health in Pakistan is built against a named institution, and knowing which one changes the architecture before a line is written. The State Bank of Pakistan sets the framework banks, electronic money institutions and payment providers operate under, including the AML and counter-terrorist-financing obligations that decide how a transaction store has to be designed. The Financial Monitoring Unit receives suspicious and currency transaction reports through goAML, which validates every submission against a strict schema and rejects anything that does not conform.',
      'The Securities and Exchange Commission of Pakistan governs corporate and non-bank financial entities. NADRA operates the national identity infrastructure that customer onboarding depends on. The Pakistan Telecommunication Authority regulates the telecom layer that mobile products sit on. The Pakistan Software Export Board registers IT exporters and administers the incentives most service firms operate under.',
      'None of that is exotic knowledge. It is, however, the difference between a system that survives its first inspection and one that gets rebuilt after it. A team that has integrated with these bodies knows that the identity check is a risk input and not a gate, that an alert has to be reproducible months later, and that a reporting pipeline should validate against the schema locally before anything is submitted. A team that has not will discover each of those in production. That is an expensive classroom.',
    ],
  },
  {
    heading: 'What the industry actually builds',
    body: [
      'Financial technology is the largest concentration of serious engineering here, and it is not evenly distributed. Payments, core banking components, digital wallets and compliance systems carry obligations that consumer software does not, which is why the firms doing that work tend to be specialists, not generalists. The instant payment rail changed this further: when a credit is applied and irrevocable within seconds, correction stops being a technical option and validation has to move ahead of the transaction.',
      'Healthcare technology is younger and growing. Electronic records, clinical workflow, telemedicine and medical billing all involve data that is permanently identifying and cannot be reissued if it leaks, which puts access logging and encryption into the first design conversation rather than a later hardening pass.',
      'Government and public-sector work runs through procurement instead of sales, and the systems are judged on availability and auditability more than on interface polish. Tax filing, identity verification and citizen-facing portals share a property that catches teams out: the failure case is not an error message, it is a citizen who cannot complete something they are legally required to do.',
      'Alongside those sits the broad commercial layer that every market has, and that most firms here lead with: web platforms, mobile applications, enterprise resource planning, customer relationship management, cloud migration and increasingly automation work. That is honest work and it is where most of the volume is. It is also where the least differentiation exists between suppliers, which is worth knowing when you compare quotes for it.',
    ],
  },
  {
    heading: 'How teams here are actually formed',
    body: [
      'The supply of graduates is real and the supply of senior engineers is thinner, which is the constraint that matters. Universities across the country produce computer science and software engineering graduates in volume, and the strongest of them are very strong. What takes longer to accumulate is different: the engineer who has watched a system fail in production, understood why, and changed how they build because of it. Those people are made by incidents, not by courses.',
      'This produces a specific risk when you hire a firm instead of an individual. The senior architect who wins the work is frequently not the person who does it, and the substitution is invisible from outside until the second month. It is worth asking, in writing, who will be assigned, at what seniority, and whether they are on the call. A firm that answers precisely has usually been asked before.',
      'The second structural feature is turnover. Engineers here move between employers more readily than in older markets, partly because demand outstrips senior supply. That is not a reason to avoid the market, but it is a reason to insist on written architecture decisions, documented reasoning and readable commit history. A team that records why it chose something can absorb a departure. A team that carries the reasoning in one person\'s head cannot.',
    ],
  },
  {
    heading: 'The cost argument, and what it is actually worth',
    body: [
      'Cost is why most overseas buyers start looking at Pakistan, and it is the least interesting reason to choose a supplier here. The saving is real. It is also the first thing to disappear if the system has to be rebuilt, and a rebuild costs more than the gap between any two day rates. Cheap twice is not cheap.',
      'A more useful way to think about it: the rate determines what an hour costs, and the team determines how many hours the thing takes. A cheaper team that needs three attempts at an integration is not cheaper. This is particularly true in regulated work, where the expensive part is rarely the feature and almost always the audit trail, the reconciliation process, the migration of historical data that does not conform to the new model, and the certification cycle nobody scheduled.',
      'What genuinely transfers well is bounded, well-specified work with a clear definition of done, and long-running platform ownership where a team accumulates domain knowledge over years. What transfers badly is anything requiring constant clarification from people in another timezone who are busy. The timezone helps here more than the rate does: Pakistan Standard Time overlaps most of a working day with the Gulf and most of a morning with the United Kingdom and Europe.',
    ],
  },
  {
    heading: 'What to settle before you sign',
    body: [
      'Four things, all contractual, all cheaper to fix now than later. First, intellectual property: it should be assigned to you, in writing, and the code should sit in your repository under your organisation from the first commit rather than being handed over at the end. A vendor holding the repository is holding a hostage. That stays true however good the relationship is.',
      'Second, the entity. You are contracting with a registered company, so know which one, in which jurisdiction, and what that means for enforcement if something goes wrong. Third, data. Where it is stored, whether that satisfies your own regulator, and what happens to it after the engagement ends. Financial and health data frequently carry residency obligations that rule out particular hosting arrangements outright, and discovering that after a managed service has been selected means a rebuild, not a configuration change.',
      'Fourth, the exit. Ask what happens when you want to leave. Treat discomfort as the answer. A good response includes documentation, a handover period and access to every account. This is the question that most reliably separates firms that have run long engagements from firms that have only started them.',
    ],
  },
  {
    heading: 'Where Islamabad fits',
    body: [
      'The industry is concentrated in a few cities and they are not interchangeable. Karachi is where the banks are headquartered. Lahore has the largest general technology base. Islamabad, with Rawalpindi alongside it, holds the regulators and the federal institutions, which matters enormously for anything touching compliance, identity or public-sector procurement. Proximity to the body that will inspect your system is not a lifestyle preference. It is the difference between a two-week clarification loop and a meeting. One of those is a morning.',
      'That is why we build where we do, and it is the reason our practice is shaped the way it is. Buyers searching for a software house in Islamabad specifically are usually looking for that proximity, whether or not they would describe it that way. Anyone comparing firms locally will also find no shortage of pages claiming to be the best software house in Islamabad, which is a claim no supplier can substantiate about itself, because the right team depends entirely on what is being built.',
    ],
  },
];

export const PAKISTAN_FAQS: FaqItem[] = [
  // ---- MOVED from /faq marketFaqs. National in scope, so they belong on the
  // national page; removed there so no question exists at two URLs.
  {
    q: 'Is Pakistan a good place to outsource software development?',
    a: 'It can be, and the reasons that matter are not the ones usually advertised. Cost is real but weakest: a cheaper build that fails costs more than the difference between any two day rates. The stronger arguments are the timezone, which overlaps most of a working day with the Gulf and most of a morning with the UK, and domain proximity for anything touching Pakistani regulators. The risks are the ordinary outsourcing ones: unclear intellectual property assignment, a named senior who disappears after the sale, and no plan for the code and cloud accounts if the relationship ends. Settle those three in writing before scope. Not after.',
    link: { href: '/contact', label: 'Ask an engineer directly' },
  },
  {
    q: 'Can software companies in Pakistan work with international clients?',
    a: 'Yes, and remote delivery abroad is normal here, not exceptional. What is worth checking before committing is contractual, not technical: who owns the intellectual property and from when, which registered entity you are contracting with, where your data will be stored and whether that satisfies your own regulator, how the team is reachable during your working hours, and what happens to the code and the accounts if the engagement ends. A firm that answers those crisply has done it before.',
    link: { href: '/about', label: 'How our engagements are structured' },
  },
  // ---- new to this page ------------------------------------------------
  {
    q: 'Which regulators matter for software built in Pakistan?',
    a: 'It depends entirely on what the software touches. Money brings in the State Bank of Pakistan and, for reporting, the Financial Monitoring Unit through goAML. Corporate and non-bank financial entities answer to the SECP. Identity verification involves NADRA infrastructure. Telecom sits under the PTA, and IT exporters register with the Pakistan Software Export Board. If a system touches none of those, the engineering constraints are ordinary ones. If it touches any, the obligations shape the architecture from the first design conversation rather than being added at the end.',
    link: { href: '/services/aml-cft-compliance-software', label: 'How compliance systems are built' },
  },
  {
    q: 'What kinds of software does the Pakistani industry actually build well?',
    a: 'The deepest concentration of specialist engineering is in financial technology: payments, core banking components, wallets and compliance systems, because those carry obligations that force the discipline. Healthcare technology is younger and growing, and government work runs through procurement with availability and auditability as the tests. Alongside those sits the broad commercial layer every market has, web platforms, mobile apps, ERP, CRM and cloud work, which is where most of the volume is and where suppliers differentiate least.',
    link: { href: '/portfolio', label: 'Nine systems, described in full' },
  },
  {
    q: 'How do I verify a Pakistani software company is what it claims to be?',
    a: 'Ask for things that are expensive to fake. Which regulator or standard a past system had to satisfy, what the integration surface was, and which architectural decision was reversed during the build and why. A team that did the work answers in detail without preparation. Also confirm the registered entity you would contract with, and ask who specifically will be assigned and at what seniority, because the gap between the person who sells the work and the person who does it is the most common failure in this market.',
    link: { href: '/team', label: 'Who is on the engineering team' },
  },
  {
    q: 'Is it cheaper to build software in Pakistan?',
    a: 'Usually on rate, and that is a narrower statement than it sounds. The rate sets what an hour costs; the team sets how many hours the work takes, and a team that needs three attempts at an integration is not cheaper at any rate. In regulated projects the expensive parts are rarely the features: they are the audit trail, reconciliation, migration of historical data that does not fit the new model, and certification cycles. We give an indicative range after a free technical call and a firm figure only after a paid discovery phase, because a fixed price quoted on an unread brief is guesswork sold as certainty.',
    link: { href: '/contact', label: 'Book a free technical call' },
  },
];
