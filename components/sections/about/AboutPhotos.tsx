import React from 'react';

const AboutPhotos: React.FC = () => {
  return (
    <section className="sec-sm bg-g" id="team-photos">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6" data-reveal="right">
            <div className="sec-img">
              <img src="/team-working.jpeg" alt="Team working together" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="col-md-6" data-reveal="left">
            <div className="sec-img">
              <img
                src="/hero/about.jpg"
                alt="NovuLabs engineering team at work in Islamabad"
                width={1920}
                height={1080}
                loading="lazy"
                decoding="async"
                style={{ height: '300px', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhotos;
