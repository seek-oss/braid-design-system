import { style } from 'sku/treat';
import getSize from './getSize';
import { hitArea } from '../touchable/hitArea';
import { debugTouchable } from '../touchable/debugTouchable';

// Reset the z-index at the parent level to scope
// overrides internally.
export const root = style({
  ':hover': {
    zIndex: 1,
  },
});

const realFieldBase = style({
  width: hitArea,
  height: hitArea,
  selectors: {
    ...debugTouchable(),
  },
});

export const realFieldPosition = style((theme) => {
  const size = getSize(theme);
  const centerOffset = -(hitArea - size) / 2;

  return { top: centerOffset, left: centerOffset };
});

export const realField = [realFieldBase, realFieldPosition];

const fakeFieldBase = style({});

const fakeFieldSize = style((theme) => {
  const size = getSize(theme);

  return {
    height: size,
    width: size,
  };
});

export const fakeField = [fakeFieldSize, fakeFieldBase];

export const label = style((theme) => {
  // Uses mobile standard text to mirror behaviour in getSize
  const standardTextHeight =
    theme.typography.text.standard.mobile.rows * theme.grid;
  const offset = (getSize(theme) - standardTextHeight) / 2;

  return {
    paddingTop: offset,
    selectors: {
      [`${realFieldBase}:not(:disabled) + * > ${fakeFieldBase} + &`]: {
        cursor: 'pointer',
      },
    },
  };
});

export const children = style((theme) => {
  const size = getSize(theme);

  return {
    marginLeft: size,
    selectors: {
      [`${realFieldBase}:checked ~ &`]: {
        display: 'block',
      },
    },
  };
});

export const selected = style({
  selectors: {
    [`${realFieldBase}:checked + * > ${fakeFieldBase} > &`]: {
      opacity: 1,
    },
  },
});

export const focusOverlay = style({
  selectors: {
    [`${realFieldBase}:focus + * > ${fakeFieldBase} > &`]: {
      opacity: 1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${realFieldBase}:hover:not(:checked):not(:disabled) + * > ${fakeFieldBase} > &`]: {
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
    [`${realFieldBase}:active + * > ${fakeFieldBase} > * > &`]: {
      transform: 'scale(0.75)',
    },
  },
});

export const checkboxIndicator = [indicator, checkboxScale];

const radioScale = style({
  transform: 'scale(0.6)',
  selectors: {
    [`${realFieldBase}:active + * > ${fakeFieldBase} > * > &`]: {
      transform: 'scale(0.5)',
    },
  },
});

export const radioIndicator = [indicator, radioScale];
