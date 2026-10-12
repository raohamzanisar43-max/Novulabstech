import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Build meaningful software with the NovuLabs engineering team.',
};

export default function CareersPage() {
  return (
    <main className="phero" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container careers-layout">
        <div className="phero-inner careers-copy">
          <span className="stag">Careers at NovuLabs</span>
          <h1 className="hero-title mt-3">Build software that <span className="gtxt">matters</span></h1>
          <p className="hero-sub">We are building an in-house team of engineers, designers and delivery leaders for regulated industries. If you care about thoughtful work and dependable systems, we would like to hear from you.</p>
          <Link href="/contact" className="btn-grad">Talk to NovuLabs <i className="bi bi-arrow-right"></i></Link>
        </div>
        <div className="careers-visual" aria-hidden="true">
          <span className="careers-mark">N</span>
          <span className="careers-visual-title">NOVULABS</span>
          <span className="careers-visual-copy">Architect-led engineering<br />for regulated industries.</span>
        </div>
      </div>
    </main>
  );
}
