import { style } from '@vanilla-extract/css';

import { colorModeStyle } from '../../../css/colorModeStyle';

export const root = style({
  display: 'block',
  height: '40px',
});

export const wordmark = style(
  colorModeStyle({
    lightMode: {
      fill: '#000',
    },
    darkMode: {
      fill: '#fff',
    },
  }),
);

export const circle = style(
  colorModeStyle({
    lightMode: {
      fill: '#0D3880',
    },
    darkMode: {
      fill: '#fff',
    },
  }),
);

export const circleBackground = style(
  colorModeStyle({
    lightMode: {
      fill: '#fff',
    },
    darkMode: {
      fill: 'transparent',
    },
  }),
);
