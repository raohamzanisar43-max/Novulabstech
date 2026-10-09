import React from 'react';
import Button from '@/components/ui/Button';

const CrmSection: React.FC = () => {
  return (
    <section id="crm" className="sec bg-g">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row-reverse">
          <div className="col-lg-6" data-reveal="left">
            <span className="stag">Solution 02</span>
            <h2 className="stitle mt-3">NovuCRM<br /><span className="gtxt">AI-Powered Customer Management</span></h2>
            <p className="ssub mb-4">Enterprise CRM with AI-driven lead scoring, revenue forecasting, pipeline automation, and omnichannel engagement across email, SMS, and WhatsApp.</p>
            {/* Metric tiles removed (findings register F-04 / C-4). The case study
                for the same work declines to publish figures it cannot evidence,
                and says so; this page cannot carry a second, weaker standard.
                These are capability statements a buyer can check in a call. */}
            <ul className="chk mb-4">
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Lead scoring that ranks the queue and never makes the decision</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Pipeline stages modelled on how your deals actually move, exceptions included</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Email, SMS and WhatsApp contact history on one customer record</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Audit trail on every customer contact, for regulated sales processes</li>
            </ul>
            <Button href="/contact" variant="grad"><i className="bi bi-calendar-check me-1"></i>Consult About NovuCRM</Button>
          </div>
          <div className="col-lg-6" data-reveal="right">
            <div className="sec-img">
              <img
                src="/portfolio/novucrm-intelligence-suite.jpg"
                alt="NovuCRM customer intelligence platform"
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

export default CrmSection;
