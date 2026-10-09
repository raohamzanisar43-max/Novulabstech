import React from 'react';
import Link from 'next/link';

/**
 * Renders `[label](href)` inline links inside otherwise plain body copy.
 *
 * Content files store prose as `string[]` and the page templates render each
 * entry straight into a `<p>`, so a URL written into the copy printed as
 * unclickable text. Rather than pull in a Markdown renderer for one inline
 * construct, this handles the only one the content files actually use.
 *
 * Internal paths go through next/link so client-side navigation still applies;
 * anything else is treated as external and gets `rel="noopener"`.
 *
 * Text is never passed to dangerouslySetInnerHTML — labels and hrefs are
 * rendered as React children and props, so content stays escaped. That matters
 * because these strings are editorial content, and the moment one of them can
 * inject markup the content files become an XSS surface.
 */
export function withLinks(text: string): React.ReactNode {
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  const out: React.ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) out.push(text.slice(cursor, match.index));
    const [raw, label, href] = match;
    out.push(
      href.startsWith('/') ? (
        <Link key={`${href}-${match.index}`} href={href}>
          {label}
        </Link>
      ) : (
        <a key={`${href}-${match.index}`} href={href} target="_blank" rel="noopener">
          {label}
        </a>
      )
    );
    cursor = match.index + raw.length;
  }

  if (cursor === 0) return text;
  if (cursor < text.length) out.push(text.slice(cursor));
  return out;
}
