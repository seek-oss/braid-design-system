import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/components/Accordion/AccordionItem.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';
export var button = style({}, "button");
export var focusRing = style({
  top: calc.negate(vars.space.xsmall),
  bottom: calc.negate(vars.space.xsmall),
  left: calc.negate(vars.space.xxsmall),
  right: calc.negate(vars.space.xxsmall),
  selectors: _defineProperty({}, "".concat(button, ":focus ~ &"), {
    opacity: 1
  })
}, "focusRing");

__vanilla_filescope__.endFileScope();