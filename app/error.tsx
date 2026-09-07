'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import StateLayout from '@/components/ui/StateLayout';

/**
 * Route-level error boundary.
 *
 * Without this file a thrown render error falls through to the Next.js default
 * error screen: unbranded, and with no navigation, so the visitor's session
 * ends there. This keeps them inside the site and gives the one action that
 * actually resolves most transient failures.
 *
 * The error message itself is deliberately not rendered. In production Next.js
 * already redacts it to a digest, and surfacing raw messages to visitors leaks
 * internal structure while telling them nothing they can act on.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Console only. There is no error-reporting service wired up on this site;
    // adding one is a decision with a data-processing implication in a
    // regulated context, so it is not made here by default.
    console.error('Route error:', error);
  }, [error]);

  return (
    <StateLayout
      tone="error"
      icon="bi-exclamation-triangle"
      eyebrow="Something went wrong"
      title="This page failed to load"
    >
      <p>
        The problem is on our side, not yours. Reloading usually clears it. If it does
        not, the links below will get you where you were going.
      </p>
      {error.digest && (
        <p style={{ fontFamily: 'var(--fm)', fontSize: '0.78rem', color: 'var(--tx4)' }}>
          Reference: {error.digest}
        </p>
      )}
      <div className="mt-4 d-flex gap-3 justify-content-center flex-wrap">
        <button type="button" onClick={reset} className="btn-grad">
          Try again
        </button>
        <Link href="/" className="btn-glass">
          Back to home
        </Link>
      </div>
    </StateLayout>
  );
}
