import { IndustryPage } from '@/types';

/**
 * Per-sector pages under /industries/[slug].
 *
 * Every industry card on the homepage used to link to /industries, so ten
 * different sectors pointed at one URL with one title. A crawler could not tell
 * which of them the site was competent in, and a visitor arriving from
 * "healthcare software development" landed on a page mostly about banking.
 *
 * Each entry here is one indexable page. `constraints` is the part that does
 * the work: it names what makes the sector difficult, which is the thing a
 * buyer in that sector is checking for and the thing a generalist supplier
 * cannot write convincingly.
 */
export const industryPages: IndustryPage[] = [
  {
    slug: 'financial-services',
    name: 'Financial Services',
    h1: 'Financial Services Software Development',
    title: 'Financial Services Software Development | NovuLabs',
    description: 'Software for banks, fintechs, lenders and payment companies in Pakistan: core systems, payments, AML and CFT compliance, and regulatory reporting.',
    intro: 'Financial software carries obligations that consumer software does not. A ledger has to reconcile, a payment has to be traceable after the fact, and a compliance decision has to be explainable to someone who was not in the room. We build for institutions under State Bank supervision and the companies that supply them.',
    builds: [
      { title: 'Core banking and lending', desc: 'Account ledgers, loan origination and servicing, treasury and investment management, built so reconciliation and audit trails are part of the design rather than a reporting layer added later.' },
      { title: 'Payments and wallets', desc: 'Card capture and tokenisation, 3-D Secure, settlement and reconciliation files, digital wallets, and integrations with both local acquirers and international card networks.' },
      { title: 'AML, CFT and monitoring', desc: 'Alert queues, customer risk scoring, sanctions and PEP screening, transaction monitoring in real time and in batch, and the evidence trail an inspector asks to see.' },
      { title: 'Regulatory reporting', desc: 'goAML integration for the Financial Monitoring Unit, STR and CTR generation, schema-valid XML filing, and dashboards for SBP inspection.' },
    ],
    constraints: [
      'State Bank of Pakistan supervision and inspection',
      'Financial Monitoring Unit reporting through goAML',
      'PCI-DSS scope for anything touching card data',
      'ISO 20022 and SWIFT MT/MX messaging standards',
      'Instant settlement on RAAST, where correction after the fact is not available',
    ],
    services: [
      { slug: 'core-banking-software-development', label: 'Custom financial software development' },
      { slug: 'payment-gateway-development', label: 'Payment gateway integration' },
      { slug: 'aml-case-management-risk-scoring', label: 'AML systems' },
      { slug: 'goaml-fmu-reporting-integration', label: 'FMU Pakistan reporting' },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    h1: 'Healthcare Software Development',
    title: 'Healthcare Software Development | NovuLabs',
    description: 'Healthcare software for hospitals, clinics and health technology firms: electronic health records, telemedicine, medical billing, and HL7 FHIR interoperability.',
    intro: 'Clinical software is used between patients, by people who cannot stop to work around it. It also holds the most sensitive category of personal data most organisations will ever store. Both facts shape how we build it: workflows follow the clinic, and access to a record is logged whether or not anyone ever asks.',
    builds: [
      { title: 'Electronic health records', desc: 'Patient records, encounters, orders and results, structured for HL7 FHIR interoperability so information can move between providers instead of being retyped.' },
      { title: 'Telemedicine and scheduling', desc: 'Remote consultation, appointment booking, waiting lists and reminders, designed around clinic throughput rather than around the software.' },
      { title: 'Medical billing', desc: 'Eligibility checks, ICD-10 and CPT coding, claim submission, denial management and remittance posting, with a rules engine that catches a claim before a payer rejects it.' },
      { title: 'Access control and audit', desc: 'Role-based access to patient data and HIPAA-aligned audit logging, so who read which record, and when, is a question with an answer.' },
    ],
    constraints: [
      'HIPAA-aligned handling of protected health information',
      'HL7 FHIR and HL7 v2 interoperability',
      'ICD-10 and CPT coding accuracy for reimbursement',
      'Clinical availability requirements, where downtime is a patient-safety issue',
      'Data residency rules governing where records may be stored',
    ],
    services: [
      { slug: 'ehr-clinical-software-development', label: 'Custom healthcare software' },
      { slug: 'medical-billing-software-development', label: 'Medical billing software' },
      { slug: 'financial-messaging-schema-integration', label: 'HL7 FHIR schema integration' },
      { slug: 'cloud-migration-services', label: 'Cloud architecture and migration' },
    ],
  },
  {
    slug: 'government',
    name: 'Government',
    h1: 'Government Software Development',
    title: 'Government Software Development | NovuLabs',
    description: 'Digital government platforms: citizen service portals, NADRA and CNIC identity verification, digital signatures and PKI, and departmental workflow.',
    intro: 'Government software answers to procurement review and to the public. That changes what counts as finished: a decision the system made has to be reconstructable, the interface has to work for citizens who have no alternative supplier, and the documentation has to survive the team that wrote it.',
    builds: [
      { title: 'Citizen service portals', desc: 'Public-facing services with the accessibility standards and plain-language interfaces required when the user cannot go elsewhere.' },
      { title: 'Identity verification', desc: 'NADRA and CNIC API integration, biometric authentication, and digital signatures backed by PKI.' },
      { title: 'Departmental workflow', desc: 'Case management, approvals, inter-departmental routing and record-keeping, with decisions documented as they are made.' },
      { title: 'Procurement-ready delivery', desc: 'Architecture decisions recorded with their reasoning, handover documentation, and source and infrastructure the department owns outright.' },
    ],
    constraints: [
      'Public procurement review and audit',
      'NADRA and CNIC integration requirements',
      'Accessibility standards for public-facing services',
      'Data sovereignty for citizen records',
      'Long support horizons measured in years, not release cycles',
    ],
    services: [
      { slug: 'government-portal-development', label: 'Government portal development' },
      { slug: 'api-development-integration', label: 'API development and integration' },
      { slug: 'cloud-migration-services', label: 'Cloud architecture and migration' },
      { slug: 'legacy-system-modernization', label: 'Enterprise software development' },
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    h1: 'Hospitality Software Development',
    title: 'Hospitality Software Development | NovuLabs',
    description: 'Technology for hotels, resorts and hospitality groups: booking engines, property management integration, guest experience apps, and operations dashboards.',
    intro: 'Hospitality software is judged at two moments: when a guest books, and when something goes wrong during a stay. Both depend on inventory being accurate across every channel at once, which is where most hospitality technology quietly fails.',
    builds: [
      { title: 'Booking and reservations', desc: 'Direct booking engines with rate and availability logic, channel manager integration, and payment capture that does not lose a reservation halfway through.' },
      { title: 'Property management integration', desc: 'Connecting your PMS to booking, housekeeping, point of sale and accounting so a room status changes once and is right everywhere.' },
      { title: 'Guest experience', desc: 'Mobile check-in, digital keys, in-stay requests and messaging, and loyalty programmes tied to real guest history.' },
      { title: 'Operations and reporting', desc: 'Housekeeping and maintenance workflow, occupancy and revenue dashboards, and multi-property reporting for groups.' },
    ],
    constraints: [
      'Rate parity and inventory sync across OTAs and direct channels',
      'Card data handling under PCI-DSS at booking and on property',
      'Seasonal traffic peaks that must not degrade the booking path',
      'Multi-property and multi-currency operations',
      'Integration with incumbent PMS platforms that rarely offer modern APIs',
    ],
    services: [
      { slug: 'website-development', label: 'Custom website development' },
      { slug: 'mobile-app-development', label: 'Mobile app development' },
      { slug: 'payment-gateway-development', label: 'Payment gateway integration' },
      { slug: 'api-development-integration', label: 'API development and integration' },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    h1: 'Real Estate Software Development',
    title: 'Real Estate Software Development | NovuLabs',
    description: 'Property software for developers, agencies and property managers: listing portals, CRM for enquiries and viewings, instalment plans, and tenant portals.',
    intro: 'Property runs on two things software is good at and most agencies still do by hand: keeping a listing accurate everywhere it appears, and tracking a buyer from first enquiry through instalments that may run for years.',
    builds: [
      { title: 'Listing portals', desc: 'Search with map and filter, media handling, and syndication so a price change updates everywhere rather than in one place.' },
      { title: 'Sales CRM', desc: 'Enquiry capture, viewing scheduling, follow-up pipelines and agent performance, built around how property actually sells.' },
      { title: 'Booking and instalment plans', desc: 'Unit reservation, payment schedules, instalment tracking and receipting, with a clear record of what each buyer has paid and still owes.' },
      { title: 'Tenant and owner portals', desc: 'Lease records, rent collection, maintenance requests and statements, so tenants and owners stop phoning the office for the same answers.' },
    ],
    constraints: [
      'Instalment and payment-plan accounting over multi-year horizons',
      'Accurate listing sync across portals and agents',
      'Document handling for contracts, transfers and title records',
      'Commission structures that vary by agent, project and channel',
      'Geospatial search performance on large inventories',
    ],
    services: [
      { slug: 'crm-software-development', label: 'CRM systems' },
      { slug: 'website-development', label: 'Custom website development' },
      { slug: 'custom-saas-development', label: 'Custom SaaS platform development' },
      { slug: 'mobile-app-development', label: 'Mobile app development' },
    ],
  },
  {
    slug: 'education',
    name: 'Education',
    h1: 'Education Software Development',
    title: 'Education Software Development | NovuLabs',
    description: 'Digital platforms for schools, universities and training providers: learning management, student information systems, virtual classrooms, and fee collection.',
    intro: 'Education software has three audiences with different needs on the same data: students, teaching staff, and administration. Systems that serve only one of the three are the reason so many institutions run four platforms that disagree with each other.',
    builds: [
      { title: 'Learning management', desc: 'Course delivery, content and assessment, submissions and grading, with SCORM and xAPI support where existing material has to be carried across.' },
      { title: 'Student information systems', desc: 'Admissions, enrolment, attendance, transcripts and progression, as one record rather than several spreadsheets.' },
      { title: 'Virtual classrooms', desc: 'Live sessions, recordings, breakout groups and participation tracking, built to work on the connections students actually have.' },
      { title: 'Fees and administration', desc: 'Fee structures, instalments, collection and reconciliation, plus the reporting an institution owes its board and its regulator.' },
    ],
    constraints: [
      'Student data protection and parental access rules',
      'Enrolment-period load spikes measured in minutes, not days',
      'Accreditation and reporting requirements for recognised institutions',
      'Low-bandwidth access for remote students',
      'Academic calendar cycles that dictate when a system can change',
    ],
    services: [
      { slug: 'custom-saas-development', label: 'Custom SaaS platform development' },
      { slug: 'website-development', label: 'Custom website development' },
      { slug: 'mobile-app-development', label: 'Mobile app development' },
      { slug: 'payment-gateway-development', label: 'Payment gateway integration' },
    ],
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce',
    h1: 'E-commerce Software Development',
    title: 'E-commerce Software Development | NovuLabs',
    description: 'Scalable e-commerce software: storefronts, catalogue and inventory systems, order and fulfilment workflows, payment integration, and ERP connections.',
    intro: 'An e-commerce platform is mostly an inventory problem wearing a storefront. The visible part is the easy part; what decides whether the business works is whether stock, orders, payments and accounts agree with each other at the end of a busy day.',
    builds: [
      { title: 'Storefronts and marketplaces', desc: 'B2C and B2B storefronts, multi-vendor marketplaces, customer accounts and pricing rules that differ by segment.' },
      { title: 'Catalogue and inventory', desc: 'Product information management, variants and bundles, and stock that stays accurate across warehouses and sales channels.' },
      { title: 'Orders and fulfilment', desc: 'Order routing, picking and packing, shipping integrations, returns and refunds, with the exception paths that make up most support load.' },
      { title: 'Payments and finance', desc: 'Local and international payment methods, reconciliation, and ERP or accounting integration so revenue is recorded once.' },
    ],
    constraints: [
      'Traffic and order spikes during campaigns and seasonal peaks',
      'PCI-DSS scope wherever card data is handled',
      'Stock accuracy across channels, warehouses and marketplaces',
      'Local payment methods and cash on delivery reconciliation',
      'Returns and refund flows that touch stock, payment and accounts at once',
    ],
    services: [
      { slug: 'website-development', label: 'Custom website development' },
      { slug: 'payment-gateway-development', label: 'Payment gateway integration' },
      { slug: 'erp-software-development', label: 'ERP systems' },
      { slug: 'api-development-integration', label: 'API development and integration' },
    ],
  },
  {
    slug: 'logistics-transportation',
    name: 'Logistics & Transportation',
    h1: 'Logistics and Transportation Software Development',
    title: 'Logistics & Transportation Software | NovuLabs',
    description: 'Software for logistics operations: fleet management, shipment tracking, warehouse management, route planning, delivery workflows, and customs documentation.',
    intro: 'Logistics software has to keep working where the network does not. Drivers go through dead zones, warehouses have bad wifi, and a scan that fails silently is worse than no scan at all, so offline behaviour is a design decision rather than an enhancement.',
    builds: [
      { title: 'Fleet and shipment tracking', desc: 'Vehicle and consignment tracking, telematics and IoT sensor data, geofencing, and proof of delivery that survives a lost connection.' },
      { title: 'Warehouse management', desc: 'Receiving, put-away, picking, packing and stock counts, on scanners and mobile devices used all day.' },
      { title: 'Route and dispatch planning', desc: 'Route optimisation, load assignment, driver scheduling, and rescheduling when the day does not go to plan.' },
      { title: 'Documentation and integration', desc: 'Customs and shipping documentation, carrier and 3PL integrations, and ERP connections so freight cost lands in the right ledger.' },
    ],
    constraints: [
      'Offline-first operation across unreliable mobile coverage',
      'High-frequency telematics and sensor data at scale',
      'Customs and cross-border documentation requirements',
      'Battery and durability limits on handheld devices',
      'Carrier and third-party logistics integrations with inconsistent APIs',
    ],
    services: [
      { slug: 'mobile-app-development', label: 'Mobile app development' },
      { slug: 'erp-software-development', label: 'ERP systems' },
      { slug: 'api-development-integration', label: 'API development and integration' },
      { slug: 'ai-development-services', label: 'AI automation and intelligent assistants' },
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    h1: 'Manufacturing Software Development',
    title: 'Manufacturing Software Development | NovuLabs',
    description: 'Digital systems for manufacturing: production planning, quality control, supply chain and inventory, machine data capture, and ERP integration.',
    intro: 'Manufacturing software sits between the floor and the office, and the two measure time differently. Production needs an answer now, on a terminal next to a machine; management needs the same events aggregated into cost and yield. Both come from one record or neither is trusted.',
    builds: [
      { title: 'Production planning', desc: 'Work orders, scheduling, capacity and bill of materials, with the visibility to know what a change to one order does to the rest.' },
      { title: 'Quality control', desc: 'Inspection workflows, defect and non-conformance tracking, traceability by batch or serial, and the records an audit expects.' },
      { title: 'Supply chain and inventory', desc: 'Procurement, supplier management, raw material and finished goods stock, and demand planning against real consumption.' },
      { title: 'Machine and floor data', desc: 'Capturing machine and sensor data for downtime, throughput and yield, and surfacing it where a supervisor can act on it.' },
    ],
    constraints: [
      'Shop-floor terminals used in gloves, noise and poor light',
      'Traceability requirements by batch, lot or serial number',
      'Integration with existing ERP and SCADA systems',
      'Downtime cost that makes rollout windows narrow',
      'Long equipment lifecycles alongside short software ones',
    ],
    services: [
      { slug: 'erp-software-development', label: 'ERP systems' },
      { slug: 'legacy-system-modernization', label: 'Enterprise software development' },
      { slug: 'api-development-integration', label: 'API development and integration' },
      { slug: 'ai-development-services', label: 'AI automation and intelligent assistants' },
    ],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    h1: 'Professional Services Software Development',
    title: 'Professional Services Software Development | NovuLabs',
    description: 'Custom business software for consulting firms, agencies, legal teams and other professional organizations: matter and project management, time and billing, and client portals.',
    intro: 'In professional services the product is people, and the software exists to answer one question accurately: where did the hours go, and were they billed. Everything else, from matter management to client portals, is built around getting that answer right without adding administrative work to fee earners.',
    builds: [
      { title: 'Matter and project management', desc: 'Engagements, tasks, deadlines and staffing, structured the way the firm organises work rather than the way a generic tool assumes.' },
      { title: 'Time and billing', desc: 'Time capture that people will actually use, rate cards by client, matter and seniority, work in progress, and invoicing with the write-offs a real firm makes.' },
      { title: 'Document and knowledge management', desc: 'Version control, templates, precedent libraries and permissioned access, with retention rules applied rather than remembered.' },
      { title: 'Client portals', desc: 'Secure sharing of documents, status and invoices, so clients stop asking by email and the firm has a record of what was shared.' },
    ],
    constraints: [
      'Confidentiality and conflict-of-interest separation between clients',
      'Retention and privilege rules governing what may be deleted',
      'Trust or client-money accounting where the profession requires it',
      'Rate structures that vary by client, matter and individual',
      'Time capture that competes with billable work for attention',
    ],
    services: [
      { slug: 'crm-software-development', label: 'CRM systems' },
      { slug: 'custom-saas-development', label: 'Custom SaaS platform development' },
      { slug: 'legacy-system-modernization', label: 'Enterprise software development' },
      { slug: 'website-development', label: 'Custom website development' },
    ],
  },
];

export function getIndustryPage(slug: string): IndustryPage | undefined {
  return industryPages.find((p) => p.slug === slug);
}
