'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { industries } from '@/content/siteData';

const industryImages = [
  '/industries/banking-fintech.png',
  '/services/service-08.webp',
  '/services/service-13.webp',
  '/industries/ecommerce-retail.png',
  '/industries/manufacturing-logistics.png',
  '/industries/education-edtech.png',
];

export default function IndustriesSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % industries.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="sec bg-g z1" id="industries">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5" data-reveal="right">
            <span className="stag">Sectors We Serve</span>
            <h2 className="stitle mt-3">Industries and sectors <span className="gtxt">we know well</span></h2>
            <div className="ind-current" key={active}>
              <div className={`iico ${industries[active].color}`}><i className={`bi ${industries[active].icon}`} aria-hidden="true" /></div>
              <h3>{industries[active].title}</h3>
              <p>{industries[active].desc}</p>
            </div>
            <ul className="ind-list" aria-label="Industries">
              {industries.map((item, index) => (
                <li key={item.title}>
                  <button className={`ind-pill${index === active ? ' is-active' : ''}`} onClick={() => setActive(index)}>
                    <span className="ind-num">{String(index + 1).padStart(2, '0')}</span>
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
            <Link className="ind-link" href="/industries">Explore all industries <i className="bi bi-arrow-right" aria-hidden="true" /></Link>
          </div>

          <div className="col-lg-7" data-reveal="left">
            <div className="ind-stack" aria-live="polite">
              {industries.map((item, index) => {
                const position = (index - active + industries.length) % industries.length;
                return (
                  <Link className="ind-card" data-pos={position > 3 ? '3' : String(position)} href="/industries" key={item.title}>
                    <Image src={industryImages[index % industryImages.length]} alt="" fill sizes="(max-width: 991px) 90vw, 560px" style={{ objectFit: 'cover' }} />
                    <span className="ind-card-cap">
                      <strong>{item.title}</strong>
                      <small>{item.desc}</small>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
