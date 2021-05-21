import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { themeVars } from '../../../themes/themeVars.css';
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
    .subtract(themeVars.inlineFieldSize[size])
    .divide(2)
    .negate()
    .toString();

  return {
    top: offset,
    left: offset,
  };
});

export const fakeFieldBase = style({});
export const fakeFieldSize = styleVariants(sizes, (size) => ({
  height: themeVars.inlineFieldSize[size],
  width: themeVars.inlineFieldSize[size],
}));

export const badgeOffset = styleVariants(sizes, (size: Size) => {
  const offset = calc(themeVars.inlineFieldSize[size])
    .subtract(
      calc.multiply(themeVars.typography.text.xsmall.mobile.leading, '1px'),
    )
    .divide(2)
    .toString();

  return {
    paddingTop: offset,
    paddingBottom: offset,
  };
});

export const labelBase = style({
  selectors: {
    [`${realField}:not(:disabled) ~ * &`]: {
      cursor: 'pointer',
    },
  },
});
export const labelOffset = styleVariants(sizes, (size: Size) => ({
  paddingTop: calc(themeVars.inlineFieldSize[size])
    .subtract(
      calc.multiply(themeVars.typography.text[size].mobile.capHeight, '1px'),
    )
    .divide(2)
    .toString(),
}));

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
    [`${realField}:checked + ${fakeFieldBase} > &, ${realField}${isMixed} + ${fakeFieldBase} > &`]: {
      opacity: 1,
    },
  },
});

export const focusOverlay = style({
  selectors: {
    [`${realField}:focus + ${fakeFieldBase} > &`]: {
      opacity: 1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${realField}:hover:not(:checked):not(${isMixed}):not(:disabled) + ${fakeFieldBase} > &`]: {
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
    [`${realField}:active + ${fakeFieldBase} > * > &`]: {
      transform: 'scale(0.75)',
    },
  },
});

export const checkboxIndicator = [indicator, checkboxScale];

const radioScale = style({
  transform: 'scale(0.6)',
  selectors: {
    [`${realField}:active + ${fakeFieldBase} > * > &`]: {
      transform: 'scale(0.5)',
    },
  },
});

export const radioIndicator = [indicator, radioScale];
