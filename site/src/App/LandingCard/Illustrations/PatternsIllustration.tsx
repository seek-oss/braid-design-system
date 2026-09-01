import { fills } from '../LandingCard.css';

import { illustrationSvgProps } from './svgProps';

export const PatternsIllustration = () => (
  <svg {...illustrationSvgProps('0 0 400 300')}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100 100L166.667 100C166.667 81.5905 181.591 66.6667 200 66.6667C218.41 66.6667 233.333 81.5905 233.333 100L300 100C300 44.7715 255.229 -1.95702e-06 200 -4.37114e-06C144.771 -6.78525e-06 100 44.7715 100 100Z"
      className={fills.accentSoft}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M400 0V100H300C300 44.7715 344.771 0 400 0Z"
      className={fills.accentSoft}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M400 300V233.333C381.591 233.333 366.667 218.409 366.667 200C366.667 181.59 381.591 166.667 400 166.667V100C344.772 100 300 144.771 300 200C300 255.229 344.772 300 400 300Z"
      className={fills.accent}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M301 300V100C245.771 100 201 144.771 201 200C201 255.229 245.771 300 301 300Z"
      className={fills.accent}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100 300C155.228 300 200 255.228 200 200C200 144.772 155.228 100 100 100C44.7715 100 0 144.772 0 200C0 255.228 44.7715 300 100 300ZM100 233.333C118.409 233.333 133.333 218.409 133.333 200C133.333 181.591 118.409 166.667 100 166.667C81.5905 166.667 66.6667 181.591 66.6667 200C66.6667 218.409 81.5905 233.333 100 233.333Z"
      className={fills.neutral}
    />
  </svg>
);
