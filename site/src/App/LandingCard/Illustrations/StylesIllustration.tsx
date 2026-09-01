import { fills } from '../LandingCard.css';

import { illustrationSvgProps } from './svgProps';

export const StylesIllustration = () => (
  <svg {...illustrationSvgProps('0 0 200 400')}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M200 0L2.83722e-05 8.74228e-06C3.07863e-05 55.2285 44.7715 100 100 100C155.229 100 200 55.2285 200 0Z"
      className={fills.accentSoft}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M200 200C200 255.229 155.228 300 100 300L100 233.333C118.409 233.333 133.333 218.41 133.333 200L200 200Z"
      className={fills.accent}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M-2.14537e-06 300L100 300L100 400C44.7715 400 2.68742e-07 355.229 -2.14537e-06 300Z"
      className={fills.neutral}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.39358e-05 200L66.6667 200C66.6667 181.591 81.5906 166.667 100 166.667C118.41 166.667 133.333 181.591 133.333 200L200 200C200 144.772 155.229 100 100 100C44.7715 100 3.32772e-05 144.772 3.39358e-05 200Z"
      className={fills.accent}
    />
  </svg>
);
