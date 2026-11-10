import { style } from '@vanilla-extract/css';

import { content } from '../private/collapsibleHeight.css';

// Marker class so `display: none` cannot target Accordion, which shares
// `content` + `contentClosed`. Combined with `content` to beat `display: grid`.
export const hideWhenClosed = style({
  selectors: {
    [`${content}&`]: {
      display: 'none',
    },
  },
});
