import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../../themes/vars.css';

export const field = style({});

export const placeholderColor = style({
  '::placeholder': {
    color: vars.foregroundColor.secondary,
  },
});

export const secondaryIconSpace = style({
  paddingRight: vars.touchableSize,
});

// This offset is to account for the extra few pixels that the text
// sits off the left of its container. Need to offset this so that
// the white space does not look imbalanced.
const textLeftOffset = '2px';
export const iconSpace = style({
  paddingLeft: calc.subtract(vars.touchableSize, textLeftOffset),
});

export const focusOverlay = style({
  selectors: {
    [`${field}:focus ~ &`]: {
      opacity: 1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${field}:hover:not(:disabled) ~ &, ${field}:focus ~ &`]: {
      opacity: 1,
    },
  },
});

export const verticalDivider = style({
  width: vars.borderWidth.standard,
  background: vars.borderColor.field,
  opacity: 0.4,
});
