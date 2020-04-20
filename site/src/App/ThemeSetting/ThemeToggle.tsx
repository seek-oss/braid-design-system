import React, { Fragment } from 'react';
import { Text, TextDropdown } from '../../../..';
import * as themes from '../../../../lib/themes';
import { useThemeSettings } from './ThemeSettingContext';

export function ThemeToggle() {
  const { theme, setTheme, ready } = useThemeSettings();

  return (
    <Text>
      {ready ? (
        <TextDropdown
          id="theme"
          label="Theme"
          value={theme}
          onChange={setTheme}
          options={Object.entries(themes).map(
            ([themeKey, { displayName }]) => ({
              text: displayName,
              value: themeKey as keyof typeof themes,
            }),
          )}
        />
      ) : (
        <Fragment>&nbsp;</Fragment>
      )}
    </Text>
  );
}
