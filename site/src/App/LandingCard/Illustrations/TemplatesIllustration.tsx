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

export const TemplatesIllustration = () => (
  <svg {...svgProps}>
    <circle cx="100" cy="52" r="48" className={fills.accentSoft} />
    <circle cx="100" cy="100" r="48" className={fills.accent} />
    <circle cx="100" cy="148" r="48" className={fills.neutral} />
  </svg>
);
