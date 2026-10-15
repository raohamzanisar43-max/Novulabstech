"use client";

import { useEffect, useRef } from "react";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = "/hero/novulabs-hero.mp4";
    video.load();
    void video.play().catch(() => undefined);
  }, []);

  return (
    <section id="hero" className="hero-video-only" aria-label="NovuLabs introduction">
      <video ref={videoRef} className="hero-full-video" muted loop playsInline preload="metadata" aria-label="NovuLabs introduction video" />
      <div className="hero-stats-strip" aria-label="NovuLabs highlights">
        <div className="hero-stat-group">
          <strong>1M+</strong>
          <ul>
            <li>Active Users Worldwide</li>
            <li>Trusted by Businesses Globally</li>
            <li>Seamless Integration Capability</li>
          </ul>
        </div>
        <div className="hero-stat-group support">
          <strong><span>24/7</span> Support</strong>
          <ul>
            <li>Always available, day or night</li>
            <li>Fast response time guaranteed</li>
            <li>Expert agents ready to assist</li>
            <li>Multi-language customer care</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
