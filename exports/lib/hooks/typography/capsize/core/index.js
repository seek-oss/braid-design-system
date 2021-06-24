// adapted from https://github.com/sindresorhus/round-to
export function roundTo(number, precision) {
  if (typeof number !== 'number') {
    throw new TypeError('Expected value to be a number');
  }

  if (precision === Infinity) {
    return number;
  }

  if (!Number.isInteger(precision)) {
    throw new TypeError('Expected precision to be an integer');
  }

  const isNegative = number < 0;
  const inputNumber = isNegative ? Math.abs(number) : number;
  const power = Math.pow(10, precision);
  const result = Math.round(Number((inputNumber * power).toPrecision(15))) / power;
  return isNegative ? -result : result;
}
/*
   Rounding all values to a precision of `4` based on discovering that browser
   implementations of layout units fall between 1/60th and 1/64th of a pixel.

   Reference: https://trac.webkit.org/wiki/LayoutUnit
   (above wiki also mentions Mozilla - https://trac.webkit.org/wiki/LayoutUnit#Notes)
*/

export var PRECISION = 4;

function normaliseOptions(options) {
  if ('leading' in options && 'lineGap' in options) {
    throw new Error('Only a single line height style can be provided. Please pass either `lineGap` OR `leading`.');
  }

  if ('capHeight' in options && 'fontSize' in options) {
    throw new Error('Please pass either `capHeight` OR `fontSize`, not both.');
  }

  const fontMetrics = options.fontMetrics;
  const capHeightScale = fontMetrics.capHeight / fontMetrics.unitsPerEm;
  let specifiedFontSize;
  let specifiedCapHeight;

  if ('capHeight' in options) {
    specifiedFontSize = options.capHeight / capHeightScale;
    specifiedCapHeight = options.capHeight;
  } else if ('fontSize' in options) {
    specifiedFontSize = options.fontSize;
    specifiedCapHeight = options.fontSize * capHeightScale;
  } else {
    throw new Error('Please pass either `capHeight` OR `fontSize`.');
  }

  let specifiedLineHeight;

  if ('lineGap' in options) {
    specifiedLineHeight = specifiedCapHeight + options.lineGap;
  } else if ('leading' in options) {
    specifiedLineHeight = options.leading;
  }

  return {
    fontSize: specifiedFontSize,
    lineHeight: specifiedLineHeight,
    fontMetrics
  };
}

export function buildValues(options) {
  const _normaliseOptions = normaliseOptions(options),
      fontSize = _normaliseOptions.fontSize,
      lineHeight = _normaliseOptions.lineHeight,
      fontMetrics = _normaliseOptions.fontMetrics;

  const toScale = function toScale(value) {
    return value / fontSize;
  };

  const absoluteDescent = Math.abs(fontMetrics.descent);
  const capHeightScale = fontMetrics.capHeight / fontMetrics.unitsPerEm;
  const descentScale = absoluteDescent / fontMetrics.unitsPerEm;
  const ascentScale = fontMetrics.ascent / fontMetrics.unitsPerEm;
  const lineGapScale = fontMetrics.lineGap / fontMetrics.unitsPerEm;
  const contentArea = fontMetrics.ascent + fontMetrics.lineGap + absoluteDescent;
  const lineHeightScale = contentArea / fontMetrics.unitsPerEm;
  const lineHeightNormal = lineHeightScale * fontSize;
  const specifiedLineHeightOffset = lineHeight ? (lineHeightNormal - lineHeight) / 2 : 0;

  const leadingTrim = function leadingTrim(value) {
    return value - toScale(specifiedLineHeightOffset);
  };

  return {
    fontSize: "".concat(roundTo(fontSize, PRECISION), "px"),
    lineHeight: lineHeight ? "".concat(roundTo(lineHeight, PRECISION), "px") : 'normal',
    capHeightTrim: "".concat(roundTo(leadingTrim(ascentScale - capHeightScale + lineGapScale / 2) * -1, PRECISION), "em"),
    baselineTrim: "".concat(roundTo(leadingTrim(descentScale + lineGapScale / 2) * -1, PRECISION), "em")
  };
}
export function createCss(_ref) {
  const lineHeight = _ref.lineHeight,
      fontSize = _ref.fontSize,
      capHeightTrim = _ref.capHeightTrim,
      baselineTrim = _ref.baselineTrim;
  return {
    fontSize,
    lineHeight,
    '::before': {
      content: "''",
      marginBottom: capHeightTrim,
      display: 'table'
    },
    '::after': {
      content: "''",
      marginTop: baselineTrim,
      display: 'table'
    }
  };
}
export var getCapHeight = function getCapHeight(_ref2) {
  const fontSize = _ref2.fontSize,
      fontMetrics = _ref2.fontMetrics;
  return roundTo(fontSize * fontMetrics.capHeight / fontMetrics.unitsPerEm, PRECISION);
};