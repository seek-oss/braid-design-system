import { fills } from '../LandingCard.css';

const svgProps = {
  width: '100%',
  height: '100%',
  viewBox: '0 0 200 200',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  focusable: 'false',
  'aria-hidden': true,
} as const;

export const StylesIllustration = () => (
  <svg {...svgProps}>
    <circle cx="70" cy="100" r="46" className={fills.neutralSubtle} />
    <circle cx="118" cy="100" r="38" className={fills.accentSoft} />
    <circle cx="158" cy="100" r="30" className={fills.accent} />
  </svg>
);
