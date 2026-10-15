'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import ServiceCard from '@/components/ui/ServiceCard';
import { ServiceItem } from '@/types';

interface ServicesDeckProps {
  items: ServiceItem[];
}

const ServicesDeck: React.FC<ServicesDeckProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lockRef = useRef(false);

  const moveCard = useCallback((direction: 1 | -1) => {
    if (lockRef.current) return;
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
