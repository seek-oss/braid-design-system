import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("src/components/private/hideFocusRings/hideFocusRings.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
import { hideFocusRingsDataAttribute } from './hideFocusRingsDataAttribute';
export var hideFocusRingsClassName = style({
  selectors: _defineProperty({}, "[".concat(hideFocusRingsDataAttribute, "] &"), {
    opacity: '0 !important'
  })
}, "hideFocusRingsClassName");

__vanilla_filescope__.endFileScope();