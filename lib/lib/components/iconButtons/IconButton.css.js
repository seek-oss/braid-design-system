import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _selectors2, _selectors3;

import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("src/components/iconButtons/IconButton.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
export var button = style({
  ':hover': {
    zIndex: 1
  },
  selectors: _defineProperty({}, "&::-moz-focus-inner", {
    border: 0
  })
}, "button");
export var forceActive = style({}, "forceActive");
export var darkBackground = style({}, "darkBackground");
export var hoverOverlay = style({
  selectors: (_selectors2 = {}, _defineProperty(_selectors2, "".concat(button, ":hover &, ").concat(button, ":focus &"), {
    opacity: 1
  }), _defineProperty(_selectors2, "".concat(button, ":hover &").concat(darkBackground, ", ").concat(button, ":focus &").concat(darkBackground), {
    opacity: 0.2
  }), _defineProperty(_selectors2, "".concat(button, ":active &, ").concat(forceActive, "&"), {
    opacity: 0.8
  }), _defineProperty(_selectors2, "".concat(button, ":active &").concat(darkBackground, ", ").concat(forceActive, "&").concat(darkBackground), {
    opacity: 0.075
  }), _selectors2)
}, "hoverOverlay");
export var focusOverlay = style({
  selectors: (_selectors3 = {}, _defineProperty(_selectors3, "".concat(button, ":focus &"), {
    opacity: 1
  }), _defineProperty(_selectors3, "".concat(button, ":focus &").concat(darkBackground), {
    opacity: 0.15
  }), _selectors3)
}, "focusOverlay");

__vanilla_filescope__.endFileScope();