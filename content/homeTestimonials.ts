import { TestimonialCard } from '@/types';

/**
 * Homepage testimonial cards.
 *
 * Published unattributed at the owner's direction: the clients behind these
 * asked NovuLabs to draft the wording on their behalf and approved
 * publication, but did not want to be named. Anonymised client feedback is
 * ordinary practice and the quotes read as what they are, one client's view of
 * one engagement.
 *
 * Three rules this file holds to, and the reasons, so a later edit does not
 * quietly undo them:
 *
 *   1. NO INVENTED ATTRIBUTION. Each card carries the service it refers to and
 *      nothing else. A name, job title or company that no real person holds is
 *      a fabricated source, which is a different thing from an anonymous quote.
 *      When a client agrees to be identified, add `role` back as their real
 *      name and company, or role and sector under NDA ("Head of Compliance,
 *      commercial bank"), the convention /portfolio already uses.
 *
 *   2. NO INVENTED FIGURES. The supplied drafts carried numbers ("efficiency
 *      improved by over 40%", "launched three months ahead of schedule") that
 *      nothing in this repository evidences. They are removed. A percentage is
 *      a statement of fact a client can be held to; the rest of a testimonial
 *      is opinion. Do not add one back unless the client will stand behind it.
 *
 *   3. NO Review OR AggregateRating SCHEMA. Google does not accept
 *      self-serving reviews collected and published by the business itself,
 *      and Review markup requires a named author. Marking these up would risk
 *      the site's structured data sitewide, not just this block. The star rows
 *      are presentational and labelled as such for assistive technology.
 */
export const homeTestimonials: TestimonialCard[] = [
  {
    service: 'Custom Software Development',
    quote:
      'We partnered with NovuLabs for a custom software development project, and the experience exceeded our expectations. As a software house based in Islamabad, they understood the local market while delivering a solution that meets international standards.',
    stars: 5,
    placeholder: false,
  },
  {
    service: 'Web Development',
    quote:
      'NovuLabs built our company website from the ground up, and the results speak for themselves. Their web development team in Islamabad delivered a fast, responsive, and SEO-friendly site that has significantly increased our organic traffic.',
    stars: 5,
    placeholder: false,
  },
  {
    service: 'Mobile App Development',
    quote:
      'Choosing NovuLabs as our mobile app development partner was one of the best decisions we made. They took our idea from concept to a fully functional iOS and Android app, and communication stayed direct the whole way through.',
    stars: 5,
    placeholder: false,
  },
  {
    service: 'IT Solutions & Digital Transformation',
    quote:
      'Our digital transformation with NovuLabs has been seamless. Their team provided end-to-end IT solutions, from cloud integration to custom enterprise software, tailored specifically to how our business actually runs.',
    stars: 5,
    placeholder: false,
  },
  {
    service: 'SaaS Development',
    quote:
      'NovuLabs developed our SaaS platform from scratch, handling everything from backend architecture to interface design. Their grasp of multi-tenant architecture saved us from decisions we would have regretted a year in.',
    stars: 5,
    placeholder: false,
  },
  {
    service: 'UI/UX Design',
    quote:
      'The design work NovuLabs provided completely changed our product experience. Their attention to detail and understanding of modern interface principles set them apart from other software houses we have worked with in Islamabad.',
    stars: 5,
    placeholder: false,
  },
  {
    service: 'E-commerce Development',
    quote:
      'We needed an e-commerce platform that could handle high traffic and complex inventory management. NovuLabs delivered exactly that. Their custom development work made our store faster, more secure, and far easier to manage.',
    stars: 5,
    placeholder: false,
  },
  {
    service: 'Enterprise Software & Long-Term Partnership',
    quote:
      'We have worked with NovuLabs on multiple projects, from enterprise software development through to ongoing support. Their consistency and technical depth make them a reliable partner for long-term work rather than one-off builds.',
    stars: 5,
    placeholder: false,
  },
];
