import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from 'braid-src/lib/themes/vars.css';

import { contentBlockXLWidth } from '../Navigation/Navigation.css';

const topOffset = vars.space.large;

export const root = style({
  position: 'sticky',
  top: topOffset,
  maxHeight: calc.subtract('100vh', topOffset),
  alignSelf: 'flex-start',
  width: '300px',
  '@media': {
    [`screen and (max-width: ${contentBlockXLWidth}px)`]: {
      display: 'none',
    },
  },
});

export const tocItemLabel = style({
  color: vars.foregroundColor.secondary,
  selectors: {
    '&:hover': {
      color: vars.foregroundColor.neutral,
    },
  },
});

export const tocItemLabelActive = style({
  color: vars.foregroundColor.promote,
});
