import { fills } from '../LandingCard.css';

import { illustrationSvgProps } from './svgProps';

export const StylesIllustration = () => (
  <svg {...illustrationSvgProps('0 0 200 200')}>
    <circle cx="70" cy="100" r="46" className={fills.neutralSubtle} />
    <circle cx="118" cy="100" r="38" className={fills.accentSoft} />
    <circle cx="158" cy="100" r="30" className={fills.accent} />
  </svg>
);
