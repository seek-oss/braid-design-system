import { style } from 'sku/treat';
import { Theme } from 'treat/theme';

const getSize = ({ spacing, typography, utils }: Theme) => {
  // We currently don't support responsive checkboxes and
  // radio buttons, but nobody actually needs it (so far)
  const scale = typography.text.standard.mobile.size / 28;
  const rows = Math.round(spacing.touchableRows * scale);

  return utils.rows(rows);
};

export const realField = style({
  opacity: 0,
  zIndex: 1,
  selectors: {
    [`&:not(:disabled)`]: {
      cursor: 'pointer',
    },
  },
});

export const realFieldSize = style(({ spacing, utils }) => ({
  height: utils.rows(spacing.touchableRows),
  width: utils.rows(spacing.touchableRows),
}));

export const fakeField = style({
  flexShrink: 0,
});

export const fakeFieldSize = style(theme => {
  const size = getSize(theme);
  const { spacing, utils } = theme;

  return {
    height: size,
    width: size,
    marginTop: (utils.rows(spacing.touchableRows) - size) / 2,
  };
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

export const radio = style({
  height: '100%',
});

export const circle = style({
  borderRadius: '100%',
});

export const selected = style({
  selectors: {
    [`${realField}:checked + * > ${fakeField} > &`]: {
      opacity: 1,
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
    [`${realField}:hover:not(:checked):not(:disabled) + * > ${fakeField} > &`]: {
      opacity: 1,
    },
  },
});

export const indicator = style({
  transform: 'scale(0.6)',
  selectors: {
    [`${realField}:active + * > ${fakeField} > * > &`]: {
      transform: 'scale(0.5)',
    },
    [`${hoverOverlay} > &`]: {
      opacity: 0.2,
    },
  },
});
