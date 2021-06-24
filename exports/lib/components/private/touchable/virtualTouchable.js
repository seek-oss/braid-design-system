import * as styles from './virtualTouchable.css';
export function virtualTouchable() {
  const _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    xAxis: true
  },
      xAxis = _ref.xAxis;

  return !xAxis ? [styles.virtualTouchable, styles.yAxisOnly] : styles.virtualTouchable;
}