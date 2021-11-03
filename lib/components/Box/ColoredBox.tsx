import { createElement, forwardRef } from 'react';
import { atoms } from '../../css/atoms/atoms';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import {
  renderBackgroundProvider,
  useBackground,
  useBackgroundLightness,
} from './BackgroundContext';
import { BoxBackgroundVariant, BoxProps } from './Box';
import * as typographyStyles from '../../hooks/typography/typography.css';
import { Background, BoxShadow } from '../../css/atoms/atomicProperties';

export interface ColoredBoxProps extends BoxProps {
  component: NonNullable<BoxProps['component']>;
}

const adaptiveBackgrounds: Partial<Record<BoxBackgroundVariant, Background>> = {
  body: 'bodyDark',
  surface: 'surfaceDark',
  brand: 'surfaceDark',
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
  borderNeutralLight: 'borderNeutral', // Too far ???? (MenuRenderer menu border, gallery too, but not using box)
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

const isDarkLayerContainer = (context: BoxBackgroundVariant | undefined) =>
  context && ['bodyDark', 'surfaceDark'].includes(context);

const resolveBackground = ({
  context,
  background,
  fallback,
}: {
  context: {
    background: BoxBackgroundVariant;
    lightness?: 'dark' | 'light';
  };
  background: ColoredBoxProps['background'];
  fallback: BoxBackgroundVariant | undefined;
}) => {
  if (typeof background === 'string') {
    if (background === 'surface') {
      if (
        isDarkLayerContainer(context.background) ||
        context.background === 'neutral'
      ) {
        return adaptiveBackgrounds[background];
      }
    } else if (
      context.lightness === 'dark' &&
      adaptiveBackgrounds[background]
    ) {
      return adaptiveBackgrounds[background];
    }
  }

  return fallback;
};

export const useColoredBoxClasses = ({
  background,
  boxShadow,
}: {
  background?: ColoredBoxProps['background'];
  boxShadow?: ColoredBoxProps['boxShadow'];
}) => {
  const parentLightness = useBackgroundLightness();
  const parentBackground = useBackground();
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
    const normalisedBackground = normaliseBackground(background);

    // ---------------------------------------------------------------------------
    // Resolve background given the parent background & lightness context
    const lightMode = normalisedBackground.lightMode;
    // const lightMode = resolveBackground({
    //   context: {
    //     background: parentBackground.lightMode,
    //     lightness: parentLightness.lightMode,
    //   },
    //   background,
    //   fallback: normalisedBackground.lightMode,
    // });
    const darkMode = resolveBackground({
      context: {
        background: parentBackground.darkMode,
        lightness: parentLightness.darkMode,
      },
      background,
      fallback: normalisedBackground.darkMode,
    });

    // ---------------------------------------------------------------------------
    // Assign text tone vars based on the lightness context
    if (lightMode !== 'transparent') {
      classList.push(typographyStyles.lightModeTone[lightnessMap[lightMode!]]);
    }

    if (darkMode !== 'transparent') {
      classList.push(typographyStyles.darkModeTone[lightnessMap[darkMode!]]);
    }

    // ---------------------------------------------------------------------------
    // Override `neutral` text tone based on the lightness context

    //  1. If `neutral` background, check for background specified in opposite
    //  colour mode for tone
    const lightModeContext =
      normalisedBackground.lightMode === 'neutral'
        ? normalisedBackground.darkMode
        : normalisedBackground.lightMode;
    const darkModeContext =
      normalisedBackground.darkMode === 'neutral'
        ? normalisedBackground.lightMode
        : normalisedBackground.darkMode;

    //  2. If background has neutral override, apply it
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

    // ---------------------------------------------------------------------------
    // Set background atoms classes and update background context
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
