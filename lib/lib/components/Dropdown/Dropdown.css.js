import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("src/components/Dropdown/Dropdown.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';
export var field = style({
  paddingRight: vars.touchableSize
}, "field");

__vanilla_filescope__.endFileScope();