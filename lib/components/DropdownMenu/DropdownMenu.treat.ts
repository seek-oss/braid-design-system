import { style } from 'sku/treat';
import * as zIndex from '../private/zIndex';

const DROPDOWN_ICON_WIDTH = 4;
const DROPDOWN_ICON_HEIGHT = 14;

export const triggerOffset = style(() => {
  const offsetX = DROPDOWN_ICON_WIDTH / 2;
  const offsetY = DROPDOWN_ICON_HEIGHT / 2;

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
  width: '100vw',
  height: '100vh',
  zIndex: zIndex.backdrop,
});

export const menuIsClosed = style(theme => ({
  transform: `translateY(-${theme.grid * 2}px)`,
  opacity: 0,
  visibility: 'hidden',
}));

export const menu = style({
  zIndex: zIndex.pageOverlay,
  right: 0,
});

export const showOverlay = style({ opacity: 1 });
