import React from 'react';
import Image from 'next/image';

const AboutPhotos: React.FC = () => {
  return (
    <section className="sec-sm bg-g" id="team-photos">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6" data-reveal="right">
            <div className="sec-img">
              <Image
                src="/team-working.jpeg"
                alt="NovuLabs engineers reviewing an architecture diagram together"
                width={1280}
                height={960}
                sizes="(max-width: 767px) 100vw, 50vw"
                loading="lazy"
                style={{ height: '300px', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="col-md-6" data-reveal="left">
            <div className="sec-img">
              <Image
                src="/hero/about1.jpeg"
                alt="NovuLabs engineering team working at laptops beside the NovuLabs logo in the Islamabad office"
                width={1448}
                height={1086}
                sizes="(max-width: 767px) 100vw, 50vw"
                loading="lazy"
                style={{ height: '300px', width: '100%', objectFit: 'cover', objectPosition: 'center 42%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhotos;
