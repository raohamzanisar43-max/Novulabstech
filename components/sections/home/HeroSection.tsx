"use client";

import dynamic from 'next/dynamic';
import Button from '@/components/ui/Button';

// Lazy-load heavy canvas + 3D tilt — only allowed in Client Components
const ParticlesCanvas = dynamic(() => import('@/components/ui/ParticlesCanvas'), { ssr: false });
const TiltCard        = dynamic(() => import('@/components/ui/TiltCard'),        { ssr: false });

const HeroSection: React.FC = () => {
  return (
    <section id="hero">
      <div className="hero-grid"></div>
      <ParticlesCanvas />
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left */}
          <div className="col-lg-6">
            <div className="hero-inner">
              <div className="hero-badge">
                <span className="hero-dot"></span>
                Architect-led engineering for regulated industries
              </div>
              <h1 className="hero-title">
                Next-Gen<br />
                <span className="gtxt">Enterprise</span><br />
                Software House
              </h1>
              <p className="hero-sub">
                We engineer mission-critical platforms for fintech institutions, government agencies, healthcare networks, and global enterprises — built for scale, security, and compliance.
              </p>
              <div className="hero-btns">
                <Button href="/contact" variant="grad">
                  <i className="bi bi-rocket-takeoff me-1"></i>Book a Free Consultation
                </Button>
                <Button href="/portfolio" variant="glass">
                  <i className="bi bi-folder2-open me-1"></i>View Our Work
                </Button>
              </div>
              <br />
            </div>
          </div>
          {/* Right: Hero Image */}
          <div className="col-lg-6 hero-visual">
            <TiltCard className="hero-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80"
                alt="Enterprise software development team"
                width={900}
                height={600}
              />
              <div className="hero-img-overlay"></div>
              <div className="hero-img-shine"></div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
