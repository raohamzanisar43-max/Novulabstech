import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { IBM_Plex_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

// ---------------------------------------------------------------------------
// Typefaces — one superfamily, three voices
// ---------------------------------------------------------------------------
// Previously Archivo + Source Sans 3 + JetBrains Mono: three unrelated
// families chosen separately, which is why the type never quite cohered. IBM
// Plex is a single superfamily whose serif, sans and mono were drawn together,
// so they share skeleton, proportion and rhythm and can be mixed without the
// seams showing.
//
// It also suits the subject. Plex was commissioned for an engineering company,
// it carries none of the startup-default association that Inter and Poppins
// now have, and the serif gives long technical articles the editorial
// authority a geometric sans cannot. Roles: Serif for headings, Sans for body
// and UI, Mono for eyebrow labels, code and data.
//
// Still self-hosted through next/font rather than an @import: no render-
// blocking third-party request, no visitor IP disclosed to Google, and the
// generated size-adjust fallback keeps CLS near zero. Do not move these back
// to an @import in globals.css; that is the bug that left the site rendering
// in system fallbacks for months.
const fontHeading = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const fontBody = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const fontMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

import JsonLd from '@/components/seo/JsonLd';
import { organizationSchema, websiteSchema, siteNavigationSchema } from '@/lib/schema';

// ClientShell is a 'use client' wrapper — holds all ssr:false dynamic imports
// (next/dynamic with ssr:false is only allowed inside Client Components)
import ClientShell from '@/components/ui/ClientShell';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// ---------------------------------------------------------------------------
// Viewport
// ---------------------------------------------------------------------------
export const viewport: Viewport = {
  // Matches the ink ground of the hero, which is the first thing painted.
  themeColor: '#0C1F33',
  width: 'device-width',
  initialScale: 1,
};

// ---------------------------------------------------------------------------
// Global Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL('https://www.novulabs.net'),
  title: {
    // 58 chars, inside the ~60 char SERP render budget.
    default: 'NovuLabs — Enterprise Software House in Pakistan',
    // Page-level `title` strings must NOT contain the brand; this template
    // appends it exactly once. (Previously several pages included it too,
    // producing "… | NovuLabs | NovuLabs" and 90–101 char truncated titles.)
    template: '%s | NovuLabs',
  },
  description:
    'Enterprise software house in Islamabad building AML/CFT compliance systems for SBP-regulated banks, HIPAA healthcare platforms and PCI-DSS payment infrastructure.',
  keywords: [
    'enterprise software house Pakistan',
    'AML compliance software Pakistan',
    'GOAML FMU Pakistan software',
    'fintech software development Islamabad',
    'healthcare IT HIPAA EHR software',
    'PCI-DSS payment gateway development',
    'government portal software Pakistan',
    'core banking software',
    'enterprise ERP CRM development',
    'NovuLabs Islamabad',
    'custom software development UAE',
    'software outsourcing Pakistan',
    'ISO 27001 software development',
  ],
  authors: [{ name: 'NovuLabs Technology', url: 'https://www.novulabs.net' }],
  creator: 'NovuLabs Technology',
  publisher: 'NovuLabs Technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // favicon.svg (9KB, vector) rather than logo.png (1200x1200, 151KB). The
  // favicon is fetched on every cold page load, so a 151KB raster was costing
  // more than the rest of the page's images combined to paint a 16px mark, and
  // a 1200px source downscaled to 16px renders muddy. One SVG covers every tab,
  // bookmark and PWA size. logo.png stays only for apple-touch-icon, which
  // requires a raster.
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/logo.png',
  },
  // ⚠️ DO NOT re-add `alternates: { canonical: '/' }` here.
  // Next.js metadata is inherited: a canonical set on the root layout is
  // applied to every descendant route that does not set its own. That is what
  // made all three blog posts declare rel=canonical → the homepage, telling
  // Google to de-index the entire /blog/ tree. Canonicals are now set
  // per-route, and app/blog/[slug]/page.tsx generates its own dynamically.
  openGraph: {
    type: 'website',
    url: 'https://www.novulabs.net/',
    // Message consistency: og/twitter/title now say the same thing. They
    // previously carried three different value sets for the same page.
    title: 'NovuLabs — Enterprise Software House in Pakistan',
    // "certified" removed: HIPAA has no certification regime (organisations
    // attest to compliance), and no ISO 27001 certificate number or registrar
    // is published anywhere on the site. Claiming certification you cannot
    // evidence is an E-E-A-T liability in a YMYL vertical.
    description:
      'Architect-led engineering for regulated industries: AML/CFT compliance systems for SBP-regulated banks, HIPAA and HL7 FHIR healthcare platforms, PCI-DSS payment infrastructure.',
    images: [
      { url: '/og/enterprise-software-development.jpg', width: 1200, height: 630, alt: 'NovuLabs — enterprise software for regulated industries' },
    ],
    siteName: 'NovuLabs',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    // TODO(client): verify @NovuLabsTech exists and is controlled by NovuLabs.
    // If the handle is not live, delete these two lines — pointing twitter:site
    // at a non-existent account breaks card attribution.
    site: '@NovuLabsTech',
    creator: '@NovuLabsTech',
    title: 'NovuLabs — Enterprise Software House in Pakistan',
    description:
      'AML/CFT compliance systems, HIPAA healthcare platforms and PCI-DSS payment infrastructure, built by senior architects in Islamabad.',
    images: ['/og/enterprise-software-development.jpg'],
  },
  category: 'technology',
};

// ---------------------------------------------------------------------------
// Root Layout
// ---------------------------------------------------------------------------
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <head>
        {/* Sitewide entity graph: ProfessionalService + WebSite, linked by @id.
            Server-rendered so non-JS crawlers (GPTBot, ClaudeBot, PerplexityBot,
            CCBot) can read it. Definitions live in lib/schema.ts. */}
        <JsonLd data={[organizationSchema(), websiteSchema(), siteNavigationSchema()]} />

        {/* [data-reveal] starts at opacity:0 and is revealed by ScrollReveal.
            Without this guard, a visitor with JavaScript disabled would see an
            empty article. Content must never depend on animation to be
            readable. */}
        <noscript>
          {/* eslint-disable-next-line react/no-danger */}
          <style
            dangerouslySetInnerHTML={{
              __html:
                '[data-reveal]{opacity:1 !important;transform:none !important}',
            }}
          />
        </noscript>
      </head>
      <body>
        {/* Keyboard and screen-reader users otherwise tab through the entire
            navigation on every page load before reaching content. Visually
            hidden until focused. WCAG 2.4.1. */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>

        {/* Render preloader in initial markup for instant painting, fades out safely after hydration */}
        
        {/* Single client boundary — all other heavy UI lazy-loads live inside ClientShell */}
        <ClientShell />

        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />

        {/* Both scripts self-hosted from /vendor. They were loaded from
            cdn.jsdelivr.net, which put a third-party DNS lookup and TLS
            handshake in front of each one and disclosed every visitor's IP and
            user agent to that CDN. Same-origin now, immutably cached, and no
            longer a third-party dependency for the site to function. */}
        <Script src="/vendor/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
