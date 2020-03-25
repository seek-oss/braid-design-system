import { style } from 'sku/treat';
import getSize from '../private/InlineField/getSize';
import { hitArea } from '../private/touchable/hitArea';
import { debugTouchable } from '../private/touchable/debugTouchable';

const toggleWidthRatio = 1.6;
const anticipationRatio = 0.12;

// Reset the z-index at the parent level to scope
// overrides internally.
export const root = style({
  zIndex: 0,
  ':hover': {
    zIndex: 1,
  },
});

const realFieldBase = style({
  opacity: 0,
  height: hitArea,
  zIndex: 1,
  selectors: {
    ...debugTouchable(),
    [`&:not(:disabled)`]: {
      cursor: 'pointer',
    },
  },
});

const realFieldPosition = style(theme => {
  const centerOffset = -(hitArea - getSize(theme)) / 2;

  return {
    top: centerOffset,
  };
});

export const realField = [realFieldBase, realFieldPosition];

export const label = [
  style({
    selectors: {
      [`${realFieldBase}:not(:disabled) ~ &`]: {
        cursor: 'pointer',
      },
    },
  }),
  style(theme => {
    const size = getSize(theme);
    const lineHeight = theme.grid * theme.typography.text.standard.mobile.rows;
    const padding = (size - lineHeight) / 2;
    return {
      paddingTop: padding,
      paddingBottom: padding,
    };
  }),
];

export const fieldSize = style(theme => ({
  width: getSize(theme) * toggleWidthRatio,
}));

const slideContainerBase = style({});

const slideContainerHeight = style(theme => ({
  height: getSize(theme),
}));

export const slideContainer = [slideContainerBase, slideContainerHeight];

export const slideTrack = style(theme => {
  const size = getSize(theme);
  const height = size - theme.grid;

  return {
    height,
    borderRadius: height / 2,
    backgroundColor: theme.border.color.standard,
    // Fix for Safari border-radius, overflow hidden, transform bug:
    // https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b
    '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
  };
});

export const slideTrackSelected = style(theme => {
  const trackWidth = theme.grid * theme.touchableSize;

  return {
    selectors: {
      [`${realFieldBase}:not(:checked) + ${slideContainerBase} &`]: {
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
      [`${realFieldBase}:active + ${slideContainerBase} &`]: {
        transform: `translateX(-${anticipation}px)`,
      },
      [`${realFieldBase}:checked + ${slideContainerBase} &`]: {
        transform: `translateX(${slideDistance}px)`,
      },
      [`${realFieldBase}:active:checked + ${slideContainerBase} &`]: {
        transform: `translateX(${slideDistance + anticipation}px)`,
      },
    },
  };
});

export const icon = style({
  transform: 'scale(.75)',
  selectors: {
    [`${realFieldBase}:active + ${slideContainerBase} &`]: {
      transform: 'scale(.75) rotate(-25deg)',
    },
    [`${realFieldBase}:checked + ${slideContainerBase} &`]: {
      opacity: 1,
    },
    [`${realFieldBase}:active:checked + ${slideContainerBase} &`]: {
      transform: 'scale(.75) rotate(6deg)',
    },
  },
});

export const focusOverlay = style({
  selectors: {
    [`${realFieldBase}:focus + ${slideContainerBase} &, ${realFieldBase}:active + ${slideContainerBase} &`]: {
      opacity: 1,
    },
  },
});

export const hoverOverlay = style({
  selectors: {
    [`${realFieldBase}:hover:not(:disabled) + ${slideContainerBase} &`]: {
      opacity: 1,
    },
  },
});
