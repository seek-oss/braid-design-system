import { createVar, style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../../css/responsiveStyle';

import { vars } from '../../../themes/vars.css';

const debugColor = createVar();
export const mobileSpaceVar = createVar();
export const tabletSpaceVar = createVar();
export const desktopSpaceVar = createVar();
export const wideSpaceVar = createVar();

export const space = style([
  {
    background: `hsla(${debugColor}, 56%, .2)`,
  },
  responsiveStyle({
    mobile: {
      vars: {
        [debugColor]: mobileSpaceVar,
      },
    },
    tablet: {
      vars: {
        [debugColor]: tabletSpaceVar,
      },
    },
    desktop: {
      vars: {
        [debugColor]: desktopSpaceVar,
      },
    },
    wide: {
      vars: {
        [debugColor]: wideSpaceVar,
      },
    },
  }),
]);

export const text = style({
  fontFamily: vars.fontFamily,
  fontSize: vars.textSize.xsmall.mobile.fontSize,
  fontWeight: vars.textWeight.strong,
  color: `hsla(${debugColor}, 29%, 1)`,
});
