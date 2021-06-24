import _defineProperty from '@babel/runtime/helpers/defineProperty';
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope(
  'lib/components/TextLinkRenderer/TextLinkRenderer.css.ts',
  'braid-design-system',
);

import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';
export var underlineAlways = style(
  {
    textDecoration: 'underline',
  },
  'underlineAlways',
);
export var underlineOnHoverOnly = style(
  {
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  'underlineOnHoverOnly',
);
export var visited = style(
  {
    ':visited': {
      color: vars.foregroundColor.linkVisited,
    },
  },
  'visited',
);
export var button = style({}, 'button');
export var focusOverlay = style(
  {
    selectors: _defineProperty({}, ''.concat(button, ':focus ~ &'), {
      opacity: 1,
    }),
  },
  'focusOverlay',
);

__vanilla_filescope__.endFileScope();
