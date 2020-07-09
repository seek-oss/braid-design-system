import React, { Fragment } from 'react';
import { Text, TextDropdown } from '../../../..';
import * as themes from '../../../../lib/themes';
import { documentedThemes, useThemeSettings } from './ThemeSettingContext';

export function ThemeToggle() {
  const { theme, setTheme, ready } = useThemeSettings();

  return (
    <Text weight="strong">
      {ready ? (
        <TextDropdown
          id="theme"
          label="Theme"
          value={theme}
          onChange={setTheme}
          options={Object.entries(themes)
            .filter(([themeKey]) =>
              documentedThemes.includes(themeKey as keyof typeof themes),
            )
            .map(([themeKey, { displayName }]) => ({
              text: displayName,
              value: themeKey as keyof typeof themes,
            }))}
        />
      ) : (
        <Fragment>&nbsp;</Fragment>
      )}
    </Text>
  );
}
