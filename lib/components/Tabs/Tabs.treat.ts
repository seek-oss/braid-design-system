import { style, styleMap } from 'sku/treat';

export const tab = style({
  zIndex: 1,
  selectors: {
    '&::-moz-focus-inner': {
      border: 0,
    },
  },
});

export const nowrap = style({
  whiteSpace: 'nowrap',
});

export const scroll = style({
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

export const marginAuto = style({
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const tabFocusRing = style({
  zIndex: 1,
});

export const tabHover = style({
  opacity: 0,
  selectors: {
    [`${tab}:hover &`]: {
      opacity: 1,
    },
  },
});

export const tabUnderline = styleMap({
  selected: {
    zIndex: 2,
    height: 2,
  },
  hover: {
    zIndex: 2,
    height: 1,
  },
});

export const tabUnderlineAnimation = style({
  transform: 'translateY(100%)',
});

export const tabPanel = style({});

export const tabPanelFocusRing = style({
  zIndex: 1,
  selectors: {
    [`${tabPanel}:focus &`]: {
      opacity: 1,
    },
  },
});

export const divider = style((theme) => ({
  zIndex: 1,
  background: theme.border.color.standard,
  height: theme.border.width.standard,
}));
