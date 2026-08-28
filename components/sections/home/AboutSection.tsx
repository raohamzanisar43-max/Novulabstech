import React from 'react';
import CountUp from '@/components/ui/CountUp';
import Button from '@/components/ui/Button';

const AboutSection: React.FC = () => {
  return (
    <section className="sec bg-w z1" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5" data-reveal="right">
            <div style={{ position: 'relative' }}>
              <div className="about-img">
                <img src="/team-working.jpeg" alt="NovuLabs global team collaboration" />
              </div>
              <div className="about-glass-pill agp1">
                <div className="agp-num">
                  <CountUp target={12} suffix="+" />
                </div>
                <div className="agp-sub">Years of Excellence</div>
              </div>
              <div className="about-glass-pill agp2">
                <div className="agp-num">
                  <CountUp target={500} suffix="+" />
                </div>
                <div className="agp-sub">Engineers Worldwide</div>
              </div>
            </div>
          </div>
          <div className="col-lg-7" data-reveal="left">
            <span className="stag">Who We Are</span>
            <h2 className="stitle mt-3">Building Digital Infrastructure <span className="gtxt">for Tomorrow</span></h2>
            <p className="ssub mb-4">NovuLabs is a premier international software house headquartered in Islamabad. We engineer enterprise-grade platforms that power financial systems, healthcare networks, and government portals across 40+ countries.</p>
            
            <div className="d-flex gap-3 flex-wrap">
              <Button href="/about" variant="grad">
                <i className="bi bi-arrow-right me-1"></i>About NovuLabs
              </Button>
              <Button href="/contact" variant="glass">
                <i className="bi bi-calendar-check me-1"></i>Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
