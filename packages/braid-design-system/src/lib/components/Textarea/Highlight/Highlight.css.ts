import { style } from '@vanilla-extract/css';

import { atoms } from '../../../css/atoms/atoms';
import { colorModeStyle } from '../../../css/colorModeStyle';

import { vars } from '../../../themes/vars.css';

const space = '2px';

export const root = style([
  atoms({ borderRadius: 'small' }),
  {
    padding: `0 ${space}`,
    margin: `0 -${space}`,
    textDecoration: 'underline',
    textDecorationStyle: 'wavy',
    textDecorationSkipInk: 'none',
    textDecorationThickness: 2,
    textUnderlineOffset: 2,
  },
]);

export const critical = style(
  colorModeStyle({
    lightMode: {
      textDecorationColor: vars.borderColor.critical,
      background: vars.backgroundColor.criticalLight,
    },
    darkMode: {
      textDecorationColor: vars.borderColor.criticalLight,
    },
  }),
);

export const caution = style([
  {
    textDecorationColor: vars.borderColor.caution,
  },
  colorModeStyle({
    lightMode: {
      background: vars.backgroundColor.cautionLight,
    },
  }),
]);
