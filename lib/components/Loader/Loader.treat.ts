import { style, styleMap } from 'sku/treat';
import mapValues from 'lodash/mapValues';

export const rootSize = styleMap(({ utils, typography }) =>
  mapValues(typography.text, ({ mobile, tablet }) =>
    utils.responsiveStyle({
      mobile: {
        height: mobile.capHeight,
      },
      tablet: {
        height: tablet.capHeight,
      },
    }),
  ),
);

const bounce = style({
  '@keyframes': {
    '33%': {
      transform: `translateY(-.5em)`,
    },
    '66%': {
      transform: 'translateY(0)',
    },
  },

  animationFillMode: 'both',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-in-out',
  animationDuration: '0.6s',
});

const animationDelay = 0.07;
export const circle = [
  bounce,
  style({
    backgroundColor: 'currentColor',
    selectors: {
      [`&:nth-child(1)`]: {
        animationDelay: `${animationDelay * 2}s`,
      },
      [`&:nth-child(2)`]: {
        animationDelay: `${animationDelay}s`,
      },
      [`&:nth-child(3)`]: {
        animationDelay: '0s',
      },
    },
  }),
];

export const animationDelayValue = 0.8;
export const delay = style({
  opacity: 0,
  '@keyframes': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },

  animationIterationCount: '1',
  animationFillMode: 'forwards',
  animationTimingFunction: 'ease-in',
  animationDuration: '0.25s',
  animationDelay: `${animationDelayValue}s`,
});

export const circleSize = styleMap(({ utils, typography }) =>
  mapValues(typography.text, ({ mobile, tablet }) =>
    utils.responsiveStyle({
      mobile: {
        width: Math.floor(mobile.capHeight),
        height: Math.floor(mobile.capHeight),
        fontSize: Math.floor(mobile.capHeight),
        margin: `0 ${Math.round(mobile.capHeight * 0.15)}px`,
      },
      tablet: {
        width: Math.floor(tablet.capHeight),
        height: Math.floor(tablet.capHeight),
        fontSize: Math.floor(mobile.capHeight),
        margin: `0 ${Math.round(tablet.capHeight * 0.15)}px`,
      },
    }),
  ),
);
