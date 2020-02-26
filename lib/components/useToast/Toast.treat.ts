import { style } from 'sku/treat';
import { pageOverlay } from '../private/zIndex';

export const toast = style({
  pointerEvents: 'all',
  maxWidth: 400,
});

export const toaster = style({
  zIndex: pageOverlay,
});
