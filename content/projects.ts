export interface LiveProject {
  slug: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  url: string;
}

export const liveProjects: LiveProject[] = [
  {
    slug: 'educore',
    name: 'NovuLabs EduCore',
    category: 'EdTech · School management',
    description: 'An AI-driven platform that joins school administration and online learning, with separate portals for administrators, teachers, students and parents in one system.',
    features: ['AI Smart Exams', 'Face Attendance', 'Digital Diary', 'Next-Gen LMS', '4 role portals'],
    image: '/industries/education-edtech.png',
    imageAlt: 'NovuLabs EduCore school management platform',
    url: 'https://educore.novulabs.net/',
  },
  {
    slug: 'sentra-aml',
    name: 'Sentra AML',
    category: 'Compliance · RegTech',
    description: 'Trust infrastructure for regulated organisations: identity verification, anti-money-laundering screening and transaction monitoring in one platform.',
    features: ['Identity verification', 'AML screening', 'Transaction monitoring'],
    image: '/industries/banking-fintech.png',
    imageAlt: 'Sentra AML compliance platform',
    url: 'https://www.sentraaml.com/',
  },
  {
    slug: 'content-dashboard',
    name: 'Content Dashboard',
    category: 'Web application · Dashboard',
    description: 'A web dashboard for managing and tracking content, built as a single-page application and deployed live.',
    features: ['Dashboard UI', 'Single-page app'],
    image: '/services/service-08.webp',
    imageAlt: 'Content dashboard web application',
    url: 'https://content-dashboard-v3-1.onrender.com/',
  },
];
