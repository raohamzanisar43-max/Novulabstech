import React from 'react';
import Link from 'next/link';

/**
 * Editorial framing for /portfolio.
 *
 * The audit found this page carrying 840 words and exactly one <h2> ("Frequently
 * asked questions"), because the case-study grid is a filter plus cards and the
 * cards use <h3>. So one of the highest-intent commercial URLs on the site had
 * no readable structure and almost no text of its own: everything a visitor got
 * was nine card summaries.
 *
 * This block does the two jobs the page was missing. It tells a reader how to
 * read the write-ups, and it states plainly what is and is not evidenced. The
 * second half is the more valuable one: a buyer evaluating a supplier in a
 * regulated sector is already suspicious of unverifiable outcome numbers, and
 * saying which figures are client-reported is a stronger trust signal than
 * publishing them without qualification would be.
 *
 * Nothing here names a client, a figure or a certification.
 */
export default function PortfolioContext() {
  return (
    <section className="sec bg-w">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <article
              className="blog-post-content"
              style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--tx2)' }}
            >
              <h2>How to read these case studies</h2>
              <p>
                Each write-up follows the same shape, because it is the shape that answers a
                technical buyer&apos;s questions in the order they occur to them: the problem as
                the client stated it, the constraints that were fixed before we arrived, the
                architecture we chose and what we rejected, the parts that turned out harder than
                scoped, and what the system does now. The architecture section is the one worth
                reading. It is where a supplier either demonstrates that it understood the domain
                or reveals that it built whatever was asked for.
              </p>
              <p>
                They are deliberately not written as success stories. Several describe a decision
                that was reversed, a scope that was cut, or a recommendation that reduced the size
                of the engagement. Those are the useful parts, and a portfolio without any of them
                is a marketing document rather than an engineering record.
              </p>

              <h2>What the nine engagements have in common</h2>
              <p>
                They span banking and payments, healthcare, government and enterprise
                manufacturing, which look like unrelated sectors and are not. In every one, the
                software is inspected by somebody other than its users: a regulator, an external
                auditor, a payment scheme, or a procurement office. That single property drives
                most of the engineering. It is why the transaction stores are append-only, why the
                audit logs are queryable by subject and by time instead of only chronologically,
                and why the decisions of record are produced by deterministic rules with a model
                kept off the critical path.
              </p>
              <p>
                The second commonality is that integration, not feature development, consumed most
                of the effort. Connecting to a core banking system, a national identity service, a
                hospital information system or a tax authority means accepting an interface you do
                not control and cannot change. We write about that pattern in more depth across{' '}
                <Link href="/industries">the industries we serve</Link>, and the engineering
                practices behind it on the{' '}
                <Link href="/services/aml-cft-compliance-software">compliance</Link>,{' '}
                <Link href="/services/fintech-software-development">fintech</Link> and{' '}
                <Link href="/services/healthcare-software-development">healthcare</Link> service
                pages.
              </p>

              <h2>What we can evidence, and what we cannot</h2>
              <p>
                Every engagement below is covered by a non-disclosure agreement, so clients are
                described by category and sector rather than named. We are not able to publish
                logos, contract values or named references, and a supplier in this sector who does
                publish them for regulated clients is worth a question about how that was
                permitted.
              </p>
              <p>
                Where a case study states an outcome, that figure is reported by the client and has
                not been independently audited, and it is marked as such rather than presented as a
                verified result. What we can evidence directly is the engineering: the standards
                each system was built to, the architecture decisions and their rejected
                alternatives, and the integration surfaces involved. Those are described precisely
                because they are the parts we are accountable for.
              </p>
              <p>
                If you want to test any of it, the fastest route is a technical call. Bring an
                architecture you are considering and{' '}
                <Link href="/contact">ask an engineer to pick holes in it</Link>. You will learn
                more about whether we know this domain in forty-five minutes than from any number
                of case studies, including these.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
