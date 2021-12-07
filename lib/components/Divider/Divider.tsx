import React from 'react';
import { useBackgroundLightness } from '../Box/BackgroundContext';
import { Box } from '../Box/Box';
import * as styles from './Divider.css';

export interface DividerProps {
  weight?: 'regular' | 'strong';
}

export const Divider = ({ weight = 'regular' }: DividerProps) => {
  const lightness = useBackgroundLightness();

  return (
    <Box position="relative">
      <Box
        position="absolute"
        width="full"
        className={[
          styles.base,
          weight === 'strong' ? styles.strong : styles.regular,
          styles.lightModeWeight[lightness.lightMode],
          styles.darkModeWeight[lightness.darkMode],
        ]}
      />
    </Box>
  );
};
