import {
  assignVars,
  createThemeContract,
  styleVariants,
} from '@vanilla-extract/css';
import { darkMode as darkScope } from '../../../css/atoms/sprinkles.css';
import { vars } from '../../../themes/vars.css';

const keylineVars = createThemeContract({
  promote: null,
  info: null,
  positive: null,
  caution: null,
  critical: null,
});

const lightModeVars = assignVars(keylineVars, {
  promote: vars.borderColor.promote,
  info: vars.borderColor.info,
  positive: vars.borderColor.positive,
  caution: vars.borderColor.caution,
  critical: vars.borderColor.critical,
});

const darkModeVars = assignVars(keylineVars, {
  promote: vars.borderColor.promoteLight,
  info: vars.borderColor.infoLight,
  positive: vars.borderColor.positiveLight,
  caution: vars.borderColor.cautionLight,
  critical: vars.borderColor.criticalLight,
});

export const tone = styleVariants({
  promote: { background: keylineVars.promote },
  info: { background: keylineVars.info },
  positive: { background: keylineVars.positive },
  caution: { background: keylineVars.caution },
  critical: { background: keylineVars.critical },
});

export const lightMode = styleVariants({
  light: {
    selectors: {
      [`html:not(${darkScope}) &`]: {
        vars: lightModeVars,
      },
    },
  },
  dark: {
    selectors: {
      [`html:not(${darkScope}) &`]: {
        vars: darkModeVars,
      },
    },
  },
});

export const darkMode = styleVariants({
  light: {
    selectors: {
      [`html${darkScope} &`]: {
        vars: lightModeVars,
      },
    },
  },
  dark: {
    selectors: {
      [`html${darkScope} &`]: {
        vars: darkModeVars,
      },
    },
  },
});
