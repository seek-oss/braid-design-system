import { style } from '@mattsjones/css-core';
import { hideFocusRingsDataAttribute } from './hideFocusRingsDataAttribute';

export const hideFocusRingsClassName = style({
  selectors: {
    [`[${hideFocusRingsDataAttribute}] &`]: {
      opacity: '0 !important',
    },
  },
});
