import { createVar, style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../../css/responsiveStyle';

import { vars } from '../../../themes/vars.css';

const backgroundColor = createVar();
export const mobileSpaceVar = createVar();
export const tabletSpaceVar = createVar();
export const desktopSpaceVar = createVar();
export const wideSpaceVar = createVar();

export const space = style([
  {
    fontFamily: vars.fontFamily,
    fontSize: vars.textSize.xsmall.mobile.fontSize,
    fontWeight: vars.textWeight.strong,
    color: backgroundColor,
    '::before': {
      content: '',
      position: 'absolute',
      inset: 0,
      background: backgroundColor,
      opacity: 0.2,
    },
  },
  responsiveStyle({
    mobile: {
      vars: {
        [backgroundColor]: mobileSpaceVar,
      },
    },
    tablet: {
      vars: {
        [backgroundColor]: tabletSpaceVar,
      },
    },
    desktop: {
      vars: {
        [backgroundColor]: desktopSpaceVar,
      },
    },
    wide: {
      vars: {
        [backgroundColor]: wideSpaceVar,
      },
    },
  }),
]);
