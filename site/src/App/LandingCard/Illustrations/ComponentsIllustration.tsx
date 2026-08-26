import * as styles from '../LandingCard.css';

const svgProps = {
  width: '100%',
  height: '100%',
  viewBox: '0 0 400 400',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  focusable: 'false',
  'aria-hidden': true,
} as const;

export const ComponentsIllustration = () => (
  <svg {...svgProps}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100 -8.74228e-06L100 66.6666C118.409 66.6666 133.333 81.5906 133.333 100C133.333 118.41 118.409 133.333 100 133.333L100 200C155.228 200 200 155.229 200 100C200 44.7715 155.228 -3.91405e-06 100 -8.74228e-06Z"
      className={styles.fillLight}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100 200V0C44.7715 0 0 44.7715 0 100C0 155.229 44.7715 200 100 200Z"
      className={styles.fillAccent}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M300 100C300 44.7715 344.772 0 400 0V66.6666C381.591 66.6666 366.667 81.5905 366.667 100H300Z"
      className={styles.fillAccent}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M300 200V133.333C281.591 133.333 266.667 118.409 266.667 100C266.667 81.5905 281.591 66.6666 300 66.6666V0C244.772 0 200 44.7715 200 100C200 155.229 244.772 200 300 200Z"
      className={styles.fillNavy}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100 400C155.228 400 200 355.228 200 300C200 244.772 155.228 200 100 200C44.7715 200 0 244.772 0 300C0 355.228 44.7715 400 100 400ZM100 333.333C118.409 333.333 133.333 318.409 133.333 300C133.333 281.591 118.409 266.667 100 266.667C81.5905 266.667 66.6667 281.591 66.6667 300C66.6667 318.409 81.5905 333.333 100 333.333Z"
      className={styles.fillNavyMid}
    />
    <path
      d="M400 300C400 355.228 355.228 400 300 400C244.772 400 200 355.228 200 300C200 244.772 244.772 200 300 200C355.228 200 400 244.772 400 300Z"
      className={styles.fillNavy}
    />
  </svg>
);
