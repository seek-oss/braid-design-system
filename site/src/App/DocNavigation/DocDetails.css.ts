import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import tokens from 'braid-src/lib/themes/docs/tokens';
import { vars } from 'braid-src/lib/themes/vars.css';

export const hideBelowPx = tokens.contentWidth.large + 200;

const topOffset = vars.space.large;

export const root = style({
  position: 'sticky',
  top: topOffset,
  maxHeight: calc.subtract('100vh', topOffset),
  alignSelf: 'flex-start',
  width: '240px',
  '@media': {
    [`screen and (max-width: ${hideBelowPx}px)`]: {
      display: 'none',
    },
  },
});
