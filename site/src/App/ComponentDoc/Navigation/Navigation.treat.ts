import { style } from 'sku/treat';

export const activeUnderline = [
  style((theme) => ({
    height: theme.border.width.large,
    background: theme.color.foreground.neutral,
  })),
];

export const inactiveUnderlineCorrection = style((theme) => ({
  marginTop: -theme.border.width.standard,
}));

export const centerHorizontally = style({
  left: '50%',
  transform: 'translateX(-50%)',
});
