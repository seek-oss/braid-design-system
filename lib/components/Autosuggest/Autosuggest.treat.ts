import { style } from 'sku/treat';
import * as zIndex from '../private/zIndex';

export const zIndexContainer = style({
  zIndex: zIndex.pageOverlay,
});

export const backdrop = style({
  width: '100vw',
  height: '100vh',
  zIndex: zIndex.backdrop,
  background: 'black',
});

export const backdropVisible = style({
  opacity: 0.7,
});

const menuBase = style({
  overflowY: 'auto',
  zIndex: zIndex.pageOverlay,
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
