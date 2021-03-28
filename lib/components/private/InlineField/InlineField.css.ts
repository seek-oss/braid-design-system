import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { themeVars } from '../../../themes/themeVars.css';
import { hitArea } from '../touchable/hitArea';
import { debugTouchable } from '../touchable/debugTouchable';

// Reset the z-index at the parent level to scope
// overrides internally.
export const root = style({
  ':hover': {
    zIndex: 1,
  },
});

const centerOffsetCalc = calc(hitArea)
  .subtract(themeVars.inlineFieldSize)
  .divide(2)
  .negate()
  .toString();

export const realField = style({
  width: hitArea,
  height: hitArea,
  top: centerOffsetCalc,
  left: centerOffsetCalc,
  selectors: {
    ...debugTouchable(),
  },
});

export const fakeField = style({
  height: themeVars.inlineFieldSize,
  width: themeVars.inlineFieldSize,
});

const badgeOffsetCalc = calc(themeVars.inlineFieldSize)
  .subtract(themeVars.typography.text.xsmall.mobile.leading)
  .divide(2)
  .toString();

export const badgeOffset = style({
  paddingTop: badgeOffsetCalc,
  paddingBottom: badgeOffsetCalc,
});

export const label = style({
  paddingTop: calc(themeVars.inlineFieldSize)
    .subtract(themeVars.typography.text.standard.mobile.capHeight)
    .divide(2)
    .toString(),
  selectors: {
    [`${realField}:not(:disabled) ~ * &`]: {
      cursor: 'pointer',
    },
  },
});

export const isMixed = style({});

export const children = style({
  selectors: {
    [`${realField}:checked ~ * &, ${realField}${isMixed} ~ * &`]: {
      display: 'block',
    },
  },
});

export const selected = style({
  selectors: {
    [`${realField}:checked + ${fakeField} > &, ${realField}${isMixed} + ${fakeField} > &`]: {
      opacity: 1,
    },
  },
});

export const focusOverlay = style({
  selectors: {
    [`${realField}:focus + ${fakeField} > &`]: {
      opacity: 1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${realField}:hover:not(:checked):not(${isMixed}):not(:disabled) + ${fakeField} > &`]: {
      opacity: 1,
    },
  },
});

export const indicator = style({
  selectors: {
    [`${hoverOverlay} > &`]: {
      opacity: 0.2,
    },
  },
});

const checkboxScale = style({
  transform: 'scale(0.85)',
  selectors: {
    [`${realField}:active + ${fakeField} > * > &`]: {
      transform: 'scale(0.75)',
    },
  },
});

export const checkboxIndicator = [indicator, checkboxScale];

const radioScale = style({
  transform: 'scale(0.6)',
  selectors: {
    [`${realField}:active + ${fakeField} > * > &`]: {
      transform: 'scale(0.5)',
    },
  },
});

export const radioIndicator = [indicator, radioScale];
