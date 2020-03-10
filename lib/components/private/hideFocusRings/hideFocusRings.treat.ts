import { style } from 'sku/treat';
import { hideFocusRingsRootClass } from './hideFocusRingsRootClass';

export const hideFocusRingsClass = style({
  selectors: {
    [`.${hideFocusRingsRootClass} &`]: {
      opacity: '0 !important',
    },
  },
});
