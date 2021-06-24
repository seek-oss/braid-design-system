import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/components/MenuItem/useMenuItem.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
export var menuItem = style({
  whiteSpace: 'nowrap',
  selectors: _defineProperty({}, "&::-moz-focus-inner", {
    border: 0
  })
}, "menuItem");

__vanilla_filescope__.endFileScope();