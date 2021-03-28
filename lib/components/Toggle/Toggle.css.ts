import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { themeVars } from '../../themes/themeVars.css';
import { hitArea } from '../private/touchable/hitArea';
import { debugTouchable } from '../private/touchable/debugTouchable';

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
  top: calc(hitArea)
    .subtract(themeVars.inlineFieldSize)
    .divide(2)
    .negate()
    .toString(),
  selectors: {
    ...debugTouchable(),
  },
});

const labelPaddingCalc = calc(themeVars.inlineFieldSize)
  .subtract(themeVars.typography.text.standard.mobile.leading)
  .divide(2)
  .toString();

export const label = style({
  paddingTop: labelPaddingCalc,
  paddingBottom: labelPaddingCalc,
});

export const fieldSize = style({
  width: calc.multiply(themeVars.inlineFieldSize, toggleWidthRatio),
});

export const slideContainer = style({
  height: themeVars.inlineFieldSize,
});

const slideTrackHeightCalc = calc.subtract(
  themeVars.inlineFieldSize,
  themeVars.grid,
);

export const slideTrack = style({
  height: slideTrackHeightCalc,
  borderRadius: calc.divide(slideTrackHeightCalc, 2),
  backgroundColor: themeVars.border.color.standard,
  // Fix for Safari border-radius, overflow hidden, transform bug:
  // https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b
  WebkitMaskImage: '-webkit-radial-gradient(white, black)',
});

export const slideTrackSelected = style({
  selectors: {
    [`${realField}:not(:checked) + ${slideContainer} &`]: {
      transform: `translateX(${calc.negate(themeVars.touchableSize)})`,
    },
  },
});

const slideDistanceCalc = calc(themeVars.inlineFieldSize)
  .multiply(toggleWidthRatio)
  .subtract(themeVars.inlineFieldSize)
  .toString();

const anticipationRatio = 0.12;
const anticipationCalc = calc.multiply(
  themeVars.inlineFieldSize,
  anticipationRatio,
);

export const slider = style({
  height: themeVars.inlineFieldSize,
  width: themeVars.inlineFieldSize,
  selectors: {
    [`${realField}:active + ${slideContainer} &`]: {
      transform: `translateX(${calc.negate(anticipationCalc)})`,
    },
    [`${realField}:checked + ${slideContainer} &`]: {
      transform: `translateX(${slideDistanceCalc})`,
    },
    [`${realField}:active:checked + ${slideContainer} &`]: {
      transform: `translateX(${calc.add(slideDistanceCalc, anticipationCalc)})`,
    },
  },
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
    [`${realField}:focus + ${slideContainer} &, ${realField}:active + ${slideContainer} &`]: {
      opacity: 1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${realField}:hover:not(:disabled) + ${slideContainer} &`]: {
      opacity: 1,
    },
  },
});
