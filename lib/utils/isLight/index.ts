import { getLuminance } from 'polished';
// @ts-ignore
import { parse as parseGradient } from 'gradient-parser';

type LinearGradients = Array<{
  colorStops: Array<{
    type: string;
    value: string;
  }>;
}>;

const getLinearGradientColors = (color: string) => {
  const gradients: LinearGradients = parseGradient(color);

  return gradients[0].colorStops.map(({ type, value }) => {
    if (typeof value !== 'string') {
      throw new Error(
        'Gradient parsing in Braid currently only supports hex/literal values',
      );
    }

    return `${type === 'hex' ? '#' : ''}${value}`;
  });
};

export const isLight = (inputColor: string) => {
  const colors = /^linear-gradient/.test(inputColor)
    ? getLinearGradientColors(inputColor)
    : [inputColor];

  return colors.some(color => getLuminance(color) > 0.6);
};
