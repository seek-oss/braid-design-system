import './treatTheme.d';
import { createTheme } from 'sku/treat';
import { Tokens } from './theme';
import makeUtils from './makeUtils';
import { getAccessibleVariant, getLightVariant } from '../atoms/utils/a11y';
import isLight from '../atoms/utils/isLight';
import { TextWeight } from '../hooks/typography';
import { darken, lighten } from 'polished';

const getActiveColor = (color: string) =>
  isLight(color) ? darken(0.1, color) : darken(0.05, color);

const getHoverColor = (color: string) =>
  isLight(color) ? darken(0.05, color) : lighten(0.05, color);

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
    foreground: {
      ...vars.color.foreground,
      criticalContrast: getAccessibleVariant(vars.color.foreground.critical),
      infoContrast: getAccessibleVariant(vars.color.foreground.info),
      positiveContrast: getAccessibleVariant(vars.color.foreground.positive),
    },
    background: {
      ...vars.color.background,
      formAccentActive: getActiveColor(vars.color.background.formAccent),
      formAccentHover: getHoverColor(vars.color.background.formAccent),
      brandAccentActive: getActiveColor(vars.color.background.brandAccent),
      brandAccentHover: getHoverColor(vars.color.background.brandAccent),
      infoLight: getLightVariant(vars.color.background.info),
      criticalLight: getLightVariant(vars.color.background.critical),
      positiveLight: getLightVariant(vars.color.background.positive),
    },
  },
  utils: makeUtils(vars),
});

export default (themeVars: ThemeVars) => createTheme(decorateTheme(themeVars));

export type TreatTheme = ReturnType<typeof decorateTheme>;
