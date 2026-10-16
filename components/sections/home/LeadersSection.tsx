import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { teamMembers } from '@/content/siteData';

type CreativeMember = {
  slug: string;
  name: string;
  role: string;
  img: string;
  x: string;
  y: string;
  label: 'left' | 'right';
  lx: string;
};

/** Render each word separately so labels can be revealed in sequence. */
const Words = ({ text, start }: { text: string; start: number }) => (
  <>
    {text.split(' ').map((word, k) => (
      <React.Fragment key={k}>
        {k > 0 && ' '}
        <span className="w" style={{ '--w': start + k } as React.CSSProperties}>{word}</span>
      </React.Fragment>
    ))}
  </>
);

const creativeTeam: CreativeMember[] = [
  { slug: 'owais-abdul-khaliq', name: 'Owais Abdul Khaliq', role: 'AI Engineer', img: '/team/cutout-owais.png', x: '9%', y: '12.5%', label: 'right', lx: '66%' },
  { slug: 'rubakh', name: 'Rubakh', role: 'Software Engineer', img: '/team/cutout-rubakh.png', x: '40%', y: '14.8%', label: 'right', lx: '70%' },
  { slug: 'hanzla-haleem', name: 'Hanzla Haleem', role: 'Senior Software Engineer', img: '/team/cutout-hanzala.png', x: '66%', y: '16.4%', label: 'right', lx: '68%' },
  { slug: 'talha', name: 'Faisal Tayyab', role: 'Backend Developer', img: '/team/cutout-talha.png', x: '37.7%', y: '61.7%', label: 'right', lx: '70%' },
];

/** Homepage creative team section. Team data stays in content/siteData.ts. */
const LeadersSection: React.FC = () => {
  return (
    <section className="sec bg-g z1 creative-team" id="leaders">
      <div className="container">
        <div className="creative-team-head" data-reveal="up">
          <Link href="/team" className="lead-eyebrow">
            Our Team <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </Link>
          <h2 className="lead-title">Our Leaders</h2>
          <p className="lead-sub">Straight words from teams who run their business on the software we built.</p>
          <p className="lead-text">
            Most of our clients came to us after trying solutions that didn&apos;t hold up. They stay
            because we build systems that are dependable, well-supported, and designed around real
            daily use. Here&apos;s what it&apos;s like working with a team that treats your software
            as if it were their own.
          </p>
          <Link href="/team" className="lead-btn">View More</Link>
        </div>

        <div className="creative-leaders" data-reveal="up">
          {teamMembers.slice(0, 3).map((member) => (
            <Link href={`/team/${member.slug}`} className="creative-leader-card" key={member.slug}>
              <Image
                src={member.img}
                alt={member.imgAlt}
                width={800}
                height={800}
                quality={100}
                sizes="(max-width: 700px) 50vw, 420px"
              />
              <span><strong>{member.name}</strong><small>{member.role}</small></span>
            </Link>
          ))}
        </div>

        <div className="creative-team-stage" data-reveal="up">
          <svg className="creative-team-word" viewBox="0 0 920 640" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="creative-heading-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0876d1" />
                <stop offset="52%" stopColor="#35b8ea" />
                <stop offset="100%" stopColor="#8be7ff" />
              </linearGradient>
            </defs>
            <text fill="url(#creative-heading-gradient)" x="460" y="330" textAnchor="middle" textLength="820" lengthAdjust="spacingAndGlyphs">CREATIVE</text>
            <text fill="url(#creative-heading-gradient)" x="460" y="600" textAnchor="middle" textLength="470" lengthAdjust="spacingAndGlyphs">TEAM</text>
          </svg>
          {creativeTeam.map((member, i) => (
            <Link
              href="/team"
              className={`creative-team-member label-${member.label}`}
              style={{ '--x': member.x, '--y': member.y, '--lx': member.lx, '--i': i } as React.CSSProperties}
              key={member.slug}
              aria-label={member.name}
            >
              <span className="creative-team-photo-wrap">
                <Image
                  className="creative-team-photo"
                  src={member.img}
                  alt={`${member.name}, ${member.role}`}
                  width={400}
                  height={460}
                  sizes="(max-width: 768px) 20vw, 160px"
                />
              </span>
              <span className="creative-team-cap">
                <strong><Words text={member.name} start={0} /></strong>
                <small><Words text={member.role} start={member.name.split(' ').length} /></small>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;
