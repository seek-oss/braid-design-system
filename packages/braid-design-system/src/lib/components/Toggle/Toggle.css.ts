import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { rgba } from 'polished';

import { colorModeStyle } from '../../css/colorModeStyle';
import { outlineStyle } from '../../css/outlineStyle';
import { responsiveStyle } from '../../css/responsiveStyle';
import { debugTouchable } from '../private/touchable/debugTouchable';
import { hitArea } from '../private/touchable/hitArea';

import { vars } from '../../themes/vars.css';

const sizes = {
  standard: 'standard',
  small: 'small',
} as const;

export const bleedToCapHeight = styleVariants(sizes, (size) =>
  responsiveStyle({
    mobile: { height: vars.textSize[size].mobile.capHeight },
    tablet: { height: vars.textSize[size].tablet.capHeight },
  }),
);

export type Size = keyof typeof sizes;

const toggleWidthRatio = 1.6;

// Reset the z-index at the parent level to scope
// overrides internally.
export const root = style({
  ':hover': {
    zIndex: 1,
  },
});

export const realField = style([
  {
    height: hitArea,
  },
  debugTouchable(),
]);

export const fieldSize = styleVariants(sizes, (size) => ({
  width: calc.multiply(vars.inlineFieldSize[size], toggleWidthRatio),
}));

export const slideContainer = style({});
export const slideContainerSize = styleVariants(sizes, (size) => ({
  height: vars.inlineFieldSize[size],
}));

export const slideTrack = styleVariants(sizes, (size) => ({
  height: calc.subtract(vars.inlineFieldSize[size], vars.grid),
}));

export const slideTrackBgLightMode = styleVariants({
  light: colorModeStyle({
    lightMode: {
      background: rgba('#000', 0.08),
    },
  }),
  dark: colorModeStyle({
    lightMode: {
      background: rgba('#fff', 0.12),
    },
  }),
});

export const slideTrackBgDarkMode = styleVariants({
  light: colorModeStyle({
    darkMode: {
      background: rgba('#000', 0.08),
    },
  }),
  dark: colorModeStyle({
    darkMode: {
      background: rgba('#fff', 0.12),
    },
  }),
});

export const slideTrackMask = style({
  // Fix for Safari border-radius, overflow hidden, transform bug:
  // https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b
  WebkitMaskImage: '-webkit-radial-gradient(white, black)',
});

export const slideTrackSelected = style({
  selectors: {
    [`${realField}:not(:checked) + ${slideContainer} &`]: {
      transform: `translateX(${calc.negate(vars.touchableSize)})`,
    },
  },
});

export const slider = styleVariants(sizes, (size) => {
  const slideDistance = calc(vars.inlineFieldSize[size])
    .multiply(toggleWidthRatio)
    .subtract(vars.inlineFieldSize[size])
    .toString();

  const anticipationRatio = 0.12;
  const anticipation = calc.multiply(
    vars.inlineFieldSize[size],
    anticipationRatio,
  );

  const { transition: outlineTransition, ...outline } = outlineStyle(
    `${realField}:focus-visible + ${slideContainer} &`,
  );

  return [
    outline,
    {
      height: vars.inlineFieldSize[size],
      width: vars.inlineFieldSize[size],
      transition: [vars.transition.fast, outlineTransition].join(', '),
      selectors: {
        [`${realField}:active + ${slideContainer} &`]: {
          transform: `translateX(${calc.negate(anticipation)})`,
        },
        [`${realField}:checked + ${slideContainer} &`]: {
          transform: `translateX(${slideDistance})`,
        },
        [`${realField}:active:checked + ${slideContainer} &`]: {
          transform: `translateX(${calc.add(slideDistance, anticipation)})`,
        },
      },
    },
  ];
});

// Subtly scale the outline overlay to prevent thumb background
// antialiasing bleeding outside outline.
export const sliderThumbOutlineFix = style({
  transform: 'scale(1.04)',
});

export const hideBorderOnDarkBackgroundInLightMode = style(
  colorModeStyle({
    lightMode: {
      opacity: 0,
    },
  }),
);

export const hoverOverlay = style({
  selectors: {
    [`${realField}:hover:not(:disabled) + ${slideContainer} &,
      ${realField}:focus + ${slideContainer} &`]: {
      opacity: 1,
    },
  },
});
