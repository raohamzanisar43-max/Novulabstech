"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const LOCAL_VIDEO_URL = '/hero/novulabs-hero.mp4';
const REMOTE_VIDEO_URL = 'https://media.githubusercontent.com/media/raohamzanisar43-max/Novulabstech/main/public/hero/novulabs-hero.mp4';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');

    const tryToPlay = () => {
      void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    };

    video.addEventListener('loadedmetadata', tryToPlay);
    video.addEventListener('canplay', tryToPlay);
    tryToPlay();
    const retry = window.setTimeout(tryToPlay, 800);

    return () => {
      window.clearTimeout(retry);
      video.removeEventListener('loadedmetadata', tryToPlay);
      video.removeEventListener('canplay', tryToPlay);
    };
  }, []);

  const startVideo = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    void event.currentTarget.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
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
        ref={videoRef}
        className="hero-full-video"
        src={LOCAL_VIDEO_URL}
        poster="/hero/novulabs-hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={startVideo}
        onCanPlay={startVideo}
        onError={fallbackToLocalVideo}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        aria-label="NovuLabs introduction video"
      />
      {!isPlaying && (
        <button className="hero-video-play" type="button" onClick={playVideo} aria-label="Play NovuLabs introduction video">
          <i className="bi bi-play-fill" aria-hidden="true" />
          Play video
        </button>
      )}
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
