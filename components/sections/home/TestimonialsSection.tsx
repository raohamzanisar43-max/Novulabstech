import React from 'react';
import Link from 'next/link';
import { homeTestimonials } from '@/content/homeTestimonials';

/**
 * Homepage testimonials, as cards.
 *
 * Scroll animation reuses the site's own `data-reveal` / `data-reveal-group`
 * system rather than introducing a second animation mechanism: the group
 * staggers its children, and each card fades and rises as it enters the
 * viewport. That system already honours prefers-reduced-motion in
 * globals.css, so a visitor who has asked for less motion gets the cards
 * without it, and a visitor with JavaScript disabled gets them visible rather
 * than stuck at opacity 0.
 *
 * Quotes are published unattributed: the clients approved the wording but did
 * not want to be named. `role` therefore renders only when a real one exists,
 * so adding attribution later needs no change here. The sample notice still
 * renders automatically if any record is ever set back to `placeholder: true`.
 *
 * No Review or AggregateRating schema. Google does not accept self-serving
 * reviews published by the business itself, and Review markup requires a named
 * author; emitting it here would put the site's structured data at risk
 * generally. See content/homeTestimonials.ts.
 */
const TestimonialsSection: React.FC = () => {
  const anyPlaceholder = homeTestimonials.some((t) => t.placeholder);

  return (
    <section className="sec bg-w z1" id="testimonials">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-7" data-reveal="up">
            <span className="stag">Testimonials</span>
            <h2 className="stitle mt-3">
              What clients say about <span className="gtxt">working with us</span>
            </h2>
          </div>
        </div>

        {anyPlaceholder && (
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8" data-reveal="up">
              <p className="sample-notice">
                <i className="bi bi-info-circle me-2" aria-hidden="true"></i>
                <strong>Sample copy.</strong> The quotes below are placeholders showing how this
                section will read. They are not real client testimonials and the ratings are
                illustrative. Real, attributable feedback replaces them before launch. See{' '}
                <Link href="/testimonials">testimonials</Link> for the same note in full.
              </p>
            </div>
          </div>
        )}

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4" data-reveal-group>
          {homeTestimonials.map((t, i) => (
            <div className="col" data-reveal="up" key={i}>
              <figure className="htcard">
                <div className="htcard-top">
                  <span className="htcard-service">{t.service}</span>
                  {/* role="img" with a label rather than aria-hidden: the stars
                      carry real meaning now, so a screen reader should hear the
                      rating instead of a run of asterisk characters. */}
                  <span
                    className="htcard-stars"
                    role="img"
                    aria-label={`Rated ${t.stars} out of 5`}
                  >
                    {'★'.repeat(t.stars)}
                  </span>
                </div>
                <blockquote className="htcard-quote">{t.quote}</blockquote>
                {(t.role || t.placeholder) && (
                  <figcaption className="htcard-role">
                    {t.role}
                    {t.placeholder && <span className="htcard-flag">sample</span>}
                  </figcaption>
                )}
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
