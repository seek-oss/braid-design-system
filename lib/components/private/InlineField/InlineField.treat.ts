import { style } from 'sku/treat';
import { Theme } from 'treat/theme';

const getSize = ({ spacing, typography, utils }: Theme) => {
  // We currently don't support responsive checkboxes and
  // radio buttons, but nobody actually needs it (so far)
  const scale = typography.text.standard.mobile.size / 28;
  const rows = Math.round(spacing.touchableRows * scale);

  return utils.rows(rows);
};

export const fieldSize = style(theme => {
  const size = getSize(theme);
  const { spacing, utils } = theme;

  return {
    height: size,
    width: size,
    marginTop: utils.rows(spacing.touchableRows) - size / 2,
  };
});

export const realField = style({
  position: 'absolute',
  opacity: 0,
  zIndex: 1,
  selectors: {
    [`&:not(:disabled)`]: {
      cursor: 'pointer',
    },
  },
});

export const fakeField = style({
  position: 'relative',
  flexShrink: 0,
});

export const label = style({
  userSelect: 'none',
  selectors: {
    [`${realField}:not(:disabled) + * > ${fakeField} + &`]: {
      cursor: 'pointer',
    },
  },
});

export const children = style(theme => {
  const size = getSize(theme);

  return {
    marginLeft: size,
    selectors: {
      [`${realField}:checked ~ &`]: {
        display: 'block',
      },
    },
  };
});

export const icon = style({
  position: 'absolute',
  top: 0,
  opacity: 0,
  transform: 'scale(0.5)',
  pointerEvents: 'none',
  // IE11:
  height: '100%',
  selectors: {
    [`${realField}:checked + * &`]: {
      opacity: 1,
      transform: 'scale(0.7)',
    },
  },
});

export const circle = style({
  borderRadius: '100%',
});

export const selected = style({
  transform: 'scale(0.8)',
  selectors: {
    [`&${circle}`]: {
      transform: 'scale(0.4)',
    },
    [`${realField}:checked + * > ${fakeField} > &`]: {
      opacity: 1,
      transform: 'none',
    },
    [`${realField}:checked + * > ${fakeField} > &${circle}`]: {
      transform: 'scale(0.6)',
    },
  },
});

export const focusOverlay = style({
  selectors: {
    [`${realField}:focus + * > ${fakeField} > &`]: {
      opacity: 1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${realField}:hover:not(:disabled) + * > ${fakeField} > &`]: {
      opacity: 1,
    },
  },
});
