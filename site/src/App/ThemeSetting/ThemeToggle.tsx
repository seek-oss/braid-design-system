import React from 'react';

import { Text, Box, MenuItem, MenuRenderer, IconChevron } from '../../../..';
import * as themes from '../../../../lib/themes';

import { useThemeSettings, ThemeKey } from './ThemeSettingContext';

export function ThemeToggle() {
  const { theme, setTheme, ready } = useThemeSettings();

  return (
    <MenuRenderer
      offsetSpace="small"
      trigger={(triggerProps, { open }) => (
        <Box component="button" cursor="pointer" {...triggerProps}>
          {ready ? (
            <Text>
              {themes[theme].displayName}{' '}
              <IconChevron
                alignY="lowercase"
                direction={open ? 'up' : 'down'}
              />
            </Text>
          ) : (
            <Text>&nbsp;</Text>
          )}
        </Box>
      )}
    >
      {Object.entries(themes).map(([themeKey, { displayName }]) => (
        <MenuItem key={themeKey} onClick={() => setTheme(themeKey as ThemeKey)}>
          {displayName}
        </MenuItem>
      ))}
    </MenuRenderer>
  );
}
