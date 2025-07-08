import { style } from '@vanilla-extract/css';

import { atoms } from '../../css/atoms/atoms';
import { colorModeStyle } from '../../css/colorModeStyle';

export const borderRadius = 'standard';

export const focusRing = atoms({
  display: 'block',
  outline: 'focus',
  borderRadius,
});

export const hover = style({});

export const lightModeCurrentKeyline = style(
  colorModeStyle({
    lightMode: {
      opacity: 0.3,
    },
  }),
);

export const darkModeCurrentKeyline = style(
  colorModeStyle({
    darkMode: {
      opacity: 0.3,
    },
  }),
);

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
