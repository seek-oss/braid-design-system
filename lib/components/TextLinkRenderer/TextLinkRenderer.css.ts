import { style } from '@mattsjones/css-core';
import { themeVars } from '../../themes/themeVars.css';

export const underlineAlways = style({
  textDecoration: 'underline',
});

export const underlineOnHoverOnly = style({
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const visited = style({
  ':visited': {
    color: themeVars.color.foreground.linkVisited,
  },
});

export const button = style({});
export const focusOverlay = style({
  selectors: {
    [`${button}:focus ~ &`]: {
      opacity: 1,
    },
  },
});
