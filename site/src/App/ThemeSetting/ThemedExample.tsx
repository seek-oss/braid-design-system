import React, { ReactNode } from 'react';
import { useThemeSettings } from './ThemeSettingContext';
import { BraidProvider, Box } from '../../../../lib/components';
import { BoxProps } from '../../../../lib/components/Box/Box';
import * as styles from './ThemedExample.css';

interface ThemedExampleProps {
  background?: BoxProps['background'];
  transparent?: boolean;
  children: ReactNode;
}

export function ThemedExample({
  background,
  transparent = false,
  children,
}: ThemedExampleProps) {
  const { theme, ready } = useThemeSettings();

  return (
    <Box opacity={!ready ? 0 : undefined} transition="fast">
      <BraidProvider styleBody={false} theme={theme}>
        <Box
          boxShadow={
            transparent
              ? undefined
              : {
                  lightMode: background ? 'borderNeutralLight' : undefined,
                  darkMode: 'borderNeutralLarge',
                }
          }
          background={
            transparent
              ? undefined
              : background || { lightMode: 'body', darkMode: 'bodyDark' }
          }
          padding={transparent ? undefined : ['small', 'medium', 'large']}
          className={styles.unthemedBorderRadius}
        >
          {children}
        </Box>
      </BraidProvider>
    </Box>
  );
}
