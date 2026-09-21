import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/vars.css';

const avatarSizeInPx = {
  xsmall: 24,
  small: 32,
  medium: 40,
  standard: 48,
  large: 64,
  xlarge: 80,
  xxlarge: 96,
} as const;

export const root = style({
  position: 'relative',
});

export const size = styleVariants(avatarSizeInPx, (pixels) => ({
  height: pixels,
  width: pixels,
  boxSizing: 'border-box',
}));

export const clickable = style({
  cursor: 'pointer',
});

export const keyline = style({
  borderWidth: vars.borderWidth.standard,
  borderStyle: 'solid',
  borderColor: vars.backgroundColor.surface,
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
