import * as styles from './useTextAlignedToIcon.css';

export const useTextAlignedToIcon = (size: keyof typeof styles.size) =>
  styles.size[size];
