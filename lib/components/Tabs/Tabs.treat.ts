import { style } from 'sku/treat';

export const tab = style({
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

export const tabFocusRing = [
  style({
    selectors: {
      [`${tab}:focus &`]: {
        opacity: 1,
      },
    },
  }),
  style((theme) => ({
    margin: theme.border.width.large,
  })),
];

export const tabUnderline = style({
  height: 2,
});

export const tabUnderlineHover = style({
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
  selectors: {
    [`${tabPanel}:focus > &`]: {
      opacity: 1,
    },
  },
});

export const divider = style((theme) => ({
  background: theme.border.color.standard,
  height: theme.border.width.standard,
}));
