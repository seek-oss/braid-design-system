import React, { type ReactNode } from 'react';
import { useThemeSettings } from './ThemeSettingContext';
import { BraidProvider } from 'braid-src/lib/components';
import { type BoxProps, Box } from 'braid-src/lib/components/Box/Box';
import * as styles from './ThemedExample.css';

interface ThemedExampleProps {
  background?: BoxProps['background'];
  transparent?: boolean;
  darkCanvas?: boolean;
  children: ReactNode;
}

export function ThemedExample({
  background,
  transparent = false,
  darkCanvas = false,
  children,
}: ThemedExampleProps) {
  const { theme, ready } = useThemeSettings();

  return (
    <Box opacity={!ready ? 0 : undefined} transition="fast">
      <BraidProvider styleBody={false} theme={theme}>
        <Box
          background={darkCanvas ? 'bodyDark' : 'body'}
          style={{ backgroundColor: 'transparent' }}
          borderRadius="large"
        >
          <Box
            boxShadow={
              transparent || (background && background !== 'surface')
                ? undefined
                : 'borderNeutralLight'
            }
            background={!darkCanvas ? background : undefined}
            borderRadius="large"
            padding={transparent ? undefined : 'gutter'}
            className={
              transparent
                ? undefined
                : [
                    styles.canvas,
                    darkCanvas ? styles.explicitDark : styles.adaptiveCanvas,
                  ]
            }
          >
            {children}
          </Box>
        </Box>
      </BraidProvider>
    </Box>
  );
}
