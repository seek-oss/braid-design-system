import React from 'react';
import { Box } from '../Box/Box';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { atoms } from '../../css/atoms/atoms';
import * as styles from './Loader.css';
import { useTextTone } from '../../hooks/typography';

interface LoaderProps {
  size?: keyof typeof styles.size;
  'aria-label'?: string;
  delayVisibility?: boolean;
  data?: DataAttributeMap;
}

export const Loader = ({
  size = 'standard',
  'aria-label': ariaLabel = 'Loading',
  delayVisibility = false,
  data,
}: LoaderProps) => (
  <Box
    display="flex"
    alignItems="center"
    className={[
      styles.rootSize[size],
      delayVisibility ? styles.delay : undefined,
    ]}
    aria-label={ariaLabel}
    {...(data ? buildDataAttributes(data) : undefined)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={[
        atoms({ reset: 'svg' }),
        styles.size[size],
        styles.currentColor,
        useTextTone({ tone: 'neutral' }),
      ].join(' ')}
      viewBox="0 0 300 134"
      aria-hidden
    >
      <circle className={styles.circle} cy="67" cx="40" r="40" />
      <circle className={styles.circle} cy="67" cx="150" r="40" />
      <circle className={styles.circle} cy="67" cx="260" r="40" />
    </svg>
  </Box>
);
