import { fills } from '../LandingCard.css';

import { illustrationSvgProps } from './svgProps';

export const FoundationsIllustration = () => (
  <svg {...illustrationSvgProps('0 0 400 300')}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100 200.001C44.7716 200.001 2.86102e-06 155.229 2.86102e-06 100.001C2.86102e-06 44.7723 44.7716 0.000732422 100 0.000732422C155.229 0.000732422 200 44.7723 200 100.001C200 155.229 155.229 200.001 100 200.001ZM100 133.334C81.5906 133.334 66.6667 118.41 66.6667 100.001C66.6667 81.5913 81.5906 66.6674 100 66.6674C118.41 66.6674 133.333 81.5913 133.333 100.001C133.333 118.41 118.41 133.334 100 133.334Z"
      className={fills.accentSoft}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M400 100L200 100C200 44.7715 244.772 -1.95702e-06 300 -4.37114e-06C355.229 -6.78526e-06 400 44.7715 400 100Z"
      className={fills.accent}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M300 99.9999L300 166.667C281.59 166.667 266.666 181.591 266.666 200C266.666 218.41 281.59 233.333 300 233.333L300 300C244.771 300 200 255.228 200 200C200 144.771 244.771 99.9999 300 99.9999Z"
      className={fills.neutral}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M399.999 200.001C399.999 144.772 355.228 100.001 299.999 100.001V166.667C318.409 166.667 333.332 181.591 333.332 200.001H399.999Z"
      className={fills.neutral}
    />
  </svg>
);
