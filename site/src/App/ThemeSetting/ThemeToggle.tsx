import { Text, TextDropdown } from 'braid-design-system';
import docs from 'braid-design-system/themes/docs';
import seekBusiness from 'braid-design-system/themes/seekBusiness';
import seekJobs from 'braid-design-system/themes/seekJobs';
import wireframe from 'braid-design-system/themes/wireframe';
import { type ComponentProps, Fragment } from 'react';

import { documentedThemes, useThemeSettings } from './ThemeSettingContext';

const themes = {
  docs,
  seekBusiness,
  seekJobs,
  wireframe,
};

type TextProps = ComponentProps<typeof Text>;

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
