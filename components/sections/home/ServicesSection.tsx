import React from 'react';
import { services } from '@/content/siteData';
import ServicesDeck from '@/components/sections/home/ServicesDeck';

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
    <section className="sec bg-g z1" id="services">
      <div className="container">
        <ServicesDeck items={serviceItems} />
      </div>
    </section>
  );
};

export default ServicesSection;
