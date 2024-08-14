import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { responsiveStyle } from '../../css/responsiveStyle';

const sizeVar = createVar();

export const base = style({
  width: sizeVar,
  height: sizeVar,
});

export const size = styleVariants({
  xsmall: {
    vars: {
      [sizeVar]: '72px',
    },
  },
  small: responsiveStyle({
    mobile: {
      vars: {
        [sizeVar]: '72px',
      },
    },
    tablet: {
      vars: {
        [sizeVar]: '80px',
      },
    },
  }),
  standard: responsiveStyle({
    mobile: {
      vars: {
        [sizeVar]: '80px',
      },
    },
    tablet: {
      vars: {
        [sizeVar]: '96px',
      },
    },
  }),
});
