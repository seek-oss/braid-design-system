import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope(
  'lib/components/Alert/Alert.css.ts',
  'braid-design-system',
);

import { style } from '@vanilla-extract/css';
export var toneBorder = style(
  {
    opacity: 0.3,
  },
  'toneBorder',
);
export var cautionBorder = style(
  {
    opacity: 0.6,
  },
  'cautionBorder',
);

__vanilla_filescope__.endFileScope();
