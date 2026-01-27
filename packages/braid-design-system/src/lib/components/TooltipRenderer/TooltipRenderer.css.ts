import { createVar, style, styleVariants } from '@vanilla-extract/css';
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

// Fixes shadow clipping bug in Safari
export const translateZ0 = style({
  transform: 'translateZ(0)',
});

const borderRadius = vars.borderRadius.small;
const offset = calc(constants.arrowSize).divide(2).negate().toString();

export const arrowX = createVar();
export const arrowY = createVar();

const baseArrow = style({
  left: arrowX,
  top: arrowY,
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
  },
});

export const arrow = styleVariants({
  top: [baseArrow, { bottom: offset }],
  bottom: [baseArrow, { top: offset }],
  left: [baseArrow, { right: offset }],
  right: [baseArrow, { left: offset }],
});
