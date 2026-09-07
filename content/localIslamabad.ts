import type { FaqItem } from '@/types';

/**
 * Content for /software-house-in-islamabad.
 * ---------------------------------------------------------------------------
 * WHY THIS PAGE EXISTS
 *
 * The site was strong on *what* NovuLabs builds (AML/CFT, HIPAA, PCI-DSS) and
 * weak on *where* it builds it. "Software house in Islamabad" and its variants
 * are the highest-intent local queries in this market, and the only page that
 * addressed them at all was the homepage, whose job is brand plus capability
 * breadth. A homepage cannot rank well for a local commercial head term while
 * simultaneously serving five other intents.
 *
 * This page takes that intent on its own URL so the homepage does not have to
 * compromise, and so the local query has somewhere to land that answers it
 * fully: what a software house actually does, how to evaluate one here, what
 * engagement looks like from abroad, and where the company physically is.
 *
 * FACTUAL DISCIPLINE
 * Nothing in this file asserts a client name, a headcount, a project count, an
 * award, a certification, a rating or a revenue figure. None of those are
 * evidenced anywhere in the repository or on the live site. The page competes
 * on demonstrated specificity (regulations named correctly, architecture
 * described accurately, trade-offs stated honestly), which is what actually
 * moves E-E-A-T in a YMYL vertical. It does not compete on adjectives.
 */

export interface LocalSection {
  /** Rendered as an <h2>. Written as the question or claim a reader arrives with. */
  heading: string;
  /** Answer-first: the first paragraph must stand alone as the answer. */
  body: string[];
}

export const ISLAMABAD_INTRO: string[] = [
  'NovuLabs is a software house in Islamabad that builds custom software for organisations operating under regulatory supervision: banks and payment institutions, healthcare providers, government departments and the enterprises that supply them. We are located in I-10, Islamabad, and we work with clients across Pakistan, the Gulf, the United Kingdom and North America.',
  'A software house, in the sense the term is used in Pakistan, is a company that designs, builds, tests and maintains software for other organisations, as opposed to a product company selling one piece of software to many customers. In practice that means we are hired to own a system end to end: requirements, architecture, engineering, security review, deployment, and the long unglamorous years of maintenance afterwards.',
  'What separates one software house in Islamabad from another is rarely the programming languages listed on its marketing page. Everybody lists the same ones. What matters is whether the team has shipped systems that survive contact with an auditor, a penetration test, a central bank inspection or a payment scheme certification. That is the work we have chosen to specialise in, and it shapes everything below.',
];

export const ISLAMABAD_SECTIONS: LocalSection[] = [
  {
    heading: 'What we build',
    body: [
      'Our work falls into four practice areas, each with its own engineering constraints. Compliance and financial crime systems: transaction monitoring, sanctions and PEP screening, case management, and goAML XML reporting to the Financial Monitoring Unit. Financial technology: core banking components, PCI-DSS scoped payment infrastructure, card scheme integration, and RAAST instant payment rails. Healthcare technology: electronic health records, HL7 FHIR interoperability, clinical workflow and medical billing, built to HIPAA engineering standards. And enterprise platforms: ERP, CRM, custom SaaS products, government portals, and the API and integration layers that hold older estates together.',
      'Alongside those we do the work most software companies in Islamabad are asked for first: mobile app development for iOS and Android, cross-platform apps, web development, cloud migration, and AI automation embedded into existing business processes. Those are not separate businesses to us. A payment platform needs a mobile app, a hospital system needs a patient portal, and an ERP rollout needs a migration plan off whatever it is replacing.',
      'If you already know which of those you need, the service pages go into engineering depth on each one. If you do not, that is a normal place to start a conversation, and it is what the first call is for.',
    ],
  },
  {
    heading: 'How to choose a software house in Islamabad',
    body: [
      'The honest answer is that you cannot evaluate a software house from its website, including this one. What you can do is ask a small number of questions that are expensive to answer falsely, and notice which companies answer them concretely. The seven below are the ones we would ask if we were the buyer.',
      'First, ask who will actually write your code, by name and seniority, and whether those people are on the call. The most common failure in outsourced software is the senior architect who wins the work and is never seen again. Second, ask what the team has built in your regulatory domain specifically. "We have done fintech" is not an answer. "We have mapped goAML XML schemas and dealt with the FMU rejecting a submission" is.',
      'Third, ask what they would refuse to do. A team that has never declined a request has never had a real opinion about architecture. Fourth, ask how they handle the thing going wrong at 2am in year three, because that, not the build, is where most of the total cost of a system lives. Fifth, ask to see how they estimate. A fixed price quoted before discovery is a bet against you, not a commitment to you.',
      'Sixth, ask about ownership. You should own the source code, the infrastructure accounts, the domain and the data, from day one and in writing. A vendor holding any of those is holding a hostage. Seventh, ask what happens when you want to leave. A good answer includes documentation, handover and a transition period. A bad answer is discomfort.',
      'You will notice that none of those questions ask who is the best software house in Islamabad. That question has no general answer, because "best" depends entirely on what you are building. The team that is right for a card issuing platform is usually the wrong team for a consumer marketplace, and a company claiming to be best at both is telling you something useful about its judgement.',
    ],
  },
  {
    heading: 'Why build software in Islamabad',
    body: [
      'Islamabad concentrates three things that matter to a software buyer: the regulators, the universities and the timezone. The State Bank of Pakistan, the Securities and Exchange Commission of Pakistan, the Financial Monitoring Unit, NADRA and the federal ministries are all headquartered here or nearby, which means the people who have built systems against those bodies are here too. For a compliance or government project that proximity is not a lifestyle preference, it is the difference between a two-week clarification loop and a meeting.',
      'The city and the adjacent Rawalpindi campuses produce a steady supply of engineering graduates, and the sector is established enough that senior people already exist here and do not have to be imported. Pakistan Standard Time sits five hours ahead of London in winter and one hour behind Dubai. A team here shares most of a working day with the Gulf, the majority of a morning with the UK and Europe, and can still reach the US east coast before lunch there. That is three markets in one shift.',
      'Cost is usually the reason a buyer starts looking at Pakistan, and it is a real advantage, but it is the least interesting one. Cost only matters if the system works. Rebuilding a failed platform costs more than the difference between any two day rates you were choosing between. The wider national picture, including which regulators shape what gets built and what to settle in a contract before signing, is set out on our software development in Pakistan page.',
    ],
  },
  {
    heading: 'Where the work is, sector by sector',
    body: [
      'Islamabad is laid out on a lettered grid, and the letters are not decorative. Each zone was planned for a purpose and has largely kept it, which means the sector in an address tells you something real about the organisation at it. For anyone selecting a supplier or planning meetings here, that geography is worth ten minutes.',
      'The Blue Area is the central business district, a commercial strip running along Jinnah Avenue through the G-6 and F-6 belt. Banks, corporate head offices, financial institutions and professional firms concentrate here, and it is where most commercial meetings with a financial counterparty end up happening. If a client is a bank, an insurer or a listed company, this is usually the address.',
      'The G-5 sector and the adjoining Diplomatic Enclave hold the federal machinery: ministries, regulators and the diplomatic missions. This is the part of the city that matters most to our work, because the bodies that inspect the systems we build are here, not elsewhere in the country. Compliance, identity and public-sector projects generate meetings in this zone, and being twenty minutes away from them is a practical advantage that no amount of remote process replaces.',
      'The F sectors, broadly F-6 through F-11, mix residential with a dense commercial layer of markets, offices and services. Smaller professional firms, agencies and consultancies are spread through them. The G sectors on the other side of the main avenues carry a similar mix at a different price point, with G-8, G-9, G-10 and G-11 holding a large share of the city\'s mid-market commercial activity.',
      'The I sectors are the industrial and light-commercial belt on the southern edge, closest to the motorway and to Rawalpindi. I-9 and I-10 hold industrial estates, warehousing, printing and manufacturing alongside offices, and it is a working part of the city, not a showcase one. Our office is in I-10/4, which is a deliberate choice: it is well connected to both the federal core and the road out to Rawalpindi and the motorway, without the rent of the Blue Area.',
      'The H sectors are where the universities sit. H-8, H-9, H-11 and H-12 hold a significant share of the city\'s higher education, and the surrounding area concentrates the graduate supply the whole local industry recruits from. Anyone assessing whether a firm can staff a long engagement here should understand that this proximity is the reason it is possible at all.',
      'To the east and south, the newer developments (DHA Islamabad, Bahria Town, Gulberg Greens and the corridor along the Islamabad Expressway) have grown into substantial mixed-use areas over the past two decades, with a growing share of technology firms choosing them for space and cost. Rawalpindi sits directly alongside, and the two cities function as one labour market: Saddar, Chaklala and the Bahria and DHA developments on that side are a normal commute, and treating Islamabad and Rawalpindi as separate talent pools misreads how the industry here actually staffs itself.',
      'Two practical notes for anyone visiting. Sector addresses are precise once you know the pattern: I-10/4 means sub-sector 4 of sector I-10, and the sub-sector is what you need for anything more specific than a general direction. And traffic between the northern F and G sectors and the southern I sectors is manageable outside peak hours, which is worth factoring into a day of meetings.',
    ],
  },
  {
    heading: 'How we work with clients outside Pakistan',
    body: [
      'Most of our engagements run remotely, and the operating model is deliberately boring: one named technical lead accountable for the system, a shared backlog you can read at any time, a demonstrable increment on a regular cadence, and written decisions instead of remembered ones. Architecture decisions are recorded with their reasoning and their rejected alternatives, so a decision made in month two is still explicable in year two after the people have changed.',
      'Contracting, invoicing and intellectual property assignment are handled through NovuLabs Technology Pvt Ltd, and the source code lives in your repository under your organisation from the first commit, not ours. For regulated clients we work inside whatever constraints your compliance function sets: dedicated environments, restricted data, background checks, on-premise deployment, or engineers working only against synthetic data. Those constraints slow delivery down and they are usually correct.',
      'For clients in Islamabad, Rawalpindi and the wider federal capital region we do meet in person, and for discovery on a complex domain we prefer to. A morning in a room with the people who actually operate the process you are automating is worth several weeks of written requirements.',
    ],
  },
  {
    heading: 'Engagement models',
    body: [
      'We work in three shapes. A fixed-scope project suits a system with a hard boundary and a known regulatory target, for example a goAML reporting integration or a payment gateway certification. Scope is fixed after a paid discovery phase, not before it, because a fixed price quoted on an unread brief is guesswork sold as certainty.',
      'A dedicated team suits a platform under continuous development, where the roadmap is expected to change and you want engineering capacity, not a single deliverable. You get named engineers, your own ceremonies, and the ability to redirect the work without renegotiating a contract every time.',
      'An advisory or architecture engagement suits an organisation with its own engineering team that needs a second opinion, a security and compliance review, or a modernisation plan for a legacy estate. Sometimes the outcome of that engagement is advice not to build the thing, and we would rather deliver that in month one than in month fourteen.',
    ],
  },
];

export const ISLAMABAD_FAQS: FaqItem[] = [
  {
    q: 'What does a software house in Islamabad actually do?',
    a: 'A software house designs, builds, tests, deploys and maintains custom software for other organisations. Unlike a product company, which builds one product for many customers, a software house is engaged to own a system for a single client, from requirements and architecture through to long-term maintenance. NovuLabs works this way for banks, payment institutions, healthcare providers, government departments and enterprises.',
  },
  {
    q: 'Which is the best software house in Islamabad?',
    a: 'There is no single answer, because the right team depends entirely on what you are building. A company that has certified a payment switch against a card scheme is not necessarily the right choice for a consumer marketplace, and the reverse is equally true. Rather than ranking vendors, evaluate them on domain evidence: ask who will write the code, what they have built under the same regulator you answer to, how they estimate, and who owns the source code and infrastructure. Any firm that claims to be best at everything is answering a marketing question, not an engineering one.',
  },
  {
    q: 'Where is NovuLabs located in Islamabad?',
    a: 'NovuLabs is based in I-10/4, I-10, Islamabad, Islamabad Capital Territory, Pakistan. You can reach us on +92 326 8292152 or at info@novulabs.net. Office hours are Monday to Friday, 9:00am to 6:00pm Pakistan Standard Time. Enterprise support arrangements for existing clients run outside those hours and are agreed per contract.',
  },
  {
    q: 'What does custom software development cost in Islamabad?',
    a: 'We do not publish rate cards, because a number without a scope is not information. Cost is driven by regulatory surface area more than by feature count: a system that must survive a central bank inspection, a PCI-DSS assessment or a HIPAA review carries audit, documentation and security work that a comparable unregulated system does not. We give an indicative range after a free technical call, and a firm figure only after a paid discovery phase, when we know what we are actually pricing.',
  },
  {
    q: 'Do you build mobile apps as well as enterprise systems?',
    a: 'Yes. We build native iOS and Android apps and cross-platform apps, and in most of our engagements the app is one client of a larger platform instead of a standalone product. That matters for regulated work: a banking or health app inherits the compliance obligations of the system behind it, including data residency, session handling, audit logging and secure storage on the device.',
  },
  {
    q: 'Can you work with a client who has no in-house technical team?',
    a: 'Yes, and it is common. In that case we take on the technical decisions your organisation would otherwise have to make, and we write them down in language your team can audit rather than in language that requires us to interpret it. We would also insist that your organisation, not NovuLabs, holds the source code repository, the cloud accounts and the domain from day one, so you are never dependent on us for access to your own system.',
  },
  {
    q: 'How long does a typical software project take?',
    a: 'Discovery is usually two to four weeks. A well-scoped integration, for example goAML reporting or a payment gateway connection, is typically measured in months rather than weeks once discovery is complete. A core platform such as an EHR, an AML engine or a core banking component is a multi-quarter programme, and any firm quoting one of those in weeks has either misunderstood the scope or is planning to renegotiate later.',
  },
  {
    q: 'Do you sign NDAs and assign intellectual property to the client?',
    a: 'Yes. We sign non-disclosure agreements before discovery, and intellectual property in work produced for a client is assigned to that client under the engagement contract with NovuLabs Technology Pvt Ltd. Code is committed to your repository under your organisation from the first commit.',
  },
  {
    q: 'Which industries do you serve from Islamabad?',
    a: 'Primarily banking and financial services, payments, healthcare, and government and public sector, with supporting work in retail, logistics, education and manufacturing. The common thread is not the sector, it is the presence of an external body that can audit the system: a regulator, a payment scheme, a health authority or a procurement office.',
  },
  {
    q: 'Do you take on maintenance of software someone else built?',
    a: 'Yes, and we start with an assessment rather than a promise. Inheriting an unfamiliar codebase without reading it first is how a maintenance engagement turns into an unplanned rewrite. The assessment covers architecture, dependency and security posture, test coverage, deployment process and operational risk, and it ends with a written recommendation that may be to maintain, to modernise incrementally, or in some cases to rebuild.',
  },
];
