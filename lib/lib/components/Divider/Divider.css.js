import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("src/components/Divider/Divider.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';
export var base = style({
  height: vars.borderWidth.standard
}, "base");
export var weight = {
  regular: style({
    background: vars.borderColor.standard
  }, "weight_regular"),
  strong: style({
    background: vars.foregroundColor.neutral
  }, "weight_strong")
};

__vanilla_filescope__.endFileScope();