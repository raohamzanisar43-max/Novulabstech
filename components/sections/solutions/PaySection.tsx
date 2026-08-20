import React from 'react';
import Button from '@/components/ui/Button';

const PaySection: React.FC = () => {
  return (
    <section id="pay" className="sec bg-w">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <span className="stag">Solution 03</span>
            <h2 className="stitle mt-3">NovuPay<br /><span className="gtxt">Payment Infrastructure</span></h2>
            <p className="ssub mb-4">Enterprise payment processing platform — Mastercard and Visa certified, engineered to PCI-DSS, handling billions in annual transaction volume with 99.99% uptime SLA.</p>
            <ul className="chk mb-4">
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Mastercard MDES tokenization</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Visa VTS &amp; Visa Direct</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>RAAST instant payment system (SBP)</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>1LINK ATM/POS switching</li>
              <li><span className="chk-ico"><i className="bi bi-check"></i></span>Built to PCI-DSS Level 1 controls</li>
            </ul>
            <Button href="/contact" variant="grad"><i className="bi bi-calendar-check me-1"></i>Consult About NovuPay</Button>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="sec-img">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=75" alt="Payment Platform" style={{ height: '380px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaySection;
