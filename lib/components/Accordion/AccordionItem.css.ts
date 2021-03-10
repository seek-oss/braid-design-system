import { style } from '@mattsjones/css-core';
import { theme, negate } from '../../themes/apac/nextTheme.css';

export const button = style({});

export const focusRing = style({
  top: negate(theme.space.xsmall),
  bottom: negate(theme.space.xsmall),
  left: negate(theme.space.xxsmall),
  right: negate(theme.space.xxsmall),
  selectors: {
    [`${button}:focus ~ &`]: {
      opacity: 1,
    },
  },
});
