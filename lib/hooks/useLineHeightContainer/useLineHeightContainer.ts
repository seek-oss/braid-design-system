import * as styles from './useLineHeightContainer.css';

export const useLineHeightContainer = (size: keyof typeof styles.size) =>
  styles.size[size];
