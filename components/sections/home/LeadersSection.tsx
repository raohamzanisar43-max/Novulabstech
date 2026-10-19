import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { teamMembers } from '@/content/siteData';
import TeamMaskReveal from '@/components/ui/TeamMaskReveal';
import LeadersMotion from '@/components/sections/home/LeadersMotion';

type CreativeMember = {
  slug: string;
  name: string;
  role: string;
  img: string;
  x: string;
  y: string;
  label: 'left' | 'right';
  lx: string;
  /** Portrait width in cqw, tuned per cutout so every head renders at the same size. */
  w: string;
};

/** Leader card artwork (cropped from the supplied card designs). Falls back to the member's regular photo. */
const leaderCardImages: Record<string, string> = {
  'muneeb-ali-jaffari': '/team/moneeb-card.jpg',
  'fatima-nisar': '/team/fatima-nisar-card.jpg',
};

type LeaderCard = {
  key: string;
  href?: string;
  img: string;
  alt: string;
  name: string;
  role: string;
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
  { slug: 'owais-abdul-khaliq', name: 'Owais Abdul Khaliq', role: 'AI Engineer', img: '/team/cutout-owais.png', x: '0.5%', y: '19.6%', label: 'right', lx: '75%', w: '12.3cqw' },
  { slug: 'rubakh', name: 'Rubakh', role: 'Software Engineer', img: '/team/cutout-rubakh-v2.png', x: '47.2%', y: '-4.4%', label: 'right', lx: '72%', w: '13.7cqw' },
  { slug: 'tafseer', name: 'Tafseer', role: 'Full Stack Developer', img: '/team/cutout-tafseer.png', x: '82.5%', y: '19.2%', label: 'left', lx: '20%', w: '14.7cqw' },
  { slug: 'talha', name: 'Faisal Tayyab', role: 'Backend Developer', img: '/team/cutout-talha.png', x: '29%', y: '64.2%', label: 'right', lx: '75%', w: '14.1cqw' },
];

const partner: LeaderCard = {
  key: 'chen-wei',
  href: '/team', // no individual profile page yet; behaves like the other cards and opens the team page
  img: '/team/chen-wei-partner.jpg',
  alt: 'Chen Wei, Partner (Director) at NovuLabs',
  name: 'Chen Wei',
  role: 'Partner (Director)',
};

/** Homepage creative team section. Team data stays in content/siteData.ts. */
const LeadersSection: React.FC = () => {
  const profiles: LeaderCard[] = teamMembers.slice(0, 3).map((member) => ({
    key: member.slug,
    href: `/team/${member.slug}`,
    img: leaderCardImages[member.slug] ?? member.img,
    alt: member.imgAlt,
    name: member.name,
    role: member.role,
  }));
  // The partner sits between the first two profile cards.
  const leaders: LeaderCard[] = [profiles[0], partner, ...profiles.slice(1)];

  return (
    <section className="sec bg-g z1 creative-team" id="leaders">
      <LeadersMotion />
      <div className="container">
        <div className="creative-team-head">
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

        <div className="creative-leaders">
          {leaders.map((leader) => {
            const card = (
              <>
                <Image
                  src={leader.img}
                  alt={leader.alt}
                  width={900}
                  height={1321}
                  quality={100}
                  sizes="(max-width: 700px) 50vw, 420px"
                />
                <span><strong>{leader.name}</strong><small>{leader.role}</small></span>
              </>
            );
            return leader.href ? (
              <Link href={leader.href} className="creative-leader-card" key={leader.key}>{card}</Link>
            ) : (
              <div className="creative-leader-card" key={leader.key}>{card}</div>
            );
          })}
        </div>

        <div className="creative-team-stage" data-reveal="up">
          <TeamMaskReveal />
          <svg className="creative-team-word" viewBox="0 0 1000 500" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="creative-heading-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0876d1" />
                <stop offset="52%" stopColor="#35b8ea" />
                <stop offset="100%" stopColor="#8be7ff" />
              </linearGradient>
            </defs>
            <text fill="url(#creative-heading-gradient)" x="481" y="266" textAnchor="middle" textLength="950" lengthAdjust="spacingAndGlyphs">CREATIVE</text>
            <text fill="url(#creative-heading-gradient)" x="508" y="483" textAnchor="middle" textLength="527" lengthAdjust="spacingAndGlyphs">TEAM</text>
          </svg>
          {creativeTeam.map((member, i) => (
            <Link
              href="/team"
              className={`creative-team-member label-${member.label}`}
              style={{ '--x': member.x, '--y': member.y, '--lx': member.lx, '--i': i, '--w': member.w } as React.CSSProperties}
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
