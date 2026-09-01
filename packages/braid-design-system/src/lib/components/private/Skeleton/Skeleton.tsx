import { type BoxProps, Box } from '../../Box/Box';

import * as styles from './Skeleton.css';

export interface SkeletonProps {
  borderRadius?: BoxProps['borderRadius'];
}

export const Skeleton = ({ borderRadius }: SkeletonProps) => (
  <Box
    aria-hidden
    overflow="hidden"
    width="full"
    height="full"
    borderRadius={borderRadius}
    className={styles.shimmerAnimation}
  />
);

Skeleton.displayName = 'Skeleton';
