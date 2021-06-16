import * as styles from './textAlignedToIcon.css';

export const textAlignedToIcon = (size: keyof typeof styles.size) =>
  styles.size[size];
