import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { colorModeStyle } from '../../css/colorModeStyle';

import { vars } from '../../themes/vars.css';

export const tab = style({
  selectors: {
    '&::-moz-focus-inner': {
      border: 0,
    },
  },
});

export const hoveredTab = style({
  selectors: {
    [`${tab}:hover &`]: {
      opacity: 1,
    },
  },
});

export const nowrap = style({
  whiteSpace: 'nowrap',
});

export const scroll = style({
  WebkitOverflowScrolling: 'touch',
  overflowX: 'auto',
  overflowY: 'hidden',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  selectors: {
    '&::-webkit-scrollbar': {
      width: 0,
      height: 0,
    },
  },
});

export const mask = style({
  maskImage:
    'linear-gradient(90deg, rgba(0,0,0,1) 0, rgba(0,0,0,1) calc(100% - 80px), rgba(0,0,0,0) 100%)',
});

export const marginAuto = style({
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const tabFocusRing = style({
  margin: vars.borderWidth.large,
  selectors: {
    [`${tab}:focus &`]: {
      opacity: 1,
    },
  },
});

export const underlineLeft = createVar();
export const underlineWidth = createVar();

const initialUnderlineWidth = 100;
const underlineRadius = createVar();
const underlineScale = createVar();
export const tabUnderline = style({
  vars: {
    [underlineRadius]: calc(vars.borderRadius.small)
      .divide(underlineScale)
      .toString(),
    [underlineScale]: calc(underlineWidth)
      .divide(initialUnderlineWidth)
      .toString(),
  },
  height: vars.borderWidth.large,
  borderTopLeftRadius: underlineRadius,
  borderTopRightRadius: underlineRadius,
  width: initialUnderlineWidth,
  transformOrigin: '0 0',
  transition: 'transform .3s ease',
  transform: `translateZ(0) translateX(${calc(underlineLeft).multiply(
    '1px',
  )}) scaleX(${underlineScale})`,
});

export const tabUnderlineActiveDarkMode = style(
  colorModeStyle({
    darkMode: {
      background: vars.borderColor.formAccentLight,
    },
  }),
);

export const tabPanel = style({});

export const tabPanelFocusRing = style({
  selectors: {
    [`${tabPanel}:focus > &`]: {
      opacity: 1,
    },
  },
});

export const divider = style({
  height: vars.borderWidth.standard,
});
