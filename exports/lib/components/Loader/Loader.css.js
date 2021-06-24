import _defineProperty from '@babel/runtime/helpers/defineProperty';

let _selectors;

import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope(
  'lib/components/Loader/Loader.css.ts',
  'braid-design-system',
);

import {
  composeStyles,
  keyframes,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { responsiveStyle } from '../../atoms/responsiveStyle';
import { vars } from '../../themes/vars.css';
export var rootSize = styleVariants(
  vars.textSize,
  function (_ref) {
    const mobile = _ref.mobile,
      tablet = _ref.tablet;
    return responsiveStyle({
      mobile: {
        height: mobile.capHeight,
      },
      tablet: {
        height: tablet.capHeight,
      },
    });
  },
  'rootSize',
);
export var size = styleVariants(
  vars.textSize,
  function (_ref2) {
    const mobile = _ref2.mobile,
      tablet = _ref2.tablet;
    return responsiveStyle({
      mobile: {
        height: mobile.fontSize,
      },
      tablet: {
        height: tablet.fontSize,
      },
    });
  },
  'size',
);
export var color = {
  dark: style(
    {
      fill: vars.backgroundColor.card,
    },
    'color_dark',
  ),
  light: style(
    {
      fill: vars.backgroundColor.neutral,
    },
    'color_light',
  ),
};
const bounce = keyframes(
  {
    '33%': {
      transform: 'translateY(-1.4em)',
    },
    '66%': {
      transform: 'translateY(1.4em)',
    },
  },
  'bounce',
);
const bounceAnimation = style(
  {
    animationName: bounce,
    animationFillMode: 'both',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    animationDuration: '0.6s',
  },
  'bounceAnimation',
);
const animationDelayInMs = 70;
export var circle = composeStyles(
  bounceAnimation,
  style({
    transform: 'translateY(1.4em)',
    selectors:
      ((_selectors = {}),
      _defineProperty(_selectors, '&:nth-child(1)', {
        animationDelay: ''.concat(animationDelayInMs * 2, 'ms'),
      }),
      _defineProperty(_selectors, '&:nth-child(2)', {
        animationDelay: ''.concat(animationDelayInMs, 'ms'),
      }),
      _selectors),
  }),
);
export var animationDelayValueInMs = 800;
const fade = keyframes(
  {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  'fade',
);
export var delay = style(
  {
    opacity: 0,
    animationName: fade,
    animationIterationCount: '1',
    animationFillMode: 'forwards',
    animationTimingFunction: 'ease-in',
    animationDuration: '0.25s',
    animationDelay: ''.concat(animationDelayValueInMs, 'ms'),
  },
  'delay',
);

__vanilla_filescope__.endFileScope();
