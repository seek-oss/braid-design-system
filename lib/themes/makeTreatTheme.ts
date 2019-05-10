import './treatTheme.d';
import { createTheme } from 'sku/treat';
import { Tokens } from './theme';
import makeUtils from './makeUtils';
import { getAccessibleVariant } from '../atoms/utils/a11y';

interface ThemeVars extends Tokens {
  name: string;
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
  },
  utils: makeUtils(vars),
});

export default (themeVars: ThemeVars) => createTheme(decorateTheme(themeVars));

export type TreatTheme = ReturnType<typeof decorateTheme>;
