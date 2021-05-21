import { FontMetrics } from './../hooks/typography/capsize';

export const breakpoints = ['mobile', 'tablet', 'desktop'] as const;
type Breakpoint = typeof breakpoints[number];

export type TextBreakpoint = Exclude<Breakpoint, 'desktop'>;

type FontSizeText = {
  fontSize: number;
  rows: number;
};

export type TextDefinition = Record<TextBreakpoint, FontSizeText>;
type FontWeight = 'regular' | 'medium' | 'strong';

export interface BraidTokens {
  name: string;
  displayName: string;
  typography: {
    fontFamily: string;
    webFont: string | null;
    fontMetrics: FontMetrics;
    fontWeight: Record<FontWeight, string | number>;
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
      brandAccent: string;
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
      brandAccent: string;
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
