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
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';
import CtaSection from '@/components/sections/home/CtaSection';

export const metadata: Metadata = {
  // 43 chars. Matches the H1 wording exactly rather than a shortened version of
  // it, so title, H1 and description all target one intent instead of three.
  //
  // Head term is "best software house in Islamabad", at the owner's direction.
  //
  // Cannibalisation check: /software-house-in-islamabad owns the comparison
  // phrasing ("How to Choose the Best Software Agency in Islamabad") — agency
  // vs house, and how-to vs head term, keep the two pages off one query. The
  // homepage owns the head term and links down; the landing page converts the
  // comparison.
  title: { absolute: 'Best Software House in Islamabad | NovuLabs' },
  // 155 chars, inside the ~160 Google renders before truncating.
  //
  // Targets the H1's phrase, "best enterprise software house in Islamabad",
  // which the title tag cannot carry without losing the shorter head term.
  // Between them the two strings cover both: title has "best software house in
  // Islamabad", description has the "enterprise" variant, and the description
  // contains the shorter phrase as a substring anyway.
  //
  // Structure: exact phrase up front while it is still visible in the SERP,
  // then three named standards, then the CTA the /contact page fulfils.
  //
  // The middle clause names AML/CFT, HIPAA and PCI-DSS and the regulator
  // (SBP) rather than saying "compliance systems". Specifics are what make
  // "best" land as a description of the work instead of self-praise, they
  // match how a buyer with an actual obligation searches, and they are the
  // terms an AI answer engine can attach the page to. All three are already
  // evidenced on the page and in /services — nothing new is claimed here.
  //
  // "Book a free consultation" matches the wording on /contact, so the
  // snippet and the landing page make the same promise. It also avoids
  // committing the page to who answers; the hero button below says
  // "Talk to an architect", which is the stronger claim and the site's actual
  // differentiator.
  //
  // A description cannot carry a link of its own — the whole snippet resolves
  // to this page — so the route to the booking form is made explicit three
  // other ways: the hero's primary button, the ReserveAction on the WebPage
  // node below, and the SiteNavigationElement entry for /contact.
  description:
    'NovuLabs is the best enterprise software house in Islamabad: AML/CFT for SBP-regulated banks, HIPAA healthcare, PCI-DSS payments. Book a free consultation.',
  keywords: [
    'best enterprise software house in Islamabad',
    'best software house in Islamabad',
    'best software company in Islamabad',
    'top software house in Islamabad',
    'software agency in Islamabad',
    'software development agency in Islamabad',
    'software house in Islamabad',
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
  // Renders as `https://www.novulabs.net` with no trailing slash: Next.js
  // normalises that away and an absolute URL here does not override it. The
  // sitemap is matched to this form instead, in app/sitemap.ts.
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Best Software House in Islamabad | NovuLabs',
    // "200+ projects. 40+ countries." removed — neither figure is evidenced
    // anywhere on the site or in lib/seo.ts (which declares five served
    // markets). Same claim class as the certification wording removed in
    // 6daaa0c; see artifacts/FINDINGS.md.
    description:
      'A software house in Islamabad for work a regulator inspects: fintech, AML/CFT compliance, healthcare and government software, with an architect on the first call.',
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
          name: 'Best Software House in Islamabad: NovuLabs',
          description:
            'NovuLabs is a software house in Islamabad building custom software, mobile apps and compliance systems for banks, hospitals and government departments.',
          path: '/',
          // Declares the booking form as this page's primary action, so a
          // "book a meeting with NovuLabs" query has a machine-readable target
          // rather than leaving the crawler to infer it from a button label.
          reserveActionPath: '/contact',
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
      <TestimonialsSection />
      <InsightsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
