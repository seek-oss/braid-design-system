import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/components/private/Field/Field.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../../themes/vars.css';
export var field = style({}, "field");
export var placeholderColor = style({
  '::placeholder': {
    color: vars.foregroundColor.secondary
  }
}, "placeholderColor");
export var secondaryIconSpace = style({
  paddingRight: vars.touchableSize
}, "secondaryIconSpace"); // This offset is to account for the extra few pixels that the text
// sits off the left of its container. Need to offset this so that
// the white space does not look imbalanced.

var textLeftOffset = '2px';
export var iconSpace = style({
  paddingLeft: calc.subtract(vars.touchableSize, textLeftOffset)
}, "iconSpace");
export var focusOverlay = style({
  selectors: _defineProperty({}, "".concat(field, ":focus ~ &"), {
    opacity: 1
  })
}, "focusOverlay");
export var hoverOverlay = style({
  selectors: _defineProperty({}, "".concat(field, ":hover:not(:disabled) ~ &"), {
    opacity: 1
  })
}, "hoverOverlay");
export var verticalDivider = style({
  width: vars.borderWidth.standard,
  background: vars.borderColor.standard
}, "verticalDivider");

__vanilla_filescope__.endFileScope();