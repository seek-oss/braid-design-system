import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../themes/vars.css';

export const constantsPxSizes = {
  maxWidth: 260,
  arrowSize: 12,
};

export const maxWidth = style({
  maxWidth: calc.multiply(constantsPxSizes.maxWidth, '1px'),
});

export const overflowWrap = style({
  overflowWrap: 'break-word',
  wordBreak: 'keep-all',
});

// Fixes shadow clipping bug in Safari
export const translateZ0 = style({
  transform: 'translateZ(0)',
});

const borderRadius = vars.borderRadius.small;
const offset = calc(calc.multiply(constantsPxSizes.arrowSize, '1px'))
  .divide(2)
  .negate()
  .toString();

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
      width: calc.add(
        calc.multiply(constantsPxSizes.arrowSize, '1px'),
        calc.multiply(borderRadius, 2),
      ),
      height: calc.add(
        calc.multiply(constantsPxSizes.arrowSize, '1px'),
        calc.multiply(borderRadius, 2),
      ),
      position: 'absolute',
      background: 'inherit',
      borderRadius,
    },
  },
});

export const arrow = styleVariants({
  top: [baseArrow, { bottom: offset }],
  bottom: [baseArrow, { top: offset }],
});
