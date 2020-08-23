import { style } from 'sku/treat';

export const activeUnderline = [
  style((theme) => ({
    bottom: -theme.border.width.standard,
    height: theme.border.width.large,
    background: theme.color.foreground.neutral,
  })),
];

export const centerHorizontally = style({
  left: '50%',
  transform: 'translateX(-50%)',
});
