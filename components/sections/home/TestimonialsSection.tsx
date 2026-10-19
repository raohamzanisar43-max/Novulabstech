'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AUTOPLAY_MS = 4000;

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
    image: '/testimonials/ayesha.jpg',
    focus: 'center 18%',
    quote: 'NovuLabs built an LMS that made course management, online learning, and student engagement much easier for our team.',
  },
  {
    initials: 'HC',
    name: 'Dr. Robert Williams',
    role: 'Healthcare Technology',
    image: '/testimonials/healthcare-doctor.jpeg',
    quote: 'The team understood our operational needs quickly and delivered a clear, scalable product experience.',
  },
  {
    initials: 'EP',
    name: 'Alex Morgan',
    role: 'Enterprise Software',
    image: '/testimonials/alex-morgan.jpeg',
    quote: 'The team understood our requirements and delivered a software solution that made our daily operations much easier. The process was smooth, and the final product exceeded our expectations.',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Intro slides in from the left and the cards from the right when the section
  // scrolls into view; replays every time it re-enters.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const dx = window.innerWidth < 900 ? 60 : 150;
      const scrollTrigger = {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play reset play reset',
      };
      gsap.fromTo(introRef.current, { x: -dx, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger });
      gsap.fromTo(trackRef.current, { x: dx, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Track whether the section is on screen so autoplay only runs while visible.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Autoplay: next card every 4s while visible, tab is active and the user is not
  // hovering/focusing the cards. Skipped on the stacked (mobile) layout.
  useEffect(() => {
    if (paused || !inView) return;
    const id = window.setInterval(() => {
      if (document.hidden || window.matchMedia('(max-width: 900px)').matches) return;
      setActive((i) => (i + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, inView]);

  return (
    <section className="client-testimonials sec" id="clients" ref={sectionRef}>
      <div className="container client-testimonials-layout">
        <div className="client-testimonials-intro" ref={introRef}>
          <a className="client-testimonials-kicker" href="#clients">Clients <span>→</span></a>
          <h2>From Our<br />Clients</h2>
          <h3>Dependable software for teams that need it to work.</h3>
          <p>We build long-term partnerships around clear communication, thoughtful engineering, and products made for real daily use.</p>
          <Link href="/testimonials" className="client-testimonials-button">View More</Link>
        </div>

        <div
          className="ct-track"
          role="list"
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
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
