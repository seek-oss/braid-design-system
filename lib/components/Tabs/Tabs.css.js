import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/components/Tabs/Tabs.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';
export var tab = style({
  selectors: {
    '&::-moz-focus-inner': {
      border: 0
    }
  }
}, "tab");
export var hairlineMarginLeft = style({
  marginLeft: 1
}, "hairlineMarginLeft");
export var nowrap = style({
  whiteSpace: 'nowrap'
}, "nowrap");
export var scroll = style({
  WebkitOverflowScrolling: 'touch',
  overflowX: 'auto',
  overflowY: 'hidden',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  selectors: {
    '&::-webkit-scrollbar': {
      width: 0,
      height: 0
    }
  }
}, "scroll");
export var mask = style({
  maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0, rgba(0,0,0,1) calc(100% - 80px), rgba(0,0,0,0) 100%)'
}, "mask");
export var marginAuto = style({
  marginLeft: 'auto',
  marginRight: 'auto'
}, "marginAuto");
export var tabFocusRing = style({
  margin: vars.borderWidth.large,
  selectors: _defineProperty({}, "".concat(tab, ":focus &"), {
    opacity: 1
  })
}, "tabFocusRing");
export var tabUnderline = style({
  height: 2
}, "tabUnderline");
export var tabUnderlineHover = style({
  selectors: _defineProperty({}, "".concat(tab, ":hover &"), {
    opacity: 1
  })
}, "tabUnderlineHover");
export var tabUnderlineAnimation = style({
  transform: 'translateY(100%)'
}, "tabUnderlineAnimation");
export var tabPanel = style({}, "tabPanel");
export var tabPanelFocusRing = style({
  selectors: _defineProperty({}, "".concat(tabPanel, ":focus > &"), {
    opacity: 1
  })
}, "tabPanelFocusRing");
export var divider = style({
  background: vars.borderColor.standard,
  height: vars.borderWidth.standard
}, "divider");

__vanilla_filescope__.endFileScope();