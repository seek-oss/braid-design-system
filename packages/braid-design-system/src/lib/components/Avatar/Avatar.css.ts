import { style, styleVariants } from '@vanilla-extract/css';

import { px } from '../../utils/px';

import { vars } from '../../themes/vars.css';

const avatarSizeInPx = {
  xsmall: 24,
  small: 32,
  standard: 48,
  large: 64,
  xlarge: 80,
  xxlarge: 96,
} as const;

export const size = styleVariants(avatarSizeInPx, (pixels) => ({
  height: pixels,
  width: `${px(pixels)} !important`,
}));

export const keyline = style({
  borderWidth: vars.borderWidth.standard,
  borderStyle: 'solid',
  borderColor: vars.backgroundColor.surface,
});

export const image = style({
  objectFit: 'cover',
  transition: 'opacity 200ms ease-in-out',
  '@media': {
    'screen and (prefers-reduced-motion)': {
      transition: 'none',
    },
  },
});
