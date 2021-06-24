import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/components/Hidden/Hidden.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
export var hiddenOnPrint = style({
  '@media': {
    print: {
      display: 'none !important'
    }
  }
}, "hiddenOnPrint");

__vanilla_filescope__.endFileScope();