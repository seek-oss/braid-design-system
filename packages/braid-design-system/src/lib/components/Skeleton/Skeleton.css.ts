import {
  createVar,
  keyframes,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { responsiveStyle } from '../../css/responsiveStyle';

import { vars } from '../../themes/vars.css';
import { animationDelayValueInMs } from '../Loader/Loader.css';

export { animationDelayValueInMs };

const bone = vars.backgroundColor.neutralLight;
const sheen = vars.backgroundColor.surface;
const sheenBandWidth = '40vw';
const sheenTravel = keyframes({
  '0%': { backgroundPosition: `-${sheenBandWidth} 0` },
  '100%': { backgroundPosition: '100vw 0' },
});
const sheenHighlightStop = '36%';
const sheenFadeOutStop = '72%';
const sheenGradient = `linear-gradient(90deg, ${bone} 0%, ${sheen} ${sheenHighlightStop}, ${bone} ${sheenFadeOutStop})`;

const sheenPassDuration = '2.8s';

export const shimmerAnimation = style({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: bone,
});

export const shimmerSheen = style({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  backgroundImage: sheenGradient,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: `${sheenBandWidth} 100%`,
  animation: `${sheenTravel} ${sheenPassDuration} linear infinite`,
  '@media': {
    'screen and (prefers-reduced-motion)': {
      animation: 'none',
      backgroundImage: 'none',
    },
  },
});

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
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

export const buttonSmall = style({
  height: calc.multiply(vars.touchableSize, 0.8),
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
