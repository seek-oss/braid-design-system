import { Box } from '../../Box/Box';

import * as styles from './Skeleton.css';

export const Skeleton = () => (
  <Box
    aria-hidden
    overflow="hidden"
    width="full"
    height="full"
    className={styles.shimmerAnimation}
  />
);

Skeleton.displayName = 'Skeleton';
