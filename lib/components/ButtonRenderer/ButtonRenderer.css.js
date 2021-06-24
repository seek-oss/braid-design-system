import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _selectors2, _selectors3, _selectors5, _selectors6;

import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/components/ButtonRenderer/ButtonRenderer.css.ts", "braid-design-system");

import { keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../atoms/responsiveStyle';
import { vars } from '../../themes/vars.css';
export var constants = {
  smallButtonPaddingSize: 'xsmall'
};
export var root = style({
  textDecoration: 'none'
}, "root");
export var inverted = style({}, "inverted");
export var lightBg = style({}, "lightBg");
export var lightHoverBg = style({}, "lightHoverBg");
export var backgroundOverlay = style({
  selectors: _defineProperty({}, "".concat(lightBg, " &"), {
    opacity: 0.075
  })
}, "backgroundOverlay");
export var activeOverlay = style({
  selectors: (_selectors2 = {}, _defineProperty(_selectors2, "".concat(root, ":active &"), {
    opacity: 1
  }), _defineProperty(_selectors2, "".concat(lightHoverBg, ":active &"), {
    opacity: 0.1
  }), _selectors2)
}, "activeOverlay");
export var hoverOverlay = style({
  selectors: (_selectors3 = {}, _defineProperty(_selectors3, "".concat(root, ":hover:not(:disabled):not(:active) &"), {
    opacity: 1
  }), _defineProperty(_selectors3, "".concat(lightHoverBg, ":hover:not(:disabled):not(:active) &"), {
    opacity: 0.075
  }), _defineProperty(_selectors3, "".concat(lightHoverBg).concat(inverted, ":hover:not(:disabled):not(:active) &"), {
    opacity: 0.15
  }), _selectors3)
}, "hoverOverlay");
export var focusOverlay = style({
  selectors: _defineProperty({}, "".concat(root, ":focus &"), {
    opacity: 1
  })
}, "focusOverlay");
export var standard = style({}, "standard");
export var small = style({}, "small");

var stylesForBreakpoint = function stylesForBreakpoint(breakpoint, size) {
  var height = size === 'small' ? calc.add(calc.multiply(vars.space[constants.smallButtonPaddingSize], 2), vars.textSize.small[breakpoint].lineHeight) : vars.touchableSize;
  var value = calc(height).subtract(vars.textSize[size][breakpoint].capHeight).divide(2).negate().toString();
  return {
    marginTop: value,
    marginBottom: value
  };
};

export var bleedY = style({
  selectors: (_selectors5 = {}, _defineProperty(_selectors5, "".concat(standard, "&"), responsiveStyle({
    mobile: stylesForBreakpoint('mobile', 'standard'),
    tablet: stylesForBreakpoint('tablet', 'standard')
  })), _defineProperty(_selectors5, "".concat(small, "&"), responsiveStyle({
    mobile: stylesForBreakpoint('mobile', 'small'),
    tablet: stylesForBreakpoint('tablet', 'small')
  })), _selectors5)
}, "bleedY");
var dot1 = keyframes({
  '14%': {
    opacity: 0
  },
  '15%,100%': {
    opacity: 1
  }
}, "dot1");
var dot2 = keyframes({
  '29%': {
    opacity: 0
  },
  '30%,100%': {
    opacity: 1
  }
}, "dot2");
var dot3 = keyframes({
  '44%': {
    opacity: 0
  },
  '45%,100%': {
    opacity: 1
  }
}, "dot3");
export var loadingDot = style({
  animationDuration: '1s',
  animationIterationCount: 'infinite',
  opacity: 0,
  selectors: (_selectors6 = {}, _defineProperty(_selectors6, "&:nth-child(1)", {
    animationName: dot1
  }), _defineProperty(_selectors6, "&:nth-child(2)", {
    animationName: dot2
  }), _defineProperty(_selectors6, "&:nth-child(3)", {
    animationName: dot3
  }), _selectors6)
}, "loadingDot");

__vanilla_filescope__.endFileScope();