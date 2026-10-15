import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { IndustryItem } from '@/types';

interface IndustryCardProps {
  item: IndustryItem;
  index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ item, index }) => {
  const industryImages = [
    '/industries/banking-fintech.png', // Banking & Fintech
    '/services/service-08.webp', // Healthcare & MedTech
    '/services/service-13.webp', // Government & Public Sector
    '/industries/ecommerce-retail.png', // E-Commerce & Retail
    '/industries/manufacturing-logistics.png', // Manufacturing & Logistics
    '/industries/education-edtech.png', // Education & EdTech
  ];

  return (
    <div className="col" data-reveal="up">
      <Button href="/industries" variant="none" className="icard" style={{ textAlign: 'left', display: 'flex', textDecoration: 'none' }}>
        <Image
          className="industry-card-image"
          src={industryImages[index % industryImages.length]}
          alt=""
          width={1600}
          height={900}
          sizes="(max-width: 640px) 86vw, (max-width: 900px) 48vw, 33vw"
        />
        <div className={`iico ${item.color}`}>
          <i className={`bi ${item.icon}`}></i>
        </div>
        <div>
          <h3 className="industry-card-title">{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      </Button>
    </div>
  );
};

export default IndustryCard;
