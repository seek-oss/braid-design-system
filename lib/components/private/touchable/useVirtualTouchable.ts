import { useStyles } from 'sku/react-treat';
import * as styleRefs from './useVirtualTouchable.treat';

interface UseVirtualTouchableOptions {
  xAxis: boolean;
}

export function useVirtualTouchable(
  { xAxis }: UseVirtualTouchableOptions = { xAxis: true },
) {
  const styles = useStyles(styleRefs);

  return !xAxis
    ? [styles.virtualTouchable, styles.yAxisOnly]
    : styles.virtualTouchable;
}
