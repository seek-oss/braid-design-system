import { createVar, fallbackVar, keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { animationTimeout } from '../animationTimeout';

import { vars } from '../../../themes/vars.css';

export const backdrop = style({
  width: '100vw',
  height: '100vh',
});

const placementModifier = createVar();
export const invertPlacement = style({
  vars: {
    [placementModifier]: '-1',
  },
});

export const transitionThreshold = 'xxsmall';

const popupAnimation = keyframes({
  from: {
    opacity: 0,
    transform: `translateY(${calc(vars.space[transitionThreshold]).multiply(fallbackVar(placementModifier, '1'))})`,
  },
});

export const animation = style({
  animationName: popupAnimation,
  animationFillMode: 'both',
  animationTimingFunction: 'ease',
  animationDuration: '0.125s',
  animationDelay: `${animationTimeout}ms`,
});

export const delayVisibility = style({
  animationDelay: '250ms',
});
