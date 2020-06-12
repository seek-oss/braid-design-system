import { style, styleMap } from 'sku/treat';

export const tab = style({});

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

export const tabPanel = style({});

export const tabPanelFocusRing = style({
  zIndex: 1,
  selectors: {
    [`${tabPanel}:focus &`]: {
      opacity: 1,
    },
  },
});

export const divider = styleMap((theme) => ({
  horizontal: {
    zIndex: 1,
    background: theme.border.color.standard,
    height: theme.border.width.standard,
  },
  vertical: {
    zIndex: 1,
    background: theme.border.color.standard,
    width: theme.border.width.standard,
  },
}));
