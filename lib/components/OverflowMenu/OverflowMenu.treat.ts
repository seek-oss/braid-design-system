import { style } from 'sku/treat';

const OVERFLOW_ICON_WIDTH = 4;
const OVERFLOW_ICON_HEIGHT = 14;

export const triggerOffset = style((theme) => {
  const circleSize = theme.grid * theme.typography.text.standard.mobile.rows;
  const offsetX = (circleSize - OVERFLOW_ICON_WIDTH) / 2;
  const offsetY = (circleSize - OVERFLOW_ICON_HEIGHT) / 2;

  return {
    margin: `-${offsetY}px -${offsetX}px`,
  };
});
