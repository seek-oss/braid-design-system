import './treatTheme.d';
import { createTheme } from 'sku/treat';
import { Tokens } from './theme';
import makeUtils from './makeUtils';

interface ThemeVars extends Tokens {
  name: string;
  typography: {
    fontFamily: string;
    fontWeight: {
      regular: number;
      medium: number;
      strong: number;
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

const addUtilsToTheme = (vars: ThemeVars) => ({
  ...vars,
  utils: makeUtils(vars),
});

export default (themeVars: ThemeVars) =>
  createTheme(addUtilsToTheme(themeVars));

export type TreatTheme = ReturnType<typeof addUtilsToTheme>;
