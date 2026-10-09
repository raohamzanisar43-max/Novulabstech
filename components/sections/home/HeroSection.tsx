"use client";

import Image from 'next/image';
import Button from '@/components/ui/Button';
import KineticHeading from '@/components/ui/KineticHeading';
import TiltCard from '@/components/ui/TiltCard';

// TiltCard was previously loaded with next/dynamic + ssr:false, which meant the
// entire right-hand hero visual; the largest element above the fold, and the
// LCP candidate on this page — was absent from the server HTML and only
// appeared after hydration. That delays LCP by the whole JS round trip and
// hides the image from any crawler that does not execute JavaScript.
//
// TiltCard only uses a ref and two pointer handlers, so it server-renders
// perfectly well. It is now a normal import: the markup ships in the HTML and
// the tilt attaches on hydration as a progressive enhancement.

const HeroSection: React.FC = () => {
  return (
    <section id="hero">
      <div className="hero-grid"></div>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left */}
          <div className="col-lg-6">
            <div className="hero-inner">
              <div className="hero-badge">
                <span className="hero-dot"></span>
                Architect-led engineering for regulated industries
              </div>
              {/* H1 reads "Best Enterprise Software House in Islamabad", at
                  the owner's explicit direction.

                  Note the H1 no longer matches the title tag word for word:
                  "Enterprise" sits between "Best" and "Software House", so the
                  contiguous phrase "best software house in Islamabad" is
                  carried by the title and description rather than the heading.
                  Both strings are in the head-term set the page targets, so
                  this is a deliberate split, not drift — if the title is ever
                  rewritten, keep the exact phrase somewhere in the <head>.

                  "Best" is a claim, so the copy directly beneath it says what
                  it is measured on (software a regulator can inspect, and an
                  architect on the first call) rather than leaving it as bare
                  puffery. That keeps the heading consistent with the rest of
                  the site, which argues that "best" depends on the project.

                  Cannibalisation check: /software-house-in-islamabad targets
                  the comparison phrasing ("How to Choose the Best Software
                  Agency in Islamabad"). House vs agency and head term vs
                  how-to keep the two pages on distinct queries. */}
              <h1 className="hero-title">
                <KineticHeading text="Best Enterprise Software House" />
                {/* Explicit space, not just the <br/>. Text extractors — Google's
                    included — concatenate across the break, and without this the
                    H1 reads as "Housein Islamabad", which loses the exact-match
                    phrase the heading exists to carry. */}
                {' '}
                <br />
                <span className="gtxt">
                  <KineticHeading text="in Islamabad" delayStep={55} />
                </span>
              </h1>
              {/* Two sentences, doing two jobs: what we build (with the terms a
                  buyer searches), then the one promise that is checkable on the
                  next click. The previous version spent its second sentence
                  restating the category, which the H1 directly above already
                  said. */}
              <p className="hero-sub">
                We build the systems banks, hospitals and government departments get audited on:
                AML and transaction monitoring, payment infrastructure, patient records. The kind
                of software where being wrong is expensive and being unable to explain why is
                worse.
              </p>
              <p className="hero-sub">
                Your first call is with the architect who would own the build. No account manager,
                no discovery deck, and an honest answer if we are the wrong firm for it.
              </p>
              <div className="hero-btns">
                {/* "Talk to an architect" instead of "Book a Free Consultation":
                    it describes what actually happens and it is the specific
                    promise the copy above just made. Generic CTA labels ask for
                    a commitment without saying what is on the other side. */}
                <Button href="/contact" variant="grad">
                  <i className="bi bi-rocket-takeoff me-1"></i>Talk to an architect
                </Button>
                <Button href="/portfolio" variant="glass">
                  <i className="bi bi-folder2-open me-1"></i>See how we built it
                </Button>
              </div>
            </div>
          </div>
          {/* Right: Hero Image */}
          <div className="col-lg-6 hero-visual">
            <TiltCard className="hero-img-wrap">
              {/* `priority`; this is the LCP element. It was carrying
                  loading="lazy", which tells the browser to defer the one image
                  it should fetch first. next/image also emits a preload hint and
                  a responsive srcset, so phones stop downloading a 1200px asset
                  to paint it at ~360px. */}
              <Image
                src="/og/enterprise-software-development.jpg"
                alt="Enterprise software engineering for regulated industries"
                width={1200}
                height={630}
                priority
                sizes="(max-width: 991px) 100vw, 50vw"
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
