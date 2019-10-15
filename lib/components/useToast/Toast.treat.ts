import { style } from 'sku/treat';
import { pageOverlay } from '../private/zIndex';

export const toast = style({
  pointerEvents: 'all',
  maxWidth: 400,
});

export const messageContainer = style({ flex: '1 1 auto' });

export const toaster = style({
  bottom: 0,
  zIndex: pageOverlay,
});

export const noShrink = style({ flexShrink: 0 });
