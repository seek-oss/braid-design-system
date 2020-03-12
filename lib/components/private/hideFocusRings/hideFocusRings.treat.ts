import { style } from 'sku/treat';
import { hideFocusRingsDataAttribute } from './HideFocusRingsRoot';

export const hideFocusRingsClass = style({
  selectors: {
    [`[${hideFocusRingsDataAttribute}] &`]: {
      opacity: '0 !important',
    },
  },
});
