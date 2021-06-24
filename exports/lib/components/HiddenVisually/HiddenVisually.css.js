import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope(
  'lib/components/HiddenVisually/HiddenVisually.css.ts',
  'braid-design-system',
);

import { style } from '@vanilla-extract/css';
export var root = style(
  {
    width: 1,
    height: 1,
    clip: 'rect(1px, 1px, 1px, 1px)',
    whiteSpace: 'nowrap',
  },
  'root',
);

__vanilla_filescope__.endFileScope();
