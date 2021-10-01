import {
  assignVars,
  createThemeContract,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { darkMode } from '../../../css/atoms/sprinkles.css';

const vars = createThemeContract({
  background: null,
  borderColor: null,
  labelColor: null,
  lineColor: null,
});

const lightContextVars = assignVars(vars, {
  background: 'hsla(0, 0%, 20%, 0.08)',
  borderColor: 'hsla(0, 0%, 20%, 0.3)',
  labelColor: 'hsla(0, 0%, 20%, 0.4)',
  lineColor: 'hsla(0, 0%, 20%, 0.1)',
});

const darkContextVars = assignVars(vars, {
  background: 'hsla(0, 0%, 100%, 0.05)',
  borderColor: 'hsla(0, 0%, 100%, 0.4)',
  labelColor: 'hsla(0, 0%, 100%, 0.6)',
  lineColor: 'hsla(0, 0%, 100%, 0.2)',
});

export const lightTheme = styleVariants({
  light: {
    selectors: {
      [`html:not(${darkMode}) &`]: {
        vars: lightContextVars,
      },
    },
  },
  dark: {
    selectors: {
      [`html:not(${darkMode}) &`]: {
        vars: darkContextVars,
      },
    },
  },
});

export const darkTheme = styleVariants({
  light: {
    selectors: {
      [`html${darkMode} &`]: {
        vars: lightContextVars,
      },
    },
  },
  dark: {
    selectors: {
      [`html${darkMode} &`]: {
        vars: darkContextVars,
      },
    },
  },
});

const borderWidth = '2px';

export const box = style({
  background: vars.background,
  border: `${borderWidth} solid ${vars.borderColor}`,
});

export const label = style({ color: vars.labelColor });

export const line = style({
  strokeWidth: borderWidth,
  stroke: vars.lineColor,
});
