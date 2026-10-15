"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startVideo = () => {
      const source = video.dataset.src;
      if (!source || video.src) return;
      video.src = source;
      video.load();
      void video.play().catch(() => undefined);
    };

    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(startVideo, { timeout: 2500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timer = window.setTimeout(startVideo, 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero-video-only" aria-label="NovuLabs introduction">
      <video
        ref={videoRef}
        className="hero-full-video"
        data-src="/hero/novulabs-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="NovuLabs introduction video"
      />
      <div className="hero-video-n-mark" aria-hidden="true">
        <Image src="/logo.png" alt="" width={48} height={48} priority />
      </div>
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
