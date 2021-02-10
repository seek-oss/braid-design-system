import { style } from 'sku/treat';

export const background = style((theme) => ({
  background: theme.color.foreground.neutral,
}));

export const maxWidth = style({
  maxWidth: 240,
});

export const verticalOffsetBeforeEntrance = style({
  transform: 'translateZ(0) translateY(4px)',
  selectors: {
    '[data-popper-placement*=top] &': {
      transform: 'translateZ(0) translateY(-4px)',
    },
  },
});

// Fixes shadow clipping bug in Safari
export const translateZ0 = style({
  transform: 'translateZ(0)',
});
