"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const lastScrollYRef = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      // Solid background styling when scrolled past 50px
      setScrolled(currentScrollY > 50);

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        if (!mobileMenuOpen) {
          setVisible(false);
        }
      } else {
        setVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Close mobile menu + dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setVisible(true); // make sure it's visible on route switch
  }, [pathname]);

  const hasDarkHero = true;
  const navbarClasses = `navbar navbar-expand-lg ${hasDarkHero && !scrolled ? 'nav-inv' : ''} ${scrolled ? 'scrolled' : ''} ${visible ? 'nav-visible' : 'nav-hidden'}`;

  const checkActive = (href: string, exact = false) => {
    if (exact) {
      return pathname === href;
    }
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  return (
    <nav className={navbarClasses}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          {/* next/image: logo.png is a 1200x1200 / 154KB PNG rendered at 40px.
              As a raw <img> with no dimensions it was an unsized element in the
              header of all 40 routes; the site's single largest CLS source —
              and shipped 154KB for a 40px slot. The optimizer serves AVIF/WebP
              at 40px instead. */}
          <Image
            src="/logo.png"
            alt="NovuLabs"
            className="nav-logo"
            width={40}
            height={40}
            priority
            sizes="40px"
          />
          <span 
            style={{
              fontFamily: 'var(--fh)',
              fontSize: '1.25rem',
              fontWeight: 800,
              letterSpacing: '-.03em',
              background: 'var(--g-main)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginLeft: '10px',
              lineHeight: 1
            }}
          >
            NOVULABS
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="nvmenu">
          <ul className="navbar-nav mx-auto gap-1">
            <li className="nav-item">
              <Link className={`nav-link ${checkActive('/', true) ? 'active' : ''}`} href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${checkActive('/services') ? 'active' : ''}`} href="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${checkActive('/about') ? 'active' : ''}`} href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${checkActive('/team') ? 'active' : ''}`} href="/team">Team</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${checkActive('/careers') ? 'active' : ''}`} href="/careers">Careers</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${checkActive('/blog') ? 'active' : ''}`} href="/blog">Blogs</Link>
            </li>
          </ul>
          <Link href="/contact" className={`nav-cta nav-link ms-lg-3 ${checkActive('/contact') ? 'active' : ''}`}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
