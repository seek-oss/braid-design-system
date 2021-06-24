import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/components/private/Placeholder/Placeholder.css.ts", "braid-design-system");

import { createTheme, style } from '@vanilla-extract/css';

const _createTheme = createTheme({
  background: 'hsla(0, 0%, 20%, 0.08)',
  borderColor: 'hsla(0, 0%, 20%, 0.3)',
  labelColor: 'hsla(0, 0%, 20%, 0.4)',
  lineColor: 'hsla(0, 0%, 20%, 0.1)'
}, 'lightTheme', "_createTheme"),
    _createTheme2 = _slicedToArray(_createTheme, 2),
    lightTheme = _createTheme2[0],
    vars = _createTheme2[1];

export { lightTheme, vars };
export var darkTheme = createTheme(vars, {
  background: 'hsla(0, 0%, 100%, 0.35)',
  borderColor: 'hsla(0, 0%, 100%, 0.8)',
  labelColor: 'hsla(0, 0%, 100%, 0.8)',
  lineColor: 'hsla(0, 0%, 100%, 0.4)'
}, "darkTheme");
const borderWidth = '2px';
export var box = style({
  background: vars.background,
  border: "".concat(borderWidth, " solid ").concat(vars.borderColor)
}, "box");
export var label = style({
  color: vars.labelColor
}, "label");
export var line = style({
  strokeWidth: borderWidth,
  stroke: vars.lineColor
}, "line");

__vanilla_filescope__.endFileScope();