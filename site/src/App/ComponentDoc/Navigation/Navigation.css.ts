import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { darkMode } from '../../../../../lib/css/atoms/sprinkles.css';
import { vars } from '../../../../../lib/themes/vars.css';

const activeUnderlineVar = createVar();

export const activeUnderline = style({
  height: vars.borderWidth.large,
  background: activeUnderlineVar,
});

export const inactiveUnderlineCorrection = style({
  marginTop: calc.negate(vars.borderWidth.standard),
});

export const centerHorizontally = style({
  left: '50%',
  transform: 'translateX(-50%)',
});

export const activeUnderlineColor = styleVariants({
  light: {
    selectors: {
      [`html:not(${darkMode}) &`]: {
        vars: {
          [activeUnderlineVar]: vars.borderColor.neutral,
        },
      },
    },
  },
  dark: {
    selectors: {
      [`html${darkMode} &`]: {
        vars: {
          [activeUnderlineVar]: vars.borderColor.neutralLight,
        },
      },
    },
  },
});
