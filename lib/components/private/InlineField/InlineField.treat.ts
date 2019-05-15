import { style } from 'sku/treat';
import { Tokens } from '../../../themes/theme';

const getSize = ({ touchableRows, text, rowHeight }: Tokens) => {
  // We currently don't support responsive checkboxes and
  // radio buttons, but nobody actually needs it (so far)
  const scale = text.standard.mobile.size / 28;
  const rows = Math.round(touchableRows * scale);

  return rows * rowHeight;
};

export const circle = style({
  borderRadius: '100%',
});

export const selected = style({
  transform: 'scale(0.8)',
  transition: 'transform .125s ease',
  selectors: {
    [`&${circle}`]: {
      transform: 'scale(0.5)',
    },
  },
});

export const label = style({
  cursor: 'pointer',
  userSelect: 'none',
});

export const icon = style({
  position: 'absolute',
  top: 0,
  opacity: 0,
  transform: 'scale(0.5)',
  pointerEvents: 'none',
  // IE11:
  height: '100%',
});

export const fakeField = style({
  position: 'relative',
  flexShrink: 0,
});

export const children = style(tokens => {
  const size = getSize(tokens);

  return {
    marginLeft: size,
  };
});

export const fieldSize = style(tokens => {
  const size = getSize(tokens);

  return {
    height: size,
    width: size,
    marginTop: (tokens.touchableRows * tokens.rowHeight - size) / 2,
  };
});

export const realField = style({
  position: 'absolute',
  opacity: 0,
  zIndex: 1,
  cursor: 'pointer',
  selectors: {
    [`&:checked + * > ${fakeField} > ${selected}`]: {
      opacity: 1,
      transform: 'none',
    },
    [`&:checked + * > ${fakeField} > ${selected}${circle}`]: {
      transform: 'scale(0.7)',
    },
    [`&:checked + * ${icon}`]: {
      opacity: 1,
      transform: 'scale(0.7)',
    },
    [`&:checked ~ ${children}`]: {
      display: 'block',
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
