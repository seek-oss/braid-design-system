import { hslToColorString, toColorString, parseToRgb, parseToHsl, getLuminance, setLightness } from 'polished';
var AA_TEXT_CONTRAST = 4.52;
var AA_GRAPHIC_CONTRAST = 3; // http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#key-terms

export function contrast(color1, color2) {
  // `0.05` seems to be to avoid "divide by zero"
  // errors in the case of black
  var L1 = getLuminance(color1) + 0.05;
  var L2 = getLuminance(color2) + 0.05;
  return L1 < L2 ? L2 / L1 : L1 / L2;
}
export function findClosestAccessibleLighterColor(inputColor, fixedColor) {
  var contrastRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : AA_TEXT_CONTRAST;
  var normalisedInput = toColorString(parseToRgb(inputColor));
  var normalisedFixed = toColorString(parseToRgb(fixedColor));

  var _parseToHsl = parseToHsl(normalisedInput),
      hue = _parseToHsl.hue,
      saturation = _parseToHsl.saturation,
      lightness = _parseToHsl.lightness;

  var minLightness = lightness;
  var maxLightness = 0.98;
  var maxColor = hslToColorString({
    hue: hue,
    saturation: saturation,
    lightness: maxLightness
  });
  var minColor = hslToColorString({
    hue: hue,
    saturation: saturation,
    lightness: lightness
  }); // If already meets contrast, return passed value

  if (contrast(normalisedInput, normalisedFixed) >= contrastRatio) {
    return inputColor;
  } // If max lightness fails to meet contrast, throw error


  var actualRatio = contrast(maxColor, normalisedFixed);

  if (actualRatio < contrastRatio) {
    throw new Error("Desired contrast ratio cannot be achieved,\nForeground: ".concat(inputColor, "\nBackground:").concat(fixedColor, "\nDesired Contrast:").concat(contrastRatio, "\nActual Contrast:").concat(actualRatio));
  }

  var lastMinColor;
  var lastMaxColor;
  var adjustedLightness;
  var adjustedColor = normalisedInput;

  while (minColor !== lastMinColor || maxColor !== lastMaxColor) {
    lastMinColor = minColor;
    lastMaxColor = maxColor;
    adjustedLightness = (minLightness + maxLightness) / 2;
    adjustedColor = setLightness(adjustedLightness, adjustedColor);

    if (contrast(adjustedColor, normalisedFixed) < contrastRatio) {
      minLightness = adjustedLightness;
      minColor = adjustedColor;
    } else {
      maxLightness = adjustedLightness;
      maxColor = adjustedColor;
    }
  }

  return maxColor;
}
export function findClosestAccessibleDarkerColor(inputColor, fixedColor) {
  var contrastRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : AA_TEXT_CONTRAST;
  var normalisedInput = toColorString(parseToRgb(inputColor));
  var normalisedFixed = toColorString(parseToRgb(fixedColor));

  var _parseToHsl2 = parseToHsl(normalisedInput),
      hue = _parseToHsl2.hue,
      saturation = _parseToHsl2.saturation,
      lightness = _parseToHsl2.lightness;

  var minLightness = 0.02;
  var maxLightness = lightness;
  var maxColor = hslToColorString({
    hue: hue,
    saturation: saturation,
    lightness: minLightness
  });
  var minColor = hslToColorString({
    hue: hue,
    saturation: saturation,
    lightness: lightness
  }); // If already meets contrast, return passed value

  if (contrast(normalisedInput, normalisedFixed) >= contrastRatio) {
    return inputColor;
  } // If max lightness fails to meet contrast, throw error


  var actualRatio = contrast(maxColor, normalisedFixed);

  if (actualRatio < contrastRatio) {
    throw new Error("Desired contrast ratio cannot be achieved,\nForeground: ".concat(inputColor, "\nBackground:").concat(fixedColor, "\nDesired Contrast:").concat(contrastRatio, "\nActual Contrast:").concat(actualRatio));
  }

  var lastMinColor;
  var lastMaxColor;
  var adjustedLightness;
  var adjustedColor = normalisedInput;

  while (minColor !== lastMinColor || maxColor !== lastMaxColor) {
    lastMinColor = minColor;
    lastMaxColor = maxColor;
    adjustedLightness = (minLightness + maxLightness) / 2;
    adjustedColor = setLightness(adjustedLightness, adjustedColor);

    if (contrast(adjustedColor, normalisedFixed) < contrastRatio) {
      maxLightness = adjustedLightness;
      maxColor = adjustedColor;
    } else {
      minLightness = adjustedLightness;
      minColor = adjustedColor;
    }
  }

  return minColor;
}

var smoothSaturation = function smoothSaturation(saturation, luminance) {
  var isBright = luminance > 0.6;

  if (isBright) {
    return saturation * 0.8;
  }

  return saturation * 0.45;
};

var smoothLightness = function smoothLightness(lightness, luminance) {
  var isBright = luminance > 0.6;

  if (isBright) {
    return 0.95 - lightness * 0.03;
  }

  return 0.95 - lightness * 0.06;
};

export function getLightVariant(color) {
  var _parseToHsl3 = parseToHsl(color),
      hue = _parseToHsl3.hue,
      saturation = _parseToHsl3.saturation,
      lightness = _parseToHsl3.lightness;

  var luminance = getLuminance(color);
  return toColorString({
    hue: hue,
    saturation: smoothSaturation(saturation, luminance),
    lightness: smoothLightness(lightness, luminance)
  });
}
export function getAccessibleVariant(color, type) {
  return findClosestAccessibleDarkerColor(color, getLightVariant(color), type === 'graphic' ? AA_GRAPHIC_CONTRAST : AA_TEXT_CONTRAST);
}