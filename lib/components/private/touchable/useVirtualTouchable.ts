import { useStyles } from 'sku/react-treat';
import * as styleRefs from './useVirtualTouchable.treat';

export function useVirtualTouchable() {
  return useStyles(styleRefs).virtualTouchable;
}
