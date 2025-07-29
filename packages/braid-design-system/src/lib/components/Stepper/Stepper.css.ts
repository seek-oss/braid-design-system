import { style, createVar } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { atoms } from '../../css/atoms/atoms';
import { colorModeStyle } from '../../css/colorModeStyle';
import { outlineStyle } from '../../css/outlineStyle';
import { responsiveStyle } from '../../css/responsiveStyle';

import { vars } from '../../themes/vars.css';

const baseColourVar = createVar();
const highlightVar = createVar();
const stepIndicatorSize = vars.inlineFieldSize.small;

export const tone = {
  formAccent: style(
    colorModeStyle({
      lightMode: {
        vars: {
          [highlightVar]: vars.borderColor.formAccent,
        },
      },
      darkMode: {
        vars: {
          [highlightVar]: vars.borderColor.formAccentLight,
        },
      },
    }),
  ),
  neutral: style(
    colorModeStyle({
      lightMode: {
        vars: {
          [highlightVar]: vars.borderColor.neutral,
        },
      },
      darkMode: {
        vars: {
          [highlightVar]: vars.borderColor.neutralLight,
        },
      },
    }),
  ),
};

export const step = style({
  outline: 'none',
  textAlign: 'left',
  ...colorModeStyle({
    lightMode: {
      vars: {
        [baseColourVar]: vars.borderColor.neutralLight,
      },
    },
    darkMode: {
      vars: {
        [baseColourVar]: vars.borderColor.neutral,
      },
    },
  }),
});

export const indicator = style([
  atoms({ display: 'block' }),
  {
    height: stepIndicatorSize,
    width: stepIndicatorSize,
    color: baseColourVar,
  },
]);

export const stretch = style({ flex: 1 });

export const stretchLastAboveTablet = style(
  responsiveStyle({
    tablet: { flex: 1 },
  }),
);

export const highlight = style({
  color: highlightVar,
});

export const complete = style({});

export const active = style({});

export const inner = style([
  atoms({
    opacity: 0,
    transition: 'fast',
  }),
  {
    fill: 'currentcolor',
    transformOrigin: '50% 50%',
    transform: 'scale(0)',
    selectors: {
      [`${active} > &`]: {
        transform: 'scale(1)',
        opacity: 1,
      },
      [`${complete} > &`]: {
        transform: 'scale(2.1)',
        opacity: 1,
      },
    },
  },
]);

export const tick = style([
  atoms({
    transition: 'fast',
  }),
  {
    transitionDelay: '.1s',
    transformOrigin: '50% 50%',
    selectors: {
      [`:not(${complete}) > &`]: {
        opacity: 0,
        transitionDelay: '0s',
        transform: 'scale(.5) rotate(50deg)',
      },
    },
  },
  colorModeStyle({
    lightMode: {
      fill: vars.foregroundColor.neutralInverted,
    },
    darkMode: {
      fill: vars.foregroundColor.neutral,
    },
  }),
]);

const progressBarGap = 'xxsmall';
const dotSize = 2;
export const progressTrack = style({
  background: `repeating-linear-gradient(90deg, ${baseColourVar}, ${baseColourVar} ${dotSize}px, transparent ${dotSize}px, transparent ${
    dotSize * 2
  }px)`,
  height: vars.borderWidth.large,
  width: `${calc('100%')
    .subtract(stepIndicatorSize)
    .subtract(calc(vars.space[progressBarGap]).multiply(2))}`,
  top: `${calc(stepIndicatorSize).subtract(vars.borderWidth.large).divide(2)}`,
  left: `${calc(stepIndicatorSize).add(vars.space[progressBarGap])}`,
});

export const progressTrackCentered = style(
  responsiveStyle({
    tablet: {
      left: `${calc('50%')
        .add(calc(stepIndicatorSize).divide(2))
        .add(vars.space[progressBarGap])}`,
    },
  }),
);

export const progressLine = style({
  background: highlightVar,
  transition: 'transform .2s ease',
});

export const progressUnfilled = style({
  transform: 'translateX(-101%)',
});

const focusVisibleSelector = `${step}:focus-visible &`;

const { transition: outlineTransition, ...outline } =
  outlineStyle(focusVisibleSelector);

export const indicatorContainer = style([
  outline,
  {
    width: stepIndicatorSize,
    transition: [vars.transition.fast, outlineTransition].join(', '),
    selectors: {
      [`${step}:active &`]: {
        transform: vars.transform.touchable,
      },
      [focusVisibleSelector]: {
        transform: 'scale(1.2)',
      },
    },
  },
]);
