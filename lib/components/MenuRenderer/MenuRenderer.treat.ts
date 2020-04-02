import { style } from 'sku/treat';
import * as zIndex from '../private/zIndex';

export const trigger = style({
  zIndex: zIndex.pageOverlay - 1,
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

export const menuIsClosed = style((theme) => ({
  transform: `translateY(-${theme.grid * 2}px)`,
  opacity: 0,
  visibility: 'hidden',
}));

export const menu = style({
  zIndex: zIndex.pageOverlay,
});

export const showOverlay = style({ opacity: 1 });
