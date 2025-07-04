import { style } from '@vanilla-extract/css';

import { virtualTouchable } from '../private/touchable/virtualTouchable.css';

export const closeButton = style([{}, virtualTouchable]);

export const closeButtonHover = style({
  selectors: {
    [`${closeButton}:focus &, ${closeButton}:hover &`]: {
      opacity: 1,
    },
  },
});
