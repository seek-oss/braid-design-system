import { style } from '@mattsjones/css-core';

export const hiddenOnPrint = style({
  '@media': {
    print: {
      display: 'none !important',
    },
  },
});
