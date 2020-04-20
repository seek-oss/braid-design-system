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
          options={Object.keys(themes) as Array<keyof typeof themes>}
        />
      ) : (
        <Fragment>&nbsp;</Fragment>
      )}
    </Text>
  );
}
