import { style } from 'sku/treat';

export const backdrop = style({
  width: '100vw',
  height: '100vh',
  background: 'black',
});

export const backdropVisible = style({
  opacity: 0.4,
});

const menuBase = style({
  overflowY: 'auto',
});
const menuHeight = style(({ utils, grid, touchableSize, space }) => {
  const calcMenuHeight = (numSuggestions: number) =>
    grid * (touchableSize * numSuggestions + space.xxsmall);

  return utils.responsiveStyle({
    mobile: {
      maxHeight: calcMenuHeight(6),
    },
    tablet: {
      maxHeight: calcMenuHeight(8),
    },
  });
});
export const menu = [menuBase, menuHeight];

export const groupHeading = style({
  textTransform: 'uppercase',
});
