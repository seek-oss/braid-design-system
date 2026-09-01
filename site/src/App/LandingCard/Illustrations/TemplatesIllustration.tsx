import { fills } from '../LandingCard.css';

import { illustrationSvgProps } from './svgProps';

export const TemplatesIllustration = () => (
  <svg {...illustrationSvgProps('0 0 200 400')}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100 0V100H0C0 44.7715 44.7715 0 100 0Z"
      className={fills.accentSoft}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 200C0 144.771 44.7715 100 100 100V166.667C81.5905 166.667 66.6667 181.59 66.6667 200H0Z"
      className={fills.accent}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100 400C155.228 400 200 355.228 200 300C200 244.772 155.228 200 100 200C44.7715 200 0 244.772 0 300C0 355.228 44.7715 400 100 400ZM100 333.333C118.409 333.333 133.333 318.409 133.333 300C133.333 281.591 118.409 266.667 100 266.667C81.5905 266.667 66.6667 281.591 66.6667 300C66.6667 318.409 81.5905 333.333 100 333.333Z"
      className={fills.accent}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M200 200V133.333C181.591 133.333 166.667 118.409 166.667 100C166.667 81.5905 181.591 66.6666 200 66.6666V0C144.772 0 100 44.7715 100 100C100 155.229 144.772 200 200 200Z"
      className={fills.neutral}
    />
  </svg>
);
