import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import tokens from 'braid-src/lib/themes/docs/tokens';
import { vars } from 'braid-src/lib/themes/vars.css';

export const hideBelowPx = tokens.contentWidth.large + 200;

export const root = style({
  position: 'sticky',
  top: vars.space.large,
  maxHeight: calc.subtract('100vh', vars.space.medium),
  width: '240px',
  flexShrink: 0,
  '@media': {
    [`screen and (max-width: ${hideBelowPx}px)`]: {
      display: 'none',
    },
  },
});

