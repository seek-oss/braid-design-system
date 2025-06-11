import { style } from '@vanilla-extract/css';

import { hideFocusRingsDataAttribute } from './hideFocusRingsDataAttribute';

import { vars } from '../../../themes/vars.css';

// Todo flip the selector
export const focusRing = style({
  // Todo - don't copy paste from atomicProperties.ts
  ':focus': {
    outline: `${vars.focusRingSize} solid ${vars.borderColor.focus}`,
  },
  // Todo - this selector doesn't work. fix
  selectors: {
    [`[${hideFocusRingsDataAttribute}] &`]: {
      outline: undefined,
    },
  },      
});
