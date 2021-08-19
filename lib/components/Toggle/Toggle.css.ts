import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';
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
    .subtract(vars.inlineFieldSize[size])
    .divide(2)
    .negate()
    .toString(),
}));

export const label = styleVariants(sizes, (size) => {
  const padding = calc(vars.inlineFieldSize[size])
    .subtract(vars.textSize.standard.mobile.lineHeight)
    .divide(2)
    .toString();

  return {
    paddingTop: padding,
    paddingBottom: padding,
  };
});

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

export const slideTrackBackground = style({
  backgroundColor: vars.borderColor.standard,
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

  return {
    height: vars.inlineFieldSize[size],
    width: vars.inlineFieldSize[size],
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
  };
});

export const icon = style({
  transform: 'scale(.75)',
  selectors: {
    [`${realField}:active + ${slideContainer} &`]: {
      transform: 'scale(.75) rotate(-25deg)',
    },
    [`${realField}:checked + ${slideContainer} &`]: {
      opacity: 1,
    },
    [`${realField}:active:checked + ${slideContainer} &`]: {
      transform: 'scale(.75) rotate(6deg)',
    },
  },
});

export const focusOverlay = style({
  selectors: {
    [`${realField}:focus + ${slideContainer} &,
      ${realField}:active + ${slideContainer} &`]: {
      opacity: 1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${realField}:hover:not(:disabled) + ${slideContainer} &,
      ${realField}:focus + ${slideContainer} &`]: {
      opacity: 1,
    },
  },
});
