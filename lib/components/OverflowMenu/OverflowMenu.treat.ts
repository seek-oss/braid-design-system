import { style } from 'sku/treat';
import * as zIndex from '../private/zIndex';

const OVERFLOW_ICON_WIDTH = 4;
const OVERFLOW_ICON_HEIGHT = 14;

export const triggerOffset = style(theme => {
  const hitTarget = theme.grid * theme.touchableSize;
  const offsetX = (hitTarget - OVERFLOW_ICON_WIDTH) / 2;
  const offsetY = (hitTarget - OVERFLOW_ICON_HEIGHT) / 2;

  return {
    margin: `-${offsetY}px -${offsetX}px`,
    // Minusing one here to avoid buttons overriding open menus below
    zIndex: zIndex.pageOverlay - 1,
  };
});

export const root = style({
  padding: '0.05px',
  lineHeight: 0,
});

export const backdrop = style({
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: zIndex.backdrop,
});

export const menu = style({
  zIndex: zIndex.pageOverlay,
});

export const menuBorder = style({ opacity: 1 });

export const alignRight = style({
  right: 0,
});

export const menuItem = style({
  textAlign: 'left',
  outline: 'none',
  whiteSpace: 'nowrap',
});
