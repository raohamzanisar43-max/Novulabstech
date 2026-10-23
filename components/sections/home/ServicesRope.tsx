'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceItem } from '@/types';

const ROPE_Y = 64;
const SAG = 46;
const GAP = 34;
const TILT = 0.8;
const STIFFNESS = 55;
const DAMPING = 3.2;
const LEAN = 0.007;
const HOVER_KICK = 0.06;
const FRICTION = 3.5;
const AUTO_SPEED = -18;
const MAX_ANGLE = 30;

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

interface ServicesRopeProps {
  items: ServiceItem[];
}

const ServicesRope: React.FC<ServicesRopeProps> = ({ items }) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const movedRef = useRef(0);
  const snapRef = useRef<(target: number | 'next' | 'prev') => void>(() => undefined);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const cards = cardRefs.current.filter((card): card is HTMLDivElement => card !== null);
    const count = cards.length;
    if (count === 0) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = stage.clientWidth;
    let cardWidth = cards[0].offsetWidth;
    let step = cardWidth + GAP;
    let total = count * step;
    let sag = SAG;

    const angles = new Float32Array(count);
    const angularVelocities = new Float32Array(count);
    const cardCenters = new Float32Array(count);
    const state = {
      offset: 0,
      velocity: 0,
      dragging: false,
      captured: false,
      hovering: false,
      visible: false,
      lastX: 0,
      lastTime: 0,
      pointerX: -9999,
      target: null as number | null,
    };

    const measure = () => {
      width = stage.clientWidth;
      cardWidth = cards[0].offsetWidth;
      step = cardWidth + GAP;
      total = count * step;
      sag = SAG * Math.min(1, width / 1100);
      const x0 = -0.2 * width;
      const x1 = 1.2 * width;
      const yEnd = ROPE_Y + sag * (1 - 1.44);
      const yControl = ROPE_Y + sag * 2.44;
      pathRef.current?.setAttribute('d', `M${x0},${yEnd} Q${width / 2},${yControl} ${x1},${yEnd}`);
    };
    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(stage);

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      state.dragging = true;
      state.captured = false;
      state.target = null;
      state.lastX = event.clientX;
      state.lastTime = performance.now();
      state.velocity = 0;
      movedRef.current = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      const now = performance.now();
      const deltaX = event.clientX - state.lastX;
      const velocity = (deltaX / Math.max(1, now - state.lastTime)) * 1000;
      state.lastX = event.clientX;
      state.lastTime = now;
      state.pointerX = event.clientX - stage.getBoundingClientRect().left;

      if (state.dragging) {
        movedRef.current += Math.abs(deltaX);
        if (!state.captured && movedRef.current > 5) {
          state.captured = true;
          stage.setPointerCapture(event.pointerId);
          stage.classList.add('is-dragging');
        }
        if (state.captured) {
          state.offset += deltaX;
          state.velocity = state.velocity * 0.5 + velocity * 0.5;
        }
      } else if (event.pointerType === 'mouse' && !reduceMotion) {
        for (let index = 0; index < count; index += 1) {
          const influence = Math.max(0, 1 - Math.abs(state.pointerX - cardCenters[index]) / (cardWidth * 0.75));
          if (influence > 0) {
            angularVelocities[index] = clamp(angularVelocities[index] - velocity * HOVER_KICK * influence, -220, 220);
          }
        }
      }
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!state.dragging) return;
      state.dragging = false;
      if (state.captured && stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
      state.captured = false;
      stage.classList.remove('is-dragging');
      if (performance.now() - state.lastTime > 90) state.velocity = 0;
    };

    const onPointerEnter = () => { state.hovering = true; };
    const onPointerLeave = () => { state.hovering = false; state.pointerX = -9999; };
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      event.preventDefault();
      state.target = null;
      state.offset -= event.deltaX;
      state.velocity = -event.deltaX * 30;
    };

    stage.addEventListener('pointerdown', onPointerDown);
    stage.addEventListener('pointermove', onPointerMove);
    stage.addEventListener('pointerup', onPointerUp);
    stage.addEventListener('pointercancel', onPointerUp);
    stage.addEventListener('pointerenter', onPointerEnter);
    stage.addEventListener('pointerleave', onPointerLeave);
    stage.addEventListener('wheel', onWheel, { passive: false });

    snapRef.current = (target) => {
      let destination: number;
      if (target === 'next') destination = Math.round(state.offset / step) * step - step;
      else if (target === 'prev') destination = Math.round(state.offset / step) * step + step;
      else {
        destination = -target * step;
        let distance = destination - state.offset;
        distance = ((((distance + total / 2) % total) + total) % total) - total / 2;
        destination = state.offset + distance;
      }
      state.velocity = 0;
      state.target = destination;
    };

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      state.visible = entry.isIntersecting;
      if (entry.isIntersecting && !stage.classList.contains('is-in')) {
        stage.classList.add('is-in');
        if (!reduceMotion) {
          for (let index = 0; index < count; index += 1) angles[index] = (index % 2 ? 1 : -1) * (14 + ((index * 7) % 9));
        }
      }
    }, { threshold: 0.15 });
    intersectionObserver.observe(stage);

    let animationFrame = 0;
    let lastFrame = performance.now();
    const tick = (now: number) => {
      animationFrame = requestAnimationFrame(tick);
      const deltaTime = Math.min(0.034, (now - lastFrame) / 1000);
      lastFrame = now;
      if (!state.visible) return;

      if (state.target !== null) {
        const distance = state.target - state.offset;
        const interpolation = 1 - Math.exp(-7 * deltaTime);
        state.offset += distance * interpolation;
        state.velocity = (distance * interpolation) / Math.max(deltaTime, 0.001);
        if (Math.abs(distance) < 0.5) { state.offset = state.target; state.target = null; state.velocity = 0; }
      } else if (!state.dragging) {
        state.velocity *= Math.exp(-FRICTION * deltaTime);
        if (Math.abs(state.velocity) < 2) state.velocity = 0;
        state.offset += (state.velocity + (reduceMotion || state.hovering ? 0 : AUTO_SPEED)) * deltaTime;
      } else {
        state.velocity *= Math.exp(-10 * deltaTime);
      }

      const lean = reduceMotion ? 0 : clamp(state.velocity * LEAN, -MAX_ANGLE, MAX_ANGLE);
      const halfWidth = width / 2;
      const halfTotal = total / 2;
      for (let index = 0; index < count; index += 1) {
        const relativeX = ((((index * step + state.offset + halfTotal) % total) + total) % total) - halfTotal;
        const centerX = halfWidth + relativeX;
        cardCenters[index] = centerX;
        const curvePosition = (centerX - halfWidth) / halfWidth;
        const y = ROPE_Y + sag * (1 - curvePosition * curvePosition);
        const slope = (-2 * sag * curvePosition) / halfWidth;
        const tilt = Math.atan(slope) * (180 / Math.PI) * TILT;
        const acceleration = -STIFFNESS * (angles[index] - lean) - DAMPING * angularVelocities[index];
        angularVelocities[index] += acceleration * deltaTime;
        angles[index] = clamp(angles[index] + angularVelocities[index] * deltaTime, -MAX_ANGLE, MAX_ANGLE);
        cards[index].style.transform = `translate3d(${(centerX - cardWidth / 2).toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${(tilt + angles[index]).toFixed(3)}deg)`;
      }
    };
    animationFrame = requestAnimationFrame(tick);
    if (reduceMotion) stage.classList.add('is-in');

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      stage.removeEventListener('pointerdown', onPointerDown);
      stage.removeEventListener('pointermove', onPointerMove);
      stage.removeEventListener('pointerup', onPointerUp);
      stage.removeEventListener('pointercancel', onPointerUp);
      stage.removeEventListener('pointerenter', onPointerEnter);
      stage.removeEventListener('pointerleave', onPointerLeave);
      stage.removeEventListener('wheel', onWheel);
    };
  }, [items.length]);

  return (
    <div className="rope-wrap">
      <div className="rope-stage" ref={stageRef} aria-label="Services — drag sideways to explore" onClickCapture={(event) => {
        if (movedRef.current > 5) { event.preventDefault(); event.stopPropagation(); }
      }}>
        <svg className="rope-string" aria-hidden="true"><path ref={pathRef} /></svg>
        {items.map((item, index) => {
          const imageNumber = String((index % 19) + 1).padStart(2, '0');
          const imageSrc = item.slug === 'cloud-migration-services'
            ? '/services/cloud-solutions.jpg'
            : `/services/service-${imageNumber}.webp`;
          return (
            <div className="rope-card" key={item.slug || index} ref={(element) => { cardRefs.current[index] = element; }} style={{ '--i': index } as React.CSSProperties}>
              <span className="rope-clip" aria-hidden="true" />
              <Link href={`/services/${item.slug}`} className="rope-card-inner" draggable={false} onFocus={() => snapRef.current(index)}>
                <div className="rope-photo"><Image src={imageSrc} alt={`${item.title} service visual`} fill sizes="270px" draggable={false} /></div>
                <h3 className="rope-title">{item.title}</h3>
                <p className="rope-desc">{item.desc}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="rope-controls">
        <button type="button" className="rope-btn rope-btn-prev" aria-label="Previous service" onClick={() => snapRef.current('prev')}><i className="bi bi-arrow-right" aria-hidden="true" /></button>
        <span className="rope-hint">Drag or hover to play</span>
        <button type="button" className="rope-btn" aria-label="Next service" onClick={() => snapRef.current('next')}><i className="bi bi-arrow-right" aria-hidden="true" /></button>
      </div>
    </div>
  );
};

export default ServicesRope;
