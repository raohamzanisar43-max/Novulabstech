"use client";

import React, { useState } from 'react';
import { caseStudies } from '@/content/caseStudies';
import PortfolioCard from '@/components/ui/PortfolioCard';

interface FilterItem {
  id: string;
  label: string;
}

const PortfolioGridSection: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filters: FilterItem[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'Fintech' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'government', label: 'Government' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects =
    filter === 'all' ? caseStudies : caseStudies.filter((p) => p.category === filter);

  return (
    <section className="sec bg-g" id="portfolio-grid">
      <div className="container">
        {/* The grid had no heading of its own, so the only <h2> on this page
            was the FAQ block. A filter control is not a section heading. */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8" data-reveal="up">
            <h2 className="stitle">
              Nine engagements, <span className="gtxt">by sector</span>
            </h2>
          </div>
        </div>

        {/* Filter */}
        <div className="pfilter justify-content-center mb-5" data-reveal="up">
          {filters.map((f) => (
            <button 
              key={f.id}
              className={`pfbtn ${filter === f.id ? 'active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
        {/* Grid */}
        <div className="pgrid">
          {filteredProjects.map((project, i) => (
            <PortfolioCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGridSection;
