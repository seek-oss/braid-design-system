import { style } from 'sku/treat';
import getSize from '../private/InlineField/getSize';

const toggleWidthRatio = 1.6;
const anticipationRatio = 0.12;

export const realField = style({
  opacity: 0,
  zIndex: 1,
  selectors: {
    [`&:not(:disabled)`]: {
      cursor: 'pointer',
    },
  },
});

export const label = style({
  userSelect: 'none',
  selectors: {
    [`${realField}:not(:disabled) ~ &`]: {
      cursor: 'pointer',
    },
  },
});

export const fieldSize = style(theme => {
  const size = theme.grid * theme.touchableSize;

  return {
    width: getSize(theme) * toggleWidthRatio,
    height: size,
  };
});

export const slideContainer = style({});

export const slideTrack = style(theme => {
  const size = getSize(theme);
  const height = size - theme.grid;

  return {
    height,
    borderRadius: height / 2,
    backgroundColor: theme.border.color.standard,
    overflow: 'hidden',
    // Fix for Safari border-radius, overflow hidden, transform bug:
    // https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b
    '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
  };
});

export const slideTrackSelected = style(theme => {
  const trackWidth = theme.grid * theme.touchableSize;

  return {
    selectors: {
      [`${realField}:not(:checked) + ${slideContainer} &`]: {
        transform: `translateX(-${trackWidth}px)`,
      },
    },
  };
});

export const slider = style(theme => {
  const size = getSize(theme);
  const trackWidth = size * toggleWidthRatio;
  const anticipation = size * anticipationRatio;
  const slideDistance = trackWidth - size;

  return {
    height: size,
    width: size,
    selectors: {
      [`${realField}:active + ${slideContainer} &`]: {
        transform: `translateX(-${anticipation}px)`,
      },
      [`${realField}:checked + ${slideContainer} &`]: {
        transform: `translateX(${slideDistance}px)`,
      },
      [`${realField}:active:checked + ${slideContainer} &`]: {
        transform: `translateX(${slideDistance + anticipation}px)`,
      },
    },
  };
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
