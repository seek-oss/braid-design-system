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

  var isNegative = number < 0;
  var inputNumber = isNegative ? Math.abs(number) : number;
  var power = Math.pow(10, precision);
  var result = Math.round(Number((inputNumber * power).toPrecision(15))) / power;
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

  var fontMetrics = options.fontMetrics;
  var capHeightScale = fontMetrics.capHeight / fontMetrics.unitsPerEm;
  var specifiedFontSize;
  var specifiedCapHeight;

  if ('capHeight' in options) {
    specifiedFontSize = options.capHeight / capHeightScale;
    specifiedCapHeight = options.capHeight;
  } else if ('fontSize' in options) {
    specifiedFontSize = options.fontSize;
    specifiedCapHeight = options.fontSize * capHeightScale;
  } else {
    throw new Error('Please pass either `capHeight` OR `fontSize`.');
  }

  var specifiedLineHeight;

  if ('lineGap' in options) {
    specifiedLineHeight = specifiedCapHeight + options.lineGap;
  } else if ('leading' in options) {
    specifiedLineHeight = options.leading;
  }

  return {
    fontSize: specifiedFontSize,
    lineHeight: specifiedLineHeight,
    fontMetrics: fontMetrics
  };
}

export function buildValues(options) {
  var _normaliseOptions = normaliseOptions(options),
      fontSize = _normaliseOptions.fontSize,
      lineHeight = _normaliseOptions.lineHeight,
      fontMetrics = _normaliseOptions.fontMetrics;

  var toScale = function toScale(value) {
    return value / fontSize;
  };

  var absoluteDescent = Math.abs(fontMetrics.descent);
  var capHeightScale = fontMetrics.capHeight / fontMetrics.unitsPerEm;
  var descentScale = absoluteDescent / fontMetrics.unitsPerEm;
  var ascentScale = fontMetrics.ascent / fontMetrics.unitsPerEm;
  var lineGapScale = fontMetrics.lineGap / fontMetrics.unitsPerEm;
  var contentArea = fontMetrics.ascent + fontMetrics.lineGap + absoluteDescent;
  var lineHeightScale = contentArea / fontMetrics.unitsPerEm;
  var lineHeightNormal = lineHeightScale * fontSize;
  var specifiedLineHeightOffset = lineHeight ? (lineHeightNormal - lineHeight) / 2 : 0;

  var leadingTrim = function leadingTrim(value) {
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
  var lineHeight = _ref.lineHeight,
      fontSize = _ref.fontSize,
      capHeightTrim = _ref.capHeightTrim,
      baselineTrim = _ref.baselineTrim;
  return {
    fontSize: fontSize,
    lineHeight: lineHeight,
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
  var fontSize = _ref2.fontSize,
      fontMetrics = _ref2.fontMetrics;
  return roundTo(fontSize * fontMetrics.capHeight / fontMetrics.unitsPerEm, PRECISION);
};