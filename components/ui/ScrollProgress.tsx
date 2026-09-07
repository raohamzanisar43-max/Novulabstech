"use client";

import React, { useEffect, useRef, useState } from 'react';

/**
 * Reading-progress bar.
 *
 * Two things were wrong with the previous version.
 *
 * 1. It animated `width`, a layout property, on every scroll frame. The
 *    stylesheet had been patched to use `transform: scaleX()` instead, but the
 *    component still wrote `width` as an INLINE style, and inline styles beat
 *    the stylesheet. The patch only appeared to work because it carried
 *    `!important`; remove that and the bar renders at scaleX(0), which is to
 *    say invisible. The fix belongs here, not in a louder CSS override.
 *
 * 2. It ran a scroll listener with no rAF batching, calling setState on every
 *    scroll event, which re-renders React on the main thread during scroll.
 *
 * Both are solved by scaleX plus a scroll timeline. Where the browser supports
 * scroll-driven animations the bar is driven entirely by CSS off the main
 * thread and this component renders a bare div with no listener at all. Safari
 * and Firefox fall back to the rAF-batched transform below.
 */
const ScrollProgress: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [cssDriven, setCssDriven] = useState(true);

  useEffect(() => {
    const supported =
      typeof CSS !== 'undefined' &&
      CSS.supports &&
      CSS.supports('animation-timeline', 'scroll()');

    if (supported) return;          // CSS owns it; no listener, no state
    setCssDriven(false);

    let ticking = false;
    const apply = () => {
      ticking = false;
      const el = ref.current;
      if (!el) return;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      // transform, not width: composited, and it matches the CSS path exactly.
      el.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    apply();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // No inline width and no inline transition: everything visual lives in
  // globals.css, so there is exactly one place that decides how this looks.
  return <div id="sp" ref={ref} data-css-driven={cssDriven ? 'true' : 'false'} />;
};

export default ScrollProgress;
