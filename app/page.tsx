import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema';
import HeroSection from '@/components/sections/home/HeroSection';
import AboutSection from '@/components/sections/home/AboutSection';
import ServicesSection from '@/components/sections/home/ServicesSection';
import WhyUsSection from '@/components/sections/home/WhyUsSection';
import IndustriesSection from '@/components/sections/home/IndustriesSection';
import TechStackSection from '@/components/sections/home/TechStackSection';
import PortfolioPreviewSection from '@/components/sections/home/PortfolioPreviewSection';
import ProcessSection from '@/components/sections/home/ProcessSection';
import FaqSection from '@/components/sections/home/FaqSection';
import CaseStudyRail from '@/components/sections/home/CaseStudyRail';
import InsightsSection from '@/components/sections/home/InsightsSection';
import CtaSection from '@/components/sections/home/CtaSection';

export const metadata: Metadata = {
  // 49 chars. Leads with the head term the H1 now carries, so title, H1 and
  // description all target one intent instead of three. The previous title led
  // with the brand, which only helps people already searching for the brand.
  title: { absolute: 'Software House in Islamabad | NovuLabs' },
  description:
    'Enterprise software house in Islamabad building AML/CFT compliance systems for SBP-regulated banks, HIPAA healthcare platforms and PCI-DSS payments. Talk to an architect, not a salesperson.',
  keywords: [
    'software house in Islamabad',
    'software house Islamabad',
    'software company in Islamabad',
    'enterprise software house Pakistan',
    'AML software Pakistan',
    'fintech development company Islamabad',
    'healthcare IT software Pakistan',
    'NovuLabs Islamabad',
    'custom software development Islamabad',
    'government portal software',
    'GOAML compliance software',
    'PCI-DSS payment software',
    'software outsourcing Pakistan',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'NovuLabs – Enterprise Software House',
    description: 'Mission-critical fintech, AML compliance, healthcare, and government software. 200+ projects. 40+ countries.',
    url: 'https://www.novulabs.net',
    images: [{ url: '/og/enterprise-software-development.jpg', width: 1200, height: 630, alt: 'NovuLabs' }],
  },
};


export default function Home() {
  return (
    <>
      {/* The homepage WebPage node links back to the sitewide
          ProfessionalService entity by @id. FAQPage schema for the homepage FAQ
          is emitted by FaqSection, alongside the visible Q&A it describes. */}
      <JsonLd
        data={webPageSchema({
          name: 'NovuLabs — AML, Fintech & Healthcare Software House',
          description:
            'Enterprise software house in Islamabad building AML/CFT compliance systems, HIPAA healthcare platforms and PCI-DSS payment infrastructure.',
          path: '/',
        })}
      />
      <HeroSection />
      <AboutSection />
      <div className="divider"></div>
      <ServicesSection />
      <WhyUsSection />
      <div className="divider"></div>
      <IndustriesSection />
      <TechStackSection />
      <PortfolioPreviewSection />
      <ProcessSection />
      <CaseStudyRail />
      <InsightsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
