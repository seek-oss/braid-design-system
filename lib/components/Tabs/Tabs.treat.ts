import { style, styleMap } from 'sku/treat';

export const tabFocusRing = style({
  zIndex: 1,
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
    background: theme.border.color.standard,
    height: theme.border.width.standard,
  },
  vertical: {
    background: theme.border.color.standard,
    width: theme.border.width.standard,
  },
}));
