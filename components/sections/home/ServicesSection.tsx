import React from 'react';
import { services } from '@/content/siteData';
import ServicesRope from '@/components/sections/home/ServicesRope';

// Keep this homepage section focused on capabilities we deliver as services.
// Product/platform offerings remain available on their dedicated pages, but do
// not appear in the rotating Services showcase.
// 'desktop-application-development' is left out until its /services/ page exists;
// its card linked to a 404.
const serviceOfferingSlugs = new Set([
  'corporate-website-development',
  'legacy-system-modernization',
  'cross-platform-app-development',
  'financial-messaging-schema-integration',
  'api-development-integration',
  'cloud-migration-services',
  'ai-development-services',
  'custom-saas-development',
  'ios-app-development',
  'android-app-development',
]);

const ServicesSection: React.FC = () => {
  const serviceItems = services.filter((item) => serviceOfferingSlugs.has(item.slug));

  return (
    <section className="sec bg-g z1 rope-section" id="services">
      <div className="container">
        <div className="text-center mb-4" data-reveal="up">
          <span className="stag">What We Build</span>
          <h2 className="stitle mt-3">Services, <span className="gtxt">hung out for you to explore</span></h2>
          <p className="ssub mt-3 mb-0 mx-auto">Pick a service to see how we deliver it.</p>
        </div>
      </div>
      <ServicesRope items={serviceItems} />
    </section>
  );
};

export default ServicesSection;
