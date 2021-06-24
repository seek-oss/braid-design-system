import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope(
  'lib/components/List/List.css.ts',
  'braid-design-system',
);

import { style } from '@vanilla-extract/css';
export var currentColor = style(
  {
    background: 'currentColor',
  },
  'currentColor',
);
const large = style(
  {
    width: 5,
    height: 5,
  },
  'large',
);
const standard = style(
  {
    width: 4,
    height: 4,
  },
  'standard',
);
const xsmall = style(
  {
    width: 3,
    height: 3,
  },
  'xsmall',
);
export var size = {
  large,
  standard,
  small: standard,
  xsmall,
};
const dotWidth = 0.4;
export var minCharacterWidth = [
  style(
    {
      minWidth: ''.concat(1 + dotWidth, 'ch'),
    },
    'minCharacterWidth',
  ),
  style(
    {
      minWidth: ''.concat(2 + dotWidth, 'ch'),
    },
    'minCharacterWidth',
  ),
];
export var trimGutter = style(
  {
    marginRight: ''.concat(-dotWidth, 'ch'),
  },
  'trimGutter',
);

__vanilla_filescope__.endFileScope();
