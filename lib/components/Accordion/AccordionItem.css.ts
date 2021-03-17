import { style } from '@mattsjones/css-core';
import { negate } from '@mattsjones/css-utils';
import { themeVars } from '../../themes/themeVars.css';

export const button = style({});

export const focusRing = style({
  top: negate(themeVars.space.xsmall),
  bottom: negate(themeVars.space.xsmall),
  left: negate(themeVars.space.xxsmall),
  right: negate(themeVars.space.xxsmall),
  selectors: {
    [`${button}:focus ~ &`]: {
      opacity: 1,
    },
  },
});
