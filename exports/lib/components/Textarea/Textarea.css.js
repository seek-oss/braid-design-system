import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope(
  'lib/components/Textarea/Textarea.css.ts',
  'braid-design-system',
);

import { calc } from '@vanilla-extract/css-utils';
import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';
export var field = style(
  {
    resize: 'vertical',
    background: 'transparent',
    minHeight: calc.multiply(vars.grid, 15),
  },
  'field',
);
export var highlights = style(
  {
    color: 'transparent !important',
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap',
    ':after': {
      content: '"\\A"',
    },
  },
  'highlights',
);

__vanilla_filescope__.endFileScope();
