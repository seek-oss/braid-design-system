import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/components/private/Modal/Modal.css.ts", "braid-design-system");

import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { externalGutter } from './ModalExternalGutter';
import { responsiveStyle } from '../../../atoms/responsiveStyle';
import { vars } from '../../../themes/vars.css';
export var backdrop = style({
  background: 'rgba(0, 0, 0, .4)'
}, "backdrop");
const reducedMotion = style({
  '@media': {
    'screen and (prefers-reduced-motion)': {
      transform: 'none !important'
    }
  }
}, "reducedMotion");
export var entrance = {
  center: [reducedMotion, style({
    transform: 'scale(.8)'
  }, "entrance_center")],
  right: [reducedMotion, style(responsiveStyle({
    mobile: {
      opacity: 1,
      transform: 'translateX(140%)'
    },
    tablet: {
      opacity: 0,
      transform: 'translateX(40px)'
    }
  }), "entrance_right")]
};
export var exit = {
  right: [reducedMotion, style(responsiveStyle({
    mobile: {
      opacity: 1,
      transform: 'translateX(140%)'
    },
    tablet: {
      opacity: 0,
      transform: 'translateX(10px)'
    }
  }), "exit_right")]
};
const easeOut = 'cubic-bezier(0.4, 0, 0, 1)';
export var transition = {
  right: style(responsiveStyle({
    mobile: {
      transition: "transform .3s ".concat(easeOut, ", opacity .3s ").concat(easeOut)
    },
    tablet: {
      transition: "transform .175s ".concat(easeOut, ", opacity .175s ").concat(easeOut)
    }
  }), "transition_right")
};
export var modalContainer = style({
  maxHeight: '100vh',
  maxWidth: '100vw'
}, "modalContainer");
export var pointerEventsAll = style({
  pointerEvents: 'all'
}, "pointerEventsAll");
export var maxSize = {
  center: style(responsiveStyle({
    mobile: {
      maxHeight: calc.subtract('100vh', calc.multiply(vars.space[externalGutter[0]], 2)),
      maxWidth: calc.subtract('100vw', calc.multiply(vars.space[externalGutter[0]], 2))
    },
    tablet: {
      maxHeight: calc.subtract('100vh', calc.multiply(vars.space[externalGutter[1]], 2)),
      maxWidth: calc.subtract('100vw', calc.multiply(vars.space[externalGutter[1]], 2))
    },
    desktop: {
      maxHeight: calc.subtract('100vh', calc.multiply(vars.space[externalGutter[2]], 2)),
      maxWidth: calc.subtract('100vw', calc.multiply(vars.space[externalGutter[2]], 2))
    }
  }), "maxSize_center"),
  right: style({
    maxHeight: '100vh'
  }, "maxSize_right")
};
export var headingRoot = style({}, "headingRoot");
export var headingFocus = style({
  selectors: _defineProperty({}, "".concat(headingRoot, ":focus &"), {
    opacity: 1
  })
}, "headingFocus");
export var closeButtonRoot = style({
  ':active': {
    transform: 'scale(0.9)'
  }
}, "closeButtonRoot");
export var closeButtonFocus = style({
  selectors: _defineProperty({}, "".concat(closeButtonRoot, ":focus &"), {
    opacity: 1
  })
}, "closeButtonFocus");
export var closeButtonOpacity = style({
  opacity: 0.7,
  selectors: _defineProperty({}, "".concat(closeButtonRoot, ":hover &, ").concat(closeButtonRoot, ":focus &"), {
    opacity: 1
  })
}, "closeButtonOpacity");
const CLOSE_ICON_GUTTER_RATIO = 0.3;

const calculateIconCrop = function calculateIconCrop(level, breakpoint) {
  const size = calc.multiply(vars.headingLevel[level][breakpoint].capHeight, calc.add(1, CLOSE_ICON_GUTTER_RATIO));
  const offset = calc.divide(calc.multiply(size, CLOSE_ICON_GUTTER_RATIO), 2);
  const nudge = '1px';
  return {
    top: calc.add(calc.negate(offset), nudge),
    right: calc.subtract(calc.negate(offset), nudge)
  };
};

export var cropIconSpace = {
  '2': style(responsiveStyle({
    mobile: calculateIconCrop('2', 'mobile'),
    tablet: calculateIconCrop('2', 'tablet')
  }), "cropIconSpace"),
  '3': style(responsiveStyle({
    mobile: calculateIconCrop('3', 'mobile'),
    tablet: calculateIconCrop('3', 'tablet')
  }), "cropIconSpace")
};
export var negativeMarginRightXSmall = style({
  marginRight: calc.negate(vars.space.xsmall)
}, "negativeMarginRightXSmall");

const calculateCloseIconSize = function calculateCloseIconSize(level, breakpoint) {
  const size = calc.multiply(vars.headingLevel[level][breakpoint].capHeight, calc.add(1, CLOSE_ICON_GUTTER_RATIO));
  return {
    width: size,
    height: size
  };
};

export var closeIcon = {
  '2': style(responsiveStyle({
    mobile: calculateCloseIconSize('2', 'mobile'),
    tablet: calculateCloseIconSize('2', 'tablet')
  }), "closeIcon"),
  '3': style(responsiveStyle({
    mobile: calculateCloseIconSize('3', 'mobile'),
    tablet: calculateCloseIconSize('3', 'tablet')
  }), "closeIcon")
};

__vanilla_filescope__.endFileScope();