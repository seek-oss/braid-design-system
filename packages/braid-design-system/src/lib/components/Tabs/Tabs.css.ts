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

export const cropToIconX = style({
  marginLeft: -2,
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

const initialUnderlineWidth = 10;
export const tabUnderline = style({
  height: vars.borderWidth.large,
  background: 'currentcolor',
  width: initialUnderlineWidth,
  transformOrigin: '0 0',
  transition: 'transform .3s ease',
  transform: `translateZ(0) translateX(${calc(underlineLeft).multiply(
    '1px',
  )}) scaleX(${calc(underlineWidth).divide(initialUnderlineWidth)})`,
});

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
