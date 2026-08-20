"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    AOS: any;
  }
}

const AOSInitializer: React.FC = () => {
  useEffect(() => {
    // Respect the OS-level motion preference. AOS applies its own inline
    // transforms, so simply disabling transitions in CSS is not enough — the
    // library has to be told not to animate in the first place. `disable`
    // accepts a predicate and, when it returns true, AOS reveals every element
    // in its final state rather than leaving content invisible.
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initAOS = () => {
      if (window.AOS) {
        window.AOS.init({
          // 640ms was long enough that fast scrolling outran the reveal and
          // elements arrived already half-faded. 520ms tracks the CSS reveal
          // layer in globals.css so both systems feel like one motion system.
          duration: 520,
          // Decelerating curve: quick to start, settling at the end. Reads as
          // the page arriving rather than sliding.
          easing: 'cubic-bezier(.16,1,.3,1)',
          once: true,
          offset: 72,
          disable: () => prefersReduced,
        });
      }
    };

    if (window.AOS) {
      initAOS();
    } else {
      const interval = setInterval(() => {
        if (window.AOS) {
          initAOS();
          clearInterval(interval);
        }
      }, 100);
      
      setTimeout(() => clearInterval(interval), 5000);
    }
  }, []);

  return null;
};

export default AOSInitializer;
