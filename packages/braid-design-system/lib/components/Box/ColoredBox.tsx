import React, { createElement, forwardRef } from 'react';
import { atoms } from '../../css/atoms/atoms';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import {
  BackgroundProvider,
  useBackground,
  useBackgroundLightness,
} from './BackgroundContext';
import { BoxBackgroundVariant, BoxProps } from './Box';
import { Background, BoxShadow } from '../../css/atoms/atomicProperties';
import * as typographyStyles from '../../hooks/typography/typography.css';

export interface ColoredBoxProps extends BoxProps {
  component: NonNullable<BoxProps['component']>;
}

const adaptiveBackgrounds: Partial<Record<BoxBackgroundVariant, Background>> = {
  body: 'bodyDark',
  surface: 'surfaceDark',
  brand: 'neutral',
  promoteLight: 'neutral',
  infoLight: 'neutral',
  positiveLight: 'neutral',
  cautionLight: 'neutral',
  criticalLight: 'neutral',
  neutralLight: 'neutral',
  formAccentSoft: 'neutral',
  formAccentSoftActive: 'neutralActive',
  formAccentSoftHover: 'neutralHover',
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
  borderNeutralLight: 'borderNeutral',
  borderPositive: 'borderPositiveLight',
  borderPromote: 'borderPromoteLight',
};

const normaliseBackground = (background: ColoredBoxProps['background']) => ({
  lightMode: typeof background === 'object' ? background.lightMode : background,
  darkMode:
    typeof background === 'object'
      ? background.darkMode
      : adaptiveBackgrounds[background!] || background,
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
  const parentLightness = useBackgroundLightness();
  const currentBackgroundContext = useBackground();
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
            isSemantic && parentLightness.lightMode === 'dark'
              ? adaptiveBoxShadow[normalisedBoxShadows.lightMode!] ||
                normalisedBoxShadows.lightMode
              : normalisedBoxShadows.lightMode,
          darkMode:
            isSemantic && parentLightness.darkMode === 'dark'
              ? adaptiveBoxShadow[normalisedBoxShadows.darkMode!] ||
                normalisedBoxShadows.darkMode
              : normalisedBoxShadows.darkMode,
        },
      }),
    );
  }

  if (background) {
    // ---------------------------------------------------------------------------
    // Normalise simple background to populated conditional value
    const { lightMode, darkMode } = normaliseBackground(background);

    // ---------------------------------------------------------------------------
    // Assign text tone vars based on the lightness context
    classList.push(typographyStyles.lightModeTone[lightnessMap[lightMode!]]);
    classList.push(typographyStyles.darkModeTone[lightnessMap[darkMode!]]);

    // ---------------------------------------------------------------------------
    // Override `neutral` text tone based on the lightness context

    //  1. If `neutral` background, check background tone in opposite color mode
    const lightModeTone = lightMode === 'neutral' ? darkMode : lightMode;
    const darkModeTone = darkMode === 'neutral' ? lightMode : darkMode;

    //  2. If neutral text override exists for background, apply it
    if (
      lightModeTone &&
      typographyStyles.lightModeNeutralOverride[lightModeTone]
    ) {
      classList.push(typographyStyles.lightModeNeutralOverride[lightModeTone]);
    }

    if (
      darkModeTone &&
      typographyStyles.darkModeNeutralOverride[darkModeTone]
    ) {
      classList.push(typographyStyles.darkModeNeutralOverride[darkModeTone]);
    }

    // ---------------------------------------------------------------------------
    // Set background atoms classes
    classList.push(
      atoms({
        background: {
          lightMode:
            lightMode === 'customDark' || lightMode === 'customLight'
              ? undefined
              : lightMode,
          darkMode:
            darkMode === 'customDark' || darkMode === 'customLight'
              ? undefined
              : darkMode,
        },
      }),
    );

    // ---------------------------------------------------------------------------
    // Return updated background context and class list
    return {
      backgroundContext: {
        lightMode: lightMode || currentBackgroundContext.lightMode,
        darkMode: darkMode || currentBackgroundContext.darkMode,
      },
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

    return backgroundContext ? (
      <BackgroundProvider value={backgroundContext}>
        {element}
      </BackgroundProvider>
    ) : (
      element
    );
  },
);

ColoredBox.displayName = 'ColoredBox';
