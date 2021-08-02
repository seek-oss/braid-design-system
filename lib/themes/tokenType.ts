import { FontMetrics } from 'capsize';
import { Breakpoint } from '../css/breakpoints';

export type TextBreakpoint = Exclude<Breakpoint, 'desktop' | 'wide'>;

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
  focusRingSize: number;
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
      brandAccent: string;
      brandAccentActive: string;
      brandAccentHover: string;
      brandAccentLight: string;
      brandAccentLightActive: string;
      brandAccentLightHover: string;
      card: string;
      caution: string;
      cautionLight: string;
      critical: string;
      criticalActive: string;
      criticalHover: string;
      criticalLight: string;
      criticalLightActive: string;
      criticalLightHover: string;
      formAccent: string;
      formAccentActive: string;
      formAccentDisabled: string;
      formAccentHover: string;
      formAccentLight: string;
      formAccentLightActive: string;
      formAccentLightHover: string;
      info: string;
      infoLight: string;
      input: string;
      inputDisabled: string;
      neutral: string;
      neutralLight: string;
      positive: string;
      positiveLight: string;
      promote: string;
      promoteLight: string;
      selection: string;
    };
  };
  alertBorderColor: {
    caution: string;
    critical: string;
    info: string;
    positive: string;
    promote: string;
  };
}
