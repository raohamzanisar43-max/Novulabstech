'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Homepage "How we work" strip. */
const steps: Array<{ icon: string; title: string; desc: string }> = [
  {
    icon: 'bi-file-earmark-text',
    title: 'Consultation',
    desc: 'We understand your goals and the problems you are tired of fixing twice.',
  },
  {
    icon: 'bi-diagram-3-fill',
    title: 'Strategy',
    desc: 'We map what needs to be built, not everything that could be.',
  },
  {
    icon: 'bi-boxes',
    title: 'Implementation',
    desc: 'We write clean, developer-friendly code.',
  },
  {
    icon: 'bi-check-circle',
    title: 'Final Result',
    desc: 'We deliver software that runs reliably and is ready for real use.',
  },
];

const ProcessSection: React.FC = () => {
  const listRef = useRef<HTMLOListElement>(null);

  // Steps pop in one after another (0.8s apart); each connector line then draws
  // out to the next step. Plays once, when the list first scrolls into view.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>('.pflow-step', listRef.current);
      gsap.set(steps, { opacity: 0.35, y: 28, scale: 0.88, '--line': 0 });
      const tl = gsap.timeline({
        scrollTrigger: { trigger: listRef.current, start: 'top 75%', once: true },
      });
      steps.forEach((step, i) => {
        const at = i * 0.8;
        tl.to(step, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.4)' }, at)
          .to(step, { scale: 1.03, duration: 0.18, yoyo: true, repeat: 1, ease: 'power1.out' }, at + 0.6)
          .to(step, { '--line': 1, duration: 0.8, ease: 'none' }, at + 0.3);
      });
    }, listRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="sec bg-w z1 pflow" id="process">
      <div className="container">
        <div className="pflow-head" data-reveal="up">
          <h2 className="pflow-title">
            Process Behind Every <span>Project</span>
          </h2>
          <p className="pflow-sub">
            A simple four-step process that turns your idea into dependable software ready for real use.
          </p>
        </div>

        <ol className="pflow-list" ref={listRef}>
          {steps.map((step, i) => (
            <li className="pflow-step" key={step.title}>
              <div className="pflow-icon">
                <i className={`bi ${step.icon}`} aria-hidden="true" />
                <span className="pflow-badge">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="pflow-step-title">{step.title}</h3>
              <p className="pflow-step-desc">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
