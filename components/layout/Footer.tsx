"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { servicePages } from '@/content/servicePages';

const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <>
      <div className="ft-wave-wrap">
        <svg className="ft-wave-svg" viewBox="0 0 2880 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path className="ft-wave-p1" d="M0,45 C240,0 480,90 720,45 C960,0 1200,90 1440,45 C1680,0 1920,90 2160,45 C2400,0 2640,90 2880,45 L2880,90 L0,90 Z" />
          <path className="ft-wave-p2" d="M0,62 C300,15 600,90 900,62 C1200,15 1440,78 1440,62 C1740,46 2040,90 2340,62 C2520,46 2700,18 2880,62 L2880,90 L0,90 Z" />
        </svg>
      </div>
      <footer>
        <div className="container">
          <div className="row g-5 ft-top">
            <div className="col-lg-3">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <img src="/logo.png" alt="NovuLabs" className="ft-logo" style={{ height: '40px', width: 'auto' }} />
                <span 
                  style={{
                    fontFamily: 'var(--fh)',
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    letterSpacing: '-.03em',
                    background: 'var(--g-main)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1
                  }}
                >
                  NovuLabs
                </span>
              </div>
              <p className="ft-tag">
                A premier international enterprise software house headquartered in Islamabad. Engineering mission-critical platforms across 40+ countries since 2026.
              </p>
              <div className="ft-contact-items">
                <a href="mailto:info@novulabs.net" className="ft-contact-item">
                  <i className="bi bi-envelope-fill"></i>info@novulabs.net
                </a>
                <span className="ft-contact-item">
                  <i className="bi bi-geo-alt-fill"></i>Islamabad, Pakistan
                </span>
              </div>
              <div className="ft-socs">
                <a href="https://www.linkedin.com/company/novu-labs/" target="_blank" rel="noopener noreferrer" className="fsoc" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="https://www.facebook.com/profile.php?id=61592003789179" target="_blank" rel="noopener noreferrer" className="fsoc" title="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/novu_labs" target="_blank" rel="noopener noreferrer" className="fsoc" title="Instagram"><i className="bi bi-instagram"></i></a>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="ft-head">Services</div>
              <ul className="ft-links">
                {/* Previously seven /services#anchor fragments. Fragments pass
                    no independent link equity — the footer looked like it linked
                    to seven places and linked to one. */}
                {servicePages.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}>
                      <i className="bi bi-chevron-right"></i>
                      {s.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-6 col-lg-2">
              <div className="ft-head">Company</div>
              <ul className="ft-links">
                <li><Link href="/about"><i className="bi bi-chevron-right"></i>About NovuLabs</Link></li>
                <li><Link href="/portfolio"><i className="bi bi-chevron-right"></i>Case Studies</Link></li>
                <li><Link href="/industries"><i className="bi bi-chevron-right"></i>Industries</Link></li>
                <li><Link href="/solutions"><i className="bi bi-chevron-right"></i>Solutions</Link></li>
                <li><Link href="/contact"><i className="bi bi-chevron-right"></i>Contact Us</Link></li>
                <li><Link href="/blog"><i className="bi bi-chevron-right"></i>Insights</Link></li>
                <li><Link href="/team"><i className="bi bi-chevron-right"></i>Our Team</Link></li>
              </ul>
            </div>

            <div className="col-lg-4">
              <div className="ft-head">Subscribe For Updates</div>
              <p className="ft-tag" style={{ marginBottom: '18px' }}>
                Monthly fintech, compliance &amp; enterprise tech insights. No spam.
              </p>
              <form className="ft-subscribe-form" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  className="ft-sub-input" 
                  placeholder="Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button 
                  type="submit" 
                  className="btn-grad ft-sub-btn"
                  style={{
                    background: subscribed ? 'linear-gradient(135deg,#C9A84C,#E8C96A)' : '',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
          <div className="ft-bot">
            <div className="ft-copy">© 2026 NovuLabs Technology Pvt Ltd. All rights reserved.</div>
            {/* These four were all href="#" on every page — 4 dead links x
                every route. /privacy and /privacy-policy both 404'd. */}
            <div className="ft-legal">
              <Link href="/legal/privacy-policy">Privacy Policy</Link>
              <Link href="/legal/terms-of-service">Terms of Service</Link>
              <Link href="/legal/cookie-policy">Cookie Policy</Link>
              <Link href="/site-map">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
