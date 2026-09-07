'use client';

/**
 * Last-resort error boundary.
 *
 * This catches failures in the root layout itself, which means Navbar, Footer,
 * fonts and globals.css are all unavailable: it must render its own <html> and
 * <body> and cannot rely on a single class from the stylesheet. Styles are
 * therefore inline, which is correct here and nowhere else in this codebase.
 *
 * Kept deliberately small. Anything clever in this file risks throwing inside
 * the handler for a throw.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0C1F33',
          color: '#F2EFE8',
          fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <main style={{ maxWidth: '34rem' }}>
          <p
            style={{
              margin: '0 0 0.75rem',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#A9B4C0',
            }}
          >
            NovuLabs
          </p>
          <h1 style={{ margin: '0 0 1rem', fontSize: '1.6rem', lineHeight: 1.25, fontWeight: 700 }}>
            The site failed to load
          </h1>
          <p style={{ margin: '0 0 1.5rem', color: '#C3CEDA', lineHeight: 1.7 }}>
            This is a fault on our side. Reloading will usually fix it. If it keeps
            happening, email{' '}
            <a href="mailto:info@novulabs.net" style={{ color: '#D8B25E' }}>
              info@novulabs.net
            </a>{' '}
            and we will look into it.
          </p>
          {error.digest && (
            <p style={{ margin: '0 0 1.5rem', fontSize: '0.78rem', color: '#A9B4C0' }}>
              Reference: {error.digest}
            </p>
          )}
          <button
            type="button"
            onClick={reset}
            style={{
              background: '#16324F',
              color: '#FFFFFF',
              border: 0,
              borderRadius: '8px',
              padding: '0.7rem 1.4rem',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Reload the page
          </button>
        </main>
      </body>
    </html>
  );
}
