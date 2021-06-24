import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("src/components/Column/Column.css.ts", "braid-design-system");

import { style, styleVariants } from '@vanilla-extract/css';
export var column = style({}, "column");
export var columnContent = style({
  selectors: _defineProperty({}, "".concat(column, ":first-child > &"), {
    paddingTop: 0
  })
}, "columnContent");

var getSizeStyle = function getSizeStyle(scale) {
  return {
    flex: "0 0 ".concat(scale * 100, "%")
  };
};

export var width = styleVariants({
  '1/2': getSizeStyle(1 / 2),
  '1/3': getSizeStyle(1 / 3),
  '2/3': getSizeStyle(2 / 3),
  '1/4': getSizeStyle(1 / 4),
  '3/4': getSizeStyle(3 / 4),
  '1/5': getSizeStyle(1 / 5),
  '2/5': getSizeStyle(2 / 5),
  '3/5': getSizeStyle(3 / 5),
  '4/5': getSizeStyle(4 / 5)
}, "width");

__vanilla_filescope__.endFileScope();