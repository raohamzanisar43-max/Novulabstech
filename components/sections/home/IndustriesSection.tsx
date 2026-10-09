import React from 'react';
import { industries } from '@/content/siteData';
import IndustryCard from '@/components/ui/IndustryCard';

const IndustriesSection: React.FC = () => {
  return (
    <section className="sec bg-g z1" id="industries">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-7" data-reveal="up">
            <span className="stag">Industries We Serve</span>
            <h2 className="stitle mt-3">
              Software solutions built <span className="gtxt">for your industry</span>
            </h2>
            <p className="ssub mx-auto">
              Every industry has different workflows, regulations, customers, and technology
              requirements. NovuLabs develops custom software solutions tailored to the way your
              organization operates. Each sector below has its own page setting out what we build
              and the constraints that shape it.
            </p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {industries.map((item, i) => (
            <IndustryCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
