import type { FC } from 'react';

import { useBackgroundLightness } from '../Box/BackgroundContext';
import { Box } from '../Box/Box';

import * as styles from './Divider.css';

export interface DividerProps {
  weight?: 'regular' | 'strong';
}

export const Divider: FC<DividerProps> = ({ weight = 'regular' }) => {
  const lightness = useBackgroundLightness();

  return (
    <Box component="span" display="block" position="relative" width="full">
      <Box
        component="span"
        position="absolute"
        left={0}
        right={0}
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
