import { style } from '@vanilla-extract/css';

export const nativeInput = style({
  selectors: {
    '&::-webkit-inner-spin-button, &::-webkit-calendar-picker-indicator, &::-webkit-clear-button':
      {
        display: 'none',
        WebkitAppearance: 'none',
      },
  },
});
