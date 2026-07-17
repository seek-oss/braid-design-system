import { type ComponentProps, Fragment } from 'react';

import { Text, TextDropdown } from 'braid-design-system';

import { documentedThemes, useThemeSettings } from './ThemeSettingContext';
import { allThemes, type ThemeName } from './allThemes';

type TextProps = ComponentProps<typeof Text>;

export function ThemeToggle({
  size,
  weight = 'strong',
}: {
  size?: TextProps['size'];
  weight?: TextProps['weight'];
}) {
  const { themeName, setThemeName, ready } = useThemeSettings();

  return (
    <Text weight={weight} size={size}>
      {ready ? (
        <TextDropdown
          label="Theme"
          value={themeName}
          onChange={setThemeName}
          options={Object.entries(allThemes)
            .filter(([key]) => documentedThemes.includes(key as ThemeName))
            .map(([key, { displayName }]) => ({
              text: displayName,
              value: key as ThemeName,
            }))}
        />
      ) : (
        <Fragment>&nbsp;</Fragment>
      )}
    </Text>
  );
}
