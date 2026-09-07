import React from 'react';
import { services } from '@/content/siteData';
import ServiceCard from '@/components/ui/ServiceCard';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const ServicesSection: React.FC = () => {
  return (
    <section className="sec bg-g z1" id="services">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-7" data-reveal="up">
            <span className="stag">What We Build</span>
            <h2 className="stitle mt-3">Software development <span className="gtxt">services we provide</span></h2>
            <p className="ssub mx-auto">From compliant fintech platforms to AI-powered automation, mission-critical software that enterprises depend on.</p>
            {/* The audit found no body link from the homepage to /solutions at
                all, which left a primary navigation section on three inbound
                links at crawl depth 2. */}
            <p className="ssub mx-auto mt-3">
              Some of it we have already built: see{' '}
              <Link href="/solutions">our four enterprise platforms</Link> before commissioning
              anything custom.
            </p>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} index={i} />
          ))}
        </div>
        <div className="text-center mt-5" data-reveal="up">
          <Button href="/services" variant="grad">
            <i className="bi bi-arrow-right me-1"></i>Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
