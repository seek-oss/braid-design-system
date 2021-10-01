import { style } from '@vanilla-extract/css';
import { darkMode } from '../../css/atoms/sprinkles.css';

export const hover = style({});

export const lightModeCurrentKeyline = style({
  selectors: {
    [`html:not(${darkMode}) &`]: {
      opacity: 0.3,
    },
  },
});

export const darkModeCurrentKeyline = style({
  selectors: {
    [`html${darkMode} &`]: {
      opacity: 0.3,
    },
  },
});

export const current = style({
  opacity: 0.075,
});

export const background = style({
  selectors: {
    [`${hover}:hover &:not(${current})`]: {
      opacity: 0.5,
    },
  },
});
