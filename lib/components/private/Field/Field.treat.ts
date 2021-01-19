import { style } from 'sku/treat';

export const field = style({});

export const placeholderColor = style((theme) => ({
  '::placeholder': {
    color: theme.color.foreground.secondary,
  },
}));

export const secondaryIconSpace = style((theme) => ({
  paddingRight: theme.grid * theme.touchableSize,
}));

// This offset is to account for the extra few pixels that the text
// sits off the left of its container. Need to offset this so that
// the white space does not look imbalanced.
const textLeftOffset = 2;
export const iconSpace = style((theme) => ({
  paddingLeft: theme.grid * theme.touchableSize - textLeftOffset,
}));

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

export const verticalDivider = style((theme) => ({
  width: theme.border.width.standard,
  background: theme.border.color.standard,
}));
