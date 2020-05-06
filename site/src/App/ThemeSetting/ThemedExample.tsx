import React, { ReactNode } from 'react';
import { useThemeSettings } from './ThemeSettingContext';
import { BraidProvider, Box } from '../../../../lib/components';
import * as themes from '../../../../lib/themes';

interface ThemedExampleProps {
  children: ReactNode;
}

export function ThemedExample({ children }: ThemedExampleProps) {
  const { theme, ready } = useThemeSettings();

  return (
    <Box opacity={!ready ? 0 : undefined} transition="fast">
      <BraidProvider styleBody={false} theme={themes[theme]}>
        {children}
      </BraidProvider>
    </Box>
  );
}
