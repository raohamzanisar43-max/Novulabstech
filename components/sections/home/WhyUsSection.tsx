import React from 'react';
import { liveProjects } from '@/content/projects';

/** Homepage "Our Projects" section: live products with a short description. */
const WhyUsSection: React.FC = () => {
  return (
    <section className="sec bg-g z1" id="projects">
      <div className="container">
        <div className="proj-head" data-reveal="up">
          <span className="stag">Our Projects</span>
          <h2 className="stitle mt-3">Live products <span className="gtxt">we have built</span></h2>
          <p className="ssub mt-3 mb-0">Real platforms running today. Open any of them and see the work for yourself.</p>
        </div>
        <div className="proj-grid">
          {liveProjects.map((project) => (
            <article className="proj-card" key={project.slug} data-reveal="up">
              <a className="proj-shot" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} live site`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={project.imageAlt} width={1280} height={800} loading="lazy" />
                <span className="proj-visit">Live <i className="bi bi-box-arrow-up-right" aria-hidden="true" /></span>
              </a>
              <div className="proj-body">
                <span className="ptag">{project.category}</span>
                <h3 className="proj-name">{project.name}</h3>
                <p className="proj-desc">{project.description}</p>
                <div className="proj-tags">
                  {project.features.map((feature) => <span className="tbadge" key={feature}>{feature}</span>)}
                </div>
                <a className="btn-glass proj-link" href={project.url} target="_blank" rel="noopener noreferrer">
                  Visit live site <i className="bi bi-arrow-up-right" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
