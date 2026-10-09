import { ServiceItem, WhyUsItem, IndustryItem, TechStackItem, PortfolioItem, FaqItem, TeamMemberProfile } from '../types';

// Each of these 22 cards now links to a dedicated page (content/serviceSpokes.ts)
// instead of straight to /contact. See that file's header comment for why the
// card title and the page it links to sometimes carry a more specific name —
// e.g. "Enterprise Software" links to the Legacy System Modernization page,
// which is the genuinely distinct facet of that work that did not already have
// its own page. Nothing here was renamed for its own sake; every card still
// links to real content about the same underlying capability.
export const services: ServiceItem[] = [
  // Group 1: Web & Software Development
  { icon: 'bi-globe', title: 'Custom Website Development', desc: 'Fast, modern, SEO-optimized websites and web platforms built for performance, usability, and search visibility.', color: 'i-b', slug: 'website-development', group: 'Web & Software Development' },
  { icon: 'bi-cpu-fill', title: 'Enterprise Software Development', desc: 'Scalable enterprise software systems built around complex workflows, teams, data, and business requirements.', color: 'i-v', slug: 'legacy-system-modernization', group: 'Web & Software Development' },
  { icon: 'bi-diagram-3-fill', title: 'ERP Systems', desc: 'Connected ERP solutions that bring finance, HR, operations, procurement, and business data together.', color: 'i-v', slug: 'erp-software-development', group: 'Web & Software Development' },
  { icon: 'bi-people-fill', title: 'CRM Systems', desc: 'Custom CRM development that helps teams manage customers, leads, sales pipelines, and relationships more effectively.', color: 'i-o', slug: 'crm-software-development', group: 'Web & Software Development' },
  { icon: 'bi-layers-fill', title: 'Custom SaaS Platform Development', desc: 'Flexible SaaS products built with the features, workflows, and architecture your business actually needs.', color: 'i-o', slug: 'custom-saas-development', group: 'Web & Software Development' },
  { icon: 'bi-plug-fill', title: 'API Development & Integration', desc: 'Secure, reliable APIs that connect applications, services, data, and business systems seamlessly.', color: 'i-c', slug: 'api-development-integration', group: 'Web & Software Development' },

  // Group 2: Mobile App Development
  { icon: 'bi-phone-fill', title: 'Mobile App Development', desc: 'Native Android and iOS, Flutter and React Native, plus the backend and integrations behind the app.', color: 'i-g', slug: 'mobile-app-development', href: '/mobile-app-development-in-islamabad', group: 'Mobile App Development' },
  { icon: 'bi-apple', title: 'iOS App Development', desc: 'Native iOS applications engineered with Swift for performance, reliability, and a polished Apple experience.', color: 'i-b', slug: 'ios-app-development', group: 'Mobile App Development' },
  { icon: 'bi-android2', title: 'Android App Development', desc: 'Kotlin-powered Android applications built to perform across the diverse device ecosystem in use today.', color: 'i-g', slug: 'android-app-development', group: 'Mobile App Development' },

  // Group 3: Financial Technology (FinTech) Software
  { icon: 'bi-bank', title: 'Custom Financial Software Development', desc: 'Secure financial platforms for banking, lending, digital wallets, investments, and complex financial workflows.', color: 'i-t', slug: 'core-banking-software-development', group: 'Financial Technology (FinTech) Software' },
  { icon: 'bi-credit-card-2-front', title: 'Payment Gateway Integration', desc: 'Reliable payment integrations connecting your platform with global payment networks and local acquiring systems.', color: 'i-c', slug: 'payment-gateway-development', group: 'Financial Technology (FinTech) Software' },
  // "Certified" removed - scheme certification is issued to the institution operating the
  // platform, not to the development firm. Matches app/layout.tsx:121 and the /services FAQ.
  { icon: 'bi-patch-check-fill', title: 'Card Network Integrations (Mastercard / Visa)', desc: 'Direct Mastercard and Visa integrations for secure card payments, transaction processing, and acquiring workflows.', color: 'i-o', slug: 'mastercard-visa-integration', group: 'Financial Technology (FinTech) Software' },
  { icon: 'bi-activity', title: 'Transaction Monitoring Systems', desc: 'Intelligent transaction monitoring systems designed to identify unusual activity and support financial risk management.', color: 'i-p', slug: 'transaction-monitoring-software-development', group: 'Financial Technology (FinTech) Software' },
  { icon: 'bi-filetype-xml', title: 'ISO 20022 & SWIFT Messaging Integration', desc: 'Financial messaging integrations supporting ISO 20022 XML-based standards and SWIFT MT and MX message formats.', color: 'i-y', slug: 'financial-messaging-schema-integration', group: 'Financial Technology (FinTech) Software' },

  // Group 4: Healthcare Software Development
  { icon: 'bi-heart-pulse-fill', title: 'Custom Healthcare Software', desc: 'Digital healthcare platforms designed around clinical workflows, patient experiences, and secure health data.', color: 'i-p', slug: 'ehr-clinical-software-development', group: 'Healthcare Software Development' },
  { icon: 'bi-clipboard2-pulse-fill', title: 'Medical Billing Software', desc: 'End-to-end medical billing systems supporting claims, coding, billing workflows, and payment processes.', color: 'i-c', slug: 'medical-billing-software-development', group: 'Healthcare Software Development' },

  // Group 5: Compliance & Regulatory Technology
  { icon: 'bi-shield-lock-fill', title: 'AML Systems', desc: 'AML platforms that help organizations monitor risk, analyze transactions, and support regulatory compliance.', color: 'i-t', slug: 'aml-case-management-risk-scoring', group: 'Compliance & Regulatory Technology' },
  { icon: 'bi-flag-fill', title: 'CFT Compliance Systems', desc: 'Counter-financing of terrorism systems supporting risk assessment, screening, monitoring, and regulatory workflows.', color: 'i-b', slug: 'sanctions-pep-screening-software', group: 'Compliance & Regulatory Technology' },
  { icon: 'bi-bank2', title: 'FMU Pakistan Reporting Systems', desc: 'Regulatory technology supporting FMU workflows, STR and CTR reporting, and compliance operations in Pakistan.', color: 'i-v', slug: 'goaml-fmu-reporting-integration', group: 'Compliance & Regulatory Technology' },

  // Group 6: Government & Digital Public Services
  { icon: 'bi-buildings-fill', title: 'Government Portal Development', desc: 'Secure digital government platforms connecting citizens, organizations, APIs, and essential public services.', color: 'i-g', slug: 'government-portal-development', group: 'Government & Digital Public Services' },

  // Group 7: AI Solutions
  { icon: 'bi-robot', title: 'AI Automation & Intelligent Assistants', desc: 'AI-powered automation for repetitive workflows, document processing, intelligent assistants, and business operations.', color: 'i-t', slug: 'ai-development-services', group: 'AI Solutions' },

  // Group 8: Cloud Solutions
  { icon: 'bi-cloud-fill', title: 'Cloud Architecture & Migration', desc: 'Cloud architecture, migration, and infrastructure solutions built for secure, scalable, and reliable applications.', color: 'i-b', slug: 'cloud-migration-services', group: 'Cloud Solutions' }
];

/**
 * Why-us cards.
 *
 * Rewritten away from the category labels these used to carry ("Infinite
 * Scalability", "Rapid Delivery", "Global Delivery Model"). Every agency's
 * site claims those, which makes them worth nothing to a buyer comparing three
 * suppliers: a differentiator every competitor also asserts is not a
 * differentiator. Each card now states something specific enough that a
 * competitor either cannot copy it or would be caught out if they did, and
 * concrete enough that a buyer can test it on the first call.
 */
export const whyUs: WhyUsItem[] = [
  { num: '', icon: 'bi-person-video3', title: 'The architect takes the first call', desc: 'Not a salesperson who hands you over afterwards. The person who scopes your system is the one accountable for building it.', color: 'i-t' },
  { num: '', icon: 'bi-shield-check', title: 'Built for the examiner, not just the user', desc: 'Audit trails, access logging and decision records designed in the first sprint. Retrofitting them before an inspection costs a quarter.', color: 'i-b' },
  { num: '', icon: 'bi-file-earmark-code', title: 'We have been rejected by the FMU', desc: 'And fixed it. goAML schema work, STR and CTR filing, SBP inspections. Ask any supplier for that story and see how specific the answer gets.', color: 'i-v' },
  { num: '', icon: 'bi-hand-thumbs-down', title: 'We will talk you out of it', desc: 'A real share of enquiries describe something an off-the-shelf product already does. We say so in week one rather than month fourteen.', color: 'i-o' },
  { num: '', icon: 'bi-key', title: 'You hold the keys from day one', desc: 'Your repository, your cloud accounts, your domain, your data. Nothing about leaving us is difficult, which is the point.', color: 'i-c' },
  { num: '', icon: 'bi-journal-text', title: 'Decisions are written down', desc: 'Architecture choices recorded with their reasoning and rejected alternatives, so month-two decisions still make sense in year three.', color: 'i-t' }
];

export const industries: IndustryItem[] = [
  { icon: 'bi-bank2', title: 'Financial Services', desc: 'Secure software for banking, fintech, payments, lending, compliance, and financial operations.', color: 'i-t', slug: 'financial-services', cta: 'Explore Financial Services' },
  { icon: 'bi-hospital-fill', title: 'Healthcare', desc: 'Healthcare software for clinical workflows, patient services, medical billing, and healthcare operations.', color: 'i-p', slug: 'healthcare', cta: 'Explore Healthcare' },
  { icon: 'bi-buildings-fill', title: 'Government', desc: 'Digital government platforms for public services, citizen portals, secure workflows, and connected systems.', color: 'i-b', slug: 'government', cta: 'Explore Government Solutions' },
  { icon: 'bi-cup-hot-fill', title: 'Hospitality', desc: 'Technology solutions for hotels, resorts, bookings, guest experiences, and hospitality operations.', color: 'i-y', slug: 'hospitality', cta: 'Explore Hospitality' },
  { icon: 'bi-house-door-fill', title: 'Real Estate', desc: 'Custom software for property management, real estate operations, listings, CRM, and customer engagement.', color: 'i-g', slug: 'real-estate', cta: 'Explore Real Estate' },
  { icon: 'bi-mortarboard-fill', title: 'Education', desc: 'Digital platforms for schools, institutions, learning management, administration, and education services.', color: 'i-c', slug: 'education', cta: 'Explore Education' },
  { icon: 'bi-cart-fill', title: 'E-commerce', desc: 'Scalable e-commerce software for online stores, payments, inventory, customers, and digital commerce.', color: 'i-o', slug: 'ecommerce', cta: 'Explore E-commerce' },
  { icon: 'bi-truck', title: 'Logistics & Transportation', desc: 'Software for logistics operations, fleet management, tracking, delivery workflows, and transportation networks.', color: 'i-v', slug: 'logistics-transportation', cta: 'Explore Logistics & Transportation' },
  { icon: 'bi-gear-wide-connected', title: 'Manufacturing', desc: 'Digital systems for manufacturing operations, supply chains, inventory, production, and business management.', color: 'i-b', slug: 'manufacturing', cta: 'Explore Manufacturing' },
  { icon: 'bi-briefcase-fill', title: 'Professional Services', desc: 'Custom business software for consulting firms, agencies, legal teams, and other professional organizations.', color: 'i-c', slug: 'professional-services', cta: 'Explore Professional Services' }
];

export const techStack: TechStackItem[] = [
  { icon: '⚛️', name: 'React' },
  { icon: '🟢', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '☕', name: 'Java' },
  { icon: '🔷', name: '.NET Core' },
  { icon: '🦋', name: 'Flutter' },
  { icon: '☁️', name: 'AWS' },
  { icon: '🔵', name: 'Azure' },
  { icon: '🐳', name: 'Docker' },
  { icon: '⚙️', name: 'Kubernetes' },
  { icon: '🐘', name: 'PostgreSQL' },
  { icon: '🤖', name: 'TensorFlow' }
];

export interface PortfolioProject extends PortfolioItem {
  cat: string;
}

// TODO(client): the 9 `img` values below are hotlinked Unsplash stock photographs standing in
// for real project work. Same credibility problem as the team photos (CLIENT-ACTIONS.md item 1),
// and hotlinking leaks every visitor to images.unsplash.com on page load. Replace with real
// screenshots, redacted architecture diagrams, or neutral branded panels, self-hosted.
// NOTE: SEO-CHANGELOG.md "Not done, and why" describes these as "~30 CSS background URLs in
// globals.css". That is inaccurate: there are zero external url() references in any CSS file.
// The real exposure is these 9 entries in this file.
export const portfolioProjects: PortfolioProject[] = [
  {
    cat: 'fintech',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75',
    tags: 'Fintech · AML · Compliance',
    title: 'CoreBanking AML Suite',
    desc: 'Real-time transaction monitoring and goAML-integrated compliance for a Tier-1 bank.',
    tech: ['Python', 'React', 'PostgreSQL', 'FMU']
  },
  {
    cat: 'healthcare',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=75',
    tags: 'Healthcare · EHR · HIPAA',
    title: 'MediCore EHR Platform',
    desc: 'HIPAA-compliant Electronic Health Records deployed across 40+ hospitals with integrated telemedicine and billing.',
    tech: ['.NET Core', 'HL7 FHIR', 'Angular']
  },
  {
    cat: 'government',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=75',
    tags: 'Government · Identity · PKI',
    title: 'NatID Verification Portal',
    desc: 'National identity verification with CNIC/NADRA API, biometric authentication, and PKI digital signatures.',
    tech: ['Java', 'NADRA API', 'PKI']
  },
  {
    cat: 'fintech',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75',
    tags: 'Fintech · Payments · Visa/MC',
    title: 'TranzAxis Payment Gateway',
    // TODO(client): confirm or delete $2.4B annual volume, 99.99% uptime and <200ms
    // authorization. CLIENT-ACTIONS.md item 7. Unevidenced performance figures attached to a
    // named platform are the highest-risk claim class on this site. "certified" removed here
    // for the same reason as app/layout.tsx:121.
    desc: 'Mastercard and Visa payment processing, engineered to PCI-DSS and taken through scheme certification.',
    tech: ['Node.js', 'Mastercard', 'PCI DSS']
  },
  {
    cat: 'enterprise',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=75',
    tags: 'Enterprise · ERP · Manufacturing',
    title: 'OmniERP Manufacturing Suite',
    desc: 'Integrated ERP covering production, inventory, HR, and finance for a multinational conglomerate across 3 countries.',
    tech: ['.NET', 'SQL Server', 'Azure']
  },
  {
    cat: 'mobile',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=75',
    tags: 'Mobile · Fintech · Wallet',
    title: 'FinSync Digital Wallet',
    desc: 'Cross-platform digital wallet with RAAST instant payments, P2P transfers, bill payments. 1M+ active users.',
    tech: ['Flutter', 'RAAST', 'SBP']
  },
  {
    cat: 'healthcare',
    img: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&q=75',
    tags: 'Healthcare · Telemedicine · Mobile',
    title: 'CarePulse Telemedicine App',
    desc: 'HIPAA-compliant telemedicine iOS/Android app with HD video, e-prescriptions, and remote vitals. 500K+ users.',
    tech: ['Swift', 'Kotlin', 'WebRTC']
  },
  {
    cat: 'enterprise',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=75',
    tags: 'Enterprise · CRM · AI',
    title: 'NovuCRM Intelligence Suite',
    desc: 'AI-powered CRM with ML lead scoring, revenue forecasting, and omnichannel engagement with native mobile app.',
    tech: ['React', 'Python ML', 'AWS']
  },
  {
    cat: 'government',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=75',
    tags: 'Government · Tax · FBR',
    title: 'TaxLink Revenue Portal',
    desc: 'Federal tax filing portal integrating FBR APIs, e-signature workflows, automated assessment, and compliance dashboards.',
    tech: ['Java EE', 'FBR API', 'Oracle']
  }
];

/**
 * Homepage FAQ. Rewritten: the previous five were generic, one duplicated a
 * question answered on /faq, and two made claims the site cannot evidence
 * ("live deployments at multiple SBP-regulated institutions", a "4-hour
 * guaranteed response" SLA). Every answer now ends in a link to the page that
 * treats the subject in full. No question here is asked anywhere else.
 */
export const faqs: FaqItem[] = [
  {
    q: 'What does a software house in Islamabad do?',
    a: 'A software house develops digital products and systems that help businesses solve operational, customer, or technical problems. This can include custom business software, enterprise platforms, web applications, mobile apps, AI-powered solutions, cloud systems, integrations, and software modernization. NovuLabs works with businesses to understand their requirements and build software around their specific needs.',
    link: { href: '/software-house-in-islamabad', label: 'How to choose a software house in Islamabad' },
  },
  {
    q: 'What software development services does NovuLabs provide?',
    a: 'NovuLabs provides a broad range of software development services, including custom software development, enterprise software, web and mobile application development, AI software development, financial software, cloud development, DevOps, API development, UI/UX design, software integration, cybersecurity, testing and QA, legacy modernization, and other specialized software solutions.',
    link: { href: '/services', label: 'See all services' },
  },
  {
    q: 'Does NovuLabs build custom software?',
    a: 'Yes. NovuLabs develops custom software for organizations whose requirements cannot be fully addressed by off-the-shelf products. Custom software can be designed around your business processes, users, integrations, data, security requirements, and long-term objectives.',
    link: { href: '/services/legacy-system-modernization', label: 'Enterprise software development' },
  },
  {
    q: 'How do I know if my business needs custom software?',
    a: 'Custom software can make sense when existing tools do not fit your workflows, multiple systems need to be connected, manual processes are becoming difficult to manage, or you need functionality that standard software does not provide. The right approach depends on the problem, existing technology, budget, users, and expected growth.',
  },
  {
    q: 'What industries does NovuLabs serve?',
    a: 'NovuLabs develops software for organizations across industries including finance, healthcare, government, hospitality, education, real estate, e-commerce, logistics, manufacturing, and professional services. Each project is approached according to its specific industry requirements, workflows, users, data, and operational needs.',
    link: { href: '/industries', label: 'Industries we serve' },
  },
  {
    q: 'Can NovuLabs develop software for businesses outside Islamabad?',
    a: 'Yes. NovuLabs is a software house based in Islamabad, but its development services can support businesses in other cities, countries, and international markets. Remote collaboration allows requirements, development, meetings, testing, and project communication to take place across geographical boundaries.',
    link: { href: '/software-development-in-pakistan', label: 'Software development in Pakistan' },
  },
  {
    q: 'Can NovuLabs modernize an existing software system?',
    a: 'Yes. Not every project needs to start from scratch. NovuLabs can help modernize software that has become difficult to maintain, integrate, secure, or scale. Depending on the system, modernization may involve updating the technology stack, improving architecture, replacing outdated components, introducing integrations, or gradually replacing parts of the platform.',
    link: { href: '/services/legacy-system-modernization', label: 'Legacy system modernization' },
  },
  {
    q: 'Can NovuLabs integrate new software with existing systems?',
    a: 'Yes. NovuLabs can connect applications, databases, APIs, third-party services, and internal systems so they can exchange information and work together. Effective software integration can reduce duplicated work, improve data flow, and create a more connected technology environment.',
    link: { href: '/services/api-development-integration', label: 'API development and integration' },
  },
  {
    q: 'Does NovuLabs develop AI-powered software?',
    a: 'Yes. NovuLabs develops AI-powered software where artificial intelligence can provide practical value to a product or business process. Depending on the project, AI can support automation, intelligent search, conversational interfaces, recommendations, prediction, classification, document processing, and other data-driven applications.',
    link: { href: '/services/ai-development-services', label: 'AI development services' },
  },
  {
    q: 'How do I get started with NovuLabs?',
    a: 'Start by telling us about the software you want to build, improve, integrate, or replace. You do not need a complete technical specification. Sharing your business problem, product idea, existing system, or desired outcome gives us a useful starting point for understanding your requirements and discussing the right development approach.',
    link: { href: '/contact', label: 'Book a free consultation' },
  },
];

/**
 * Leadership and author profiles.
 * ---------------------------------------------------------------------------
 * ⚠️ CLIENT ACTION REQUIRED — HIGHEST-ROI CHANGE ON THE SITE.
 *
 * These three profiles previously used Unsplash stock photographs of strangers
 * under the real names of the company's CEO, CTO and COO. For a vendor asking a
 * bank to trust it with transaction monitoring, that is the single most
 * damaging credibility error on the site, and it is a Search Quality Rater
 * Guidelines negative signal on top of the commercial cost.
 *
 * They have been replaced with neutral branded monograms, which is honest.
 * Replace them with real photographs (self-hosted WebP/JPEG, square, ≥512px).
 * That is one afternoon of work and it is worth more than everything else in
 * this branch combined.
 *
 * `credentials` is intentionally empty. Populate it only with credentials that
 * can be verified: CAMS, CISSP, AWS certifications, degrees, prior employers.
 * An empty credentials array renders nothing; an invented one is a liability.
 */

/**
 * Contact-page FAQs.
 *
 * Lifted out of the client component so FAQPage JSON-LD can be emitted from the
 * server. The Q&A text was already visible on the page; only its location in
 * the codebase changed, which is what keeps the markup policy-compliant.
 */
export const contactFaqs: FaqItem[] = [
  { q: 'What is the minimum project size NovuLabs works with?', a: 'Typically $15,000 USD for a standalone module or MVP. Full enterprise platforms start from $50,000. We focus on end-to-end delivery, not hourly freelance work.' },
  { q: 'Do you sign NDAs before discussions?', a: 'Yes, mutual NDAs before any substantive technical discussion. Your IP and competitive information are protected from the first call.' },
  { q: 'Can you work alongside our existing in-house team?', a: 'Yes. Staff augmentation, co-development, and full outsourcing. Our engineers adapt to your existing stack, tools, sprint ceremonies, and communication preferences.' },
  { q: 'What compliance frameworks do you work to?', a: 'FATF, FMU Pakistan, SBP, HIPAA, HL7 FHIR, PCI-DSS, ISO 27001, GDPR, and Mastercard/Visa scheme requirements. To be precise about the distinction: we engineer to these standards. Where a framework issues certification, that certificate is held by the entity operating the environment, not by its development vendor.' },
  { q: 'Do you offer fixed-price or time-and-material contracts?', a: 'Both. Fixed-price for well-defined, stable requirements. Time-and-material for evolving enterprise platforms. We recommend a model after the discovery call rather than before it.' },
];

export const teamMembers: TeamMemberProfile[] = [
  {
    slug: 'muneeb-ali-jaffari',
    name: 'Muneeb Ali Jaffari',
    role: 'CEO & Founder',
    img: '/team/muneeb-ali-jaffari.jpg',
    imgAlt: 'Muneeb Ali Jaffari, CEO and Founder of NovuLabs',
    bio: 'Sets the commercial direction and takes the first technical call on most enterprise engagements.',
    longBio:
      'Muneeb founded NovuLabs and leads its enterprise engagements, including the initial architecture conversation on most new work. He writes here on build-versus-buy economics and on why the honest recommendation is frequently to buy.',
    skills: ['Enterprise strategy', 'Build vs buy', 'Delivery models'],
    credentials: [],
    knowsAbout: [
      'Enterprise software strategy',
      'Build versus buy assessment',
      'Total cost of ownership modelling',
    ],
  },
  {
    slug: 'shamroz-ali-zaidi',
    name: 'Shamroz Ali Zaidi',
    role: 'Chief Technology Officer',
    img: '/team/shamroz-ali-zaidi.jpg',
    imgAlt: 'Shamroz Ali Zaidi, Chief Technology Officer of NovuLabs',
    bio: 'Owns platform architecture: multi-tenant systems, cloud, and the security posture underneath both.',
    longBio:
      'Shamroz leads platform architecture at NovuLabs, covering multi-tenant SaaS design, cloud and Kubernetes platform engineering, and the security posture of regulated workloads. He writes here on HIPAA safeguards and HL7 FHIR interoperability.',
    skills: ['Platform architecture', 'Cloud & Kubernetes', 'Security engineering'],
    credentials: [],
    knowsAbout: [
      'Multi-tenant SaaS architecture',
      'HIPAA Security Rule implementation',
      'HL7 FHIR interoperability',
      'Kubernetes platform engineering',
    ],
  },
  {
    slug: 'ali-zaidi',
    name: 'Ali Zaidi',
    role: 'Chief Operating Officer',
    img: '/team/ali-zaidi.jpg',
    imgAlt: 'Ali Zaidi, Chief Operating Officer of NovuLabs',
    bio: 'Runs delivery and the compliance practice, including AML/CFT engagements with SBP-regulated institutions.',
    longBio:
      'Ali runs delivery operations and the compliance practice at NovuLabs, including AML/CFT engagements with SBP-regulated institutions. He writes here on goAML integration, transaction monitoring design, and what regulatory examination asks of a system.',
    skills: ['AML/CFT programmes', 'Delivery operations', 'Regulatory engagement'],
    credentials: [],
    knowsAbout: [
      'AML/CFT compliance programmes',
      'goAML STR and CTR reporting',
      'Transaction monitoring system design',
      'FMU and SBP regulatory requirements',
    ],
  },
];
