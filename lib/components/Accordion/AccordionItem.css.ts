import { style } from '@mattsjones/css-core';
import { nextTheme, negate } from '../../themes/apac/nextTheme.css';

export const button = style({});

export const focusRing = style({
  top: negate(nextTheme.vars.space.xsmall),
  bottom: negate(nextTheme.vars.space.xsmall),
  left: negate(nextTheme.vars.space.xxsmall),
  right: negate(nextTheme.vars.space.xxsmall),
  selectors: {
    [`${button}:focus ~ &`]: {
      opacity: 1,
    },
  },
});
