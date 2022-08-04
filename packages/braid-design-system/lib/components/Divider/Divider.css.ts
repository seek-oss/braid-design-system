import {
  assignVars,
  createThemeContract,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { colorModeStyle } from '../../css/colorModeStyle';
import { vars } from '../../themes/vars.css';

export const base = style({
  height: vars.borderWidth.standard,
});

const weightVars = createThemeContract({
  regular: null,
  strong: null,
});

export const regular = style({ background: weightVars.regular });
export const strong = style({ background: weightVars.strong });

const lightModeVars = {
  vars: assignVars(weightVars, {
    regular: vars.borderColor.neutralLight,
    strong: vars.borderColor.neutral,
  }),
};

const darkModeVars = {
  vars: assignVars(weightVars, {
    regular: vars.borderColor.neutral,
    strong: vars.borderColor.neutralLight,
  }),
};

export const lightModeWeight = styleVariants({
  light: colorModeStyle({
    lightMode: lightModeVars,
  }),
  dark: colorModeStyle({
    lightMode: darkModeVars,
  }),
});

export const darkModeWeight = styleVariants({
  light: colorModeStyle({
    darkMode: lightModeVars,
  }),
  dark: colorModeStyle({
    darkMode: darkModeVars,
  }),
});
