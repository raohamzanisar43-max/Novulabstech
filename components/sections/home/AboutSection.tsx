import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const AboutSection: React.FC = () => {
  return (
    <section className="sec bg-w z1" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5" data-reveal="right">
            <div style={{ position: 'relative' }}>
              {/* next/image: the raw <img> shipped a 1280x960 / 147KB JPEG with
                  no width or height, so it was an unsized above-the-fold
                  element on the homepage; a CLS source and an oversized
                  payload for a 440px slot. */}
              <div className="about-img">
                <Image
                  src="/team-working.jpeg"
                  alt="NovuLabs engineers working together in the Islamabad office"
                  width={1280}
                  height={960}
                  sizes="(max-width: 991px) 100vw, 40vw"
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
              </div>
              {/* These two pills counted up to "12+ Years of Excellence" and
                  "500+ Engineers Worldwide". Neither is evidenced: the founding
                  year is an open CLIENT-ACTIONS item, and /team lists three
                  people. A headcount claim two orders of magnitude off what the
                  same site shows is the kind of thing a buyer checks first.
                  Replaced with two things the site can actually substantiate on
                  its own pages, which is why each links to one. */}
              <div className="about-glass-pill agp1">
                <div className="agp-label">Architect-led</div>
                <div className="agp-sub">No pre-sales layer, ever</div>
              </div>
              <div className="about-glass-pill agp2">
                <div className="agp-label">Islamabad HQ</div>
                <div className="agp-sub">One in-house engineering team</div>
              </div>
            </div>
          </div>
          <div className="col-lg-7" data-reveal="left">
            <span className="stag">Who We Are</span>
            <h2 className="stitle mt-3">
              An enterprise software house <span className="gtxt">in Islamabad</span>
            </h2>
            <p className="ssub mb-4">
              NovuLabs is an enterprise software house based in I-10, Islamabad, focused on
              building intelligent, secure, and scalable digital solutions for businesses and
              organizations around the world. From custom enterprise software and mobile
              applications to AI-powered solutions, cloud platforms, and digital transformation,
              we combine strong engineering expertise with a deep understanding of the problems
              businesses need to solve.
            </p>
            <p className="ssub mb-4">
              We believe that systems should be built around the people who use them, delivering
              experiences that are reliable, intuitive, and purposeful. We work closely with our
              clients from strategy and architecture through development, deployment, and ongoing
              support. Our team combines engineering expertise with a business-first approach to
              create secure and reliable technology tailored to each client&apos;s unique needs.
            </p>
            <p className="ssub mb-4">
              At NovuLabs, we aim to be more than a development vendor. We work as a long-term
              technology partner, helping businesses build software that performs today while
              remaining scalable and adaptable for tomorrow.
            </p>

            {/* Contextual links into the service pages the paragraph above
                describes, plus the two local landing pages. Anchor text is the
                service name in a sentence that needed it, not a keyword row
                bolted on underneath. */}
            <p className="ssub mb-4">
              In practice that means{' '}
              <Link href="/services/legacy-system-modernization">enterprise software development</Link>,{' '}
              <Link href="/services/website-development">custom website development</Link>,{' '}
              <Link href="/mobile-app-development-in-islamabad">mobile app development</Link>,{' '}
              <Link href="/services/ai-development-services">AI automation</Link> and{' '}
              <Link href="/services/cloud-migration-services">cloud architecture</Link>. If you are
              comparing suppliers locally, the{' '}
              <Link href="/software-house-in-islamabad">software house in Islamabad</Link> page
              covers how we engage and the questions worth asking any firm before you sign; for the
              national picture see{' '}
              <Link href="/software-development-in-pakistan">software development in Pakistan</Link>.
            </p>

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
