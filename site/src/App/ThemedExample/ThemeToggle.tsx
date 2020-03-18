import React from 'react';

import { Stack, Text, Dropdown } from '../../../..';
import * as themes from '../../../../lib/themes';

import { useThemeSettings, ThemeKey } from './ThemedExample';

export function ThemeToggle() {
  const { theme, setTheme, ready } = useThemeSettings();

  return (
    <Stack space="medium">
      <Text weight="strong" component="h2">
        Theme
      </Text>
      <Dropdown
        id="theme-toggle"
        value={ready ? theme : 'Loading...'}
        onChange={ev => {
          setTheme(ev.currentTarget.value as ThemeKey);
        }}
      >
        {ready
          ? Object.entries(themes).map(([themeKey, { displayName }]) => (
              <option key={themeKey} value={themeKey}>
                {displayName}
              </option>
            ))
          : []}
      </Dropdown>
    </Stack>
  );
}
