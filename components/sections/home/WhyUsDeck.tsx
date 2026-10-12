'use client';

import React, { useCallback, useEffect, useState } from 'react';
import WhyUsCard from '@/components/ui/WhyUsCard';
import { WhyUsItem } from '@/types';

interface WhyUsDeckProps {
  items: WhyUsItem[];
}

const WhyUsDeck: React.FC<WhyUsDeckProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const move = useCallback((direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const timer = window.setInterval(() => move(1), 3600);
    return () => window.clearInterval(timer);
  }, [move]);

  return (
    <div
      className="why-deck"
      onWheel={(event) => move(event.deltaY > 0 ? 1 : -1)}
      aria-label="Why NovuLabs rotating benefits"
    >
      {items.map((item, index) => {
        const offset = (index - activeIndex + items.length) % items.length;
        const position = offset === 0 ? 'front' : offset === 1 ? 'right' : offset === items.length - 1 ? 'left' : 'back';

        return (
          <div
            key={item.title}
            className={`why-deck-card why-deck-card-${position}`}
            aria-hidden={position !== 'front'}
          >
            <WhyUsCard item={item} index={index} />
          </div>
        );
      })}
      <div className="why-deck-dots" aria-hidden="true">
        {items.map((item, index) => (
          <span key={item.title} className={index === activeIndex ? 'is-active' : ''}></span>
        ))}
      </div>
    </div>
  );
};

export default WhyUsDeck;
