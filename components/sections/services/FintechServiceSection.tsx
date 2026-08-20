import React from 'react';
import Button from '@/components/ui/Button';

const FintechServiceSection: React.FC = () => {
  return (
    <section id="fintech" className="sec bg-w">
      <div className="container">
        <div className="row align-items-center g-5 flex-lg-row-reverse">
          <div className="col-lg-6" data-aos="fade-left">
            <span className="stag">Services 03–06</span>
            <h2 className="stitle mt-3">Financial Software <span className="gtxt">Solutions</span></h2>
            <p className="ssub mb-4">Fintech engineering — core banking, Mastercard/Visa integrations, RAAST &amp; 1LINK connectivity, and payment infrastructure engineered to PCI-DSS requirements.</p>
            <ul className="chk mb-4">
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Core banking system development</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Payment gateways engineered to PCI-DSS</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Mastercard MDES &amp; Visa VTS tokenization</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Digital wallets &amp; RAAST/1LINK</li>
            </ul>
            <Button href="/contact" variant="grad">
              <i className="bi bi-calendar-check me-1"></i>Consult About Fintech
            </Button>
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <div className="sec-img">
              <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=75" alt="Fintech" style={{ height: '340px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FintechServiceSection;
