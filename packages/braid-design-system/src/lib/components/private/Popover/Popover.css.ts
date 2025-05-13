import { createVar, fallbackVar, keyframes, style } from '@vanilla-extract/css';
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

export const horizontalOffset = createVar();
// Top and bottom reversed to allow for a more natural API
export const popoverPosition = style({
  top: calc(triggerVars.bottom).multiply('1px').toString(),
  bottom: calc(triggerVars.top).multiply('1px').toString(),
  left: calc(triggerVars.left).add(horizontalOffset).multiply('1px').toString(),
  right: calc(triggerVars.right)
    .add(horizontalOffset)
    .multiply('1px')
    .toString(),
});

const animationDelayInMs = createVar();
export const animationDelay = style({
  vars: {
    [animationDelayInMs]: '250ms',
  },
});

const placementModifier = createVar();
export const invertPlacement = style({
  vars: {
    [placementModifier]: '-1',
  },
});

const popupAnimation = keyframes({
  from: {
    opacity: 0,
    transform: `translateY(${calc(vars.grid).multiply('2').multiply(fallbackVar(placementModifier, '1'))})`,
  },
});

export const animation = style({
  animationName: popupAnimation,
  animationFillMode: 'both',
  animationTimingFunction: 'ease',
  animationDuration: '0.125s',
  animationDelay: fallbackVar(animationDelayInMs, '0'),
});
