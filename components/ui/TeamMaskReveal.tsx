'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP ScrollTrigger mask reveal for the stage it is rendered inside.
 *
 * Each portrait slides up from below its overflow-clipped wrapper, staggered,
 * then the name/role words slide up out of their own line masks. The timeline
 * plays each time the stage scrolls into view (from either direction) and resets when it leaves
 * the viewport. Only transforms are animated.
 */
export default function TeamMaskReveal() {
  const markerRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const stage = markerRef.current?.parentElement;
    if (!stage) return;

    const ctx = gsap.context(() => {
      const photos = stage.querySelectorAll('.creative-team-photo');
      const words = stage.querySelectorAll('.creative-team-cap .w');

      gsap.set(photos, { yPercent: 110 });
      gsap.set(words, { yPercent: 120 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: 'top 65%',
          toggleActions: 'play reset play reset',
        },
      });
      tl.to(photos, { yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.15 })
        .to(words, { yPercent: 0, duration: 0.7, ease: 'power3.out', stagger: 0.06 }, '-=0.55');
    }, stage);

    return () => ctx.revert();
  }, []);

  return <span ref={markerRef} hidden aria-hidden="true" />;
}
