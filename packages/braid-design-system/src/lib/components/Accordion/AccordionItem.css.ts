import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';

export const button = style({});

export const focusRing = style({
  top: calc.negate(vars.space.xsmall),
  bottom: calc.negate(vars.space.xsmall),
  left: calc.negate(vars.space.xxsmall),
  right: calc.negate(vars.space.xxsmall),
  selectors: {
    [`${button}:focus ~ &`]: {
      opacity: 1,
    },
  },
});
