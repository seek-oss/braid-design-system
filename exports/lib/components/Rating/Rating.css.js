import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope(
  'lib/components/Rating/Rating.css.ts',
  'braid-design-system',
);

import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';
export var starColor = style(
  {
    color: vars.foregroundColor.rating,
  },
  'starColor',
);
export var starSpacing = style(
  {
    paddingRight: '1px',
  },
  'starSpacing',
);
export var textSpacing = style(
  {
    paddingLeft: '0.4em',
  },
  'textSpacing',
);

__vanilla_filescope__.endFileScope();
