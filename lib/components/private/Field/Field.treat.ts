import { style, styleMap } from 'sku/treat';

export const field = style({
  outline: 'none',
});

export const placeholderColor = style(theme => ({
  '::placeholder': {
    color: theme.color.foreground.secondary,
  },
}));

export const clearButtonSpace = style(theme => ({
  paddingRight: theme.grid * theme.touchableSize,
}));

// This offset is to account for the extra few pixels that the text
// sits off the left of its container. Need to offset this so that
// the white space does not look imbalanced.
const textLeftOffset = 2;
export const iconSpace = style(theme => ({
  paddingLeft: theme.grid * theme.touchableSize - textLeftOffset,
}));

export const icon = style({
  top: 0,
  left: 0,
});

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
