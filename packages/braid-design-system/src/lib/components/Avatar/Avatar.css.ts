import { style, styleVariants } from '@vanilla-extract/css';

import { colorModeStyle } from '../../css/colorModeStyle';

import { vars } from '../../themes/vars.css';

const avatarSizeInPx = {
  xlarge: 96,
  large: 64,
  standard: 48,
  small: 32,
  xsmall: 24,
} as const;

export const size = styleVariants(avatarSizeInPx, (pixels) => ({
  height: pixels,
  width: pixels,
  boxSizing: 'border-box',
}));

export const border = style({
  borderWidth: vars.borderWidth.standard,
  borderStyle: 'solid',
  ...colorModeStyle({
    lightMode: {
      borderColor: vars.backgroundColor.surface,
    },
    darkMode: {
      borderColor: vars.backgroundColor.surface,
    },
  }),
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: 0,
  transition: 'opacity 200ms ease-in-out',
  '@media': {
    'screen and (prefers-reduced-motion)': {
      transition: 'none',
    },
  },
});

export const imageLoaded = style({
  opacity: 1,
});
