import React from 'react';
import Link from 'next/link';

/**
 * Server-rendered FAQ accordion built on native <details>/<summary>.
 *
 * Deliberately not a client component. The existing JS accordion hides answer
 * text behind React state and clips it at a fixed max-height; with <details>
 * the full answer text is present in the raw HTML on first byte, which is what
 * FAQ rich results and non-JS AI crawlers need in order to read it. It is also
 * keyboard-accessible and screen-reader-correct for free.
 */
export default function FaqAccordion({
  items,
}: {
  items: { q: string; a: string; link?: { href: string; label: string } }[];
}) {
  return (
    <div className="faq-native">
      {items.map((f, i) => (
        <details className="fitem faq-native-item" key={f.q} open={i === 0}>
          <summary className="fq">
            <span className="fq-text">{f.q}</span>
            <span className="ftog" aria-hidden="true">
              <i className="bi bi-plus"></i>
            </span>
          </summary>
          <div className="fans-in">
            {f.a}
            {f.link && (
              <p className="faq-more">
                <Link href={f.link.href}>{f.link.label}</Link>
              </p>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
