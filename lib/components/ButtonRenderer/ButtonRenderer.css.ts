import { keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../atoms/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const constants = {
  smallButtonPaddingSize: 'xsmall' as const,
};

export const root = style({
  textDecoration: 'none',
});

export const inverted = style({});
export const lightBg = style({});
export const lightHoverBg = style({});

export const backgroundOverlay = style({
  selectors: {
    [`${lightBg} &`]: {
      opacity: 0.075,
    },
  },
});

export const activeOverlay = style({
  selectors: {
    [`${root}:active &`]: {
      opacity: 1,
    },
    [`${lightHoverBg}:active &`]: {
      opacity: 0.1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${root}:hover:not(:disabled):not(:active) &`]: {
      opacity: 1,
    },
    [`${lightHoverBg}:hover:not(:disabled):not(:active) &`]: {
      opacity: 0.075,
    },
    [`${lightHoverBg}${inverted}:hover:not(:disabled):not(:active) &`]: {
      opacity: 0.15,
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

export const standard = style({});
export const small = style({});

type TextBreakpoint = keyof typeof vars.textSize.small;
const stylesForBreakpoint = (
  breakpoint: TextBreakpoint,
  size: 'standard' | 'small',
) => {
  const height =
    size === 'small'
      ? calc.add(
          calc.multiply(vars.space[constants.smallButtonPaddingSize], 2),
          vars.textSize.small[breakpoint].lineHeight,
        )
      : vars.touchableSize;

  const value = calc(height)
    .subtract(vars.textSize[size][breakpoint].capHeight)
    .divide(2)
    .negate()
    .toString();

  return {
    marginTop: value,
    marginBottom: value,
  };
};

export const bleedY = style({
  selectors: {
    [`${standard}&`]: responsiveStyle({
      mobile: stylesForBreakpoint('mobile', 'standard'),
      tablet: stylesForBreakpoint('tablet', 'standard'),
    }),
    [`${small}&`]: responsiveStyle({
      mobile: stylesForBreakpoint('mobile', 'small'),
      tablet: stylesForBreakpoint('tablet', 'small'),
    }),
  },
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
