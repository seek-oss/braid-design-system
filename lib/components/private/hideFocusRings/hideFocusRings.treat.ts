import { style } from 'sku/treat';
import { hideFocusRingsDataAttribute } from './hideFocusRingsDataAttribute';

export const hideFocusRingsClassName = style({
  selectors: {
    [`[${hideFocusRingsDataAttribute}] &`]: {
      opacity: '0 !important',
    },
  },
});
