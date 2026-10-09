import React from 'react';
import Link from 'next/link';
import { IndustryItem } from '@/types';

interface IndustryCardProps {
  item: IndustryItem;
  index: number;
}

/**
 * Every industry card used to link to /industries, so ten sectors pointed at
 * one URL. That gave a crawler no way to tell which sectors the site is
 * competent in, and sent a visitor arriving from a healthcare query to a page
 * mostly about banking. Each card now links to that sector's own page, and the
 * anchor names the destination ("Explore Healthcare") rather than repeating a
 * generic label ten times.
 */
const IndustryCard: React.FC<IndustryCardProps> = ({ item }) => {
  return (
    <div className="col" data-reveal="up">
      <Link
        href={`/industries/${item.slug}`}
        className="icard"
        style={{ textAlign: 'left', display: 'flex', textDecoration: 'none' }}
      >
        <div className={`iico ${item.color}`}>
          <i className={`bi ${item.icon}`}></i>
        </div>
        <div>
          <h3 className="industry-card-title">{item.title}</h3>
          <p>{item.desc}</p>
          {/* Rendered as a span, not a nested anchor: the whole card is already
              the link, and an <a> inside an <a> is invalid markup that browsers
              silently un-nest, which breaks the card's click target. */}
          <span className="icard-cta">
            {item.cta}
            <i className="bi bi-arrow-right"></i>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default IndustryCard;
