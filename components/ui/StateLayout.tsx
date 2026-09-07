import React from 'react';
import Link from 'next/link';

/**
 * Shared layout for application states: error, empty, success.
 *
 * The site had a custom 404 and nothing else. A runtime error fell through to
 * the Next.js default error screen, which on a production build renders an
 * unbranded grey page with no way back into the site: a dead end for a visitor
 * and a terminated crawl for a bot.
 *
 * One component so the four states share spacing, type scale and recovery
 * affordances. The differences between them are wording and tone, not layout,
 * and building four separate layouts is how they drift apart.
 *
 * `tone` drives only the icon colour. The states are distinguished primarily by
 * their heading and body text, because colour alone is not an accessible way to
 * convey status.
 */
export type StateTone = 'error' | 'empty' | 'success';

const TONE_COLOR: Record<StateTone, string> = {
  error: 'var(--stop, #A32B2B)',
  empty: 'var(--tx4)',
  success: 'var(--ok, #1F7A4C)',
};

export default function StateLayout({
  tone = 'empty',
  icon,
  eyebrow,
  title,
  children,
  actions,
}: {
  tone?: StateTone;
  /** Bootstrap Icons class, e.g. "bi-exclamation-triangle". */
  icon: string;
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <section className="sec bg-w">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <i
              className={`bi ${icon}`}
              aria-hidden="true"
              style={{ fontSize: '2.4rem', color: TONE_COLOR[tone], display: 'block', marginBottom: '1rem' }}
            />
            {eyebrow && <span className="stag">{eyebrow}</span>}
            <h1 className="stitle mt-2" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)' }}>
              {title}
            </h1>
            {children && (
              <div
                className="mt-3 mx-auto"
                style={{ color: 'var(--tx2)', maxWidth: '52ch', fontSize: 'var(--step-0)' }}
              >
                {children}
              </div>
            )}
            {actions && (
              <div className="mt-4 d-flex gap-3 justify-content-center flex-wrap">{actions}</div>
            )}
            <p className="mt-5 mb-0" style={{ fontSize: '0.86rem', color: 'var(--tx3)' }}>
              Still stuck? Email{' '}
              <a href="mailto:info@novulabs.net">info@novulabs.net</a> or{' '}
              <Link href="/contact">book a technical call</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
