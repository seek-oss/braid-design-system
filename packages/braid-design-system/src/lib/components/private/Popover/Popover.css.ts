import { createVar, fallbackVar, keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { animationTimeout } from '../animationTimeout';

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

export const horizontalOffset = createVar();

const dynamicHeight = createVar();
// Top and bottom reversed to allow for a more natural API
export const popoverPosition = style({
  vars: {
    [dynamicHeight]: '100svh',
  },
  top: calc(triggerVars.bottom).multiply('1px').toString(),
  bottom: calc(fallbackVar(dynamicHeight, '100vh'))
    .subtract(calc(triggerVars.top).multiply('1px'))
    .toString(),
  left: calc(triggerVars.left).add(horizontalOffset).multiply('1px').toString(),
  right: calc(triggerVars.right)
    .add(horizontalOffset)
    .multiply('1px')
    .toString(),
});

const placementModifier = createVar();
export const invertPlacement = style({
  vars: {
    [placementModifier]: '-1',
  },
});

export const transitionThreshold = createVar();

const popupAnimation = keyframes({
  from: {
    opacity: 0,
    transform: `translateY(${calc(transitionThreshold).multiply('1px').multiply(fallbackVar(placementModifier, '1'))})`,
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
