import React from 'react';
import { services } from '@/content/siteData';
import ServiceCard from '@/components/ui/ServiceCard';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ServiceItem } from '@/types';

/**
 * The 22 services, grouped into the eight categories they actually fall into
 * rather than laid out as one flat grid of twenty-two.
 *
 * Grouping is not decoration here: it is how the list is searched. Someone
 * looking for mobile work wants the three mobile cards together, and a crawler
 * reading "Mobile App Development" as an H3 above three related cards gets a
 * far clearer signal than twenty-two siblings with no hierarchy between them.
 *
 * Order is derived from the data, so adding a service to a group in
 * content/siteData.ts places it correctly with no change here.
 */
function groupServices(items: ServiceItem[]): { group: string; items: ServiceItem[] }[] {
  const order: string[] = [];
  const byGroup = new Map<string, ServiceItem[]>();
  for (const item of items) {
    if (!byGroup.has(item.group)) {
      byGroup.set(item.group, []);
      order.push(item.group);
    }
    byGroup.get(item.group)!.push(item);
  }
  return order.map((group) => ({ group, items: byGroup.get(group)! }));
}

const ServicesSection: React.FC = () => {
  const groups = groupServices(services);

  return (
    <section className="sec bg-g z1" id="services">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8" data-reveal="up">
            <span className="stag">What We Build</span>
            <h2 className="stitle mt-3">
              Services <span className="gtxt">we provide</span>
            </h2>
            <p className="ssub mx-auto">
              Twenty-two services across eight areas, each with its own page rather than a line
              in a list. Web and software development, mobile apps, financial technology,
              healthcare, compliance, government, AI and cloud.
            </p>
            <p className="ssub mx-auto mt-3">
              Some of it we have already built: see{' '}
              <Link href="/solutions">our four enterprise platforms</Link> before commissioning
              anything custom.
            </p>
          </div>
        </div>

        {groups.map(({ group, items }, gi) => (
          <div className={gi === 0 ? '' : 'mt-5'} key={group}>
            <div className="svc-group-head" data-reveal="up">
              <span className="svc-group-num">{String(gi + 1).padStart(2, '0')}</span>
              <h3 className="svc-group-title">{group}</h3>
              <span className="svc-group-rule"></span>
            </div>
            <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4" data-reveal-group>
              {items.map((item, i) => (
                <ServiceCard key={item.slug} item={item} index={i} />
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-5" data-reveal="up">
          <Button href="/services" variant="grad">
            <i className="bi bi-arrow-right me-1"></i>Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
