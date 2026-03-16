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

export const tocItem = style({
  borderLeft: `4px solid ${vars.borderColor.neutralLight}`,
  color: vars.foregroundColor.secondary,
  transition: 'border-color 250ms ease',
  display: 'block',
  paddingLeft: vars.space.medium,
  paddingTop: vars.space.small,
  paddingBottom: vars.space.small,
  selectors: {
    '&:hover': {
      borderColor: vars.borderColor.neutral,
    },
  },
});

export const tocItemChild = style({
  paddingLeft: vars.space.large,
});

export const tocItemActive = style({
  color: vars.foregroundColor.neutral,
  borderColor: vars.borderColor.neutral,
});

export const textHover = style({
  transition: 'color 250ms ease',
  selectors: {
    '&:hover': {
      color: vars.foregroundColor.neutral,
    },
  },
});

// Subtract the height of the sticky offset, the cap height of the text, and the gap between the text and the ToC.
export const tocHeightSet = style({
  maxHeight: calc.subtract('100vh', topOffset,vars.textSize.standard.mobile.capHeight, vars.space.medium),
});
