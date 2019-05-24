import './treatTheme.d';
import { createTheme } from 'sku/treat';
import { Tokens } from './theme';
import makeUtils from './makeUtils';
import { getAccessibleVariant } from '../atoms/utils/a11y';
import { TextWeight } from '../hooks/typography';

interface ThemeVars extends Tokens {
  name: string;
  typography: {
    fontFamily: string;
    fontWeight: Record<TextWeight, number>;
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
  };
  color: {
    foreground: {
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

const decorateTheme = (vars: ThemeVars) => ({
  ...vars,
  color: {
    ...vars.color,
    foreground: {
      ...vars.color.foreground,
      criticalContrast: getAccessibleVariant(vars.color.foreground.critical),
      infoContrast: getAccessibleVariant(vars.color.foreground.info),
      positiveContrast: getAccessibleVariant(vars.color.foreground.positive),
    },
  },
  utils: makeUtils(vars),
});

export default (themeVars: ThemeVars) => createTheme(decorateTheme(themeVars));

export type TreatTheme = ReturnType<typeof decorateTheme>;
