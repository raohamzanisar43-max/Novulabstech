"use client";

import Image from "next/image";

const LOCAL_VIDEO_URL = '/hero/novulabs-hero.mp4';
const REMOTE_VIDEO_URL = 'https://media.githubusercontent.com/media/raohamzanisar43-max/Novulabstech/main/public/hero/novulabs-hero.mp4';

const HeroSection: React.FC = () => {
  const startVideo = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    void event.currentTarget.play().catch(() => undefined);
  };

  const fallbackToLocalVideo = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    if (video.src === REMOTE_VIDEO_URL) return;
    video.src = REMOTE_VIDEO_URL;
    video.load();
    void video.play().catch(() => undefined);
  };

  return (
    <section id="hero" className="hero-video-only" aria-label="NovuLabs introduction">
      <video
        className="hero-full-video"
        src={LOCAL_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={startVideo}
        onError={fallbackToLocalVideo}
        aria-label="NovuLabs introduction video"
      />
      <div className="hero-video-n-mark" aria-hidden="true">
        <Image src="/logo.png" alt="" width={48} height={48} priority />
      </div>

      <div className="hs2" aria-label="NovuLabs highlights">
        <div className="hs2-card">
          <strong className="hs2-big">1M+</strong>
          <ul className="hs2-list">
            <li>Active Users Worldwide</li>
            <li>Trusted by Businesses Globally</li>
            <li>Seamless Integration Capability</li>
          </ul>
        </div>
        <div className="hs2-card">
          <strong className="hs2-big"><span>24/7</span> Support</strong>
          <ul className="hs2-list">
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
