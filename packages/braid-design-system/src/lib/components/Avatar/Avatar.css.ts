import { style, styleVariants } from '@vanilla-extract/css';

import { palette } from '../../color/palette';

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

export const enlargedHitArea = style({
  selectors: {
    '&::after': {
      content: '""',
      position: 'absolute',
      minHeight: vars.touchableSize,
      minWidth: vars.touchableSize,
      height: '100%',
      width: '100%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
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

export const overlayScrim = style({
  // Match My Profile hover: SEEK grey 700 at 80%, not a theme surface token.
  opacity: 0,
  background: palette.grey[700],
  transition: 'opacity 200ms ease-in-out',
  '@media': {
    'screen and (prefers-reduced-motion)': {
      transition: 'none',
    },
  },
  selectors: {
    [`${root}:hover &, ${root}:focus-visible &`]: {
      opacity: 0.8,
    },
  },
});

export const overlayIcon = style({
  opacity: 0,
  filter: 'brightness(0) invert(1)',
  transition: 'opacity 200ms ease-in-out',
  '@media': {
    'screen and (prefers-reduced-motion)': {
      transition: 'none',
    },
  },
  selectors: {
    [`${root}:hover &, ${root}:focus-visible &`]: {
      opacity: 1,
    },
  },
});
