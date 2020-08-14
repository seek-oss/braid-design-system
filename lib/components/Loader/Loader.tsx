import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { useBackgroundLightness } from '../Box/BackgroundContext';
import * as styleRefs from './Loader.treat';

const indicators = [...Array(3)];

interface LoaderProps {
  size?: keyof typeof styleRefs.rootSize;
  delayVisibility?: boolean;
}

export const Loader = ({
  size = 'standard',
  delayVisibility = false,
}: LoaderProps) => {
  const styles = useStyles(styleRefs);
  const parentBackgroundColor = useBackgroundLightness();

  return (
    <Box
      display="flex"
      className={[
        styles.rootSize[size],
        delayVisibility ? styles.delay : undefined,
      ]}
    >
      {indicators.map((_, index) => (
        <Box
          key={index}
          borderRadius="full"
          background={parentBackgroundColor === 'dark' ? 'card' : 'neutral'}
          className={[styles.circle, styles.circleSize[size]]}
        />
      ))}
    </Box>
  );
};
