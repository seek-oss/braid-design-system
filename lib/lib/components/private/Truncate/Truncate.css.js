import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("src/components/private/Truncate/Truncate.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
export var truncate = style({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
}, "truncate");

__vanilla_filescope__.endFileScope();