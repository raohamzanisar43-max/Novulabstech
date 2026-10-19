"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LOCAL_VIDEO_URL = '/hero/novulabs-hero.mp4';
const REMOTE_VIDEO_URL = 'https://media.githubusercontent.com/media/raohamzanisar43-max/Novulabstech/main/public/hero/novulabs-hero.mp4';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Curtain effect: the hero (video + stats strip) stays pinned while the next
  // section scrolls up over it. pinSpacing is off so no empty space is left
  // behind. Desktop only: pinning is jumpy on touch browsers with collapsing bars.
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 992px)', () => {
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
      return () => trigger.kill();
    });
    return () => mm.revert();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');

    const tryToPlay = () => {
      video.muted = true;
      void video.play().catch(() => undefined);
    };

    video.addEventListener('loadedmetadata', tryToPlay);
    video.addEventListener('canplay', tryToPlay);
    tryToPlay();
    const retry = window.setTimeout(tryToPlay, 800);
    window.addEventListener('pointerdown', tryToPlay, { passive: true });
    window.addEventListener('keydown', tryToPlay, { passive: true });
    window.addEventListener('touchstart', tryToPlay, { passive: true });

    return () => {
      window.clearTimeout(retry);
      video.removeEventListener('loadedmetadata', tryToPlay);
      video.removeEventListener('canplay', tryToPlay);
      window.removeEventListener('pointerdown', tryToPlay);
      window.removeEventListener('keydown', tryToPlay);
      window.removeEventListener('touchstart', tryToPlay);
    };
  }, []);

  const startVideo = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    event.currentTarget.muted = true;
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
    <section id="hero" ref={sectionRef} className="hero-video-only" aria-label="NovuLabs introduction">
      {/* The hero is a video with no on-screen heading; keep one h1 for the page for
          search engines and screen readers. */}
      <h1 className="visually-hidden">NovuLabs: Enterprise Software House in Islamabad</h1>
      <video
        ref={videoRef}
        className="hero-full-video"
        src={LOCAL_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={startVideo}
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
