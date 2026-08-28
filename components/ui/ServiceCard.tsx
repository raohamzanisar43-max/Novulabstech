import React from 'react';
import GlowCard from './GlowCard';
import Button from './Button';
import { ServiceItem } from '@/types';

interface ServiceCardProps {
  item: ServiceItem;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item, index }) => {
  return (
    <div className="col" data-reveal="up">
      <GlowCard className="gcard">
        <div className="gcard-body p-uniform">
          <div className={`sico ${item.color}`}>
            <i className={`bi ${item.icon}`}></i>
          </div>
          <div className="ctitle">{item.title}</div>
          <div className="ctext">{item.desc}</div>
          <Button href="/contact" variant="none" className="carr">
            <i className="bi bi-arrow-right-circle"></i>Consult Us
          </Button>
        </div>
      </GlowCard>
    </div>
  );
};

export default ServiceCard;
