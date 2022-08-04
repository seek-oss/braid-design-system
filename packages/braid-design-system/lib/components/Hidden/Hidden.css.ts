import { style } from '@vanilla-extract/css';

export const hiddenOnPrint = style({
  '@media': {
    print: {
      display: 'none !important',
    },
  },
});
