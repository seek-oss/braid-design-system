import React from 'react';
import type { BoxProps } from '../../Box/Box';
import { Box } from '../../Box/Box';
import { useBackgroundLightness } from '../../Box/BackgroundContext';
import * as styles from './Keyline.css';

interface KeylineProps {
  tone: 'promote' | 'info' | 'positive' | 'caution' | 'critical' | 'formAccent';
  borderRadius?: BoxProps['borderRadius'];
}

export const Keyline = ({ tone, borderRadius }: KeylineProps) => {
  const backgroundLightness = useBackgroundLightness();

  return (
    <Box
      component="span"
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      overflow="hidden"
      borderRadius={borderRadius}
      className={[styles.noRadiusOnRight, styles.largestWidth]}
    >
      <Box
        component="span"
        height="full"
        display="inlineBlock"
        className={[
          styles.width,
          styles.tone[tone],
          styles.lightMode[backgroundLightness.lightMode],
          styles.darkMode[backgroundLightness.darkMode],
        ]}
      />
    </Box>
  );
};
