import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/components/MonthPicker/MonthPicker.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
export var nativeInput = style({
  selectors: {
    '&::-webkit-inner-spin-button, &::-webkit-calendar-picker-indicator, &::-webkit-clear-button': {
      display: 'none',
      WebkitAppearance: 'none'
    }
  }
}, "nativeInput");

__vanilla_filescope__.endFileScope();