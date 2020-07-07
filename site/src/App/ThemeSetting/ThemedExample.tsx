import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { useThemeSettings } from './ThemeSettingContext';
import { BraidProvider, Box } from '../../../../lib/components';
import { BoxProps } from '../../../../lib/components/Box/Box';
import * as themes from '../../../../lib/themes';
import * as styleRefs from './ThemedExample.treat';

interface ThemedExampleProps {
  background?: BoxProps['background'];
  children: ReactNode;
}

export function ThemedExample({ background, children }: ThemedExampleProps) {
  const styles = useStyles(styleRefs);
  const { theme, ready } = useThemeSettings();

  return (
    <Box opacity={!ready ? 0 : undefined} transition="fast">
      <BraidProvider styleBody={false} theme={themes[theme]}>
        {background ? (
          <Box
            background={background}
            padding={['small', 'large']}
            className={styles.unthemedBorderRadius}
          >
            {children}
          </Box>
        ) : (
          children
        )}
      </BraidProvider>
    </Box>
  );
}
