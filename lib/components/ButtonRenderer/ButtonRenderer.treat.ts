import { style } from 'sku/treat';
import buttonSmallPaddingSize from './buttonSmallPaddingSize';

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

export const bleedY = style(
  ({ utils, touchableSize, space, grid, typography }) => {
    type TextBreakpoint = keyof typeof typography.text.small;
    const stylesForBreakpoint = (
      breakpoint: TextBreakpoint,
      size: 'standard' | 'small',
    ) => {
      const { capHeight } = typography.text[size][breakpoint];
      const height =
        size === 'small'
          ? space[buttonSmallPaddingSize] * grid * 2 +
            typography.text.small[breakpoint].rows * grid
          : touchableSize * grid;

      return {
        marginTop: `-${(height - capHeight) / 2}px`,
        marginBottom: `-${(height - capHeight) / 2}px`,
      };
    };

    return {
      selectors: {
        [`${standard}&`]: utils.responsiveStyle({
          mobile: stylesForBreakpoint('mobile', 'standard'),
          tablet: stylesForBreakpoint('tablet', 'standard'),
        }),
        [`${small}&`]: utils.responsiveStyle({
          mobile: stylesForBreakpoint('mobile', 'small'),
          tablet: stylesForBreakpoint('tablet', 'small'),
        }),
      },
    };
  },
);

export const loadingDot = style({
  animationDuration: '1s',
  animationIterationCount: 'infinite',
  opacity: 0,
  selectors: {
    [`&:nth-child(1)`]: {
      '@keyframes': {
        '14%': {
          opacity: 0,
        },
        '15%,100%': {
          opacity: 1,
        },
      },
    },
    [`&:nth-child(2)`]: {
      '@keyframes': {
        '29%': {
          opacity: 0,
        },
        '30%,100%': {
          opacity: 1,
        },
      },
    },
    [`&:nth-child(3)`]: {
      '@keyframes': {
        '44%': {
          opacity: 0,
        },
        '45%,100%': {
          opacity: 1,
        },
      },
    },
  },
});
