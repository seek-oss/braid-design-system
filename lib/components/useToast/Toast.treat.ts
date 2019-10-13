import { style } from 'sku/treat';
import * as zIndex from '../private/zIndex';

export const root = style(({ color }) => ({
  zIndex: zIndex.pageOverlay,
  pointerEvents: 'all',
  borderLeft: `3px solid ${color.background.neutral}`,
}));
