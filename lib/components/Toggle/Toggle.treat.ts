import { Theme } from 'treat/theme';
import { style, styleMap } from 'sku/treat';
import getSize from '../private/InlineField/getSize';
import { hitArea } from '../private/touchable/hitArea';
import { debugTouchable } from '../private/touchable/debugTouchable';

const toggleWidthRatio = 1.6;
const anticipationRatio = 0.12;

// Reset the z-index at the parent level to scope
// overrides internally.
export const root = style({
  ':hover': {
    zIndex: 1,
  },
});

export const realFieldBase = style({
  height: hitArea,
  selectors: {
    ...debugTouchable(),
  },
});

const resolveRealFieldPosition = (
  textSize: keyof Theme['typography']['text'],
  theme: Theme,
) => {
  const centerOffset = -(hitArea - getSize(textSize, theme)) / 2;

  return {
    top: centerOffset,
  };
};

export const realFieldPosition = styleMap((theme) => ({
  small: resolveRealFieldPosition('small', theme),
  standard: resolveRealFieldPosition('standard', theme),
}));

const resolveLabelOffset = (
  textSize: keyof Theme['typography']['text'],
  theme: Theme,
) => {
  const size = getSize(textSize, theme);
  const lineHeight = theme.grid * theme.typography.text[textSize].mobile.rows;
  const padding = (size - lineHeight) / 2;
  return {
    paddingTop: padding,
    paddingBottom: padding,
  };
};

export const label = styleMap((theme) => ({
  small: resolveLabelOffset('small', theme),
  standard: resolveLabelOffset('standard', theme),
}));

const resolveFieldSize = (
  textSize: keyof Theme['typography']['text'],
  theme: Theme,
) => ({
  width: getSize(textSize, theme) * toggleWidthRatio,
});

export const fieldSize = styleMap((theme) => ({
  small: resolveFieldSize('small', theme),
  standard: resolveFieldSize('standard', theme),
}));

export const slideContainerBase = style({});

const resolveSlideContainerHeight = (
  textSize: keyof Theme['typography']['text'],
  theme: Theme,
) => ({
  height: getSize(textSize, theme),
});

export const slideContainerHeight = styleMap((theme) => ({
  small: resolveSlideContainerHeight('small', theme),
  standard: resolveSlideContainerHeight('standard', theme),
}));

const resolveSlideTrack = (
  textSize: keyof Theme['typography']['text'],
  theme: Theme,
) => {
  const size = getSize(textSize, theme);
  const height = size - theme.grid;

  return {
    height,
    borderRadius: height / 2,
  };
};

export const slideTrack = styleMap((theme) => ({
  small: resolveSlideTrack('small', theme),
  standard: resolveSlideTrack('standard', theme),
}));

export const slideTrackBackground = style((theme) => ({
  backgroundColor: theme.border.color.standard,
  // Fix for Safari border-radius, overflow hidden, transform bug:
  // https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b
  '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
}));

export const slideTrackSelected = style((theme) => {
  const trackWidth = theme.grid * theme.touchableSize;

  return {
    selectors: {
      [`${realFieldBase}:not(:checked) + ${slideContainerBase} &`]: {
        transform: `translateX(-${trackWidth}px)`,
      },
    },
  };
});

const resolveSlider = (
  textSize: keyof Theme['typography']['text'],
  theme: Theme,
) => {
  const size = getSize(textSize, theme);
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
};

export const slider = styleMap((theme) => ({
  small: resolveSlider('small', theme),
  standard: resolveSlider('standard', theme),
}));

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
