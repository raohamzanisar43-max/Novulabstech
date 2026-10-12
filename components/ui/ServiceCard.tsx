import React from 'react';
import Link from 'next/link';
import GlowCard from './GlowCard';
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
  return (
    <div
      className="col service-card-col"
      data-reveal="up"
      style={{ '--service-index': index } as React.CSSProperties}
    >
      <GlowCard className="gcard">
        <div className="gcard-body p-uniform">
          <div className={`service-visual service-visual-${index % 6}`} aria-hidden="true">
            <span className="service-visual-orbit service-visual-orbit-one"></span>
            <span className="service-visual-orbit service-visual-orbit-two"></span>
            <span className="service-visual-node service-visual-node-one"></span>
            <span className="service-visual-node service-visual-node-two"></span>
            <span className="service-visual-node service-visual-node-three"></span>
            <i className={`bi ${item.icon}`}></i>
          </div>
          <div className={`sico ${item.color}`}>
            <i className={`bi ${item.icon}`}></i>
          </div>
          <div className="ctitle">{item.title}</div>
          <div className="ctext">{item.desc}</div>
          <Link href={`/services/${item.slug}`} className="carr">
            <i className="bi bi-arrow-right-circle"></i>Learn more
          </Link>
        </div>
      </GlowCard>
    </div>
  );
};

export default ServiceCard;
