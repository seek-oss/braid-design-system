import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../themes/vars.css';

export const constants = {
  maxWidth: '260px',
  arrowSize: '12px',
};

export const maxWidth = style({
  maxWidth: constants.maxWidth,
});

export const overflowWrap = style({
  overflowWrap: 'break-word',
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

const borderRadius = vars.borderRadius.small;
const offset = calc(constants.arrowSize).divide(2).negate().toString();
export const arrow = style({
  visibility: 'hidden',
  ':before': {
    visibility: 'visible',
    content: "''",
    transform: 'rotate(45deg)',
  },
  selectors: {
    '&, &::before': {
      width: calc.add(constants.arrowSize, calc.multiply(borderRadius, 2)),
      height: calc.add(constants.arrowSize, calc.multiply(borderRadius, 2)),
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
