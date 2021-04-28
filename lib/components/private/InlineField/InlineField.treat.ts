import { Theme } from 'treat/theme';
import { style, styleMap } from 'sku/treat';
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
  const size = getSize('standard', theme);
  const centerOffset = -(hitArea - size) / 2;

  return { top: centerOffset, left: centerOffset };
});

export const realField = [realFieldBase, realFieldPosition];

export const fakeFieldBase = style({});

const resolveFakeFieldSize = (
  textSize: keyof Theme['typography']['text'],
  theme: Theme,
) => {
  const size = getSize(textSize, theme);

  return {
    height: size,
    width: size,
  };
};

export const fakeFieldSize = styleMap((theme) => ({
  small: resolveFakeFieldSize('small', theme),
  standard: resolveFakeFieldSize('standard', theme),
}));

const resolveBadgeOffset = (
  textSize: keyof Theme['typography']['text'],
  theme: Theme,
) => {
  const badgeHeight = theme.typography.text.xsmall.mobile.rows * theme.grid;
  const offset = Math.round((getSize(textSize, theme) - badgeHeight) / 2);

  return {
    paddingTop: offset,
    paddingBottom: offset,
  };
};

export const badgeOffset = styleMap((theme) => ({
  small: resolveBadgeOffset('small', theme),
  standard: resolveBadgeOffset('standard', theme),
}));

const resolveLabelOffset = (
  textSize: keyof Theme['typography']['text'],
  theme: Theme,
) => {
  const standardTextHeight = theme.typography.text[textSize].mobile.capHeight;
  const offset = Math.round(
    (getSize(textSize, theme) - standardTextHeight) / 2,
  );

  return {
    paddingTop: offset,
    selectors: {
      [`${realFieldBase}:not(:disabled) ~ * &`]: {
        cursor: 'pointer',
      },
    },
  };
};

export const label = styleMap((theme) => ({
  small: resolveLabelOffset('small', theme),
  standard: resolveLabelOffset('standard', theme),
}));

export const isMixed = style({});

export const children = style({
  selectors: {
    [`${realFieldBase}:checked ~ * &, ${realFieldBase}${isMixed} ~ * &`]: {
      display: 'block',
    },
  },
});

export const selected = style({
  selectors: {
    [`${realFieldBase}:checked + ${fakeFieldBase} > &, ${realFieldBase}${isMixed} + ${fakeFieldBase} > &`]: {
      opacity: 1,
    },
  },
});

export const focusOverlay = style({
  selectors: {
    [`${realFieldBase}:focus + ${fakeFieldBase} > &`]: {
      opacity: 1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${realFieldBase}:hover:not(:checked):not(${isMixed}):not(:disabled) + ${fakeFieldBase} > &`]: {
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
    [`${realFieldBase}:active + ${fakeFieldBase} > * > &`]: {
      transform: 'scale(0.75)',
    },
  },
});

export const checkboxIndicator = [indicator, checkboxScale];

const radioScale = style({
  transform: 'scale(0.6)',
  selectors: {
    [`${realFieldBase}:active + ${fakeFieldBase} > * > &`]: {
      transform: 'scale(0.5)',
    },
  },
});

export const radioIndicator = [indicator, radioScale];
