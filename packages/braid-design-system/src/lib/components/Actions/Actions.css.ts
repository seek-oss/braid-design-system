import { globalStyle, style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';

import { fitContentStyleRule } from '../Inline/Inline.css';

export const actionsBreakpoint = 'tablet';

export const root = style(
  responsiveStyle({
    mobile: {
      alignSelf: 'stretch',
    },
    [actionsBreakpoint]: {
      alignSelf: 'auto',
    },
  }),
);

globalStyle(
  `${root} > *`,
  responsiveStyle({
    [actionsBreakpoint]: fitContentStyleRule,
  }),
);
