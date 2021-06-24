import { parseToRgb } from 'polished'; // @ts-ignore

import { parse as parseGradient } from 'gradient-parser';

var getLinearGradientColors = function getLinearGradientColors(color) {
  var gradients = parseGradient(color);
  return gradients[0].colorStops.map(function (_ref) {
    var type = _ref.type,
        value = _ref.value;

    if (typeof value !== 'string') {
      throw new Error('Gradient parsing in Braid currently only supports hex/literal values');
    }

    return "".concat(type === 'hex' ? '#' : '').concat(value);
  });
};

export var isLight = function isLight(inputColor) {
  var colors = /^linear-gradient/.test(inputColor) ? getLinearGradientColors(inputColor) : [inputColor];
  return colors.some(function (color) {
    var _parseToRgb = parseToRgb(color),
        red = _parseToRgb.red,
        green = _parseToRgb.green,
        blue = _parseToRgb.blue; // Convert RGB to YIQ to better take into account the
    // luminance of the separate color channels:
    //
    // Further reading:
    //   - YIQ:
    //     https://en.wikipedia.org/wiki/YIQ
    //   - Calculating contrast:
    //     https://24ways.org/2010/calculating-color-contrast/


    var yiq = (red * 299 + green * 587 + blue * 114) / 1000; // Colour is considered `light` if greater than the midpoint:
    // eg. 256 / 2 = 128.

    return yiq >= 128;
  });
};