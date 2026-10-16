'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Testimonial = {
  initials: string;
  name: string;
  role: string;
  quote: string;
  image?: string;
  focus?: string;
};

const testimonials: Testimonial[] = [
  {
    initials: 'A',
    name: 'Ayesha',
    role: 'LMS Client',
    image: '/testimonials/ayesha.png',
    focus: 'center 25%',
    quote: 'NovuLabs built an LMS that made course management, online learning, and student engagement much easier for our team.',
  },
  {
    initials: 'HC',
    name: 'Healthcare Operations Team',
    role: 'Healthcare Technology',
    image: '/testimonials/healthcare-doctor.jpeg',
    quote: 'The team understood our operational needs quickly and delivered a clear, scalable product experience.',
  },
  {
    initials: 'EP',
    name: 'Enterprise Product Team',
    role: 'Enterprise Software',
    image: '/testimonials/enterprise-client.jpeg',
    quote: 'From architecture to support, the process stayed focused, practical, and easy to move forward with.',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="client-testimonials sec" id="clients">
      <div className="container client-testimonials-layout">
        <div className="client-testimonials-intro">
          <a className="client-testimonials-kicker" href="#clients">Clients <span>→</span></a>
          <h2>From Our<br />Clients</h2>
          <h3>Dependable software for teams that need it to work.</h3>
          <p>We build long-term partnerships around clear communication, thoughtful engineering, and products made for real daily use.</p>
          <Link href="/testimonials" className="client-testimonials-button">View More</Link>
        </div>

        <div className="ct-track" role="list">
          {testimonials.map((t, i) => {
            const isActive = i === active;

            return (
              <article
                key={t.initials}
                role="listitem"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={`${t.name}, ${t.role}`}
                className={`ct-card${isActive ? ' is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <div className={`ct-photo${t.image ? '' : ' is-placeholder'}`}>
                  {t.image && (
                    <Image
                      src={t.image}
                      alt={`${t.name}, ${t.role}`}
                      fill
                      sizes="(max-width: 900px) 100vw, 560px"
                      style={{ objectFit: 'cover', objectPosition: t.focus ?? 'center top' }}
                    />
                  )}
                </div>

                <div className="ct-body">
                  <div className="ct-line" />
                  <div className="ct-name"><strong>Name:</strong> <span>{t.name}</span></div>
                  <div className="ct-role">{t.role}</div>
                  <p>{t.quote}</p>
                  <div className="ct-ratings">
                    <strong>Ratings</strong>
                    <div className="ct-stars" aria-label="5 out of 5 stars">★★★★★</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
