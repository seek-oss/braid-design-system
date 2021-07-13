import { style } from '@vanilla-extract/css';

export const button = style({
  ':hover': {
    zIndex: 1,
  },
  selectors: {
    [`&::-moz-focus-inner`]: {
      border: 0,
    },
  },
});

export const forceActive = style({});
export const darkBackground = style({});

export const hoverOverlay = style({
  selectors: {
    [`${button}:hover &, ${button}:focus &`]: {
      opacity: 1,
    },
    [`${button}:hover &${darkBackground}, ${button}:focus &${darkBackground}`]:
      {
        opacity: 0.2,
      },
    [`${button}:active &, ${forceActive}&`]: {
      opacity: 0.8,
    },
    [`${button}:active &${darkBackground}, ${forceActive}&${darkBackground}`]: {
      opacity: 0.075,
    },
  },
});

export const focusOverlay = style({
  selectors: {
    [`${button}:focus &`]: {
      opacity: 1,
    },
    [`${button}:focus &${darkBackground}`]: {
      opacity: 0.15,
    },
  },
});
