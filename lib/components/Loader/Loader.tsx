import React from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Box } from '../Box/Box';
import { useBackgroundLightness } from '../Box/BackgroundContext';
import * as styleRefs from './Loader.treat';

const indicators = [...Array(3)];

interface LoaderProps {
  size?: keyof typeof styleRefs.size;
  delayVisibility?: boolean;
}

export const Loader = ({
  size = 'standard',
  delayVisibility = false,
}: LoaderProps) => {
  const styles = useStyles(styleRefs);
  const parentBackgroundColor = useBackgroundLightness();

  return (
    <Box display="flex" className={delayVisibility ? styles.delay : undefined}>
      {indicators.map((_, index) => (
        <Box
          key={index}
          borderRadius="full"
          background={parentBackgroundColor === 'dark' ? 'card' : 'neutral'}
          className={classnames(styles.indicator, styles.size[size])}
        />
      ))}
    </Box>
  );
};
