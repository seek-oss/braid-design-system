import { style } from '@vanilla-extract/css';

import { colorModeStyle } from '../../../css/colorModeStyle';

import { vars } from '../../../themes/vars.css';

export const product = style({
  fontWeight: 200,
  fontFamily:
    'Roboto, Helvetica Neue, HelveticaNeue, Helvetica, Arial, sans-serif',
  fontSize: 24,
  whiteSpace: 'nowrap',
  marginTop: -4,
  marginLeft: 6,
  textTransform: 'lowercase',
});

export const divider = style([
  {
    height: vars.borderWidth.standard,
    transform: 'translateY(50%)',
  },
  colorModeStyle({
    lightMode: { background: vars.borderColor.neutralLight },
    darkMode: { background: vars.borderColor.neutral },
  }),
]);
