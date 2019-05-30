import './treatTheme.d';
import { createTheme } from 'sku/treat';
import { Tokens } from './theme';
import makeUtils from './makeUtils';

type TextDefinition = Record<
  'mobile' | 'desktop',
  {
    size: number;
    rows: number;
  }
>;

export interface TreatTokens extends Tokens {
  name: string;
  typography: {
    fontFamily: string;
    descenderHeightScale: number;
    fontWeight: {
      regular: number;
      medium: number;
      strong: number;
    };
    text: {
      small: TextDefinition;
      standard: TextDefinition;
      large: TextDefinition;
    };
  };
  grid: {
    row: number;
    column: number;
  };
  responsiveBreakpoint: number;
  spacing: {
    touchableRows: number;
    row: {
      xxsmall: number;
      xsmall: number;
      small: number;
      medium: number;
      large: number;
      xlarge: number;
      xxlarge: number;
    };
    column: {
      gutter: number;
      xxsmall: number;
      xsmall: number;
      small: number;
      medium: number;
      large: number;
      xlarge: number;
      xxlarge: number;
    };
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
      focus: string;
      critical: string;
      formAccent: string;
    };
  };
  color: {
    foreground: {
      link: string;
      linkHover: string;
      black: string;
      neutral: string;
      brandAccent: string;
      formAccent: string;
      formAccentDisabled: string;
      critical: string;
      info: string;
      positive: string;
      secondary: string;
      white: string;
    };
    background: {
      input: string;
      inputDisabled: string;
      brandAccent: string;
      formAccent: string;
      formAccentDisabled: string;
      selection: string;
      info: string;
      card: string;
      critical: string;
      positive: string;
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
