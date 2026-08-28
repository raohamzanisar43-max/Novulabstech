import React from 'react';
import { whyUs } from '@/content/siteData';
import WhyUsCard from '@/components/ui/WhyUsCard';

const WhyUsSection: React.FC = () => {
  return (
    <section className="sec bg-w z1" id="why">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-7" data-reveal="up">
            <span className="stag">Why NovuLabs</span>
            <h2 className="stitle mt-3">The <span className="gtxt">Competitive Edge</span> You Need</h2>
            <p className="ssub mx-auto">We build competitive advantages for the world's most demanding organizations — not just software.</p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {whyUs.map((item, i) => (
            <WhyUsCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
