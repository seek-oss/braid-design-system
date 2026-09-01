import { fills } from '../LandingCard.css';

import { illustrationSvgProps } from './svgProps';

export const TemplatesIllustration = () => (
  <svg {...illustrationSvgProps('0 0 200 200')}>
    <circle cx="100" cy="52" r="48" className={fills.accentSoft} />
    <circle cx="100" cy="100" r="48" className={fills.accent} />
    <circle cx="100" cy="148" r="48" className={fills.neutral} />
  </svg>
);
