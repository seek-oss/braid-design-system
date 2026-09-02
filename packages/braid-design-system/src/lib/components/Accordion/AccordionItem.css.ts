import { createVar, fallbackVar, style } from '@vanilla-extract/css';

import { atoms } from '../../css/atoms/atoms';

import { vars } from '../../themes/vars.css';
import { virtualTouchable } from '../private/touchable/virtualTouchable.css';

export const button = style([{}, virtualTouchable]);

export const focusRing = style([
  {
    outlineOffset: vars.space.xxsmall,
  },
  atoms({
    borderRadius: 'small',
  }),
]);

export const animationDuration = createVar();

const duration = fallbackVar(animationDuration, '200ms');

const reducedMotion = {
  '@media': {
    'screen and (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
} as const;

/*
  Animate open/close with grid 0fr → 1fr. Box sprinkles have no `display:
  grid`, so the grid lives here. Duration is set per item from content
  height (see AccordionItem). The clip layer has overflow hidden and no
  padding so the row can collapse to zero; spacing lives on a nested
  wrapper. When open, overflow becomes visible so Capsize line trims are
  not cropped.
  https://css-tricks.com/css-grid-can-do-auto-height-transitions/
*/
export const content = style({
  display: 'grid',
  gridTemplateRows: '0fr',
  visibility: 'hidden',
  transition: `grid-template-rows ${duration} ease, visibility 0s linear ${duration}`,
  ...reducedMotion,
});

export const contentExpanded = style({
  gridTemplateRows: '1fr',
  visibility: 'visible',
  transition: `grid-template-rows ${duration} ease, visibility 0s linear 0s`,
  ...reducedMotion,
});

export const contentInner = style({
  minHeight: 0,
  overflow: 'hidden',
  selectors: {
    [`${contentExpanded} > &`]: {
      overflow: 'visible',
      transition: `overflow 0s linear ${duration}`,
      ...reducedMotion,
    },
  },
});
