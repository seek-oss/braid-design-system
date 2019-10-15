import { style, styleMap } from 'sku/treat';

export const field = style({
  outline: 'none',
});

export const clearButtonSpace = style(theme => ({
  paddingRight: theme.grid * theme.touchableSize,
}));

export const clearButton = style({
  top: 0,
  right: 0,
});

export const clearButtonVisibility = styleMap({
  hidden: { opacity: 0 },
  visible: { opacity: 100 },
});

export const focusOverlay = style({
  selectors: {
    [`${field}:focus ~ &`]: {
      opacity: 1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${field}:hover:not(:disabled) ~ &`]: {
      opacity: 1,
    },
  },
});
