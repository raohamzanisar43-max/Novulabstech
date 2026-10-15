'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies } from '@/content/caseStudies';
import Button from '@/components/ui/Button';

/** Homepage case-study teaser with text on the left and a tilted card stack. */
const INTERVAL = 4200;

const PortfolioPreviewSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const total = caseStudies.length;

  useEffect(() => {
    if (total < 2) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % total), INTERVAL);
    return () => window.clearInterval(timer);
  }, [total]);

  const current = caseStudies[active];
  const href = `/portfolio/${current.slug}`;

  return (
    <section className="sec bg-g z1" id="portfolio">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5" data-reveal="up">
            <span className="stag">Our work</span>
            <h2 className="stitle mt-3">
              Enterprise software <span className="gtxt">case studies</span>
            </h2>
            <p className="ssub mt-3">
              Each case study covers the problem, the constraints we designed within, and what
              changed. Client names are withheld under NDA and described by category.
            </p>

            <div className="cs-current" key={active} aria-live="polite">
              <div className="ptag">{current.industry} · {current.codename}</div>
              <h3 className="cs-current-title">
                <Link href={href}>{current.title}</Link>
              </h3>
              <p className="cs-current-desc">{current.summary}</p>
              <div className="d-flex gap-2 flex-wrap">
                {current.tech.map((technology) => (
                  <span className="tbadge" key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="cs-controls">
              <div className="cs-dots" role="tablist" aria-label="Choose case study">
                {caseStudies.map((caseStudy, index) => (
                  <button
                    key={caseStudy.slug}
                    type="button"
                    role="tab"
                    aria-selected={index === active}
                    aria-label={caseStudy.codename}
                    className={`cs-dot${index === active ? ' is-active' : ''}`}
                    onClick={() => setActive(index)}
                  />
                ))}
              </div>
              <span className="cs-count">
                {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>

            <div className="d-flex gap-3 flex-wrap mt-4">
              <Link href={href} className="btn-glass" style={{ padding: '9px 20px', fontSize: '0.85rem' }}>
                Read the case study →
              </Link>
              <Button href="/portfolio" variant="glass">
                All case studies <i className="bi bi-arrow-right ms-1"></i>
              </Button>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="cs-stack">
              {caseStudies.map((caseStudy, index) => {
                const position = (index - active + total) % total;
                return (
                  <Link
                    key={caseStudy.slug}
                    href={`/portfolio/${caseStudy.slug}`}
                    className="cs-card"
                    data-pos={Math.min(position, 3)}
                    aria-hidden={position !== 0}
                    tabIndex={position === 0 ? 0 : -1}
                  >
                    <Image
                      className="cs-card-img"
                      src={`/portfolio/${caseStudy.slug}.${caseStudy.slug === 'tranzaxis-payment-gateway' ? 'png' : 'jpg'}`}
                      alt={`${caseStudy.codename}, ${caseStudy.industry}`}
                      fill
                      sizes="(max-width: 992px) 90vw, 560px"
                      style={{ objectFit: 'cover', zIndex: 0 }}
                      priority={index === 0}
                    />
                    <div className="cs-card-cap">
                      <small>{caseStudy.industry}</small>
                      <strong>{caseStudy.codename}</strong>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreviewSection;
