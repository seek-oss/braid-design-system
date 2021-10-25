import { createElement, forwardRef } from 'react';
import { atoms } from '../../css/atoms/atoms';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import {
  renderBackgroundProvider,
  useBackgroundLightness,
} from './BackgroundContext';
import { BoxBackgroundVariant, BoxProps } from './Box';
import * as typographyStyles from '../../hooks/typography/typography.css';
import { Background, BoxShadow } from '../../css/atoms/atomicProperties';

export interface ColoredBoxProps extends BoxProps {
  component: NonNullable<BoxProps['component']>;
}

const adaptiveColors: Partial<Record<BoxBackgroundVariant, Background>> = {
  body: 'bodyDark',
  surface: 'surfaceDark',
  promoteLight: 'neutral',
  infoLight: 'neutral',
  positiveLight: 'neutral',
  cautionLight: 'neutral',
  criticalLight: 'neutral',
  neutralLight: 'neutral',
  formAccentSoft: 'neutral',
};

const adaptiveBoxShadow: Partial<Record<BoxShadow, BoxShadow>> = {
  borderBrandAccentLarge: 'borderBrandAccentLightLarge',
  borderCaution: 'borderCautionLight',
  borderCritical: 'borderCriticalLight',
  borderCriticalLarge: 'borderCriticalLightLarge',
  borderFormAccent: 'borderFormAccentLight',
  borderFormAccentLarge: 'borderFormAccentLightLarge',
  borderInfo: 'borderInfoLight',
  borderNeutral: 'borderNeutralInverted',
  borderNeutralLarge: 'borderNeutralInvertedLarge',
  borderPositive: 'borderPositiveLight',
  borderPromote: 'borderPromoteLight',
};

const normaliseBackground = (background: ColoredBoxProps['background']) => ({
  lightMode: typeof background === 'object' ? background.lightMode : background,
  darkMode: typeof background === 'object' ? background.darkMode : background,
});

const normalisedBoxShadow = (boxShadow: ColoredBoxProps['boxShadow']) => ({
  lightMode: typeof boxShadow === 'object' ? boxShadow.lightMode : boxShadow,
  darkMode: typeof boxShadow === 'object' ? boxShadow.darkMode : boxShadow,
});

export const useColoredBoxClasses = ({
  background,
  boxShadow,
}: {
  background?: ColoredBoxProps['background'];
  boxShadow?: ColoredBoxProps['boxShadow'];
}) => {
  const currentLightness = useBackgroundLightness();
  const { backgroundLightness } = useBraidTheme();
  const lightnessMap = {
    ...backgroundLightness,
    customDark: 'dark',
    customLight: 'light',
  } as const;

  const classList: Array<string> = [];

  if (boxShadow) {
    const normalisedBoxShadows = normalisedBoxShadow(boxShadow);
    const isSemantic = typeof boxShadow === 'string';

    classList.push(
      atoms({
        boxShadow: {
          lightMode:
            isSemantic && currentLightness.lightMode === 'dark'
              ? adaptiveBoxShadow[normalisedBoxShadows.lightMode!] ||
                normalisedBoxShadows.lightMode
              : normalisedBoxShadows.lightMode,
          darkMode:
            isSemantic && currentLightness.darkMode === 'dark'
              ? adaptiveBoxShadow[normalisedBoxShadows.darkMode!] ||
                normalisedBoxShadows.darkMode
              : normalisedBoxShadows.darkMode,
        },
      }),
    );
  }

  if (background) {
    const normalisedBackground = normaliseBackground(background);
    const isSemantic = typeof background === 'string';
    const lightMode =
      isSemantic && currentLightness.lightMode === 'dark'
        ? adaptiveColors[background] || normalisedBackground.lightMode
        : normalisedBackground.lightMode;
    const darkMode =
      isSemantic && currentLightness.darkMode === 'dark'
        ? adaptiveColors[background] || normalisedBackground.darkMode
        : normalisedBackground.darkMode;

    // Set light context text tone vars
    if (lightMode !== 'transparent') {
      classList.push(typographyStyles.lightModeTone[lightnessMap[lightMode!]]);
    }

    // Set light context neutral override
    const lightModeContext =
      isSemantic && currentLightness.lightMode === 'dark'
        ? darkMode
        : lightMode;
    if (
      lightModeContext &&
      lightModeContext in typographyStyles.lightModeNeutralOverride
    ) {
      classList.push(
        typographyStyles.lightModeNeutralOverride[
          lightModeContext as keyof typeof typographyStyles.lightModeNeutralOverride
        ],
      );
    }

    // Set dark context text tone vars
    if (darkMode !== 'transparent') {
      classList.push(typographyStyles.darkModeTone[lightnessMap[darkMode!]]);
    }

    // Set dark context neutral override
    const darkModeContext =
      isSemantic && currentLightness.darkMode === 'dark' ? lightMode : darkMode;
    if (
      darkModeContext &&
      darkModeContext in typographyStyles.darkModeNeutralOverride
    ) {
      classList.push(
        typographyStyles.darkModeNeutralOverride[
          darkModeContext as keyof typeof typographyStyles.darkModeNeutralOverride
        ],
      );
    }

    const newBackground = {
      lightMode:
        lightMode === 'customDark' || lightMode === 'customLight'
          ? undefined
          : lightMode,
      darkMode:
        darkMode === 'customDark' || darkMode === 'customLight'
          ? undefined
          : darkMode,
    };

    // Set background atoms
    classList.push(
      atoms({
        background: newBackground,
      }),
    );

    return {
      backgroundContext: newBackground,
      classList: classList.join(' '),
    };
  }

  return {
    classList: classList.join(' '),
  };
};

export const ColoredBox = forwardRef<HTMLElement, ColoredBoxProps>(
  ({ component, background, boxShadow, className, ...props }, ref) => {
    const { backgroundContext, classList: colorClasses } = useColoredBoxClasses(
      { background, boxShadow },
    );

    const element = createElement(component, {
      className: `${className}${colorClasses ? ` ${colorClasses}` : ''}`,
      ...props,
      ref,
    });

    return backgroundContext
      ? renderBackgroundProvider(backgroundContext, element)
      : element;
  },
);

ColoredBox.displayName = 'ColoredBox';
