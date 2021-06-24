import _defineProperty from '@babel/runtime/helpers/defineProperty';
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope(
  'lib/components/Pagination/Pagination.css.ts',
  'braid-design-system',
);

import { style } from '@vanilla-extract/css';
export var hover = style({}, 'hover');
export var currentKeyline = style(
  {
    opacity: 0.3,
  },
  'currentKeyline',
);
export var current = style(
  {
    opacity: 0.075,
  },
  'current',
);
export var background = style(
  {
    selectors: _defineProperty(
      {},
      ''.concat(hover, ':hover &:not(').concat(current, ')'),
      {
        opacity: 0.5,
      },
    ),
  },
  'background',
);

__vanilla_filescope__.endFileScope();
