import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { themeVars } from '../../themes/themeVars.css';
import { hitArea } from '../private/touchable/hitArea';
import { debugTouchable } from '../private/touchable/debugTouchable';

const sizes = {
  standard: 'standard',
  small: 'small',
} as const;

export type Size = keyof typeof sizes;

const toggleWidthRatio = 1.6;

// Reset the z-index at the parent level to scope
// overrides internally.
export const root = style({
  ':hover': {
    zIndex: 1,
  },
});

export const realField = style({
  height: hitArea,
  selectors: {
    ...debugTouchable(),
  },
});

export const realFieldPosition = styleVariants(sizes, (size) => ({
  top: calc(hitArea)
    .subtract(themeVars.inlineFieldSize[size])
    .divide(2)
    .negate()
    .toString(),
}));

export const label = styleVariants(sizes, (size) => {
  const padding = calc(themeVars.inlineFieldSize[size])
    .subtract(themeVars.typography.text.standard.mobile.leading)
    .divide(2)
    .toString();

  return {
    paddingTop: padding,
    paddingBottom: padding,
  };
});

export const fieldSize = styleVariants(sizes, (size) => ({
  width: calc.multiply(themeVars.inlineFieldSize[size], toggleWidthRatio),
}));

export const slideContainerBase = style({});
export const slideContainerSize = styleVariants(sizes, (size) => ({
  height: themeVars.inlineFieldSize[size],
}));

export const slideTrack = styleVariants(sizes, (size) => {
  const height = calc.subtract(themeVars.inlineFieldSize[size], themeVars.grid);

  return {
    height,
    borderRadius: calc.divide(height, 2),
  };
});

export const slideTrackBackground = style({
  backgroundColor: themeVars.border.color.standard,
  // Fix for Safari border-radius, overflow hidden, transform bug:
  // https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b
  WebkitMaskImage: '-webkit-radial-gradient(white, black)',
});

export const slideTrackSelected = style({
  selectors: {
    [`${realField}:not(:checked) + ${slideContainerBase} &`]: {
      transform: `translateX(${calc.negate(themeVars.touchableSize)})`,
    },
  },
});

export const slider = styleVariants(sizes, (size) => {
  const slideDistance = calc(themeVars.inlineFieldSize[size])
    .multiply(toggleWidthRatio)
    .subtract(themeVars.inlineFieldSize[size])
    .toString();

  const anticipationRatio = 0.12;
  const anticipation = calc.multiply(
    themeVars.inlineFieldSize[size],
    anticipationRatio,
  );

  return {
    height: themeVars.inlineFieldSize[size],
    width: themeVars.inlineFieldSize[size],
    selectors: {
      [`${realField}:active + ${slideContainerBase} &`]: {
        transform: `translateX(${calc.negate(anticipation)})`,
      },
      [`${realField}:checked + ${slideContainerBase} &`]: {
        transform: `translateX(${slideDistance})`,
      },
      [`${realField}:active:checked + ${slideContainerBase} &`]: {
        transform: `translateX(${calc.add(slideDistance, anticipation)})`,
      },
    },
  };
});

export const icon = style({
  transform: 'scale(.75)',
  selectors: {
    [`${realField}:active + ${slideContainerBase} &`]: {
      transform: 'scale(.75) rotate(-25deg)',
    },
    [`${realField}:checked + ${slideContainerBase} &`]: {
      opacity: 1,
    },
    [`${realField}:active:checked + ${slideContainerBase} &`]: {
      transform: 'scale(.75) rotate(6deg)',
    },
  },
});

export const focusOverlay = style({
  selectors: {
    [`${realField}:focus + ${slideContainerBase} &, ${realField}:active + ${slideContainerBase} &`]: {
      opacity: 1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${realField}:hover:not(:disabled) + ${slideContainerBase} &`]: {
      opacity: 1,
    },
  },
});
