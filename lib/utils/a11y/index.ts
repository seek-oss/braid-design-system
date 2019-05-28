import {
  hslToColorString,
  toColorString,
  parseToRgb,
  parseToHsl,
  getLuminance,
  setLightness,
} from 'polished';

const AA_CONTRAST = 4.52;

// http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#key-terms
export function contrast(color1: string, color2: string): number {
  // `0.05` seems to be to avoid "divide by zero"
  // errors in the case of black
  const L1 = getLuminance(color1) + 0.05;
  const L2 = getLuminance(color2) + 0.05;

  return L1 < L2 ? L2 / L1 : L1 / L2;
}

export function findClosestAccessibleLighterColor(
  inputColor: string,
  fixedColor: string,
  contrastRatio: number = AA_CONTRAST,
): string {
  const normalisedInput = toColorString(parseToRgb(inputColor));
  const normalisedFixed = toColorString(parseToRgb(fixedColor));
  const { hue, saturation, lightness } = parseToHsl(normalisedInput);
  let minLightness = lightness;
  let maxLightness = 0.98;
  let maxColor = hslToColorString({ hue, saturation, lightness: maxLightness });
  let minColor = hslToColorString({ hue, saturation, lightness });

  // If already meets contrast, return passed value
  if (contrast(normalisedInput, normalisedFixed) >= contrastRatio) {
    return inputColor;
  }

  // If max lightness fails to meet contrast, throw error
  const actualRatio = contrast(maxColor, normalisedFixed);
  if (actualRatio < contrastRatio) {
    throw new Error(
      `Desired contrast ratio cannot be achieved,\nForeground: ${inputColor}\nBackground:${fixedColor}\nDesired Contrast:${contrastRatio}\nActual Contrast:${actualRatio}`,
    );
  }

  let lastMinColor;
  let lastMaxColor;
  let adjustedLightness;
  let adjustedColor = normalisedInput;

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

export function findClosestAccessibleDarkerColor(
  inputColor: string,
  fixedColor: string,
  contrastRatio: number = AA_CONTRAST,
): string {
  const normalisedInput = toColorString(parseToRgb(inputColor));
  const normalisedFixed = toColorString(parseToRgb(fixedColor));
  const { hue, saturation, lightness } = parseToHsl(normalisedInput);
  let minLightness = 0.02;
  let maxLightness = lightness;
  let maxColor = hslToColorString({ hue, saturation, lightness: minLightness });
  let minColor = hslToColorString({ hue, saturation, lightness });

  // If already meets contrast, return passed value
  if (contrast(normalisedInput, normalisedFixed) >= contrastRatio) {
    return inputColor;
  }

  // If max lightness fails to meet contrast, throw error
  const actualRatio = contrast(maxColor, normalisedFixed);
  if (actualRatio < contrastRatio) {
    throw new Error(
      `Desired contrast ratio cannot be achieved,\nForeground: ${inputColor}\nBackground:${fixedColor}\nDesired Contrast:${contrastRatio}\nActual Contrast:${actualRatio}`,
    );
  }

  let lastMinColor;
  let lastMaxColor;
  let adjustedLightness;
  let adjustedColor = normalisedInput;

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

export function getLightVariant(color: string) {
  const { hue, saturation } = parseToHsl(color);
  const isHighlySaturated = saturation > 0.9;

  return toColorString({
    hue,
    saturation: isHighlySaturated ? 0.8 : saturation,
    lightness: 0.96,
  });
}

export function getAccessibleVariant(color: string) {
  return findClosestAccessibleDarkerColor(color, getLightVariant(color));
}
