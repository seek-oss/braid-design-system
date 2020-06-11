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
    background: theme.color.foreground.secondary,
    height: theme.border.width.standard,
  },
  vertical: {
    background: theme.color.foreground.secondary,
    width: theme.border.width.standard,
  },
}));
