import React from 'react';
import Link from 'next/link';
import { whyUs } from '@/content/siteData';
import WhyUsDeck from '@/components/sections/home/WhyUsDeck';

const WhyUsSection: React.FC = () => {
  return (
    <section className="sec bg-w z1" id="why">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-7" data-reveal="up">
            <span className="stag">Why NovuLabs</span>
            <h2 className="stitle mt-3">Why teams choose <span className="gtxt">a specialist</span></h2>
            <p className="ssub mx-auto">We work with organisations whose software is inspected by someone other than their own users: a regulator, an auditor, or a payment scheme.</p>
          </div>
        </div>
        <WhyUsDeck items={whyUs} />
        <div className="row justify-content-center mt-4">
          <div className="col-lg-8 text-center">
            <p className="mb-0" style={{ fontSize: '0.9rem', color: 'var(--tx3)' }}>
              <Link href="/testimonials">Read what clients say about working with us</Link>, or see
              how those engagements were structured in our{' '}
              <Link href="/portfolio">case studies</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
