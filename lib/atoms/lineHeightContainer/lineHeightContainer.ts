import * as styles from './lineHeightContainer.css';

export const lineHeightContainer = (size: keyof typeof styles.size) =>
  styles.size[size];
