import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ServiceItem } from '@/types';

interface ServiceCardProps {
  item: ServiceItem;
  index: number;
}

/**
 * Every card used to link straight to /contact with no page in between; a
 * visitor could not read a sentence about a service before being asked to
 * book a call. Each of the 22 now has a dedicated page (content/serviceSpokes.ts)
 * and the card links there; the page itself carries its own CTA once someone
 * has actually read what the service involves.
 */
const ServiceCard: React.FC<ServiceCardProps> = ({ item, index }) => {
  const imageNumber = String((index % 19) + 1).padStart(2, '0');
  const imageSrc = `/services/service-${imageNumber}.webp`;

  return (
    <div
      className="col service-card-col"
      data-reveal="up"
      style={{ '--service-index': index } as React.CSSProperties}
    >
      <div className="service-showcase">
        <div className="gcard-body p-uniform">
          <div className="service-visual service-laptop-stage">
            <div className="service-float service-float-left">
              <Image
                src={`/services/service-${String(((Number(imageNumber) + 5) % 19) + 1).padStart(2, '0')}.webp`}
                alt=""
                width={120}
                height={120}
              />
            </div>
            <Image
              className="service-main-artwork"
              src={imageSrc}
              alt={`${item.title} service visual`}
              width={1200}
              height={900}
              sizes="(max-width: 768px) 90vw, 620px"
            />
            <div className="service-float service-float-right">
              <Image
                src={`/services/service-${String((Number(imageNumber) % 19) + 1).padStart(2, '0')}.webp`}
                alt=""
                width={120}
                height={120}
              />
            </div>
          </div>
          <div className="service-copy">
            <div className="service-kicker">Services <span>→</span></div>
            <div className="ctitle">{item.title}</div>
            <div className="ctext">{item.desc}</div>
            <Link href={`/services/${item.slug}`} className="carr service-more">
              View More <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
