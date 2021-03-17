import React from 'react';
import { Box } from '../Box/Box';
import { useBackgroundLightness } from '../Box/BackgroundContext';
import * as styles from './Loader.css';

const indicators = [...Array(3)];

interface LoaderProps {
  size?: keyof typeof styles.rootSize;
  'aria-label'?: string;
  delayVisibility?: boolean;
}

export const Loader = ({
  size = 'standard',
  'aria-label': ariaLabel = 'Loading',
  delayVisibility = false,
}: LoaderProps) => {
  const parentBackgroundColor = useBackgroundLightness();

  return (
    <Box
      display="flex"
      className={[
        styles.rootSize[size],
        delayVisibility ? styles.delay : undefined,
      ]}
      aria-label={ariaLabel}
    >
      {indicators.map((_, index) => (
        <Box
          aria-hidden
          key={index}
          borderRadius="full"
          background={parentBackgroundColor === 'dark' ? 'card' : 'neutral'}
          marginLeft={index === 0 ? undefined : 'xxsmall'}
          className={[styles.circle, styles.circleSize[size]]}
        />
      ))}
    </Box>
  );
};
