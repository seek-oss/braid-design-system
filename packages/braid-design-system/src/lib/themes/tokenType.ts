import type { FontMetrics } from '@capsizecss/core';

import type { Breakpoint } from '../css/breakpoints';

type FontMetricsForTheme = Pick<
  FontMetrics,
  'capHeight' | 'ascent' | 'descent' | 'lineGap' | 'unitsPerEm'
>;
export const extractFontMetricsForTheme = ({
  capHeight,
  ascent,
  descent,
  lineGap,
  unitsPerEm,
}: FontMetrics): FontMetricsForTheme => ({
  capHeight,
  ascent,
  descent,
  lineGap,
  unitsPerEm,
});

export type TextBreakpoint = Exclude<Breakpoint, 'desktop' | 'wide'>;

type FontSizeText =
  | {
      fontSize: number;
      rows: number;
    }
  | {
      fontSize: number;
      lineGap: number;
    };

export type TextDefinition = Record<TextBreakpoint, FontSizeText>;
type FontWeight = 'regular' | 'medium' | 'strong';

export interface BraidTokens {
  name: string;
  displayName: string;
  /**
   * The boundary for making updated design decisions without disturbing
   * existing consumers. Updated decisions can be assessed as part of
   * migrating between themes.
   *
   * This token will be removed when the `apac` theme is retired.
   */
  legacy: boolean;
  typography: {
    fontFamily: string;
    webFont: string | null;
    fontMetrics: FontMetricsForTheme;
    fontWeight: Record<FontWeight, 400 | 500 | 600 | 700 | 800>;
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
  contentWidth: {
    xsmall: number;
    small: number;
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
    xxxlarge: number;
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
      small: string;
      standard: string;
      large: string;
      xlarge: string;
    };
    width: {
      standard: number;
      large: number;
    };
    color: {
      brandAccent: string;
      brandAccentLight: string;
      caution: string;
      cautionLight: string;
      critical: string;
      criticalLight: string;
      field: string;
      focus: string;
      formAccent: string;
      formAccentLight: string;
      info: string;
      infoLight: string;
      neutral: string;
      neutralInverted: string;
      neutralLight: string;
      positive: string;
      positiveLight: string;
      promote: string;
      promoteLight: string;
    };
  };
  focusRingSize: number;
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  color: {
    foreground: {
      brandAccentLight: string;
      brandAccent: string;
      cautionLight: string;
      caution: string;
      criticalLight: string;
      critical: string;
      formAccentLight: string;
      formAccent: string;
      infoLight: string;
      info: string;
      linkLight: string;
      link: string;
      linkHover: string;
      linkVisited: string;
      linkLightVisited: string;
      neutral: string;
      neutralInverted: string;
      positiveLight: string;
      positive: string;
      promoteLight: string;
      promote: string;
      /** @deprecated Recommend using `brandAccent` or `neutral` instead. */
      rating: string;
      secondary: string;
      secondaryInverted: string;
    };
    background: {
      body: string;
      bodyDark: string;
      brand: string;
      brandAccent: string;
      brandAccentActive: string;
      brandAccentHover: string;
      brandAccentSoft: string;
      brandAccentSoftActive: string;
      brandAccentSoftHover: string;
      caution: string;
      cautionLight: string;
      critical: string;
      criticalActive: string;
      criticalHover: string;
      criticalLight: string;
      criticalSoft: string;
      criticalSoftActive: string;
      criticalSoftHover: string;
      formAccent: string;
      formAccentActive: string;
      formAccentHover: string;
      formAccentSoft: string;
      formAccentSoftActive: string;
      formAccentSoftHover: string;
      info: string;
      infoLight: string;
      neutral: string;
      neutralActive: string;
      neutralHover: string;
      neutralLight: string;
      neutralSoft: string;
      neutralSoftActive: string;
      neutralSoftHover: string;
      positive: string;
      positiveLight: string;
      promote: string;
      promoteLight: string;
      surface: string;
      surfaceDark: string;
    };
  };
}
