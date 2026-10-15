import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const testimonials: Array<{
  initials: string;
  name: string;
  role: string;
  quote: string;
  image?: string;
}> = [
  {
    initials: 'A',
    name: 'Ayesha',
    role: 'LMS Client',
    image: '/testimonials/ayesha.png',
    quote: 'NovuLabs built an LMS that made course management, online learning, and student engagement much easier for our team.',
  },
  {
    initials: 'HC',
    name: 'Healthcare Operations Team',
    role: 'Healthcare Technology',
    quote: 'The team understood our operational needs quickly and delivered a clear, scalable product experience.',
  },
  {
    initials: 'EP',
    name: 'Enterprise Product Team',
    role: 'Enterprise Software',
    quote: 'From architecture to support, the process stayed focused, practical, and easy to move forward with.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="client-testimonials sec" id="clients">
      <div className="container client-testimonials-layout">
        <div className="client-testimonials-intro">
          <a className="client-testimonials-kicker" href="#clients">Clients <span>→</span></a>
          <h2>From Our<br />Clients</h2>
          <h3>Dependable software for teams that need it to work.</h3>
          <p>We build long-term partnerships around clear communication, thoughtful engineering, and products made for real daily use.</p>
          <Link href="/testimonials" className="client-testimonials-button">View More</Link>
        </div>
        <div className="client-testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className={`client-testimonial-card ${testimonial.image ? 'has-client-image' : ''}`} key={testimonial.initials}>
              <div className="client-testimonial-avatar">
                {testimonial.image ? (
                  <Image src={testimonial.image} alt={`${testimonial.name}, LMS client`} width={160} height={160} />
                ) : testimonial.initials}
              </div>
              <div className="client-testimonial-name">{testimonial.name}</div>
              <div className="client-testimonial-role">{testimonial.role}</div>
              <p>{testimonial.quote}</p>
              <div className="client-testimonial-rating" aria-label="5 out of 5 stars">★★★★★</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
