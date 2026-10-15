import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { teamMembers } from '@/content/siteData';

const creativeTeam = [
  { slug: 'awais-abdul-khaliq', name: 'Awais Abdul Khaliq', img: '/team/creative-01.jpeg' },
  { slug: 'rubakh', name: 'Rubakh', img: '/team/creative-02.jpeg' },
  { slug: 'hanzla-haleem', name: 'Hanzla Haleem', img: '/team/creative-03.jpeg' },
  { slug: 'faisal-tayyab', name: 'Faisal Tayyab', img: '/team/creative-04.jpeg' },
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
              <Image src={member.img} alt={member.imgAlt} width={600} height={700} sizes="(max-width: 700px) 28vw, 170px" />
              <span><strong>{member.name}</strong><small>{member.role}</small></span>
            </Link>
          ))}
        </div>

        <div className="creative-team-stage" data-reveal="up">
          <div className="creative-team-word" aria-hidden="true">
            <span>CREATIVE</span>
            <span>TEAM</span>
          </div>
          <div className="creative-team-members">
            {creativeTeam.map((member) => (
              <Link href="/team" className="creative-team-member" key={member.slug} aria-label={member.name}>
                <Image
                  className="creative-team-photo"
                  src={member.img}
                  alt={member.name}
                  width={600}
                  height={700}
                  sizes="(max-width: 768px) 42vw, 220px"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;
