import { BraidProvider, Stack } from 'braid-design-system';
import { type BoxProps, Box } from 'braid-src/lib/components/Box/Box';
import type { ReactNode } from 'react';

import { useThemeSettings } from './ThemeSettingContext';
import { ThemeToggle } from './ThemeToggle';

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
  showThemeToggle = true,
  children,
}: ThemedExampleProps) {
  const { theme, ready } = useThemeSettings();

  const showKeyline = !transparent && (!background || background === 'surface');
  const canvasStyles = transparent
    ? []
    : [
        styles.frameShape,
        styles.canvas,
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
      >
        <Stack space="small">
          {showThemeToggle ? (
            <Box
              justifyContent="flexEnd"
              display="flex"
              flexDirection="row"
              width="full"
            >
              <ThemeToggle size="xsmall" tone="secondary" weight="regular" />
            </Box>
          ) : null}
          <Box className={[styles.frameContext, ...canvasStyles]}>
            <BraidProvider styleBody={false} theme={theme}>
              <Box
                background={!darkCanvas ? background : undefined}
                padding={transparent ? undefined : 'gutter'}
                className={[
                  transparent ? undefined : styles.frameShape,
                  showKeyline ? styles.frameKeyline : undefined,
                ]}
              >
                {children}
              </Box>
            </BraidProvider>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
