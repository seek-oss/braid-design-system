import {
  createVar,
  keyframes,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { rgba } from 'polished';
import { colorModeStyle } from '../../css/colorModeStyle';
import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const root = style({
  textDecoration: 'none',
});

export const forceActive = style({});

export const activeOverlay = style({
  selectors: {
    [`${root}:active &, ${forceActive}&`]: {
      opacity: 1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${root}:hover:not(:disabled) &`]: {
      opacity: 1,
    },
  },
});

export const focusOverlay = style({
  selectors: {
    [`${root}:focus &`]: {
      opacity: 1,
    },
  },
});

const minHeightValueForSize = {
  standard: vars.touchableSize,
  small: calc.multiply(vars.touchableSize, 0.8),
};
const capHeightToMinHeight = createVar();
const paddingVarForBreakpoint = (
  size: keyof typeof minHeightValueForSize,
  breakpoint: keyof typeof vars.textSize.small,
) => ({
  vars: {
    [capHeightToMinHeight]: calc(minHeightValueForSize[size])
      .subtract(vars.textSize[size][breakpoint].capHeight)
      .divide(2)
      .toString(),
  },
});

export const standard = style(
  responsiveStyle({
    mobile: paddingVarForBreakpoint('standard', 'mobile'),
    tablet: paddingVarForBreakpoint('standard', 'tablet'),
  }),
);

export const small = style(
  responsiveStyle({
    mobile: paddingVarForBreakpoint('small', 'mobile'),
    tablet: paddingVarForBreakpoint('small', 'tablet'),
  }),
);

export const bleedVerticallyToCapHeight = style({
  marginTop: calc.negate(capHeightToMinHeight),
  marginBottom: calc.negate(capHeightToMinHeight),
});

export const padToMinHeight = style({
  paddingTop: capHeightToMinHeight,
  paddingBottom: capHeightToMinHeight,
});

const dot1 = keyframes({
  '14%': {
    opacity: 0,
  },
  '15%,100%': {
    opacity: 1,
  },
});

const dot2 = keyframes({
  '29%': {
    opacity: 0,
  },
  '30%,100%': {
    opacity: 1,
  },
});

const dot3 = keyframes({
  '44%': {
    opacity: 0,
  },
  '45%,100%': {
    opacity: 1,
  },
});

export const loadingDot = style({
  animationDuration: '1s',
  animationIterationCount: 'infinite',
  opacity: 0,
  selectors: {
    [`&:nth-child(1)`]: {
      animationName: dot1,
    },
    [`&:nth-child(2)`]: {
      animationName: dot2,
    },
    [`&:nth-child(3)`]: {
      animationName: dot3,
    },
  },
});

export const invertedBackgroundsLightMode = styleVariants({
  soft: colorModeStyle({
    lightMode: {
      background: rgba('#fff', 0.1),
    },
  }),
  hover: colorModeStyle({
    lightMode: {
      background: rgba('#fff', 0.15),
    },
  }),
  active: colorModeStyle({
    lightMode: {
      background: rgba('#fff', 0.15),
    },
  }),
});

export const invertedBackgroundsDarkMode = styleVariants({
  soft: colorModeStyle({
    darkMode: {
      background: rgba('#fff', 0.1),
    },
  }),
  hover: colorModeStyle({
    darkMode: {
      background: rgba('#fff', 0.15),
    },
  }),
  active: colorModeStyle({
    darkMode: {
      background: rgba('#fff', 0.15),
    },
  }),
});
