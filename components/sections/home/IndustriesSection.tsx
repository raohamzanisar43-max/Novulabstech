 'use client';

import React, { useEffect, useRef } from 'react';
import { industries } from '@/content/siteData';
import IndustryCard from '@/components/ui/IndustryCard';

const IndustriesSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const timer = window.setInterval(() => {
      const firstCard = track.querySelector<HTMLElement>('.col');
      if (!firstCard) return;

      const cardStep = firstCard.getBoundingClientRect().width + 16;
      const isAtEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;

      if (isAtEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: cardStep, behavior: 'smooth' });
      }
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="sec bg-g z1" id="industries">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-7" data-reveal="up">
            <span className="stag">Sectors We Serve</span>
            <h2 className="stitle mt-3">Industries and sectors <span className="gtxt">we know well</span></h2>
          </div>
        </div>
        <div ref={trackRef} className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 industry-card-line">
          {industries.map((item, i) => (
            <IndustryCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
