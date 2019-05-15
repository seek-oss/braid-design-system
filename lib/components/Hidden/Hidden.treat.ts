import { style } from 'sku/treat';

export const hiddenOnPrint = style({
  '@media': {
    print: {
      display: 'none !important',
    },
  },
});
