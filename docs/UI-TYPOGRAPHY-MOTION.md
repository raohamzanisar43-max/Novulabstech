# Typography, motion and accessibility refinement

**Branch:** `seo/technical-overhaul`
**Date:** 19 August 2026

Design register targeted: **Trust & Authority** — the buyer is a bank CTO, a head
of compliance, or a government procurement officer. Motion establishes reading
order and spatial continuity; it is never decorative. Nothing playful was added,
because in this register it costs credibility rather than buying delight.

---

## 1. The webfonts were never loading (bug fix)

The most consequential finding. `app/globals.css` pulled Space Grotesk, Outfit and
JetBrains Mono with:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk...');
```

placed **after** the two Bootstrap `@import`s. CSS requires `@import` to precede
all other rules, so once Bootstrap was inlined the font import was no longer in a
legal position and the production CSS optimizer discarded it. This was visible as
a build warning:

```
@import rules must precede all rules aside from @charset and @layer statements
```

Verified against the live site: the built stylesheet at
`/_next/static/css/…` contained **zero** references to `fonts.googleapis.com`,
while `font-family` still named Space Grotesk and Outfit. Every visitor was
being served fallback system fonts.

**Fix:** moved to `next/font/google` in `app/layout.tsx`, exposing
`--font-heading`, `--font-body` and `--font-mono`, which `--fh` / `--fb` / `--fm`
now consume. This self-hosts the files from our own origin, which additionally:

- removes a render-blocking request to a third-party origin on the critical path
- removes a DNS lookup and TLS handshake before first paint
- stops disclosing every visitor's IP and user agent to Google
- generates a `size-adjust` fallback face, holding CLS near zero during swap

That last set of reasons is the same argument already made in the file's Bootstrap
comment, so this brings the fonts in line with the policy the codebase had already
adopted for its other third-party assets. The build warning is now gone.

## 2. Typography

A ratio-based fluid scale (`--step--1` … `--step-5`) replaces ad-hoc `clamp()`
values, so heading sizes relate to each other predictably at every viewport width
rather than crossing over at awkward sizes.

| Element | Size | Line height | Tracking |
|---|---|---|---|
| `h1` | `--step-5` (2.49 → 4.73rem) | 1.04 | −0.038em |
| `h2` | `--step-4` (2.07 → 3.55rem) | 1.10 | −0.030em |
| `h3` | `--step-2` (1.44 → 2.00rem) | 1.22 | −0.018em |
| body | `--step-0` (1.00 → 1.13rem) | 1.78 | — |

Tracking tightens as size increases, which is what makes large type read as
deliberate rather than merely scaled up.

Also added:

- `text-wrap: balance` on headings — no orphaned last word on multi-line headings
- `text-wrap: pretty` on body copy — avoids orphans without `balance`'s reflow
  cost on long text
- `max-width: 66ch` on article prose — the middle of the 45–75ch band that reads
  fastest for continuous text
- `font-variant-numeric: tabular-nums` on metrics, stats and tables — animated
  counters previously jittered as digit widths changed

## 3. Motion

- New `components/ui/ScrollReveal.tsx` drives `[data-reveal]` through a single
  shared `IntersectionObserver` rather than a scroll listener, reveals once, then
  unobserves and releases the compositor layer.
- Reveal distance is 14px. Long travel reads as a slideshow; short travel reads as
  the page settling.
- Applied first to the blog article body, which sits outside AOS's reach (AOS is
  attached to section wrappers, and article HTML is injected via
  `dangerouslySetInnerHTML`), so long-form content previously had no entrance
  while every surrounding section animated.
- AOS retuned to match: duration 640ms → 520ms with a decelerating
  `cubic-bezier(.16,1,.3,1)`. At 640ms fast scrolling outran the reveal and
  elements arrived already half-faded.
- A `<noscript>` guard in `app/layout.tsx` forces `[data-reveal]` visible when
  JavaScript is unavailable. Content must never depend on animation to be
  readable.

## 4. Accessibility

These were genuine gaps, not polish.

- **`prefers-reduced-motion` was entirely absent.** Parallax, particles, a custom
  cursor, animated counters, a pulsing floating CTA and 97 AOS reveals all ran
  regardless of the OS setting. For users with vestibular disorders that is a
  barrier, not a preference (WCAG 2.3.3). Motion is now removed while content
  still appears; reveal elements are forced to their final state so nothing stays
  invisible when transitions are disabled. AOS is disabled through its own
  `disable` predicate, since it applies inline transforms that CSS alone cannot
  override.
- **Focus was near-invisible** against the dark surfaces. Added a `:focus-visible`
  ring using the accent colour (WCAG 2.4.7), scoped so pointer users never see it.
- **No skip link.** Keyboard and screen-reader users tabbed through the entire
  navigation on every page load. Added, targeting the existing
  `<main id="main-content">` (WCAG 2.4.1).

## 5. Scope and safety

All new CSS is appended as a single labelled layer at the end of `globals.css`, so
it wins on cascade order without `!important` and nothing above it was rewritten.
No component was restructured, no colour token changed, no layout altered.

**Not applied:** a brutalist / industrial treatment was considered and rejected.
Its structural discipline (rigid grid, strong type-scale contrast) is reflected
above, but its degraded, utilitarian surface is wrong for a vendor selling
regulated-industry software to banks and government buyers.

## 6. Verification

```
npx tsc --noEmit     # clean
npx next build       # 41 routes, no type errors, @import warning resolved
```

Confirmed in a real browser against the production build:

- `document.fonts.check('700 3rem "Space Grotesk"')` → `true` (was effectively false)
- 45 font faces loaded, self-hosted from `/_next/static/media`
- 0 `fonts.googleapis.com` references in HTML or CSS
- `h1` computed: Space Grotesk, line-height 1.04, tracking −1.8px
- article prose: `max-width: 775.86px` (66ch), `font-size: 17.92px`, `text-wrap: pretty`
- `h2`: `text-wrap: balance`
- `[data-reveal]` transitions to `is-visible` on scroll, opacity 0 → 1
- skip link present in DOM
