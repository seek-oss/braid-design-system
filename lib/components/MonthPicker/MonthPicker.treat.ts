import { style } from 'sku/treat';

export const nativeInput = style({
  appearance: 'none',
  selectors: {
    '&::-webkit-inner-spin-button, &::-webkit-calendar-picker-indicator, &::-webkit-clear-button': {
      display: 'none',
      '-webkit-appearance': 'none',
    },
  },
});

export const grow = style({
  flexGrow: 1,
  flexBasis: '1%',
});
