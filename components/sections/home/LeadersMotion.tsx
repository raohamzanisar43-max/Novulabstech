'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP entrance for the "Our Leaders" intro and portrait cards of the section it
 * is rendered inside: the text slides in from the left, the cards rise and scale
 * up. Plays on scroll-in and reverses when scrolling back above the section.
 */
export default function LeadersMotion() {
  const markerRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = markerRef.current?.closest('section');
    if (!section) return;

    const ctx = gsap.context(() => {
      const head = section.querySelector('.creative-team-head');
      const leaders = section.querySelector('.creative-leaders');
      const toggleActions = 'play none none reverse';

      if (head) {
        gsap.fromTo(
          head,
          { x: -150, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 80%', toggleActions } }
        );
      }
      if (leaders) {
        gsap.fromTo(
          leaders,
          { y: 50, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 50%', toggleActions } }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return <span ref={markerRef} hidden aria-hidden="true" />;
}
