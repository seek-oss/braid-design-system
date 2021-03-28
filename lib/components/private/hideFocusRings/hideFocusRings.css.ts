import { style } from '@vanilla-extract/css';
import { hideFocusRingsDataAttribute } from './hideFocusRingsDataAttribute';

export const hideFocusRingsClassName = style({
  selectors: {
    [`[${hideFocusRingsDataAttribute}] &`]: {
      opacity: '0 !important',
    },
  },
});
