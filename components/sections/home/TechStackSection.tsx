import React from 'react';
import { techStack } from '@/content/siteData';

const TechStackSection: React.FC = () => {
  return (
    <section className="sec-sm bg-w z1" id="tech">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5" data-reveal="right">
            <span className="stag">Our Technology Stack</span>
            <h2 className="stitle mt-3">Technologies <span className="gtxt">we build on</span></h2>
            <p className="ssub mb-4">
              We work with proven technologies across web development, mobile applications,
              enterprise software, cloud infrastructure, databases, and artificial intelligence.
            </p>
            {/* "Why we use them" rather than a longer list. A stack list on its
                own is a claim every supplier makes identically; the selection
                criteria are the part that says something about how the team
                decides. */}
            <h3 className="ctitle mt-4" style={{ fontSize: '1.05rem' }}>Why we use them</h3>
            <p className="ssub mb-0">
              We choose technologies based on the requirements of each project, including
              performance, scalability, security, compatibility, development speed, and long-term
              maintainability. This stack gives our engineers the flexibility to choose the right
              tools for the job, whether we are building a high-performance web application, an
              enterprise platform, a cross-platform mobile app, a cloud-native system, or an
              AI-powered solution.
            </p>
            
            {/* Spinning cube visual element */}
            <div className="d-flex gap-5 align-items-center flex-wrap mt-4">
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

          <div className="col-lg-7" data-reveal="left">
            <div className="row row-cols-3 row-cols-md-4 g-3">
              {techStack.map((tech, i) => (
                <div className="col" key={i}>
                  <div className="titem">
                    <span className="titem-ico">{tech.icon}</span>
                    <div className="titem-name">{tech.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
