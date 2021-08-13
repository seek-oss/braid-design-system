import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../../themes/vars.css';
import { hitArea } from '../touchable/hitArea';
import { debugTouchable } from '../touchable/debugTouchable';

const sizes = {
  standard: 'standard',
  small: 'small',
} as const;

export type Size = keyof typeof sizes;

// Reset the z-index at the parent level to scope
// overrides internally.
export const root = style({
  ':hover': {
    zIndex: 1,
  },
});

export const realField = style({
  width: hitArea,
  height: hitArea,
  selectors: {
    ...debugTouchable(),
  },
});

export const realFieldPosition = styleVariants(sizes, (size: Size) => {
  const offset = calc(hitArea)
    .subtract(vars.inlineFieldSize[size])
    .divide(2)
    .negate()
    .toString();

  return {
    top: offset,
    left: offset,
  };
});

export const fakeField = style({});
export const fakeFieldSize = styleVariants(sizes, (size) => ({
  height: vars.inlineFieldSize[size],
  width: vars.inlineFieldSize[size],
}));

export const badgeOffset = styleVariants(sizes, (size: Size) => {
  const offset = calc(vars.inlineFieldSize[size])
    .subtract(vars.textSize.xsmall.mobile.lineHeight)
    .divide(2)
    .toString();

  return {
    paddingTop: offset,
    paddingBottom: offset,
  };
});

export const labelOffset = styleVariants(sizes, (size: Size) => ({
  paddingTop: calc(vars.inlineFieldSize[size])
    .subtract(vars.textSize[size].mobile.capHeight)
    .divide(2)
    .toString(),
}));

export const isMixed = style({});

export const children = style({
  selectors: {
    [`${realField}:checked ~ * &,
      ${realField}${isMixed} ~ * &`]: {
      display: 'block',
    },
  },
});

export const selected = style({
  selectors: {
    [`${realField}:checked + ${fakeField} > &,
      ${realField}${isMixed} + ${fakeField} > &`]: {
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
    [`${realField}:hover:not(:checked):not(${isMixed}):not(:disabled) + ${fakeField} > &,
      ${realField}:focus:not(${isMixed}) + ${fakeField} > &`]: {
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
