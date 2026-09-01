import { fills } from '../LandingCard.css';

import { illustrationSvgProps } from './svgProps';

export const ComponentsIllustration = () => (
  <svg {...illustrationSvgProps('0 0 400 300')}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100 100L166.667 100C166.667 81.5906 181.591 66.6667 200 66.6667C218.41 66.6667 233.333 81.5906 233.333 100L300 100C300 44.7716 255.229 5.90781e-05 200 5.6664e-05C144.771 5.42499e-05 100 44.7716 100 100Z"
      className={fills.accentSoft}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M200 300C255.228 300 300 255.228 300 200C300 144.772 255.228 100 200 100C144.772 100 100 144.772 100 200C100 255.228 144.772 300 200 300ZM200 233.333C218.409 233.333 233.333 218.409 233.333 200C233.333 181.591 218.409 166.667 200 166.667C181.591 166.667 166.667 181.591 166.667 200C166.667 218.409 181.591 233.333 200 233.333Z"
      className={fills.neutral}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 300C0 244.771 44.7715 200 100 200V266.667C81.5905 266.667 66.6667 281.59 66.6667 300H0Z"
      className={fills.accent}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100 200V0C44.7715 0 0 44.7715 0 100C0 155.229 44.7715 200 100 200Z"
      className={fills.accent}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M300 100L300 -8.74228e-06L400 0C400 55.2285 355.229 100 300 100Z"
      className={fills.accentSoft}
    />
  </svg>
);
