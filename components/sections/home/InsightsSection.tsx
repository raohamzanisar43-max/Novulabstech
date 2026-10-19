'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/content/blogPosts';
import Button from '@/components/ui/Button';

/**
 * Homepage insights teaser.
 *
 * Added to close an internal-linking gap: the homepage linked to all seven
 * service pages and three case studies, but to zero blog posts. The homepage is
 * the strongest page on the site by inbound authority, and none of it was
 * reaching /blog/*; the articles were only linked from /blog itself and from
 * each other, so the whole editorial cluster sat one hop further from the
 * homepage than it needed to.
 *
 * Sorted by publication date rather than array order so the section does not
 * silently go stale as posts are added. Layout mirrors the case-study teaser:
 * text on the left, a tilted card stack on the right (shared `cs-*` styles).
 */
const INTERVAL = 4200;
const MAX_POSTS = 6;

const latest = [...blogPosts]
  .sort((a, b) => Date.parse(b.publishedISO) - Date.parse(a.publishedISO))
  .slice(0, MAX_POSTS);

const InsightsSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = latest.length;

  useEffect(() => {
    if (total < 2 || paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % total), INTERVAL);
    return () => window.clearInterval(timer);
  }, [total, paused]);

  const current = latest[active];
  const href = `/blog/${current.slug}`;

  return (
    <section className="sec bg-w z1" id="insights">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5" data-reveal="up">
            <span className="stag">Insights</span>
            {/* Deliberately not "Our Blog"; the heading targets the engineering
                intent the articles actually serve, and avoids competing with
                /blog for the same query the way the old homepage headings
                competed with /services and /industries. */}
            <h2 className="stitle mt-3">
              Engineering notes from <span className="gtxt">regulated delivery</span>
            </h2>
            <p className="ssub mt-3">
              Build guides written for the engineer who has to ship the thing: goAML
              submission, instant payment rails, identity verification and healthcare
              interoperability, with primary sources cited throughout.
            </p>

            <div className="cs-current" key={active} aria-live="polite">
              <div className="ptag">{current.category} · {current.readTime}</div>
              <h3 className="cs-current-title">
                <Link href={href}>{current.title}</Link>
              </h3>
              <p className="cs-current-desc">{current.description}</p>
              <div className="insight-meta">
                By {current.author} • <time dateTime={current.publishedISO}>{current.date}</time>
              </div>
            </div>

            <div className="cs-controls">
              <div className="cs-dots" role="tablist" aria-label="Choose article">
                {latest.map((post, index) => (
                  <button
                    key={post.slug}
                    type="button"
                    role="tab"
                    aria-selected={index === active}
                    aria-label={post.title}
                    className={`cs-dot${index === active ? ' is-active' : ''}`}
                    onClick={() => setActive(index)}
                  />
                ))}
              </div>
              <span className="cs-count">
                {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>

            <div className="d-flex gap-3 flex-wrap mt-4">
              <Link href={href} className="btn-glass" style={{ padding: '9px 20px', fontSize: '0.85rem' }}>
                Read the article →
              </Link>
              <Button href="/blog" variant="glass">
                All insights <i className="bi bi-arrow-right ms-1"></i>
              </Button>
            </div>
          </div>

          <div className="col-lg-7">
            <div
              className="cs-stack"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {latest.map((post, index) => {
                const position = (index - active + total) % total;
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="cs-card"
                    data-pos={Math.min(position, 3)}
                    aria-hidden={position !== 0}
                    tabIndex={position === 0 ? 0 : -1}
                  >
                    <Image
                      className="cs-card-img"
                      src={post.coverImage}
                      alt={post.coverAlt}
                      fill
                      sizes="(max-width: 992px) 90vw, 560px"
                      style={{ objectFit: 'cover', zIndex: 0 }}
                      priority={index === 0}
                    />
                    <div className="cs-card-cap">
                      <small>{post.category}</small>
                      <strong>{post.title}</strong>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
