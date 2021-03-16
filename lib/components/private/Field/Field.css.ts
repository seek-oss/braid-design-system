import { style } from '@mattsjones/css-core';
import { subtract } from '@mattsjones/css-utils';
import { themeVars } from '../../../themes/themeVars.css';

export const field = style({});

export const placeholderColor = style({
  '::placeholder': {
    color: themeVars.color.foreground.secondary,
  },
});

export const secondaryIconSpace = style({
  paddingRight: themeVars.touchableSize,
});

// This offset is to account for the extra few pixels that the text
// sits off the left of its container. Need to offset this so that
// the white space does not look imbalanced.
const textLeftOffset = '2px';
export const iconSpace = style({
  paddingLeft: subtract(themeVars.touchableSize, textLeftOffset),
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
    [`${field}:hover:not(:disabled) ~ &`]: {
      opacity: 1,
    },
  },
});

export const verticalDivider = style({
  width: themeVars.border.width.standard,
  background: themeVars.border.color.standard,
});
