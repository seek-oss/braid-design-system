import { style } from 'sku/treat';

export const nativeInput = style({
  appearance: 'none',
  selectors: {
    '&::-webkit-inner-spin-button, &::-webkit-calendar-picker-indicator, &::-webkit-clear-button': {
      display: 'none',
      WebkitAppearance: 'none',
    },
  },
});
