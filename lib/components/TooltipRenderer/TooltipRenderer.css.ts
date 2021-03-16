import { style } from '@mattsjones/css-core';
import { add, multiply, negate, divide } from '@mattsjones/css-utils';
import { themeVars } from '../../themes/themeVars.css';

export const constants = {
  maxWidth: 260,
  arrowSize: 12,
};

export const background = style({
  background: themeVars.color.foreground.neutral,
});

export const maxWidth = style({
  maxWidth: constants.maxWidth,
});

export const verticalOffsetBeforeEntrance = style({
  transform: 'translateZ(0) translateY(4px)',
  selectors: {
    '[data-popper-placement^=bottom] &': {
      transform: 'translateZ(0) translateY(-4px)',
    },
  },
});

// Fixes shadow clipping bug in Safari
export const translateZ0 = style({
  transform: 'translateZ(0)',
});

// Our space scale didn't have enough fidelity here :(
export const padding = style({
  padding: add(themeVars.space.small, '1px'),
});

const borderRadius = themeVars.border.radius.standard;
const offset = negate(divide(constants.arrowSize, 2));
export const arrow = style({
  visibility: 'hidden',
  ':before': {
    visibility: 'visible',
    content: "''",
    transform: 'rotate(45deg)',
  },
  selectors: {
    '&, &::before': {
      width: add(constants.arrowSize, multiply(borderRadius, 2)),
      height: add(constants.arrowSize, multiply(borderRadius, 2)),
      position: 'absolute',
      background: 'inherit',
      borderRadius,
    },
    '[data-popper-placement^=top] &': {
      bottom: offset,
    },
    '[data-popper-placement^=bottom] &': {
      top: offset,
    },
    '[data-popper-placement^=left] &': {
      right: offset,
    },
    '[data-popper-placement^=right] &': {
      left: offset,
    },
  },
});
