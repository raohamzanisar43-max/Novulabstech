import React from 'react';
import Button from '@/components/ui/Button';

const HealthcareServiceSection: React.FC = () => {
  return (
    <section id="healthcare" className="sec bg-w">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <span className="stag">Services 10–11</span>
            <h2 className="stitle mt-3">Healthcare Software <span className="gtxt">Development</span></h2>
            <p className="ssub mb-4">HIPAA-compliant, HL7 FHIR-conformant healthcare platforms deployed across 40+ hospitals — EHR, telemedicine, medical billing, and pharmacy management.</p>
            <Button href="/contact" variant="grad">
              <i className="bi bi-calendar-check me-1"></i>Consult About Healthcare IT
            </Button>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="sec-img">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=75" alt="Healthcare" style={{ height: '340px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareServiceSection;
