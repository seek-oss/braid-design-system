import { parseToRgb } from 'polished';
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

  return colors.some((color) => {
    const { red, green, blue } = parseToRgb(color);

    // Convert RGB to YIQ to better take into account the
    // luminance of the separate color channels:
    //
    // Further reading:
    //   - YIQ:
    //     https://en.wikipedia.org/wiki/YIQ
    //   - Calculating contrast:
    //     https://24ways.org/2010/calculating-color-contrast/

    const yiq = (red * 299 + green * 587 + blue * 114) / 1000;

    // Colour is considered `light` if greater than the midpoint:
    // eg. 256 / 2 = 128.
    return yiq >= 128;
  });
};
