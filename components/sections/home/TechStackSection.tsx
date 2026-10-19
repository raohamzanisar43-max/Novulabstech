import React from 'react';
import { techStack } from '@/content/siteData';

/** Homepage "Technologies we build on": centred intro, one live scrolling technology banner below. */
const TechStackSection: React.FC = () => {
  return (
    <section className="sec-sm bg-w z1 techstack" id="tech">
      <div className="container">
        <div className="techstack-head" data-reveal="up">
          <span className="stag">Our Stack</span>
          <h2 className="stitle mt-3">Technologies <span className="gtxt">we build on</span></h2>
          <p className="ssub techstack-sub">
            We use the world&apos;s best frameworks and cloud platforms, always the right tool for your requirements.
          </p>

          {/* Spinning cube visual element */}
          <div className="techstack-visuals">
            <div className="orbit">
              <div className="oring"><div className="odot"></div></div>
              <div className="oring oring2"><div className="odot2"></div></div>
              <div className="ocore"><i className="bi bi-cpu-fill"></i></div>
            </div>
            <div className="cube-scene">
              <div className="cube">
                <div className="cf fr">⚛️</div>
                <div className="cf bk">🐍</div>
                <div className="cf rt">☁️</div>
                <div className="cf lt">🤖</div>
                <div className="cf tp">🔷</div>
                <div className="cf bt">🐳</div>
              </div>
            </div>
          </div>
        </div>

        {/* One banner; the technologies scroll through it continuously. The list is
            rendered twice so the loop is seamless; the copy is hidden from AT. */}
        <div className="techstack-band" data-reveal="up" role="region" aria-label="Technologies we build on">
          <div className="techstack-track">
            {[0, 1].map((copy) => (
              <ul className="techstack-set" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
                {techStack.map((tech) => (
                  <li className="techstack-chip" key={tech.name}>
                    <span className="techstack-ico" aria-hidden="true">{tech.icon}</span>
                    <span className="techstack-name">{tech.name}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
