import { style } from 'sku/treat';

export const tab = style({
  zIndex: 1,
  selectors: {
    '&::-moz-focus-inner': {
      border: 0,
    },
  },
});

export const hairlineMarginLeft = style({
  marginLeft: 1,
});

export const nowrap = style({
  whiteSpace: 'nowrap',
});

const cropIosScrollbarOffset = 15;
export const scroll = style({
  WebkitOverflowScrolling: 'touch',
  overflowX: 'auto',
  overflowY: 'hidden',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  paddingBottom: cropIosScrollbarOffset,
  clipPath: `inset(0 0 ${cropIosScrollbarOffset}px 0)`,
  marginBottom: -cropIosScrollbarOffset,
  selectors: {
    '&::-webkit-scrollbar': {
      WebkitAppearance: 'none',
    },
  },
});

export const marginAuto = style({
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const tabFocusRing = [
  style({
    zIndex: 1,
  }),
  style((theme) => ({
    margin: theme.border.width.large,
  })),
];

export const tabUnderline = style({
  zIndex: 2,
  height: 2,
});

export const tabUnderlineHover = style({
  opacity: 0,
  selectors: {
    [`${tab}:hover &`]: {
      opacity: 1,
    },
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
