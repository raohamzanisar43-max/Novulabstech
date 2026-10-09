import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * 410 Gone for deliberately retired URLs.
 *
 * /testimonials served illustrative placeholder quotes, each labelled "Sample:
 * awaiting verified testimonial". Honest, and still worse than no page: the
 * highest-trust page type on the site carried no trust signal while occupying a
 * crawlable URL, a footer link and a nav item (content findings register F-03).
 *
 * 410 rather than 404 because the removal is intentional and permanent until
 * real, attributable quotes exist. Search engines drop a 410 faster than a
 * 404, which is the point: the page should leave the index, not linger in it.
 * The three supplier-verification Q&As it carried now live on /faq.
 */
const GONE = new Set(['/testimonials']);

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname.replace(/\/+$/, '') || '/';
  if (!GONE.has(path)) return NextResponse.next();

  return new NextResponse(
    '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex">' +
      '<title>Page removed | NovuLabs</title></head><body style="font-family:system-ui,sans-serif;' +
      'max-width:34rem;margin:15vh auto;padding:0 1.5rem;line-height:1.6;color:#15191E">' +
      '<h1 style="font-size:1.5rem">This page has been removed</h1>' +
      '<p>It held placeholder testimonials, not verified client statements, so it was taken down.' +
      ' The work itself is described in the <a href="/portfolio">case studies</a>, and how to' +
      ' verify any supplier’s claims is covered in the <a href="/faq#verifying-a-supplier">FAQ</a>.</p>' +
      '</body></html>',
    {
      status: 410,
      headers: { 'content-type': 'text/html; charset=utf-8', 'x-robots-tag': 'noindex' },
    }
  );
}

export const config = {
  matcher: ['/testimonials', '/testimonials/'],
};
