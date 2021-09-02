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

const calculateYiq = (color: string) => {
  // Convert RGB to YIQ to better take into account the
  // luminance of the separate color channels:
  //
  // Further reading:
  //   - YIQ:
  //     https://en.wikipedia.org/wiki/YIQ
  //   - Calculating contrast:
  //     https://24ways.org/2010/calculating-color-contrast/

  const { red, green, blue } = parseToRgb(color);

  return (red * 299 + green * 587 + blue * 114) / 1000;
};

export const isLight = (
  inputColor: string,
  foregroundColor: string = '#000',
) => {
  const colors = /^linear-gradient/.test(inputColor)
    ? getLinearGradientColors(inputColor)
    : [inputColor];

  const foregroundYiq = calculateYiq(foregroundColor);

  return colors.some((color) => {
    const yiq = calculateYiq(color);
    const midpoint = 256 / 2;
    const foregroundOffset = foregroundYiq / 2;

    // Colour is considered `light` if greater than the midpoint:
    // eg. 256 / 2 = 128.
    // We include a foreground offset to take into account
    // lighter text shades than pure black
    return yiq >= midpoint + foregroundOffset;
  });
};
