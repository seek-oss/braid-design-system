import { BraidProvider } from 'braid-design-system';
import { type BoxProps, Box } from 'braid-src/lib/components/Box/Box';
import type { ReactNode } from 'react';

import { useThemeSettings } from './ThemeSettingContext';

import * as styles from './ThemedExample.css';

interface ThemedExampleProps {
  background?: BoxProps['background'];
  transparent?: boolean;
  darkCanvas?: boolean;
  showThemeToggle?: boolean;
  children: ReactNode;
}

export function ThemedExample({
  background,
  transparent = false,
  darkCanvas = false,
  children,
}: ThemedExampleProps) {
  const { theme, ready } = useThemeSettings();

  const showKeyline = !transparent && (!background || background === 'surface');
  const canvasStyles = transparent
    ? []
    : [
        styles.frameShape,
        styles.canvas,
        showKeyline ? styles.frameKeyline : undefined,
        darkCanvas ? styles.explicitDark : styles.adaptiveCanvas,
      ];

  return (
    <Box opacity={!ready ? 0 : undefined} transition="fast">
      <Box
        background={
          darkCanvas
            ? 'customDark'
            : { lightMode: 'customLight', darkMode: 'customDark' }
        }
        borderRadius="large"
        className={[styles.frameContext, ...canvasStyles]}
      >
        <BraidProvider styleBody={false} theme={theme}>
          <Box padding={transparent ? undefined : 'gutter'}>{children}</Box>
        </BraidProvider>
      </Box>
    </Box>
  );
}
