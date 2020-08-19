import { style } from 'sku/treat';

export const heading = style({
  selectors: {
    ':focus &': {
      opacity: 1,
    },
  },
});

export const dialogContainer = style({
  maxHeight: '100vh',
  maxWidth: '100vw',
});

export const dialog = style({
  maxHeight: '100%',
});

const OVERFLOW_ICON_SIZE = 9;

export const closePlaceholder = style({
  width: OVERFLOW_ICON_SIZE,
});

export const closeOffset = style((theme) => {
  const iconSize = theme.grid * theme.typography.text.standard.mobile.rows;
  const offset = (iconSize - OVERFLOW_ICON_SIZE) / 2;

  return {
    margin: -offset,
  };
});
