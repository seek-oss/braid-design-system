import { ReactType } from 'react';
import * as styles from './reset.treat';

type SpecificReset = keyof typeof styles.specificResets;

export default (component: ReactType) => {
  const specificReset = styles.specificResets[component as SpecificReset];

  if (specificReset) {
    return `${styles.base} ${specificReset}`;
  }

  return styles.base;
};
