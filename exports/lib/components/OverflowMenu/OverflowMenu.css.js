import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope(
  'lib/components/OverflowMenu/OverflowMenu.css.ts',
  'braid-design-system',
);

import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';
const OVERFLOW_ICON_WIDTH = '4px';
const OVERFLOW_ICON_HEIGHT = '14px';
const circleSize = vars.textSize.standard.mobile.lineHeight;
const offsetX = calc(circleSize)
  .subtract(OVERFLOW_ICON_WIDTH)
  .divide(2)
  .negate();
const offsetY = calc(circleSize)
  .subtract(OVERFLOW_ICON_HEIGHT)
  .divide(2)
  .negate();
export var triggerOffset = style(
  {
    margin: ''.concat(offsetY, ' ').concat(offsetX),
  },
  'triggerOffset',
);

__vanilla_filescope__.endFileScope();
