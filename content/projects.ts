export interface LiveProject {
  slug: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  /** Page background of the screenshot, used to fill the card around it so the whole dashboard shows uncropped. */
  imageBg?: string;
  imageAlt: string;
  /** Live site. Omit while a product has no public URL; the card then shows no link. */
  url?: string;
}

export const liveProjects: LiveProject[] = [
  {
    slug: 'amanah-pool-os',
    name: 'Amanah Pool OS',
    category: 'Islamic finance · Pool management',
    description: 'One platform for Islamic bank pools, Mudarabah and Musharakah investment pools and community savings circles, with a maker-checker release ceremony, sealed calculations and a verifiable audit trail.',
    features: ['Maker-checker', 'Shariah board review', 'Audit trail', 'Multi-tenant'],
    image: '/projects/amanah-pool-os.jpg',
    imageBg: '#0b101b',
    imageAlt: 'Amanah Pool OS landing page showing the release ceremony for period profit allocation',
    url: 'https://pool.novulabs.net/welcome',
  },
  {
    slug: 'darbar-shah-chan-chirag',
    name: 'Darbar Shah Chan Chirag',
    category: 'Community platform · Member portal',
    description: 'A member portal for a darbar community: events, donations, welfare support, volunteers, finance and langar management, with separate admin tools alongside the member dashboard.',
    features: ['Events', 'Donations', 'Welfare', 'Volunteers', 'Langar'],
    image: '/projects/darbar-shah-chan-chirag.jpg',
    imageBg: '#edf2f8',
    imageAlt: 'Darbar Shah Chan Chirag member portal dashboard with upcoming events, quick actions and recent donations',
    url: 'https://darbarshahchanchirag.novulabs.net/login',
  },
  {
    slug: 'inventory-management',
    name: 'Inventory Management',
    category: 'Business software · Inventory',
    description: 'An inventory management system covering items and SKUs, sales and purchase orders, warehouse transfers and stock distribution, with order pipelines, low-stock alerts and an audit trail.',
    features: ['Sales orders', 'Purchase orders', 'Warehouses', 'Stock alerts', 'Audit trail'],
    image: '/projects/inventory-management.jpg',
    imageBg: '#f7f6fb',
    imageAlt: 'Inventory management dashboard with stock valuation, order pipelines and recent audit trail',
  },
  {
    slug: 'educore',
    name: 'NovuLabs EduCore',
    category: 'EdTech · School management',
    description: 'An AI-driven platform that joins school administration and online learning, with separate portals for administrators, teachers, students and parents in one system.',
    features: ['AI Smart Exams', 'Face Attendance', 'Digital Diary', 'Next-Gen LMS', '4 role portals'],
    image: '/projects/educore-full.jpg',
    imageBg: '#eef3f7',
    imageAlt: 'NovuLabs EduCore admin dashboard showing student, assessment and faculty metrics',
    url: 'https://educore.novulabs.net/',
  },
  {
    slug: 'sentra-aml',
    name: 'Sentra AML',
    category: 'Compliance · RegTech',
    description: 'Trust infrastructure for regulated organisations: identity verification, anti-money-laundering screening and transaction monitoring in one platform.',
    features: ['Identity verification', 'AML screening', 'Transaction monitoring'],
    image: '/projects/sentra-aml-full.jpg',
    imageBg: '#141518',
    imageAlt: 'Sentra AML dashboard with applicants, transaction monitoring and case management navigation',
    url: 'https://www.sentraaml.com/',
  },
  {
    slug: 'marketingos',
    name: 'MarketingOS',
    category: 'Web application · Marketing platform',
    description: 'A multi-brand content platform for drafting social posts with AI, approving them and scheduling them across connected accounts, deployed live.',
    features: ['AI content', 'Approvals', 'Scheduler', 'Multi-brand'],
    image: '/projects/marketingos-dashboard.jpg',
    imageBg: '#0f1017',
    imageAlt: 'MarketingOS dashboard showing the content editor, brand switcher and list of drafted and scheduled posts',
    url: 'https://content-dashboard-v3-1.onrender.com/',
  },
];
