import { style } from '@vanilla-extract/css';

import { colorModeStyle } from '../../../css/colorModeStyle';

import { vars } from '../../../themes/vars.css';

export const divider = style([
  {
    height: vars.borderWidth.standard,
    transform: 'translateY(-50%)',
  },
  colorModeStyle({
    lightMode: { background: vars.borderColor.neutralLight },
    darkMode: { background: vars.borderColor.neutral },
  }),
]);
