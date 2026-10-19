'use client';

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard from '@/components/ui/ServiceCard';
import { ServiceItem } from '@/types';

gsap.registerPlugin(ScrollTrigger);

/** Scroll distance (share of the viewport height) the pinned section spends on each service. */
const SCROLL_PER_ITEM = 60;

interface ServicesDeckProps {
  items: ServiceItem[];
}

const ServicesDeck: React.FC<ServicesDeckProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lockRef = useRef(false);
  const deckRef = useRef<HTMLDivElement>(null);
  // On desktop the section is pinned and the page scroll drives the active service;
  // the timer / wheel / touch handling below is then switched off.
  const pinnedRef = useRef(false);

  useLayoutEffect(() => {
    const section = deckRef.current?.closest('section');
    if (!section) return;
    const mm = gsap.matchMedia();
    mm.add('(min-width: 992px)', () => {
      pinnedRef.current = true;
      const visuals = section.querySelectorAll('.service-visual');
      const copies = section.querySelectorAll('.service-copy');
      const intro = { trigger: section, toggleActions: 'play none none reverse' };
      // Visual slides in from the left, text from the right, as the section rises.
      gsap.fromTo(visuals, { x: -150, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { ...intro, start: 'top 80%' } });
      gsap.fromTo(copies, { x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { ...intro, start: 'top 50%' } });
      const pin = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${items.length * SCROLL_PER_ITEM}%`,
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setActiveIndex(Math.min(items.length - 1, Math.floor(self.progress * items.length)));
        },
      });
      return () => {
        pin.kill();
        pinnedRef.current = false;
      };
    });
    return () => mm.revert();
  }, [items.length]);

  const moveCard = useCallback((direction: 1 | -1) => {
    if (lockRef.current || pinnedRef.current) return;
    setActiveIndex((current) => {
      const next = current + direction;
      return Math.max(0, Math.min(items.length - 1, next));
    });
    lockRef.current = true;
    window.setTimeout(() => { lockRef.current = false; }, 650);
  }, [items.length]);

  useEffect(() => {
    const timer = window.setInterval(() => moveCard(1), 3400);
    return () => window.clearInterval(timer);
  }, [moveCard]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') moveCard(1);
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') moveCard(-1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [moveCard]);

  return (
    <div
      className="service-card-deck"
      onWheel={(event) => {
        if (pinnedRef.current) return;
        event.preventDefault();
        moveCard(event.deltaY > 0 ? 1 : -1);
      }}
      onTouchStart={(event) => {
        event.currentTarget.dataset.touchY = String(event.touches[0].clientY);
      }}
      onTouchEnd={(event) => {
        const startY = Number(event.currentTarget.dataset.touchY || 0);
        const distance = startY - event.changedTouches[0].clientY;
        if (Math.abs(distance) > 35) moveCard(distance > 0 ? 1 : -1);
      }}
      ref={deckRef}
      aria-label="What We Build services card deck"
    >
      {items.map((item, index) => {
        const distance = index - activeIndex;
        const isActive = distance === 0;
        const isBehind = distance > 0;
        const isPast = distance < 0;

        return (
          <div
            key={item.slug || index}
            className={`service-deck-card ${isActive ? 'is-active' : ''} ${isBehind ? 'is-behind' : ''} ${isPast ? 'is-past' : ''}`}
            style={{ '--deck-distance': Math.min(Math.abs(distance), 3), '--deck-index': index } as React.CSSProperties}
            aria-hidden={!isActive}
          >
            <ServiceCard item={item} index={index} />
          </div>
        );
      })}
      <div className="service-deck-hint">
        <i className="bi bi-mouse3 me-2"></i>
        Scroll to explore <span>{activeIndex + 1} / {items.length}</span>
      </div>
    </div>
  );
};

export default ServicesDeck;
