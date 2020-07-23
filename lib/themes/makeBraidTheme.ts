import './treatTheme.d';
import { createTheme } from 'sku/treat';
import { darken, lighten } from 'polished';
import mapValues from 'lodash/mapValues';
import values from 'lodash/values';
import { makeThemeUtils } from './themeUtils';
import { getLightVariant, isLight } from '../utils';
import { FontMetrics } from '../hooks/typography/capsize';

export const breakpoints = ['mobile', 'tablet', 'desktop'] as const;
type Breakpoint = typeof breakpoints[number];

export type TextBreakpoint = Exclude<Breakpoint, 'desktop'>;

type TextDefinition = Record<
  TextBreakpoint,
  {
    capHeight: number;
    rows: number;
  }
>;
type FontWeight = 'regular' | 'medium' | 'strong';

export interface TreatTokens {
  name: string;
  displayName: string;
  typography: {
    fontFamily: string;
    webFont: string | null;
    fontMetrics: FontMetrics;
    fontWeight: Record<FontWeight, number>;
    heading: {
      weight: {
        weak: FontWeight;
        regular: FontWeight;
      };
      level: {
        '1': TextDefinition;
        '2': TextDefinition;
        '3': TextDefinition;
        '4': TextDefinition;
      };
    };
    text: {
      xsmall: TextDefinition;
      small: TextDefinition;
      standard: TextDefinition;
      large: TextDefinition;
    };
  };
  breakpoint: Record<Breakpoint, number>;
  contentWidth: {
    medium: number;
    large: number;
  };
  grid: number;
  touchableSize: number;
  space: {
    gutter: number;
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
  };
  transforms: {
    touchable: string;
  };
  transitions: {
    fast: string;
    touchable: string;
  };
  border: {
    radius: {
      standard: string;
    };
    width: {
      standard: number;
      large: number;
    };
    color: {
      standard: string;
      standardInverted: string;
      field: string;
      focus: string;
      critical: string;
      info: string;
      promote: string;
      positive: string;
      caution: string;
      formHover: string;
      formAccent: string;
    };
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  color: {
    foreground: {
      link: string;
      linkHover: string;
      linkVisited: string;
      neutral: string;
      neutralInverted: string;
      formAccent: string;
      critical: string;
      info: string;
      promote: string;
      positive: string;
      caution: string;
      secondary: string;
      secondaryInverted: string;
      rating: string;
    };
    background: {
      body: string;
      brand: string;
      input: string;
      inputDisabled: string;
      brandAccent: string;
      formAccent: string;
      formAccentDisabled: string;
      selection: string;
      info: string;
      promote: string;
      card: string;
      critical: string;
      caution: string;
      positive: string;
      neutral: string;
    };
  };
}

const decorateTokens = (treatTokens: TreatTokens) => {
  const { color, ...restTokens } = treatTokens;

  const getActiveColor = (x: string) =>
    isLight(x) ? darken(0.1, x) : darken(0.05, x);

  const getHoverColor = (x: string) =>
    isLight(x) ? darken(0.05, x) : lighten(0.05, x);

  const decoratedTokens = {
    color: {
      ...color,
      background: {
        ...color.background,
        formAccentActive: getActiveColor(color.background.formAccent),
        formAccentHover: getHoverColor(color.background.formAccent),
        brandAccentActive: getActiveColor(color.background.brandAccent),
        brandAccentHover: getHoverColor(color.background.brandAccent),
        infoLight: getLightVariant(color.background.info),
        promoteLight: getLightVariant(color.background.promote),
        criticalLight: getLightVariant(color.background.critical),
        positiveLight: getLightVariant(color.background.positive),
        cautionLight: getLightVariant(color.background.caution),
        neutralLight: getLightVariant(color.background.neutral),
      },
    },
    ...restTokens,
  };

  return {
    ...decoratedTokens,
    utils: makeThemeUtils(decoratedTokens),
  };
};

export type TreatTheme = ReturnType<typeof decorateTokens>;

const makeWebFonts = (tokens: TreatTheme) => {
  const name = tokens.typography.webFont;

  if (!name) {
    return [];
  }

  const weights = values(tokens.typography.fontWeight);
  const linkTag = `<link href="https://fonts.googleapis.com/css?family=${name}:${weights
    .sort()
    .join(',')}" rel="stylesheet" />`;

  return [{ linkTag }];
};

const makeRuntimeTokens = (tokens: TreatTheme) => ({
  name: tokens.name,
  displayName: tokens.displayName,
  background: tokens.color.background.body,
  webFonts: makeWebFonts(tokens),
  space: {
    grid: tokens.grid,
    space: tokens.space,
  },
  color: tokens.color,
  backgroundLightness: mapValues(
    tokens.color.background,
    (background, name) => {
      // Manual override to ensure we use inverted neutral text
      // on JobsDB 'brandAccent' background and its variants.
      if (tokens.name === 'jobsDb' && /^brandAccent/.test(name)) {
        return 'dark';
      }

      // This color map is used to ensure that all "hover" and "active"
      // variants are considered as a single set. If we don't do this,
      // colors might flip from light to dark during user interactions.
      // At the time of writing this, this was true of 'formAccent' in
      // the 'seekBusiness' theme, which went from white text to black
      // for 'formAccentHover'.
      const referenceColorMap = {
        brandAccentActive: 'brandAccent',
        brandAccentHover: 'brandAccent',
        formAccentActive: 'formAccent',
        formAccentHover: 'formAccent',
      } as const;

      const referenceColor =
        name in referenceColorMap
          ? tokens.color.background[
              referenceColorMap[name as keyof typeof referenceColorMap]
            ]
          : background;

      if (!referenceColor) {
        throw new Error(
          `Error resolving background lightness for background "${background}" in "${tokens.name}" theme.`,
        );
      }

      return isLight(referenceColor) ? 'light' : 'dark';
    },
  ),
});

export function makeBraidTheme(treatTokens: TreatTokens) {
  const decoratedTokens = decorateTokens(treatTokens);

  return {
    treatTheme: createTheme(decoratedTokens),
    ...makeRuntimeTokens(decoratedTokens),
  };
}

export type BraidTheme = ReturnType<typeof makeBraidTheme>;
