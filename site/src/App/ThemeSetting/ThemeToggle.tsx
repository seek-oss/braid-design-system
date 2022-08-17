import React, { Fragment } from 'react';
import { Text, TextDropdown } from 'braid-design-system';
import { TextProps } from 'braid-design-system/lib/components/Text/Text';
import * as themes from 'braid-design-system/lib/themes';
import { documentedThemes, useThemeSettings } from './ThemeSettingContext';

export function ThemeToggle({
  size,
  weight = 'strong',
}: {
  size?: TextProps['size'];
  weight?: TextProps['weight'];
}) {
  const { themeKey, setThemeKey, ready } = useThemeSettings();

  return (
    <Text weight={weight} size={size}>
      {ready ? (
        <TextDropdown
          id="theme"
          label="Theme"
          value={themeKey}
          onChange={setThemeKey}
          options={Object.entries(themes)
            .filter(([key]) =>
              documentedThemes.includes(key as keyof typeof themes),
            )
            .map(([key, { displayName }]) => ({
              text: displayName,
              value: key as keyof typeof themes,
            }))}
        />
      ) : (
        <Fragment>&nbsp;</Fragment>
      )}
    </Text>
  );
}
