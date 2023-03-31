import {
  assignVars,
  createThemeContract,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { colorModeStyle } from '../../../css/colorModeStyle';
import { vars } from '../../../themes/vars.css';

const keylineVars = createThemeContract({
  promote: null,
  info: null,
  positive: null,
  caution: null,
  critical: null,
  formAccent: null,
});

const lightModeVars = {
  vars: assignVars(keylineVars, {
    promote: vars.borderColor.promote,
    info: vars.borderColor.info,
    positive: vars.borderColor.positive,
    caution: vars.borderColor.caution,
    critical: vars.borderColor.critical,
    formAccent: vars.borderColor.formAccent,
  }),
};

const darkModeVars = {
  vars: assignVars(keylineVars, {
    promote: vars.borderColor.promoteLight,
    info: vars.borderColor.infoLight,
    positive: vars.borderColor.positiveLight,
    caution: vars.borderColor.cautionLight,
    critical: vars.borderColor.criticalLight,
    formAccent: vars.borderColor.formAccentLight,
  }),
};

export const tone = styleVariants(keylineVars, (_, name) => ({
  background: keylineVars[name],
}));

export const lightMode = styleVariants({
  light: colorModeStyle({
    lightMode: lightModeVars,
  }),
  dark: colorModeStyle({
    lightMode: darkModeVars,
  }),
});

export const darkMode = styleVariants({
  light: colorModeStyle({
    darkMode: lightModeVars,
  }),
  dark: colorModeStyle({
    darkMode: darkModeVars,
  }),
});

export const noRadiusOnRight = style({
  borderTopRightRadius: '0 !important',
  borderBottomRightRadius: '0 !important',
});

export const largestWidth = style({
  width: vars.borderRadius.xlarge,
});

export const width = style({
  width: vars.grid,
});
