import React from 'react';
import Button from '@/components/ui/Button';

const AmlSection: React.FC = () => {
  return (
    <section id="aml" className="sec bg-g">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row-reverse">
          <div className="col-lg-6" data-reveal="left">
            <span className="stag">Solution 04</span>
            <h2 className="stitle mt-3">NovuShield<br /><span className="gtxt">AML &amp; Compliance Platform</span></h2>
            <p className="ssub mb-4">Screening, transaction monitoring and goAML reporting to FMU for institutions answerable to the State Bank of Pakistan, with model-assisted prioritisation kept off the regulatory critical path.</p>
            {/* Metric tiles removed (findings register F-04 / C-4). The case study
                for the same work declines to publish figures it cannot evidence,
                and says so; this page cannot carry a second, weaker standard.
                These are capability statements a buyer can check in a call. */}
            {/* "FATF Compliant" removed as well: an institution is assessed against
                FATF standards; a software vendor is not "FATF compliant". */}
            <ul className="chk mb-4">
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Deterministic rules produce the alerts of record; a model only prioritises the queue</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>goAML XML validated against the schema before anything reaches FMU</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Screening against the NACTA Proscribed Persons list, UN Consolidated List and OFAC SDN</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Append-only transaction store, so any alert can be reconstructed months later</li>
            </ul>
            <Button href="/contact" variant="grad"><i className="bi bi-calendar-check me-1"></i>Consult About NovuShield</Button>
          </div>
          <div className="col-lg-6" data-reveal="right">
            <div className="sec-img">
              <img
                src="/og/aml-cft-compliance-software.jpg"
                alt="NovuShield AML and CFT compliance platform"
                width={1200}
                height={630}
                loading="lazy"
                decoding="async"
                style={{ height: '380px', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmlSection;
