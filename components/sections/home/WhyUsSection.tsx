import React from 'react';

const clientLogos = [
  { name: 'T-Tronic', detail: 'Angels', className: 'client-logo-tronic' },
  { name: 'Mars', detail: 'BPO', className: 'client-logo-mars' },
  { name: 'AXXON', detail: '', className: 'client-logo-axxon' },
];

const WhyUsSection: React.FC = () => {
  return (
    <section className="results-section" id="clients">
      <div className="results-intro">
        <h2>Exceptional Results, Designed<br />For Exceptional Clients</h2>
        <p>
          We believe consistency creates trust. Our designers challenge assumptions, our<br className="results-desktop-break" />
          developers double-check every detail, and our marketers stay curious.<br className="results-desktop-break" />
          This mindset allows us to deliver work that remains authentic, dependable, and<br className="results-desktop-break" />
          truly valuable for our clients.
        </p>
      </div>

      <div className="client-logo-strip" aria-label="Our clients">
        <div className="client-logo-heading">Happy<br />Clients</div>
        <div className="client-logo-divider" aria-hidden="true" />
        <div className="client-logo-track">
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div className={`client-logo ${logo.className}`} key={`${logo.name}-${index}`} aria-label={logo.name}>
              <span>{logo.name}</span>
              {logo.detail && <small>{logo.detail}</small>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
