import { style, styleMap } from 'sku/treat';
import * as zIndex from '../private/zIndex';

export const containerOpen = style({
  zIndex: zIndex.pageOverlay,
});

export const inputOpen = style({
  zIndex: zIndex.pageOverlay + 1,
});

export const backdrop = style({
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: zIndex.backdrop,
  background: 'black',
});

export const backdropVisibility = styleMap({
  hidden: { opacity: 0 },
  visible: { opacity: 0.7 },
});

const menuBase = style({
  overflowY: 'auto',
  zIndex: zIndex.pageOverlay,
});
const menuHeight = style(({ utils, spacing }) => {
  const calcMenuHeight = (numSuggestions: number) =>
    utils.rows(spacing.touchableRows * numSuggestions + spacing.row.xxsmall);

  return {
    maxHeight: calcMenuHeight(6),
    ...utils.desktopStyles({
      maxHeight: calcMenuHeight(8),
    }),
  };
});
export const menu = [menuBase, menuHeight];

export const groupHeading = style({
  textTransform: 'uppercase',
});
