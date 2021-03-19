import * as styles from './useVirtualTouchable.css';

interface UseVirtualTouchableOptions {
  xAxis: boolean;
}

export function useVirtualTouchable(
  { xAxis }: UseVirtualTouchableOptions = { xAxis: true },
) {
  return !xAxis
    ? [styles.virtualTouchable, styles.yAxisOnly]
    : styles.virtualTouchable;
}
