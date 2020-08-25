import { style } from 'sku/treat';

export const backdrop = style({
  background: 'rgba(0, 0, 0, .7)',
});

export const closed = style({
  transform: 'scale(.8)',
});

export const dialogContent = style({
  pointerEvents: 'auto',
});

export const heading = style({
  selectors: {
    ':focus &': {
      opacity: 1,
    },
  },
});

const CLOSE_ICON_SIZE = 9;
export const closePlaceholder = style({
  width: CLOSE_ICON_SIZE,
});

export const closeOffset = style((theme) => {
  const iconSize = theme.grid * theme.typography.text.standard.mobile.rows;
  const offset = (iconSize - CLOSE_ICON_SIZE) / 2;

  return {
    marginTop: -offset,
    marginRight: -offset,
  };
});
