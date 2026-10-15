import React from 'react';

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

        <ol className="pflow-list">
          {steps.map((step, i) => (
            <li className="pflow-step" key={step.title} data-reveal="up">
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
