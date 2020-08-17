import { style } from 'sku/treat';
import { status } from '../private/zIndex';

export const toast = style({
  pointerEvents: 'all',
  maxWidth: 400,
});

export const toaster = style({
  zIndex: status,
});
