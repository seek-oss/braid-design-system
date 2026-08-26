import { fills } from '../LandingCard.css';

const svgProps = {
  width: '100%',
  height: '100%',
  viewBox: '0 0 300 200',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  focusable: 'false',
  'aria-hidden': true,
} as const;

export const FoundationsIllustration = () => (
  <svg {...svgProps}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100 100L300 100C300 44.7715 255.229 -1.95702e-06 200 -4.37114e-06C144.771 -6.78525e-06 100 44.7715 100 100Z"
      className={fills.accentSoft}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 200C0 144.771 44.7715 100 100 100V166.667C81.5905 166.667 66.6667 181.59 66.6667 200H0Z"
      className={fills.formAccent}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100 200L166.667 200C166.667 181.591 181.591 166.667 200 166.667C218.41 166.667 233.333 181.591 233.333 200L300 200C300 144.772 255.229 100 200 100C144.771 100 100 144.772 100 200Z"
      className={fills.accent}
    />
  </svg>
);
