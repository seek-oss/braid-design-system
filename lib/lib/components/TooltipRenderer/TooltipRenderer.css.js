import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("src/components/TooltipRenderer/TooltipRenderer.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';
export var constants = {
  maxWidth: '260px',
  arrowSize: '12px'
};
export var background = style({
  background: vars.foregroundColor.neutral
}, "background");
export var maxWidth = style({
  maxWidth: constants.maxWidth
}, "maxWidth");
export var verticalOffsetBeforeEntrance = style({
  transform: 'translateZ(0) translateY(4px)',
  selectors: {
    '[data-popper-placement^=bottom] &': {
      transform: 'translateZ(0) translateY(-4px)'
    }
  }
}, "verticalOffsetBeforeEntrance"); // Fixes shadow clipping bug in Safari

export var translateZ0 = style({
  transform: 'translateZ(0)'
}, "translateZ0"); // Our space scale didn't have enough fidelity here :(

export var padding = style({
  padding: calc.add(vars.space.small, vars.grid)
}, "padding");
var borderRadius = vars.borderRadius.standard;
var offset = calc(constants.arrowSize).divide(2).negate().toString();
export var arrow = style({
  visibility: 'hidden',
  ':before': {
    visibility: 'visible',
    content: "''",
    transform: 'rotate(45deg)'
  },
  selectors: {
    '&, &::before': {
      width: calc.add(constants.arrowSize, calc.multiply(borderRadius, 2)),
      height: calc.add(constants.arrowSize, calc.multiply(borderRadius, 2)),
      position: 'absolute',
      background: 'inherit',
      borderRadius: borderRadius
    },
    '[data-popper-placement^=top] &': {
      bottom: offset
    },
    '[data-popper-placement^=bottom] &': {
      top: offset
    },
    '[data-popper-placement^=left] &': {
      right: offset
    },
    '[data-popper-placement^=right] &': {
      left: offset
    }
  }
}, "arrow");

__vanilla_filescope__.endFileScope();