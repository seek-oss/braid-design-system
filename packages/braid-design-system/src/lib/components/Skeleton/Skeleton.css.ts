import {
  createVar,
  keyframes,
  style,
  styleVariants,
} from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';

import { vars } from '../../themes/vars.css';
import { animationDelayValueInMs } from '../Loader/Loader.css';

export { animationDelayValueInMs };

const shimmer = keyframes({
  '0%': { backgroundPosition: '240% 50%' },
  '100%': { backgroundPosition: '40% 50%' },
});

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const reducedMotionFill = {
  animation: 'none',
  background: vars.backgroundColor.neutralLight,
  backgroundSize: 'auto',
} as const;

const shimmerDuration = '1.4s';

export const shimmerAnimation = style({
  animation: `${shimmer} ${shimmerDuration} infinite`,
  background: `linear-gradient(90deg, ${vars.backgroundColor.neutralLight} 0%, ${vars.backgroundColor.neutralSoftHover} 28%, ${vars.backgroundColor.neutralLight} 56%)`,
  backgroundSize: '200% 100%',
  '@media': {
    'screen and (prefers-reduced-motion)': reducedMotionFill,
  },
});

export const delayVisibility = style({
  opacity: 0,
  animation: `${fadeIn} 0.25s ease-in ${animationDelayValueInMs}ms forwards`,
  '@media': {
    'screen and (prefers-reduced-motion)': {
      animation: 'none',
      opacity: 1,
    },
  },
});

export const typographyBar = style({
  position: 'absolute',
  inset: 0,
  fontFamily: vars.fontFamily,
});

export const textFontSize = styleVariants(vars.textSize, ({ mobile, tablet }) =>
  responsiveStyle({
    mobile: { fontSize: mobile.fontSize },
    tablet: { fontSize: tablet.fontSize },
  }),
);

export const textLine = style({
  flexShrink: 0,
});

export const textCapHeight = styleVariants(
  vars.textSize,
  ({ mobile, tablet }) =>
    responsiveStyle({
      mobile: { height: mobile.capHeight },
      tablet: { height: tablet.capHeight },
    }),
);

export const capBar = style({
  height: '1cap',
});

export const width = styleVariants({
  full: { width: '100%' },
  large: { width: '75%' },
  medium: { width: '50%' },
  small: { width: '25%' },
  xsmall: { width: '12.5%' },
  xxsmall: { width: '6.25%' },
});

export const percentWidthVar = createVar();

export const percentWidth = style({
  width: percentWidthVar,
});

export const rectangleHeight = styleVariants(
  {
    xxsmall: vars.space.xxsmall,
    xsmall: vars.space.xsmall,
    small: vars.space.small,
    medium: vars.space.medium,
    large: vars.space.large,
    xlarge: vars.space.xlarge,
    xxlarge: vars.space.xxlarge,
    xxxlarge: vars.space.xxxlarge,
  },
  (value) => ({
    height: value,
  }),
);

export const invisibleInFlow = style({
  visibility: 'hidden',
});
