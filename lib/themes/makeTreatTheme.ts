import './treatTheme.d';
import { createTheme } from 'sku/treat';
import makeUtils from './makeUtils';

export type Breakpoint = 'mobile' | 'desktop';
type TextDefinition = Record<
  Breakpoint,
  {
    size: number;
    rows: number;
  }
>;
type FontWeight = 'regular' | 'medium' | 'strong';

export interface TreatTokens {
  name: string;
  typography: {
    fontFamily: string;
    webFont: string | null;
    descenderHeightScale: number;
    capHeightScale: number;
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
  responsiveBreakpoint: number;
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
      focus: string;
      critical: string;
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
      neutral: string;
      neutralInverted: string;
      formAccent: string;
      critical: string;
      info: string;
      promote: string;
      positive: string;
      secondary: string;
    };
    background: {
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
      positive: string;
      neutral: string;
    };
  };
}

const addUtilsToTheme = (treatTokens: TreatTokens) => ({
  ...treatTokens,
  utils: makeUtils(treatTokens),
});

export default (treatTokens: TreatTokens) =>
  createTheme(addUtilsToTheme(treatTokens));

export type TreatTheme = ReturnType<typeof addUtilsToTheme>;
