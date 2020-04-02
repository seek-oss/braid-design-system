import { style } from 'sku/treat';

export const constants = {
  textSize: 'standard',
  paddingY: 'xxsmall',
} as const;

export const borderRadius = style((theme) => {
  const textHeight =
    theme.typography.text[constants.textSize].mobile.rows * theme.grid;
  const paddingHeight = theme.space[constants.paddingY] * theme.grid * 2;
  const height = textHeight + paddingHeight;

  return {
    borderRadius: height / 2,
  };
});
