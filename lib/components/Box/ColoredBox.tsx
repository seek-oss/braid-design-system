import { createElement, forwardRef } from 'react';
import { atoms } from '../../css/atoms/atoms';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { renderBackgroundProvider } from './BackgroundContext';
import { BoxProps } from './Box';
import * as typographyStyles from '../../hooks/typography/typography.css';
import {
  mapColorModeValue,
  normalizeColorModeValue,
} from '../../css/atoms/sprinkles.css';

export interface ColoredBoxProps extends BoxProps {
  component: NonNullable<BoxProps['component']>;
  background: NonNullable<BoxProps['background']>;
}

export const useColoredBoxClasses = (
  background: ColoredBoxProps['background'],
) => {
  const { lightMode: lightModeBg, darkMode: darkModeBg } =
    normalizeColorModeValue(background);

  const resolvedDarkModeBg = darkModeBg || lightModeBg;

  const { backgroundLightness } = useBraidTheme();
  const lightnessMap = {
    ...backgroundLightness,
    customDark: 'dark',
    customLight: 'light',
  } as const;

  const lightContext =
    lightModeBg !== 'transparent'
      ? typographyStyles.lightModeTone[lightnessMap[lightModeBg!]]
      : undefined;

  const lightNeutralOverride =
    typeof lightModeBg === 'string' &&
    lightModeBg in typographyStyles.lightModeNeutralOverride
      ? typographyStyles.lightModeNeutralOverride[
          lightModeBg as keyof typeof typographyStyles.lightModeNeutralOverride
        ]
      : undefined;

  const darkContext =
    resolvedDarkModeBg !== 'transparent'
      ? typographyStyles.darkModeTone[lightnessMap[resolvedDarkModeBg!]]
      : undefined;

  const darkNeutralOverride =
    typeof resolvedDarkModeBg === 'string' &&
    resolvedDarkModeBg in typographyStyles.darkModeNeutralOverride
      ? typographyStyles.darkModeNeutralOverride[
          resolvedDarkModeBg as keyof typeof typographyStyles.darkModeNeutralOverride
        ]
      : undefined;

  return [
    atoms({
      background: mapColorModeValue(background, (value) =>
        value === 'customDark' || value === 'customLight' ? undefined : value,
      ),
    }),
    lightContext,
    lightNeutralOverride,
    darkContext,
    darkNeutralOverride,
  ].join(' ');
};

export const ColoredBox = forwardRef<HTMLElement, ColoredBoxProps>(
  ({ component, background, className, ...props }, ref) => {
    const colorClasses = useColoredBoxClasses(background);

    const element = createElement(component, {
      className: `${className}${colorClasses ? ` ${colorClasses}` : ''}`,
      ...props,
      ref,
    });

    return renderBackgroundProvider(background, element);
  },
);

ColoredBox.displayName = 'ColoredBox';
