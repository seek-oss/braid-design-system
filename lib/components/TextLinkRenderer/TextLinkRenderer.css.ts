import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';

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
    color: vars.foregroundColor.linkVisited,
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
