import { style } from 'sku/treat';

export const constants = {
  maxWidth: 260,
  arrowSize: 10,
};

export const background = style((theme) => ({
  background: theme.color.foreground.neutral,
}));

export const maxWidth = style({
  maxWidth: constants.maxWidth,
});

export const verticalOffsetBeforeEntrance = style({
  transform: 'translateZ(0) translateY(4px)',
  selectors: {
    '[data-popper-placement^=bottom] &': {
      transform: 'translateZ(0) translateY(-4px)',
    },
  },
});

// Fixes shadow clipping bug in Safari
export const translateZ0 = style({
  transform: 'translateZ(0)',
});

// Our space scale didn't have enough fidelity here :(
export const padding = style((theme) => ({
  padding: theme.grid * (theme.space.small + 1),
}));

export const arrow = style(() => {
  const { arrowSize } = constants;
  const offset = -(arrowSize / 2);

  return {
    visibility: 'hidden',
    ':before': {
      visibility: 'visible',
      content: "''",
      transform: 'rotate(45deg)',
    },
    selectors: {
      '&, &::before': {
        width: arrowSize,
        height: arrowSize,
        position: 'absolute',
        background: 'inherit',
      },
      '[data-popper-placement^=top] &': {
        bottom: offset,
      },
      '[data-popper-placement^=bottom] &': {
        top: offset,
      },
      '[data-popper-placement^=left] &': {
        right: offset,
      },
      '[data-popper-placement^=right] &': {
        left: offset,
      },
    },
  };
});
