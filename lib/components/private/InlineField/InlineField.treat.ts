import { style } from 'sku/treat';
import getSize from './getSize';

const realFieldBase = style({
  opacity: 0,
  zIndex: 1,
  selectors: {
    [`&:not(:disabled)`]: {
      cursor: 'pointer',
    },
  },
});

const realFieldSize = style(({ spacing, utils }) => ({
  height: utils.rows(spacing.touchableRows),
  width: utils.rows(spacing.touchableRows),
}));

export const realField = [realFieldSize, realFieldBase];

const fakeFieldBase = style({
  flexShrink: 0,
});

const fakeFieldSize = style(theme => {
  const size = getSize(theme);
  const { spacing, utils } = theme;

  return {
    height: size,
    width: size,
    marginTop: (utils.rows(spacing.touchableRows) - size) / 2,
  };
});

export const fakeField = [fakeFieldSize, fakeFieldBase];

export const label = style({
  userSelect: 'none',
  selectors: {
    [`${realFieldBase}:not(:disabled) + * > ${fakeFieldBase} + &`]: {
      cursor: 'pointer',
    },
  },
});

export const children = style(theme => {
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
