import React from 'react';
import Link from 'next/link';
import { ORG, LEGAL_NAME } from '@/lib/seo';

/**
 * "NovuLabs in facts" (content findings register C-8).
 *
 * The register's point was that /about ran to ~2,800 words of method and gave
 * a due-diligence reader none of the facts they filter on. This block states
 * every fact the site can actually support, from lib/seo.ts, so it cannot drift
 * from the schema or the footer.
 *
 * Deliberately NOT here: founding year, engineering headcount and company
 * registration number. The founding year in lib/seo.ts is marked unverified,
 * and headcount and registration number are not recorded anywhere in this
 * repository. A missing row is honest; an invented one is the exact failure
 * this block exists to correct. Add them when the client supplies them.
 */
export default function AboutFacts() {
  const rows: { k: string; v: React.ReactNode }[] = [
    { k: 'Legal entity', v: LEGAL_NAME },
    {
      k: 'Office',
      v: `${ORG.address.streetAddress}, ${ORG.address.addressLocality}, ${ORG.address.addressRegion}, Pakistan`,
    },
    {
      k: 'Hours',
      v: `${ORG.openingHours.days[0]} to ${ORG.openingHours.days[ORG.openingHours.days.length - 1]}, ${ORG.openingHours.opens} to ${ORG.openingHours.closes} Pakistan Standard Time`,
    },
    {
      k: 'Contact',
      v: (
        <>
          <a href={`tel:${ORG.telephone.replace(/\s+/g, '')}`}>{ORG.telephone}</a> ·{' '}
          <a href={`mailto:${ORG.email}`}>{ORG.email}</a>
        </>
      ),
    },
    { k: 'Sectors', v: 'Banking and payments, healthcare, government and public sector' },
    {
      k: 'Built against',
      v: 'State Bank of Pakistan AML/CFT framework, FMU goAML reporting, NADRA identity services, PCI-DSS, HIPAA and HL7 FHIR',
    },
    {
      k: 'Engagement models',
      v: 'Fixed-scope project after paid discovery, dedicated team, or advisory and architecture review',
    },
    {
      k: 'Intellectual property',
      v: 'Assigned to the client under contract; code lives in the client’s repository from the first commit',
    },
    {
      k: 'Certifications',
      v: (
        <>
          None claimed. We engineer to PCI-DSS and HIPAA requirements; certification belongs to the
          institution operating the environment. <Link href="/faq#verifying-a-supplier">How to verify a supplier</Link>.
        </>
      ),
    },
  ];

  return (
    <section className="sec bg-g" id="facts">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <span className="stag">In facts</span>
            <h2 className="stitle mt-3">
              NovuLabs, <span className="gtxt">in facts</span>
            </h2>
            <p className="ssub mb-4">
              What a due-diligence reader checks first, stated plainly. Founding year, headcount and
              registration number are not listed yet because we will not publish figures we cannot
              evidence on this page.
            </p>
            <dl className="facts-dl">
              {rows.map((r) => (
                <div className="facts-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
