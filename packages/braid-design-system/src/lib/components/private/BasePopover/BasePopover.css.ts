import { createVar, keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../../themes/vars.css';

export const backdrop = style({
  width: '100vw',
  height: '100vh',
});

export const triggerVars = {
  top: createVar(),
  left: createVar(),
  bottom: createVar(),
  right: createVar(),
};

export const flipPlacement = createVar();

// Top and bottom reversed to allow for a more natural API
export const popoverPosition = style({
  top: triggerVars.bottom,
  bottom: triggerVars.top,
  left: triggerVars.left,
  right: triggerVars.right,
});

export const animation = style({
  animation: `${keyframes({
    from: {
      transform: `translateY(${calc(vars.grid)
        .multiply('2')
        .multiply(flipPlacement)})`,
      opacity: 0,
    },
  })} .125s ease forwards`,
});
