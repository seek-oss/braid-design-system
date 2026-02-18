import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from 'braid-src/lib/themes/vars.css';

import { contentBlockXLWidth } from '../Navigation/Navigation.css';

const topOffset = vars.space.large;

export const toc = style({
  position: 'sticky',
  top: topOffset,
  maxHeight: calc.subtract('100vh', topOffset),
  alignSelf: 'flex-start',
  minWidth: '250px',
  '@media': {
    [`screen and (max-width: ${contentBlockXLWidth}px)`]: {
      display: 'none',
    },
  },
});

export const tocItem = style ({
  borderLeft: `4px solid ${vars.borderColor.neutralLight}`,
  color: vars.foregroundColor.secondary,
  transition: 'border-color 250ms ease',
  selectors: {
    '&:hover': {
      borderColor: vars.borderColor.neutral,
    },
  },
})

export const tocItemActive = style ({
  color: vars.foregroundColor.neutral,
  borderLeft: `4px solid ${vars.borderColor.neutral}`,
  transition: 'border-color 250ms ease'
})

export const textHover = style({
  transition: 'color 250ms ease',
  selectors: {
    '&:hover': {
      color: vars.foregroundColor.neutral,
    },
  },
})
