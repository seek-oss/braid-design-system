import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';
import { useBackgroundLightness } from '../Box/BackgroundContext';
import * as styleRefs from './Loader.treat';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

const indicators = [...Array(3)];

interface LoaderProps {
  size?: keyof typeof styleRefs.rootSize;
  'aria-label'?: string;
  delayVisibility?: boolean;
  data?: DataAttributeMap;
}

export const Loader = ({
  size = 'standard',
  'aria-label': ariaLabel = 'Loading',
  delayVisibility = false,
  data,
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
      aria-label={ariaLabel}
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      {indicators.map((_, index) => (
        <Box
          aria-hidden
          key={index}
          borderRadius="full"
          background={parentBackgroundColor === 'dark' ? 'card' : 'neutral'}
          className={[styles.circle, styles.circleSize[size]]}
        />
      ))}
    </Box>
  );
};
